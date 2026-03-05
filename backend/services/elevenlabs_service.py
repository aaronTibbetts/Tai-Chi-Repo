from __future__ import annotations

import base64
import os

import requests

from backend.errors import ApiError


class ElevenLabsService:
    def __init__(self) -> None:
        self.api_key = os.getenv("ELEVENLABS_API_KEY", "")
        self.voice_id = os.getenv("ELEVENLABS_VOICE_ID", "")
        self.model_id = os.getenv("ELEVENLABS_MODEL_ID", "eleven_multilingual_v2")
        self.timeout_seconds = float(os.getenv("ELEVENLABS_TIMEOUT_SECONDS", "45"))

    def synthesize_to_data_uri(self, text: str) -> str:
        message = text.strip()
        if not message:
            return ""

        if not self.api_key or not self.voice_id:
            raise RuntimeError("ElevenLabs API key or voice ID is not configured.")

        url = f"https://api.elevenlabs.io/v1/text-to-speech/{self.voice_id}"
        headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": self.api_key,
        }
        payload = {
            "text": message,
            "model_id": self.model_id,
            "voice_settings": {
                "stability": 0.5,
                "similarity_boost": 0.75,
            },
        }

        try:
            response = requests.post(url, headers=headers, json=payload, timeout=self.timeout_seconds)
        except requests.Timeout as exc:
            raise ApiError(
                message="Text-to-speech timed out.",
                code="tts_timeout",
                status_code=504,
            ) from exc
        except requests.RequestException as exc:
            raise ApiError(
                message="Failed to reach text-to-speech service.",
                code="tts_unreachable",
                status_code=502,
                details=str(exc),
            ) from exc

        if not response.ok:
            raise ApiError(
                message="Text-to-speech request failed.",
                code="tts_upstream_error",
                status_code=502,
                details=response.text[:400],
            )

        audio_base64 = base64.b64encode(response.content).decode("utf-8")
        return f"data:audio/mpeg;base64,{audio_base64}"
