from __future__ import annotations

import os
import time

import requests

from ..errors import ApiError


class VecApiProxy:
    def __init__(self) -> None:
        self.base_url = os.getenv("VEC_API_BASE_URL", "https://vec-api-9cvw.onrender.com").rstrip("/")
        self.timeout_seconds = float(os.getenv("VEC_API_TIMEOUT_SECONDS", "60"))

    def predict_csv(self, csv_bytes: bytes, filename: str = "pose_data.csv") -> dict[str, list[dict[str, str]]]:
        url = f"{self.base_url}/predict-csv"
        files = {"file": (filename or "pose_data.csv", csv_bytes, "text/csv")}
        started = time.perf_counter()

        try:
            response = requests.post(url, files=files, timeout=self.timeout_seconds)
        except requests.Timeout as exc:
            raise ApiError(
                message="Pose analysis service timed out.",
                code="vec_api_timeout",
                status_code=504,
            ) from exc
        except requests.RequestException as exc:
            raise ApiError(
                message="Failed to reach pose analysis service.",
                code="vec_api_unreachable",
                status_code=502,
                details=str(exc),
            ) from exc

        elapsed_ms = round((time.perf_counter() - started) * 1000, 2)
        status = response.status_code
        requests_log = f"vec_api_status={status} vec_api_duration_ms={elapsed_ms}"

        if not response.ok:
            raise ApiError(
                message="Pose analysis upstream request failed.",
                code="vec_api_upstream_error",
                status_code=504 if status in (408, 504) else 502,
                details=f"{requests_log} body={response.text[:400]}",
            )

        try:
            payload = response.json()
        except ValueError as exc:
            raise ApiError(
                message="Pose analysis service returned invalid JSON.",
                code="vec_api_invalid_json",
                status_code=502,
                details=requests_log,
            ) from exc

        feedbacks = payload.get("feedbacks")
        if not isinstance(feedbacks, list):
            raise ApiError(
                message="Analysis successful, but feedback data is missing from the response.",
                code="vec_api_bad_payload",
                status_code=502,
                details=requests_log,
            )

        normalized: list[dict[str, str]] = []
        for item in feedbacks:
            if not isinstance(item, dict):
                continue

            pose_name = str(
                item.get("poseName")
                or item.get("pose_name")
                or ""
            ).strip()
            speech_text = str(
                item.get("speechText")
                or item.get("speech_text")
                or item.get("speech")
                or ""
            ).strip()
            explanation = str(item.get("explanation") or "").strip()

            if not pose_name and not speech_text:
                continue

            normalized.append(
                {
                    "poseName": pose_name,
                    "speechText": speech_text,
                    "explanation": explanation,
                }
            )

        if not normalized:
            raise ApiError(
                message="Pose analysis returned no usable feedback records.",
                code="vec_api_empty_feedback",
                status_code=502,
                details=requests_log,
            )

        return {"feedbacks": normalized}
