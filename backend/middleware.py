from __future__ import annotations

import secrets
import threading
import time
from collections import defaultdict, deque
from functools import wraps
from typing import Any, Callable

from flask import Response, current_app, g, jsonify, request

from .config import APP_CONFIG, SECURITY_CONFIG
from .errors import ApiError


def build_response(*, data: dict[str, Any] | list[Any] | None = None, status: str = "ok", errors: list[dict[str, Any]] | None = None, code: int = 200):
    payload = {
        "requestId": getattr(g, "request_id", ""),
        "status": status,
        "data": data if data is not None else {},
        "errors": errors or [],
    }
    return jsonify(payload), code


def register_request_middleware(app):  # noqa: ANN001
    app.extensions.setdefault("idempotency_cache", {})
    app.extensions.setdefault("rate_limiter", SimpleRateLimiter())

    @app.before_request
    def _before_request():  # type: ignore[no-untyped-def]
        g.request_id = request.headers.get("X-Request-ID") or secrets.token_hex(16)
        g.started_at = time.perf_counter()

    @app.after_request
    def _after_request(response):  # type: ignore[no-untyped-def]
        response.headers["X-Request-ID"] = g.request_id
        duration_ms = round((time.perf_counter() - g.started_at) * 1000, 2)
        app.logger.info(
            "request_id=%s method=%s path=%s status=%s duration_ms=%s",
            g.request_id,
            request.method,
            request.path,
            response.status_code,
            duration_ms,
        )
        return response


class SimpleRateLimiter:
    def __init__(self) -> None:
        self._hits: dict[str, deque[float]] = defaultdict(deque)
        self._lock = threading.Lock()

    def allow(self, key: str, limit_per_minute: int) -> bool:
        now = time.time()
        cutoff = now - 60
        with self._lock:
            bucket = self._hits[key]
            while bucket and bucket[0] < cutoff:
                bucket.popleft()
            if len(bucket) >= limit_per_minute:
                return False
            bucket.append(now)
            return True


def _request_ip() -> str:
    forwarded = request.headers.get("X-Forwarded-For", "").split(",")[0].strip()
    return forwarded or request.remote_addr or "unknown"


def rate_limited(*, write: bool = False) -> Callable:
    def decorator(fn: Callable):
        @wraps(fn)
        def wrapped(*args, **kwargs):  # type: ignore[no-untyped-def]
            limiter: SimpleRateLimiter = current_app.extensions["rate_limiter"]
            limit = APP_CONFIG.write_rate_limit_per_minute if write else APP_CONFIG.rate_limit_per_minute
            key = f"{_request_ip()}:{request.endpoint}:{'w' if write else 'r'}"
            if not limiter.allow(key, limit):
                raise ApiError("Rate limit exceeded.", "rate_limited", 429)
            return fn(*args, **kwargs)

        return wrapped

    return decorator


def require_auth(fn: Callable):
    @wraps(fn)
    def wrapped(*args, **kwargs):  # type: ignore[no-untyped-def]
        datastore = current_app.extensions["services"]["datastore"]
        session_id = request.cookies.get(SECURITY_CONFIG.session_cookie_name, "")
        if not session_id:
            raise ApiError("Authentication required.", "auth_required", 401)

        session = datastore.get_session(session_id)
        if not session or session.revoked:
            raise ApiError("Session is invalid.", "invalid_session", 401)
        if session.expires_at_epoch < int(time.time()):
            raise ApiError("Session expired.", "session_expired", 401)

        user = datastore.get_user_by_id(session.user_id)
        if not user:
            raise ApiError("Session user no longer exists.", "invalid_session_user", 401)

        g.session = session
        g.user = user
        return fn(*args, **kwargs)

    return wrapped


def require_csrf(fn: Callable):
    @wraps(fn)
    def wrapped(*args, **kwargs):  # type: ignore[no-untyped-def]
        origin = request.headers.get("Origin")
        if SECURITY_CONFIG.allowed_origin and origin and origin != SECURITY_CONFIG.allowed_origin:
            raise ApiError("Origin is not allowed.", "origin_not_allowed", 403)

        cookie_token = request.cookies.get(SECURITY_CONFIG.csrf_cookie_name, "")
        header_token = request.headers.get(SECURITY_CONFIG.csrf_header_name, "")
        if not cookie_token or not header_token or cookie_token != header_token:
            raise ApiError("CSRF validation failed.", "csrf_failed", 403)

        session = getattr(g, "session", None)
        if session and session.csrf_token != header_token:
            raise ApiError("CSRF token mismatch.", "csrf_failed", 403)

        return fn(*args, **kwargs)

    return wrapped


def require_admin(fn: Callable):
    @wraps(fn)
    def wrapped(*args, **kwargs):  # type: ignore[no-untyped-def]
        user = getattr(g, "user", None)
        if not user or not user.is_admin:
            raise ApiError("Admin privileges required.", "admin_required", 403)
        return fn(*args, **kwargs)

    return wrapped


def idempotent_write(fn: Callable):
    @wraps(fn)
    def wrapped(*args, **kwargs):  # type: ignore[no-untyped-def]
        key = request.headers.get("Idempotency-Key", "").strip()
        user_id = getattr(getattr(g, "user", None), "user_id", "anon")
        cache_key = f"{user_id}:{request.path}:{key}"

        if key:
            cache = current_app.extensions["idempotency_cache"]
            if cache_key in cache:
                body, status_code = cache[cache_key]
                return Response(body, status=status_code, mimetype="application/json")

        response = fn(*args, **kwargs)
        if key:
            flask_response = response[0] if isinstance(response, tuple) else response
            status_code = response[1] if isinstance(response, tuple) else flask_response.status_code
            cache = current_app.extensions["idempotency_cache"]
            cache[cache_key] = (flask_response.get_data(as_text=True), status_code)
        return response

    return wrapped
