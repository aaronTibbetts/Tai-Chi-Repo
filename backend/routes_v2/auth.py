from __future__ import annotations

from flask import Blueprint, current_app, g, jsonify, request
from pydantic import ValidationError

from ..config import SECURITY_CONFIG
from ..errors import ApiError
from ..middleware import build_response, idempotent_write, rate_limited, require_auth, require_csrf
from ..models_v2 import (
    ForgotPasswordRequest,
    LoginRequest,
    RegisterRequest,
    ResetPasswordRequest,
    VerifyEmailRequest,
)

bp = Blueprint("auth_v2", __name__, url_prefix="/api/v2/auth")


def _set_auth_cookies(response, *, sid: str, csrf: str):
    response.set_cookie(
        SECURITY_CONFIG.session_cookie_name,
        sid,
        httponly=True,
        secure=SECURITY_CONFIG.secure_cookies,
        samesite="Lax",
        max_age=SECURITY_CONFIG.session_ttl_seconds,
        domain=SECURITY_CONFIG.cookie_domain,
        path=SECURITY_CONFIG.cookie_path,
    )
    response.set_cookie(
        SECURITY_CONFIG.csrf_cookie_name,
        csrf,
        httponly=False,
        secure=SECURITY_CONFIG.secure_cookies,
        samesite="Lax",
        max_age=SECURITY_CONFIG.session_ttl_seconds,
        domain=SECURITY_CONFIG.cookie_domain,
        path=SECURITY_CONFIG.cookie_path,
    )


def _clear_auth_cookies(response):
    response.delete_cookie(
        SECURITY_CONFIG.session_cookie_name,
        domain=SECURITY_CONFIG.cookie_domain,
        path=SECURITY_CONFIG.cookie_path,
    )
    response.delete_cookie(
        SECURITY_CONFIG.csrf_cookie_name,
        domain=SECURITY_CONFIG.cookie_domain,
        path=SECURITY_CONFIG.cookie_path,
    )


@bp.post("/register")
@rate_limited(write=True)
@idempotent_write
def register():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = RegisterRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    auth = current_app.extensions["services"]["auth"]
    datastore = current_app.extensions["services"]["datastore"]
    user, verify_token = auth.register(
        email=parsed.email,
        password=parsed.password,
        display_name=parsed.fullName,
    )
    session = auth.login(
        email=parsed.email,
        password=parsed.password,
        user_agent=request.user_agent.string or "",
        ip_address=request.remote_addr or "",
    ).session
    profile = datastore.get_profile(user_id=user.user_id)
    datastore.append_audit_event(user_id=user.user_id, event_type="auth.register", details={"email": user.email})

    body, code = build_response(
        data={
            "user": {
                "id": user.user_id,
                "email": user.email,
                "isVerified": user.is_verified,
                "displayName": profile.display_name if profile else parsed.fullName,
            },
            "emailVerificationToken": verify_token,
        },
        code=201,
    )
    _set_auth_cookies(body, sid=session.session_id, csrf=session.csrf_token)
    return body, code


@bp.post("/login")
@rate_limited(write=True)
def login():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = LoginRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    auth = current_app.extensions["services"]["auth"]
    datastore = current_app.extensions["services"]["datastore"]

    result = auth.login(
        email=parsed.email,
        password=parsed.password,
        user_agent=request.user_agent.string or "",
        ip_address=request.remote_addr or "",
    )
    datastore.append_audit_event(user_id=result.user.user_id, event_type="auth.login", details={"method": "password"})
    profile = datastore.get_profile(user_id=result.user.user_id)

    response, code = build_response(
        data={
            "user": {
                "id": result.user.user_id,
                "email": result.user.email,
                "isVerified": result.user.is_verified,
                "isAdmin": result.user.is_admin,
                "displayName": profile.display_name if profile else result.user.email.split("@")[0],
            }
        }
    )
    _set_auth_cookies(response, sid=result.session.session_id, csrf=result.session.csrf_token)
    return response, code


@bp.post("/logout")
@rate_limited(write=True)
@require_auth
@require_csrf
def logout():  # type: ignore[no-untyped-def]
    auth = current_app.extensions["services"]["auth"]
    session = g.session
    auth.logout(session_id=session.session_id)
    response, code = build_response(data={"loggedOut": True})
    _clear_auth_cookies(response)
    return response, code


@bp.post("/logout-all")
@rate_limited(write=True)
@require_auth
@require_csrf
def logout_all():  # type: ignore[no-untyped-def]
    auth = current_app.extensions["services"]["auth"]
    user = g.user
    count = auth.logout_all(user_id=user.user_id)
    response, code = build_response(data={"revokedSessions": count})
    _clear_auth_cookies(response)
    return response, code


@bp.post("/refresh")
@rate_limited(write=True)
@require_auth
@require_csrf
def refresh():  # type: ignore[no-untyped-def]
    auth = current_app.extensions["services"]["auth"]
    session = g.session

    rotated = auth.refresh_session(
        session_id=session.session_id,
        user_agent=request.user_agent.string or "",
        ip_address=request.remote_addr or "",
    )

    response, code = build_response(data={"refreshed": True})
    _set_auth_cookies(response, sid=rotated.session_id, csrf=rotated.csrf_token)
    return response, code


@bp.get("/me")
@rate_limited()
@require_auth
def me():  # type: ignore[no-untyped-def]
    user = g.user
    datastore = current_app.extensions["services"]["datastore"]
    profile = datastore.get_profile(user_id=user.user_id)
    return build_response(
        data={
            "user": {
                "id": user.user_id,
                "email": user.email,
                "isVerified": user.is_verified,
                "isAdmin": user.is_admin,
                "displayName": profile.display_name if profile else user.email.split("@")[0],
                "locale": profile.locale if profile else None,
                "experienceLevel": profile.experience_level if profile else None,
            }
        }
    )


@bp.post("/password/forgot")
@rate_limited(write=True)
def password_forgot():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = ForgotPasswordRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    auth = current_app.extensions["services"]["auth"]
    token = auth.issue_password_reset(email=parsed.email)
    return build_response(data={"accepted": True, "resetToken": token})


@bp.post("/password/reset")
@rate_limited(write=True)
def password_reset():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = ResetPasswordRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    auth = current_app.extensions["services"]["auth"]
    auth.reset_password(raw_token=parsed.token, new_password=parsed.newPassword)
    return build_response(data={"passwordReset": True})


@bp.post("/email/verify")
@rate_limited(write=True)
def email_verify():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = VerifyEmailRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    auth = current_app.extensions["services"]["auth"]
    auth.verify_email(raw_token=parsed.token)
    return build_response(data={"emailVerified": True})
