from __future__ import annotations

from flask import Blueprint, current_app, jsonify, request
from pydantic import ValidationError

from backend.errors import ApiError
from backend.models import CsvJsonRequest

bp = Blueprint("analysis", __name__, url_prefix="/api/v1/analysis")


@bp.post("/predict-csv")
def predict_csv():  # type: ignore[no-untyped-def]
    filename = "pose_data.csv"
    csv_bytes: bytes | None = None

    if "file" in request.files:
        uploaded = request.files["file"]
        filename = uploaded.filename or filename
        csv_bytes = uploaded.read()
    else:
        payload = request.get_json(silent=True) or {}
        try:
            parsed = CsvJsonRequest.model_validate(payload)
        except ValidationError as exc:
            raise ApiError(
                message="Invalid request payload.",
                code="validation_error",
                status_code=400,
                details=str(exc),
            ) from exc
        csv_bytes = parsed.csvData.encode("utf-8")

    if not csv_bytes:
        raise ApiError(message="CSV data is empty.", code="empty_csv", status_code=400)

    vec_proxy = current_app.extensions["services"]["vec_proxy"]
    result = vec_proxy.predict_csv(csv_bytes=csv_bytes, filename=filename)
    return jsonify(result)
