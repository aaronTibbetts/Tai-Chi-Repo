from __future__ import annotations

from dataclasses import dataclass
from typing import Any

from flask import Flask, jsonify
from pydantic import ValidationError


@dataclass
class ApiError(Exception):
    message: str
    code: str
    status_code: int = 400
    details: str | None = None


def _build_error_payload(error: ApiError) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "error": error.message,
        "code": error.code,
    }
    if error.details:
        payload["details"] = error.details
    return payload


def register_error_handlers(app: Flask) -> None:
    @app.errorhandler(ApiError)
    def handle_api_error(error: ApiError):  # type: ignore[no-untyped-def]
        return jsonify(_build_error_payload(error)), error.status_code

    @app.errorhandler(ValidationError)
    def handle_validation_error(error: ValidationError):  # type: ignore[no-untyped-def]
        return (
            jsonify(
                {
                    "error": "Invalid request payload.",
                    "code": "validation_error",
                    "details": error.errors(include_url=False),
                }
            ),
            400,
        )

    @app.errorhandler(Exception)
    def handle_unexpected_error(error: Exception):  # type: ignore[no-untyped-def]
        app.logger.exception("Unhandled server error: %s", error)
        return (
            jsonify(
                {
                    "error": "Internal server error.",
                    "code": "internal_error",
                }
            ),
            500,
        )
