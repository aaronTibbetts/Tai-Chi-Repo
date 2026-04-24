from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


@dataclass
class UserRecord:
    user_id: str
    email: str
    password_hash: str
    created_at: datetime = field(default_factory=utcnow)
    updated_at: datetime = field(default_factory=utcnow)
    is_verified: bool = False
    is_admin: bool = False
    failed_login_attempts: int = 0
    locked_until_epoch: int = 0


@dataclass
class ProfileRecord:
    user_id: str
    display_name: str
    locale: str | None = None
    experience_level: str | None = None


@dataclass
class SessionRecord:
    session_id: str
    user_id: str
    csrf_token: str
    created_at_epoch: int
    expires_at_epoch: int
    user_agent: str = ""
    ip_address: str = ""
    revoked: bool = False


@dataclass
class PracticeSessionRecord:
    practice_session_id: str
    user_id: str
    sequence_id: str
    started_at_epoch: int
    completed_at_epoch: int | None = None
    status: str = "in_progress"
    summary_text: str = ""
    summary_speech: str = ""


@dataclass
class PoseAttemptRecord:
    attempt_id: str
    practice_session_id: str
    pose_index: int
    expected_pose_name: str
    detected_pose_name: str
    error_descriptions: list[str]
    confidence: float
    latency_ms: int
    created_at_epoch: int


class AppDataStore:
    def create_user(
        self,
        *,
        email: str,
        password_hash: str,
        display_name: str,
        is_admin: bool = False,
    ) -> UserRecord:
        raise NotImplementedError

    def get_user_by_email(self, email: str) -> UserRecord | None:
        raise NotImplementedError

    def get_user_by_id(self, user_id: str) -> UserRecord | None:
        raise NotImplementedError

    def verify_user_email(self, user_id: str) -> None:
        raise NotImplementedError

    def update_password_hash(self, user_id: str, password_hash: str) -> None:
        raise NotImplementedError

    def track_login_failure(self, user_id: str, lock_seconds: int) -> UserRecord:
        raise NotImplementedError

    def clear_login_failures(self, user_id: str) -> None:
        raise NotImplementedError

    def create_session(
        self,
        *,
        session_id: str,
        user_id: str,
        csrf_token: str,
        created_at_epoch: int,
        expires_at_epoch: int,
        user_agent: str,
        ip_address: str,
    ) -> SessionRecord:
        raise NotImplementedError

    def get_session(self, session_id: str) -> SessionRecord | None:
        raise NotImplementedError

    def revoke_session(self, session_id: str) -> None:
        raise NotImplementedError

    def revoke_all_sessions_for_user(self, user_id: str) -> int:
        raise NotImplementedError

    def create_token(self, *, token_type: str, user_id: str, token_hash: str, expires_at_epoch: int) -> None:
        raise NotImplementedError

    def consume_token(self, *, token_type: str, token_hash: str) -> str | None:
        raise NotImplementedError

    def append_audit_event(self, *, user_id: str | None, event_type: str, details: dict[str, Any]) -> None:
        raise NotImplementedError

    def get_audit_events(self, *, user_id: str, limit: int = 100) -> list[dict[str, Any]]:
        raise NotImplementedError

    def get_profile(self, *, user_id: str) -> ProfileRecord | None:
        raise NotImplementedError

    def upsert_profile(
        self,
        *,
        user_id: str,
        display_name: str | None = None,
        locale: str | None = None,
        experience_level: str | None = None,
    ) -> ProfileRecord:
        raise NotImplementedError

    def save_onboarding_answers(self, *, user_id: str, answers: dict[str, Any]) -> None:
        raise NotImplementedError

    def save_calibration(self, *, user_id: str, calibration: dict[str, Any]) -> None:
        raise NotImplementedError

    def create_practice_session(self, *, user_id: str, sequence_id: str, started_at_epoch: int) -> PracticeSessionRecord:
        raise NotImplementedError

    def add_pose_attempt(
        self,
        *,
        practice_session_id: str,
        pose_index: int,
        expected_pose_name: str,
        detected_pose_name: str,
        error_descriptions: list[str],
        confidence: float,
        latency_ms: int,
        created_at_epoch: int,
    ) -> PoseAttemptRecord:
        raise NotImplementedError

    def complete_practice_session(
        self,
        *,
        practice_session_id: str,
        completed_at_epoch: int,
        summary_text: str,
        summary_speech: str,
    ) -> PracticeSessionRecord | None:
        raise NotImplementedError

    def get_practice_session(self, practice_session_id: str) -> dict[str, Any] | None:
        raise NotImplementedError

    def get_recent_pose_explanations(self, *, user_id: str, limit: int = 10) -> list[str]:
        raise NotImplementedError

    def get_user_progress(self, *, user_id: str) -> dict[str, Any]:
        raise NotImplementedError
