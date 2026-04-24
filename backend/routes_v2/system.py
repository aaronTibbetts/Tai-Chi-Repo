from __future__ import annotations

from flask import Blueprint, current_app

from ..middleware import build_response, rate_limited

bp = Blueprint("system_v2", __name__, url_prefix="/api/v2")


@bp.get("/health")
@rate_limited()
def health_check():  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    return build_response(
        data={
            "status": "ok",
            "version": "v2",
            "datastore": datastore.__class__.__name__,
        }
    )


@bp.get("/ready")
@rate_limited()
def readiness_check():  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    return build_response(data={"ready": True, "datastore": datastore.__class__.__name__})
