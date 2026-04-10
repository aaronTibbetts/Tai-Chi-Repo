from __future__ import annotations

from flask import Blueprint, current_app, jsonify, request
from pydantic import ValidationError

from ..errors import ApiError
from ..models import ImageRequest

bp = Blueprint("media", __name__, url_prefix="/api/v1/media")


@bp.post("/generate-image")
def generate_image():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = ImageRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError(
            message="Invalid request payload.",
            code="validation_error",
            status_code=400,
            details=str(exc),
        ) from exc

    gemini = current_app.extensions["services"]["gemini"]
    image_data_uri = gemini.generate_image_data_uri(parsed.prompt)
    return jsonify({"imageUrl": image_data_uri})
