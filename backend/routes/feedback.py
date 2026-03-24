from __future__ import annotations

from flask import Blueprint, current_app, jsonify, request
from pydantic import ValidationError

from errors import ApiError
from models import (
    FeedbackDetailsRequest,
    PersonalizedFeedbackRequest,
    SummaryRequest,
)
from services.gesture_mapper import normalize_pose_name

bp = Blueprint("feedback", __name__, url_prefix="/api/v1/feedback")


@bp.post("/details")
def feedback_details():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = FeedbackDetailsRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError(
            message="Invalid request payload.",
            code="validation_error",
            status_code=400,
            details=str(exc),
        ) from exc

    mapper = current_app.extensions["services"]["gesture_mapper"]
    details = mapper.get_feedback_details(parsed.poseName, parsed.speechText)
    return jsonify(details)


@bp.post("/personalized")
def personalized_feedback():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = PersonalizedFeedbackRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError(
            message="Invalid request payload.",
            code="validation_error",
            status_code=400,
            details=str(exc),
        ) from exc

    mapper = current_app.extensions["services"]["gesture_mapper"]
    gemini = current_app.extensions["services"]["gemini"]
    elevenlabs = current_app.extensions["services"]["elevenlabs"]

    translation_details = mapper.get_feedback_details(
        parsed.analysisFeedback.poseName,
        parsed.analysisFeedback.speechText,
    )

    expected_pose = parsed.expectedPoseName
    actual_pose = str(translation_details["gestureName"])
    pose_is_correct = normalize_pose_name(expected_pose) == normalize_pose_name(actual_pose)

    ai_payload = gemini.generate_personalized_feedback(
        expected_pose_name=expected_pose,
        actual_pose_name=actual_pose,
        error_descriptions=list(translation_details["errorDescriptions"]),
        previous_explanation=parsed.previousFeedback,
        pose_is_correct=pose_is_correct,
    )

    speech_text = ai_payload.get("speech", "")
    explanation = ai_payload.get("explanation", "")

    speech_data_uri = ""
    if speech_text:
        try:
            speech_data_uri = elevenlabs.synthesize_to_data_uri(speech_text)
        except Exception as exc:  # noqa: BLE001
            current_app.logger.exception("TTS generation failed: %s", exc)
            speech_data_uri = ""

    return jsonify(
        {
            "aiFeedback": {
                "speech": speech_data_uri,
                "explanation": explanation,
            },
            "translationDetails": translation_details,
        }
    )


@bp.post("/summary")
def summary_feedback():  # type: ignore[no-untyped-def]
    payload = request.get_json(silent=True) or {}
    try:
        parsed = SummaryRequest.model_validate(payload)
    except ValidationError as exc:
        raise ApiError(
            message="Invalid request payload.",
            code="validation_error",
            status_code=400,
            details=str(exc),
        ) from exc

    if not parsed.feedbackItems:
        return jsonify(
            {
                "summarySpeech": "",
                "summaryText": "No feedback was provided to summarize.",
            }
        )

    gemini = current_app.extensions["services"]["gemini"]
    elevenlabs = current_app.extensions["services"]["elevenlabs"]

    summary_text = gemini.generate_summary(parsed.feedbackItems)

    summary_speech = ""
    if summary_text:
        try:
            summary_speech = elevenlabs.synthesize_to_data_uri(summary_text)
        except Exception as exc:  # noqa: BLE001
            current_app.logger.exception("Summary TTS generation failed: %s", exc)
            summary_speech = ""

    return jsonify({"summarySpeech": summary_speech, "summaryText": summary_text})
