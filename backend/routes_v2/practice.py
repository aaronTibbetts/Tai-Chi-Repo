from __future__ import annotations

import time

from flask import Blueprint, current_app, g, request
from pydantic import ValidationError

from ..errors import ApiError
from ..middleware import build_response, idempotent_write, rate_limited, require_auth, require_csrf
from ..models_v2 import CompletePracticeSessionRequest, CreatePracticeSessionRequest, PoseAttemptRequest

bp = Blueprint("practice_v2", __name__, url_prefix="/api/v2/practice")


@bp.post("/sessions")
@rate_limited(write=True)
@require_auth
@require_csrf
@idempotent_write
def create_session():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = CreatePracticeSessionRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    datastore = current_app.extensions["services"]["datastore"]
    record = datastore.create_practice_session(
        user_id=g.user.user_id,
        sequence_id=parsed.sequenceId,
        started_at_epoch=int(time.time()),
    )
    return build_response(
        data={
            "practiceSession": {
                "id": record.practice_session_id,
                "sequenceId": record.sequence_id,
                "status": record.status,
            }
        },
        code=201,
    )


@bp.post("/sessions/<session_id>/poses")
@rate_limited(write=True)
@require_auth
@require_csrf
@idempotent_write
def add_pose_attempt(session_id: str):  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = PoseAttemptRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    datastore = current_app.extensions["services"]["datastore"]
    session_obj = datastore.get_practice_session(session_id)
    if not session_obj or session_obj["practiceSession"]["userId"] != g.user.user_id:
        raise ApiError("Practice session not found.", "practice_session_not_found", 404)

    attempt = datastore.add_pose_attempt(
        practice_session_id=session_id,
        pose_index=parsed.poseIndex,
        expected_pose_name=parsed.expectedPoseName,
        detected_pose_name=parsed.detectedPoseName,
        error_descriptions=parsed.errorDescriptions,
        confidence=parsed.confidence,
        latency_ms=parsed.latencyMs,
        created_at_epoch=int(time.time()),
    )

    return build_response(data={"poseAttempt": {"id": attempt.attempt_id}})


@bp.post("/sessions/<session_id>/complete")
@rate_limited(write=True)
@require_auth
@require_csrf
@idempotent_write
def complete_session(session_id: str):  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = CompletePracticeSessionRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError("Invalid request payload.", "validation_error", 400, str(exc)) from exc

    datastore = current_app.extensions["services"]["datastore"]
    gemini = current_app.extensions["services"]["gemini"]
    elevenlabs = current_app.extensions["services"]["elevenlabs"]

    summary_text = "No feedback was provided to summarize."
    summary_speech = ""

    if parsed.feedbackItems:
        try:
            summary_text = gemini.generate_summary(parsed.feedbackItems)
        except Exception as exc:  # noqa: BLE001
            current_app.logger.warning("summary generation failed: %s", exc)
            summary_text = "Good effort today. Keep your breath calm and transitions smooth while practicing your form."

        try:
            summary_speech = elevenlabs.synthesize_to_data_uri(summary_text)
        except Exception as exc:  # noqa: BLE001
            current_app.logger.warning("summary tts failed: %s", exc)
            summary_speech = ""

    updated = datastore.complete_practice_session(
        practice_session_id=session_id,
        completed_at_epoch=int(time.time()),
        summary_text=summary_text,
        summary_speech=summary_speech,
    )
    if not updated:
        raise ApiError("Practice session not found.", "practice_session_not_found", 404)

    return build_response(data={"practiceSession": {"id": session_id, "status": updated.status, "summaryText": summary_text, "summarySpeech": summary_speech}})


@bp.get("/sessions/<session_id>")
@rate_limited()
@require_auth
def get_session(session_id: str):  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    result = datastore.get_practice_session(session_id)
    if not result or result["practiceSession"]["userId"] != g.user.user_id:
        raise ApiError("Practice session not found.", "practice_session_not_found", 404)

    return build_response(data=result)
