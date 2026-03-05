from __future__ import annotations


def test_health_ok(client):
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.get_json() == {"status": "ok"}


def test_ai_ping_ok(client, app, monkeypatch):
    services = app.extensions["services"]
    monkeypatch.setattr(services["gemini"], "ping", lambda: "Connection successful.")

    response = client.get("/api/v1/ai/ping")
    assert response.status_code == 200
    assert response.get_json() == {"message": "Connection successful."}
