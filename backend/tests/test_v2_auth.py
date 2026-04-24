from __future__ import annotations

from http.cookies import SimpleCookie


def _extract_cookie(response, key: str) -> str:
    cookie = SimpleCookie()
    for value in response.headers.getlist("Set-Cookie"):
        cookie.load(value)
    morsel = cookie.get(key)
    assert morsel is not None
    return morsel.value


def test_v2_register_login_me_logout(client):
    register = client.post(
        "/api/v2/auth/register",
        json={"email": "user@example.com", "password": "TaiChiPass123", "fullName": "Demo User"},
    )
    assert register.status_code == 201
    body = register.get_json()
    assert body["status"] == "ok"
    assert body["data"]["user"]["email"] == "user@example.com"

    login = client.post(
        "/api/v2/auth/login",
        json={"email": "user@example.com", "password": "TaiChiPass123"},
    )
    assert login.status_code == 200
    csrf = _extract_cookie(login, "csrf_token")

    me = client.get("/api/v2/auth/me")
    assert me.status_code == 200
    assert me.get_json()["data"]["user"]["email"] == "user@example.com"

    logout = client.post("/api/v2/auth/logout", headers={"X-CSRF-Token": csrf})
    assert logout.status_code == 200

    me_after = client.get("/api/v2/auth/me")
    assert me_after.status_code == 401


def test_v2_refresh_rotates_cookie(client):
    client.post(
        "/api/v2/auth/register",
        json={"email": "rotate@example.com", "password": "TaiChiPass123", "fullName": "Rotate User"},
    )
    login = client.post(
        "/api/v2/auth/login",
        json={"email": "rotate@example.com", "password": "TaiChiPass123"},
    )

    sid_before = _extract_cookie(login, "sid")
    csrf_before = _extract_cookie(login, "csrf_token")

    refreshed = client.post("/api/v2/auth/refresh", headers={"X-CSRF-Token": csrf_before})
    assert refreshed.status_code == 200
    sid_after = _extract_cookie(refreshed, "sid")
    assert sid_before != sid_after


def test_v2_password_reset_flow(client):
    client.post(
        "/api/v2/auth/register",
        json={"email": "reset@example.com", "password": "TaiChiPass123", "fullName": "Reset User"},
    )

    forgot = client.post("/api/v2/auth/password/forgot", json={"email": "reset@example.com"})
    token = forgot.get_json()["data"]["resetToken"]
    assert token

    reset = client.post(
        "/api/v2/auth/password/reset",
        json={"token": token, "newPassword": "NewTaiChiPass123"},
    )
    assert reset.status_code == 200

    login = client.post(
        "/api/v2/auth/login",
        json={"email": "reset@example.com", "password": "NewTaiChiPass123"},
    )
    assert login.status_code == 200


def test_v2_register_accepts_display_name_alias(client):
    register = client.post(
        "/api/v2/auth/register",
        json={"email": "alias@example.com", "password": "TaiChiPass123", "displayName": "Alias User"},
    )
    assert register.status_code == 201
    body = register.get_json()
    assert body["status"] == "ok"
    assert body["data"]["user"]["displayName"] == "Alias User"


def test_v2_register_accepts_legacy_name_aliases(client):
    legacy_name = client.post(
        "/api/v2/auth/register",
        json={"email": "legacy-name@example.com", "password": "TaiChiPass123", "name": "Legacy Name"},
    )
    assert legacy_name.status_code == 201
    assert legacy_name.get_json()["data"]["user"]["displayName"] == "Legacy Name"

    legacy_snake_case = client.post(
        "/api/v2/auth/register",
        json={"email": "legacy-snake@example.com", "password": "TaiChiPass123", "full_name": "Legacy Snake"},
    )
    assert legacy_snake_case.status_code == 201
    assert legacy_snake_case.get_json()["data"]["user"]["displayName"] == "Legacy Snake"
