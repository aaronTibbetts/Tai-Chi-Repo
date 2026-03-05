from __future__ import annotations

import io

from errors import ApiError


def test_predict_csv_accepts_json(client, app, monkeypatch):
    services = app.extensions["services"]
    monkeypatch.setattr(
        services["vec_proxy"],
        "predict_csv",
        lambda csv_bytes, filename="pose_data.csv": {
            "feedbacks": [
                {
                    "poseName": "G01",
                    "speechText": "errors 1, 2",
                    "explanation": "Keep your alignment steady.",
                }
            ]
        },
    )

    response = client.post(
        "/api/v1/analysis/predict-csv",
        json={"csvData": "timestamp_ms,NOSE_x,NOSE_y,NOSE_z\n0,0,0,0\n"},
    )
    body = response.get_json()

    assert response.status_code == 200
    assert isinstance(body["feedbacks"], list)
    assert body["feedbacks"][0]["poseName"] == "G01"


def test_predict_csv_accepts_multipart(client, app, monkeypatch):
    services = app.extensions["services"]
    monkeypatch.setattr(
        services["vec_proxy"],
        "predict_csv",
        lambda csv_bytes, filename="pose_data.csv": {
            "feedbacks": [
                {
                    "poseName": "G02",
                    "speechText": "great form",
                    "explanation": "Smooth and controlled.",
                }
            ]
        },
    )

    response = client.post(
        "/api/v1/analysis/predict-csv",
        data={"file": (io.BytesIO(b"timestamp_ms,x\n0,1"), "pose.csv")},
        content_type="multipart/form-data",
    )
    body = response.get_json()

    assert response.status_code == 200
    assert body["feedbacks"][0]["poseName"] == "G02"


def test_predict_csv_upstream_error_is_normalized(client, app, monkeypatch):
    services = app.extensions["services"]

    def _raise(*_args, **_kwargs):
        raise ApiError(
            message="Pose analysis service timed out.",
            code="vec_api_timeout",
            status_code=504,
            details="upstream timeout",
        )

    monkeypatch.setattr(services["vec_proxy"], "predict_csv", _raise)

    response = client.post(
        "/api/v1/analysis/predict-csv",
        json={"csvData": "timestamp_ms,x\n0,1"},
    )
    body = response.get_json()

    assert response.status_code == 504
    assert body["error"] == "Pose analysis service timed out."
    assert body["code"] == "vec_api_timeout"
