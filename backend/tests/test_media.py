from __future__ import annotations

from backend.errors import ApiError


def test_generate_image_success(client, app, monkeypatch):
    services = app.extensions["services"]
    monkeypatch.setattr(
        services["gemini"],
        "generate_image_data_uri",
        lambda _prompt: "data:image/png;base64,abc123",
    )

    response = client.post(
        "/api/v1/media/generate-image",
        json={"prompt": "A cat meditating in a bamboo grove"},
    )
    body = response.get_json()

    assert response.status_code == 200
    assert body["imageUrl"] == "data:image/png;base64,abc123"


def test_generate_image_no_image_returns_structured_error(client, app, monkeypatch):
    services = app.extensions["services"]

    def _raise(_prompt):
        raise ApiError(
            message="Image generation failed to return image data.",
            code="image_generation_failed",
            status_code=502,
        )

    monkeypatch.setattr(services["gemini"], "generate_image_data_uri", _raise)

    response = client.post(
        "/api/v1/media/generate-image",
        json={"prompt": "A mountain at sunrise"},
    )
    body = response.get_json()

    assert response.status_code == 502
    assert body["code"] == "image_generation_failed"
