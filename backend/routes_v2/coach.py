from __future__ import annotations

from flask import Blueprint, current_app, g, request
from pydantic import ValidationError

from ..middleware import build_response, rate_limited, require_auth, require_csrf
from ..models_v2 import CoachPersonalizedRequest, CoachSummaryRequest
from ..services.gesture_mapper import normalize_pose_name

bp = Blueprint("coach_v2", __name__, url_prefix="/api/v2/coach")


@bp.post("/personalized-feedback")
@rate_limited(write=True)
@require_auth
@require_csrf
def personalized_feedback():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = CoachPersonalizedRequest.model_validate(payload)
    except ValidationError as exc:
        return build_response(status="error", errors=[{"code": "validation_error", "message": str(exc)}], code=400)

    mapper = current_app.extensions["services"]["gesture_mapper"]
    gemini = current_app.extensions["services"]["gemini"]
    elevenlabs = current_app.extensions["services"]["elevenlabs"]
    datastore = current_app.extensions["services"]["datastore"]

    pose_name = str(parsed.analysisFeedback.get("poseName") or "")
    speech_text = str(parsed.analysisFeedback.get("speechText") or "")
    translation = mapper.get_feedback_details(pose_name, speech_text)

    expected_pose = parsed.expectedPoseName
    actual_pose = str(translation["gestureName"])
    pose_is_correct = normalize_pose_name(expected_pose) == normalize_pose_name(actual_pose)

    coach_memory = datastore.get_recent_pose_explanations(user_id=g.user.user_id, limit=6)
    previous_feedback = " ".join(coach_memory[-2:]) if coach_memory else None

    ai_payload = gemini.generate_personalized_feedback(
        expected_pose_name=expected_pose,
        actual_pose_name=actual_pose,
        error_descriptions=list(translation["errorDescriptions"]),
        previous_explanation=previous_feedback,
        pose_is_correct=pose_is_correct,
    )

    speech_uri = ""
    if ai_payload.get("speech"):
        try:
            speech_uri = elevenlabs.synthesize_to_data_uri(ai_payload["speech"])
        except Exception:  # noqa: BLE001
            speech_uri = ""

    return build_response(
        data={
            "aiFeedback": {
                "speech": speech_uri,
                "explanation": ai_payload.get("explanation", ""),
            },
            "translationDetails": translation,
            "coachMemoryHints": coach_memory,
        }
    )


@bp.post("/final-summary")
@rate_limited(write=True)
@require_auth
@require_csrf
def final_summary():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = CoachSummaryRequest.model_validate(payload)
    except ValidationError as exc:
        return build_response(status="error", errors=[{"code": "validation_error", "message": str(exc)}], code=400)

    gemini = current_app.extensions["services"]["gemini"]
    elevenlabs = current_app.extensions["services"]["elevenlabs"]

    summary_text = gemini.generate_summary(parsed.feedbackItems) if parsed.feedbackItems else "No feedback was provided to summarize."
    summary_speech = ""
    if summary_text:
        try:
            summary_speech = elevenlabs.synthesize_to_data_uri(summary_text)
        except Exception:  # noqa: BLE001
            summary_speech = ""

    return build_response(data={"summaryText": summary_text, "summarySpeech": summary_speech})


@bp.get("/recommendations")
@rate_limited()
@require_auth
def recommendations():  # type: ignore[no-untyped-def]
    datastore = current_app.extensions["services"]["datastore"]
    progress = datastore.get_user_progress(user_id=g.user.user_id)

    readiness = int(progress.get("readinessScore", 0))
    if readiness < 30:
        next_sequence = "1"
    elif readiness < 70:
        next_sequence = "2"
    else:
        next_sequence = "3"

    return build_response(
        data={
            "recommendation": {
                "nextSequenceId": next_sequence,
                "weeklyGoal": 3 if readiness < 70 else 5,
                "adaptiveDifficulty": "gentle" if readiness < 50 else "standard",
            }
        }
    )
