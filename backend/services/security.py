from __future__ import annotations

import hashlib
import hmac
import os
import secrets
import time
from dataclasses import dataclass

try:
    from argon2 import PasswordHasher
    from argon2.exceptions import VerifyMismatchError
except Exception:  # noqa: BLE001
    PasswordHasher = None
    VerifyMismatchError = Exception


@dataclass(frozen=True)
class TokenBundle:
    raw_token: str
    token_hash: str
    expires_at_epoch: int


class PasswordManager:
    def __init__(self) -> None:
        self._argon = PasswordHasher() if PasswordHasher else None

    def hash_password(self, password: str) -> str:
        if self._argon:
            return self._argon.hash(password)

        salt = os.getenv("PASSWORD_FALLBACK_SALT", "dev-only-salt")
        digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), 200_000)
        return f"pbkdf2_sha256${digest.hex()}"

    def verify_password(self, password_hash: str, candidate: str) -> bool:
        if password_hash.startswith("$argon2") and self._argon:
            try:
                return self._argon.verify(password_hash, candidate)
            except VerifyMismatchError:
                return False

        if not password_hash.startswith("pbkdf2_sha256$"):
            return False
        salt = os.getenv("PASSWORD_FALLBACK_SALT", "dev-only-salt")
        digest = hashlib.pbkdf2_hmac("sha256", candidate.encode("utf-8"), salt.encode("utf-8"), 200_000)
        expected = password_hash.split("$", 1)[1]
        return hmac.compare_digest(expected, digest.hex())


def now_epoch() -> int:
    return int(time.time())


def new_session_id() -> str:
    return secrets.token_urlsafe(48)


def new_csrf_token() -> str:
    return secrets.token_urlsafe(32)


def make_token(ttl_seconds: int) -> TokenBundle:
    raw = secrets.token_urlsafe(36)
    digest = hashlib.sha256(raw.encode("utf-8")).hexdigest()
    return TokenBundle(raw_token=raw, token_hash=digest, expires_at_epoch=now_epoch() + ttl_seconds)


def hash_token(raw_token: str) -> str:
    return hashlib.sha256(raw_token.encode("utf-8")).hexdigest()
