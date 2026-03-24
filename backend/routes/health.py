from __future__ import annotations

from flask import Blueprint, current_app, jsonify

bp = Blueprint("health", __name__, url_prefix="/api/v1")


@bp.get("/health")
def health_check():  # type: ignore[no-untyped-def]
    return jsonify({"status": "ok"})


@bp.get("/ai/ping")
def ai_ping():  # type: ignore[no-untyped-def]
    gemini = current_app.extensions["services"]["gemini"]
    message = gemini.ping()
    return jsonify({"message": message})
