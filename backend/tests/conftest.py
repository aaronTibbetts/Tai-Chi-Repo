from __future__ import annotations

import pytest

from backend.app import create_app


@pytest.fixture()
def app():
    return create_app(testing=True)


@pytest.fixture()
def client(app):
    return app.test_client()
