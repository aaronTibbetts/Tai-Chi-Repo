from __future__ import annotations

from dataclasses import dataclass

from ..config import SECURITY_CONFIG
from ..errors import ApiError
from .security import (
    PasswordManager,
    hash_token,
    make_token,
    new_csrf_token,
    new_session_id,
    now_epoch,
)
from .storage.base import SessionRecord, UserRecord


@dataclass
class AuthResult:
    user: UserRecord
    session: SessionRecord


class AuthService:
    def __init__(self, datastore) -> None:  # noqa: ANN001
        self.datastore = datastore
        self.passwords = PasswordManager()

    def register(self, *, email: str, password: str, display_name: str) -> tuple[UserRecord, str]:
        self._validate_password(password)
        password_hash = self.passwords.hash_password(password)
        try:
            user = self.datastore.create_user(
                email=email,
                password_hash=password_hash,
                display_name=display_name,
            )
        except ValueError as exc:
            if str(exc) == "user_exists":
                raise ApiError("Email already in use.", "email_exists", 409) from exc
            raise

        token_bundle = make_token(SECURITY_CONFIG.email_verify_ttl_seconds)
        self.datastore.create_token(
            token_type="email_verify",
            user_id=user.user_id,
            token_hash=token_bundle.token_hash,
            expires_at_epoch=token_bundle.expires_at_epoch,
        )
        return user, token_bundle.raw_token

    def login(
        self,
        *,
        email: str,
        password: str,
        user_agent: str,
        ip_address: str,
    ) -> AuthResult:
        user = self.datastore.get_user_by_email(email)
        if not user:
            raise ApiError("Invalid credentials.", "invalid_credentials", 401)

        if user.locked_until_epoch > now_epoch():
            raise ApiError("Account temporarily locked due to failed logins.", "account_locked", 429)

        if not self.passwords.verify_password(user.password_hash, password):
            self.datastore.track_login_failure(user.user_id, lock_seconds=900)
            raise ApiError("Invalid credentials.", "invalid_credentials", 401)

        self.datastore.clear_login_failures(user.user_id)
        session = self._create_session(user.user_id, user_agent=user_agent, ip_address=ip_address)
        return AuthResult(user=user, session=session)

    def refresh_session(self, *, session_id: str, user_agent: str, ip_address: str) -> SessionRecord:
        existing = self.datastore.get_session(session_id)
        if not existing or existing.revoked or existing.expires_at_epoch < now_epoch():
            raise ApiError("Session expired.", "session_expired", 401)

        self.datastore.revoke_session(session_id)
        return self._create_session(existing.user_id, user_agent=user_agent, ip_address=ip_address)

    def logout(self, *, session_id: str) -> None:
        self.datastore.revoke_session(session_id)

    def logout_all(self, *, user_id: str) -> int:
        return self.datastore.revoke_all_sessions_for_user(user_id)

    def issue_password_reset(self, *, email: str) -> str:
        user = self.datastore.get_user_by_email(email)
        if not user:
            return ""
        token_bundle = make_token(SECURITY_CONFIG.password_reset_ttl_seconds)
        self.datastore.create_token(
            token_type="password_reset",
            user_id=user.user_id,
            token_hash=token_bundle.token_hash,
            expires_at_epoch=token_bundle.expires_at_epoch,
        )
        return token_bundle.raw_token

    def reset_password(self, *, raw_token: str, new_password: str) -> None:
        self._validate_password(new_password)
        token_hash = hash_token(raw_token)
        user_id = self.datastore.consume_token(token_type="password_reset", token_hash=token_hash)
        if not user_id:
            raise ApiError("Reset token is invalid or expired.", "invalid_reset_token", 400)
        self.datastore.update_password_hash(user_id, self.passwords.hash_password(new_password))
        self.datastore.revoke_all_sessions_for_user(user_id)

    def verify_email(self, *, raw_token: str) -> None:
        token_hash = hash_token(raw_token)
        user_id = self.datastore.consume_token(token_type="email_verify", token_hash=token_hash)
        if not user_id:
            raise ApiError("Verification token is invalid or expired.", "invalid_verify_token", 400)
        self.datastore.verify_user_email(user_id)

    def _create_session(self, user_id: str, *, user_agent: str, ip_address: str) -> SessionRecord:
        created = now_epoch()
        return self.datastore.create_session(
            session_id=new_session_id(),
            user_id=user_id,
            csrf_token=new_csrf_token(),
            created_at_epoch=created,
            expires_at_epoch=created + SECURITY_CONFIG.session_ttl_seconds,
            user_agent=user_agent,
            ip_address=ip_address,
        )

    @staticmethod
    def _validate_password(password: str) -> None:
        if len(password) < 10:
            raise ApiError("Password must be at least 10 characters.", "password_too_short", 400)
        if password.lower() == password or password.upper() == password:
            raise ApiError("Password must include mixed case characters.", "password_missing_case", 400)
        if not any(ch.isdigit() for ch in password):
            raise ApiError("Password must include at least one number.", "password_missing_number", 400)
