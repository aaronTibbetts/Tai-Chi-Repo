from __future__ import annotations

from http.cookies import SimpleCookie


def _extract_cookie(response, key: str) -> str:
    cookie = SimpleCookie()
    for value in response.headers.getlist("Set-Cookie"):
        cookie.load(value)
    morsel = cookie.get(key)
    assert morsel is not None
    return morsel.value


def _login(client):
    client.post("/api/v2/auth/register", json={"email": "p@example.com", "password": "TaiChiPass123", "fullName": "Practice User"})
    login = client.post("/api/v2/auth/login", json={"email": "p@example.com", "password": "TaiChiPass123"})
    csrf = _extract_cookie(login, "csrf_token")
    return csrf


def test_v2_practice_session_end_to_end(client, app, monkeypatch):
    csrf = _login(client)

    services = app.extensions["services"]
    monkeypatch.setattr(services["gemini"], "generate_summary", lambda _items: "Strong session with steady form.")
    monkeypatch.setattr(services["elevenlabs"], "synthesize_to_data_uri", lambda _txt: "data:audio/mpeg;base64,AAA")

    created = client.post(
        "/api/v2/practice/sessions",
        json={"sequenceId": "1"},
        headers={"X-CSRF-Token": csrf},
    )
    assert created.status_code == 201
    session_id = created.get_json()["data"]["practiceSession"]["id"]

    pose = client.post(
        f"/api/v2/practice/sessions/{session_id}/poses",
        json={
            "poseIndex": 0,
            "expectedPoseName": "Wuji",
            "detectedPoseName": "Wuji",
            "errorDescriptions": ["Keep shoulders relaxed"],
            "confidence": 0.93,
            "latencyMs": 130,
        },
        headers={"X-CSRF-Token": csrf},
    )
    assert pose.status_code == 200

    complete = client.post(
        f"/api/v2/practice/sessions/{session_id}/complete",
        json={"feedbackItems": ["Keep shoulders relaxed"]},
        headers={"X-CSRF-Token": csrf},
    )
    assert complete.status_code == 200
    assert complete.get_json()["data"]["practiceSession"]["status"] == "completed"

    fetched = client.get(f"/api/v2/practice/sessions/{session_id}")
    assert fetched.status_code == 200
    body = fetched.get_json()
    assert body["data"]["practiceSession"]["id"] == session_id
    assert len(body["data"]["poseAttempts"]) == 1


def test_v2_progress_and_recommendations(client):
    csrf = _login(client)
    client.post("/api/v2/practice/sessions", json={"sequenceId": "1"}, headers={"X-CSRF-Token": csrf})

    progress = client.get("/api/v2/users/progress")
    assert progress.status_code == 200
    assert "readinessScore" in progress.get_json()["data"]["progress"]

    rec = client.get("/api/v2/coach/recommendations")
    assert rec.status_code == 200
    assert "nextSequenceId" in rec.get_json()["data"]["recommendation"]


def test_v2_requires_csrf_for_mutations(client):
    _login(client)
    response = client.post("/api/v2/practice/sessions", json={"sequenceId": "1"})
    assert response.status_code == 403
