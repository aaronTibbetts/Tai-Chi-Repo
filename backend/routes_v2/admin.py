from __future__ import annotations

from flask import Blueprint, current_app, g

from ..middleware import build_response, rate_limited, require_admin, require_auth, require_csrf

bp = Blueprint("admin_v2", __name__, url_prefix="/api/v2/admin")


@bp.get("/users/<user_id>/audit")
@rate_limited()
@require_auth
@require_admin
def user_audit(user_id: str):  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    events = datastore.get_audit_events(user_id=user_id, limit=100)
    return build_response(data={"events": events})


@bp.post("/users/<user_id>/revoke-sessions")
@rate_limited(write=True)
@require_auth
@require_admin
@require_csrf
def revoke_sessions(user_id: str):  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    revoked = datastore.revoke_all_sessions_for_user(user_id)
    datastore.append_audit_event(
        user_id=g.user.user_id,
        event_type="admin.revoke_sessions",
        details={"targetUserId": user_id, "revoked": revoked},
    )
    return build_response(data={"revokedSessions": revoked})


@bp.post("/jobs/replay")
@rate_limited(write=True)
@require_auth
@require_admin
@require_csrf
def replay_job():  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    datastore.append_audit_event(
        user_id=g.user.user_id,
        event_type="admin.jobs.replay",
        details={"status": "queued"},
    )
    return build_response(data={"queued": True, "jobType": "summary-regeneration"})
