from __future__ import annotations

import json
import os
import re
from typing import Any

import requests

from ..errors import ApiError


class GeminiService:
    BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models"

    def __init__(self) -> None:
        self.api_key = os.getenv("GEMINI_API_KEY", "")
        print(self.api_key)
        self.text_model = os.getenv("GEMINI_TEXT_MODEL", "gemini-2.5-flash")
        self.image_model = os.getenv("GEMINI_IMAGE_MODEL", "gemini-2.5-flash-image")
        self.timeout_seconds = float(os.getenv("GEMINI_TIMEOUT_SECONDS", "45"))

    def ping(self) -> str:
        text = self._generate_plain_text(
            model=self.text_model,
            prompt="Reply with exactly: Connection successful.",
            temperature=0.0,
        ).strip()
        return text or "Connection successful."

    def generate_personalized_feedback(
        self,
        *,
        expected_pose_name: str,
        actual_pose_name: str,
        error_descriptions: list[str],
        previous_explanation: str | None,
        pose_is_correct: bool,
    ) -> dict[str, str]:
        if pose_is_correct:
            if error_descriptions:
                errors_block = "\n".join(f"- {item}" for item in error_descriptions)
            else:
                errors_block = "- No specific errors detected. The form was good."

            previous_block = ""
            if previous_explanation:
                previous_block = f'Previously, I advised: "{previous_explanation}"\n'

            prompt = (
                "You are an expert Tai Chi master providing in-depth, personalized feedback.\n"
                f"The student was supposed to perform '{expected_pose_name}'.\n"
                f"The analysis detected they performed '{actual_pose_name}'.\n\n"
                "The student performed the CORRECT pose.\n"
                "Provide concise speech plus detailed explanation.\n"
                "Detected Errors:\n"
                f"{errors_block}\n\n"
                f"{previous_block}"
                "Return JSON with keys speech and explanation.\n"
                "speech must be 15-20 words and encouraging.\n"
            )
        else:
            prompt = (
                "You are an expert Tai Chi master.\n"
                f"The expected pose is '{expected_pose_name}' and actual pose is '{actual_pose_name}'.\n"
                "The student performed the WRONG pose.\n"
                "Do not analyze detailed errors. Gently guide the student back to the expected pose.\n"
                "Return JSON with keys speech and explanation.\n"
                "speech must be 15-20 words and encouraging.\n"
            )

        parsed = self._generate_json(
            model=self.text_model,
            prompt=prompt,
            fallback_code="gemini_feedback_parse_failed",
        )
        speech = str(parsed.get("speech") or "").strip()
        explanation = str(parsed.get("explanation") or "").strip()
        if not explanation:
            explanation = "Focus on calm, precise movement and continue the sequence with control."
        return {"speech": speech, "explanation": explanation}

    def generate_summary(self, feedback_items: list[str]) -> str:
        if not feedback_items:
            return "No feedback was provided to summarize."

        feedback_block = "\n".join(f'- "{item}"' for item in feedback_items if item)
        prompt = (
            "You are an expert Tai Chi master providing a final summary after a practice session.\n"
            "Generate one concise summary between 30 and 40 words.\n"
            "Return JSON with key summary.\n"
            "Feedback items:\n"
            f"{feedback_block}\n"
        )
        parsed = self._generate_json(
            model=self.text_model,
            prompt=prompt,
            fallback_code="gemini_summary_parse_failed",
        )
        summary = str(parsed.get("summary") or "").strip()
        if not summary:
            raise ApiError(
                message="AI failed to generate a summary.",
                code="gemini_summary_empty",
                status_code=502,
            )
        return summary

    def generate_image_data_uri(self, prompt: str) -> str:
        payload = {
            "contents": [{"parts": [{"text": f"Generate an image of: {prompt}"}]}],
            "generationConfig": {
                "responseModalities": ["IMAGE", "TEXT"],
            },
        }
        data = self._request_generate_content(self.image_model, payload)
        inline_image = self._extract_inline_image(data)
        if not inline_image:
            raise ApiError(
                message="Image generation failed to return image data.",
                code="image_generation_failed",
                status_code=502,
            )

        mime_type = inline_image.get("mimeType") or "image/png"
        encoded = inline_image.get("data")
        if not encoded:
            raise ApiError(
                message="Image generation returned malformed image payload.",
                code="image_generation_bad_payload",
                status_code=502,
            )
        return f"data:{mime_type};base64,{encoded}"

    def _generate_plain_text(self, *, model: str, prompt: str, temperature: float = 0.2) -> str:
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": temperature},
        }
        data = self._request_generate_content(model, payload)
        text = self._extract_text(data)
        if not text:
            raise ApiError(
                message="AI returned an empty response.",
                code="gemini_empty_response",
                status_code=502,
            )
        return text

    def _generate_json(self, *, model: str, prompt: str, fallback_code: str) -> dict[str, Any]:
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "responseMimeType": "application/json",
                "temperature": 0.4,
            },
        }
        data = self._request_generate_content(model, payload)
        text = self._extract_text(data)
        if not text:
            raise ApiError(
                message="AI returned an empty response.",
                code="gemini_empty_response",
                status_code=502,
            )
        parsed = self._safe_json_parse(text)
        if not isinstance(parsed, dict):
            raise ApiError(
                message="AI returned an unparseable response.",
                code=fallback_code,
                status_code=502,
                details=text[:500],
            )
        return parsed

    def _request_generate_content(self, model: str, payload: dict[str, Any]) -> dict[str, Any]:
        print("Request_generate_content ", self.api_key)
        if not self.api_key:
            raise ApiError(
                message="GEMINI_API_KEY is not configured.",
                code="gemini_not_configured",
                status_code=500,
            )

        url = f"{self.BASE_URL}/{model}:generateContent?key={self.api_key}"
        try:
            response = requests.post(url, json=payload, timeout=self.timeout_seconds)
        except requests.Timeout as exc:
            raise ApiError(
                message="AI request timed out.",
                code="gemini_timeout",
                status_code=504,
            ) from exc
        except requests.RequestException as exc:
            raise ApiError(
                message="Failed to reach AI service.",
                code="gemini_unreachable",
                status_code=502,
                details=str(exc),
            ) from exc

        if not response.ok:
            raise ApiError(
                message="AI request failed.",
                code="gemini_upstream_error",
                status_code=502,
                details=response.text[:500],
            )

        try:
            return response.json()
        except ValueError as exc:
            raise ApiError(
                message="AI service returned invalid JSON.",
                code="gemini_invalid_json",
                status_code=502,
            ) from exc

    @staticmethod
    def _extract_text(payload: dict[str, Any]) -> str:
        candidates = payload.get("candidates") or []
        for candidate in candidates:
            content = candidate.get("content") or {}
            parts = content.get("parts") or []
            text_parts = [part.get("text", "") for part in parts if isinstance(part, dict)]
            merged = "\n".join(part for part in text_parts if part).strip()
            if merged:
                return merged
        return ""

    @staticmethod
    def _extract_inline_image(payload: dict[str, Any]) -> dict[str, str] | None:
        candidates = payload.get("candidates") or []
        for candidate in candidates:
            content = candidate.get("content") or {}
            parts = content.get("parts") or []
            for part in parts:
                if not isinstance(part, dict):
                    continue
                inline_data = part.get("inlineData")
                if isinstance(inline_data, dict) and inline_data.get("data"):
                    return {
                        "mimeType": str(inline_data.get("mimeType") or "image/png"),
                        "data": str(inline_data["data"]),
                    }
        return None

    @staticmethod
    def _safe_json_parse(text: str) -> Any:
        raw = text.strip()
        if not raw:
            return None
        try:
            return json.loads(raw)
        except json.JSONDecodeError:
            pass

        match = re.search(r"\{[\s\S]*\}", raw)
        if not match:
            return None
        try:
            return json.loads(match.group(0))
        except json.JSONDecodeError:
            return None
