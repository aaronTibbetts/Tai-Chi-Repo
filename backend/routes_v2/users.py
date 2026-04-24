from __future__ import annotations

from flask import Blueprint, current_app, g, request
from pydantic import ValidationError

from ..errors import ApiError
from ..middleware import build_response, idempotent_write, rate_limited, require_auth, require_csrf
from ..models_v2 import SaveCalibrationRequest, SaveOnboardingRequest, UpdateProfileRequest

bp = Blueprint("users_v2", __name__, url_prefix="/api/v2/users")


@bp.get("/profile")
@rate_limited()
@require_auth
def get_profile():  # type: ignore[no-untyped-def]
    user = g.user
    datastore = current_app.extensions["services"]["datastore"]
    profile = datastore.get_profile(user_id=user.user_id)
    return build_response(
        data={
            "profile": {
                "userId": user.user_id,
                "email": user.email,
                "isVerified": user.is_verified,
                "displayName": profile.display_name if profile else user.email.split("@")[0],
                "locale": profile.locale if profile else None,
                "experienceLevel": profile.experience_level if profile else None,
            }
        }
    )


@bp.patch("/profile")
@rate_limited(write=True)
@require_auth
@require_csrf
@idempotent_write
def update_profile():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = UpdateProfileRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    datastore = current_app.extensions["services"]["datastore"]
    user = g.user
    profile = datastore.upsert_profile(
        user_id=user.user_id,
        display_name=parsed.displayName,
        locale=parsed.locale,
        experience_level=parsed.experienceLevel,
    )
    datastore.append_audit_event(
        user_id=user.user_id,
        event_type="users.profile.updated",
        details={
            "displayName": profile.display_name,
            "locale": profile.locale,
            "experienceLevel": profile.experience_level,
        },
    )
    return build_response(
        data={
            "profileUpdated": True,
            "profile": {
                "displayName": profile.display_name,
                "locale": profile.locale,
                "experienceLevel": profile.experience_level,
            },
        }
    )


@bp.get("/progress")
@rate_limited()
@require_auth
def user_progress():  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    user = g.user
    progress = datastore.get_user_progress(user_id=user.user_id)
    return build_response(data={"progress": progress})


@bp.post("/onboarding")
@rate_limited(write=True)
@require_auth
@require_csrf
@idempotent_write
def save_onboarding():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = SaveOnboardingRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    datastore = current_app.extensions["services"]["datastore"]
    user = g.user
    datastore.save_onboarding_answers(user_id=user.user_id, answers=parsed.answers)
    datastore.append_audit_event(
        user_id=user.user_id,
        event_type="users.onboarding.saved",
        details={"questionCount": len(parsed.answers)},
    )
    return build_response(data={"saved": True})


@bp.post("/calibration")
@rate_limited(write=True)
@require_auth
@require_csrf
@idempotent_write
def save_calibration():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = SaveCalibrationRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    datastore = current_app.extensions["services"]["datastore"]
    user = g.user
    datastore.save_calibration(user_id=user.user_id, calibration=parsed.calibration)
    datastore.append_audit_event(
        user_id=user.user_id,
        event_type="users.calibration.saved",
        details={"keys": list(parsed.calibration.keys())[:10]},
    )
    return build_response(data={"saved": True})
