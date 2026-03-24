from __future__ import annotations


def test_feedback_details_maps_codes(client):
    response = client.post(
        "/api/v1/feedback/details",
        json={"poseName": "G01", "speechText": "errors 1, 5"},
    )
    body = response.get_json()

    assert response.status_code == 200
    assert body["gestureName"] == "Beginning position (Wuji)"
    assert "Feet too close together" in body["errorDescriptions"]
    assert "Knees collapsing inward" in body["errorDescriptions"]


def test_feedback_details_unknown_gesture_fallback(client):
    response = client.post(
        "/api/v1/feedback/details",
        json={"poseName": "G99", "speechText": "error 4"},
    )
    body = response.get_json()

    assert response.status_code == 200
    assert body["gestureName"] == "Unknown Gesture"
    assert body["errorDescriptions"] == [
        "Maintain focus and continue with smooth, deliberate movements."
    ]


def test_personalized_feedback_tts_failure_returns_empty_speech(client, app, monkeypatch):
    services = app.extensions["services"]
    monkeypatch.setattr(
        services["gemini"],
        "generate_personalized_feedback",
        lambda **_kwargs: {
            "speech": "Keep the shoulders relaxed and continue with steady movement.",
            "explanation": "Keep your shoulders relaxed while maintaining an even stance.",
        },
    )

    def _tts_fail(_text):
        raise RuntimeError("tts unavailable")

    monkeypatch.setattr(services["elevenlabs"], "synthesize_to_data_uri", _tts_fail)

    response = client.post(
        "/api/v1/feedback/personalized",
        json={
            "expectedPoseName": "Beginning position (Wuji)",
            "analysisFeedback": {"poseName": "G01", "speechText": "errors 1, 5"},
        },
    )
    body = response.get_json()

    assert response.status_code == 200
    assert body["aiFeedback"]["speech"] == ""
    assert body["aiFeedback"]["explanation"]
    assert body["translationDetails"]["gestureName"] == "Beginning position (Wuji)"


def test_summary_empty_input_returns_expected_fallback(client):
    response = client.post("/api/v1/feedback/summary", json={"feedbackItems": []})
    body = response.get_json()

    assert response.status_code == 200
    assert body["summaryText"] == "No feedback was provided to summarize."
    assert body["summarySpeech"] == ""


def test_summary_non_empty(client, app, monkeypatch):
    services = app.extensions["services"]
    monkeypatch.setattr(
        services["gemini"],
        "generate_summary",
        lambda _items: "Well done. Keep your shoulders relaxed and maintain smooth, grounded transitions.",
    )
    monkeypatch.setattr(
        services["elevenlabs"],
        "synthesize_to_data_uri",
        lambda _text: "data:audio/mpeg;base64,AAA",
    )

    response = client.post(
        "/api/v1/feedback/summary",
        json={"feedbackItems": ["First item", "Second item"]},
    )
    body = response.get_json()

    assert response.status_code == 200
    assert body["summaryText"].startswith("Well done.")
    assert body["summarySpeech"].startswith("data:audio/mpeg;base64,")
