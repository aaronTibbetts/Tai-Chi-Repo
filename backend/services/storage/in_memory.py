from __future__ import annotations

import hashlib
import json
import time
import uuid
from collections import defaultdict
from typing import Any

from .base import (
    AppDataStore,
    PoseAttemptRecord,
    PracticeSessionRecord,
    ProfileRecord,
    SessionRecord,
    UserRecord,
)


class InMemoryDataStore(AppDataStore):
    def __init__(self) -> None:
        self.users_by_id: dict[str, UserRecord] = {}
        self.user_id_by_email: dict[str, str] = {}
        self.profiles_by_user_id: dict[str, ProfileRecord] = {}
        self.sessions: dict[str, SessionRecord] = {}
        self.tokens: dict[str, dict[str, Any]] = {}
        self.audit_events: list[dict[str, Any]] = []
        self.practice_sessions: dict[str, PracticeSessionRecord] = {}
        self.pose_attempts_by_session: dict[str, list[PoseAttemptRecord]] = defaultdict(list)
        self.onboarding_answers_by_user_id: dict[str, dict[str, Any]] = {}
        self.calibration_by_user_id: dict[str, dict[str, Any]] = {}

    def create_user(
        self,
        *,
        email: str,
        password_hash: str,
        display_name: str,
        is_admin: bool = False,
    ) -> UserRecord:
        normalized_email = email.strip().lower()
        if normalized_email in self.user_id_by_email:
            raise ValueError("user_exists")
        user = UserRecord(
            user_id=str(uuid.uuid4()),
            email=normalized_email,
            password_hash=password_hash,
            is_admin=is_admin,
        )
        self.users_by_id[user.user_id] = user
        self.user_id_by_email[normalized_email] = user.user_id
        self.profiles_by_user_id[user.user_id] = ProfileRecord(
            user_id=user.user_id,
            display_name=display_name.strip() or normalized_email.split("@")[0],
        )
        return user

    def get_user_by_email(self, email: str) -> UserRecord | None:
        user_id = self.user_id_by_email.get(email.strip().lower())
        return self.users_by_id.get(user_id) if user_id else None

    def get_user_by_id(self, user_id: str) -> UserRecord | None:
        return self.users_by_id.get(user_id)

    def verify_user_email(self, user_id: str) -> None:
        user = self.users_by_id.get(user_id)
        if user:
            user.is_verified = True

    def update_password_hash(self, user_id: str, password_hash: str) -> None:
        user = self.users_by_id.get(user_id)
        if user:
            user.password_hash = password_hash

    def track_login_failure(self, user_id: str, lock_seconds: int) -> UserRecord:
        user = self.users_by_id[user_id]
        user.failed_login_attempts += 1
        if user.failed_login_attempts >= 5:
            user.locked_until_epoch = int(time.time()) + lock_seconds
        return user

    def clear_login_failures(self, user_id: str) -> None:
        user = self.users_by_id.get(user_id)
        if user:
            user.failed_login_attempts = 0
            user.locked_until_epoch = 0

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
        session = SessionRecord(
            session_id=session_id,
            user_id=user_id,
            csrf_token=csrf_token,
            created_at_epoch=created_at_epoch,
            expires_at_epoch=expires_at_epoch,
            user_agent=user_agent,
            ip_address=ip_address,
        )
        self.sessions[session_id] = session
        return session

    def get_session(self, session_id: str) -> SessionRecord | None:
        return self.sessions.get(session_id)

    def revoke_session(self, session_id: str) -> None:
        session = self.sessions.get(session_id)
        if session:
            session.revoked = True

    def revoke_all_sessions_for_user(self, user_id: str) -> int:
        count = 0
        for session in self.sessions.values():
            if session.user_id == user_id and not session.revoked:
                session.revoked = True
                count += 1
        return count

    def create_token(self, *, token_type: str, user_id: str, token_hash: str, expires_at_epoch: int) -> None:
        self.tokens[f"{token_type}:{token_hash}"] = {
            "user_id": user_id,
            "expires_at_epoch": expires_at_epoch,
            "consumed": False,
        }

    def consume_token(self, *, token_type: str, token_hash: str) -> str | None:
        key = f"{token_type}:{token_hash}"
        token = self.tokens.get(key)
        if not token or token["consumed"]:
            return None
        if int(token["expires_at_epoch"]) < int(time.time()):
            return None
        token["consumed"] = True
        return str(token["user_id"])

    def append_audit_event(self, *, user_id: str | None, event_type: str, details: dict[str, Any]) -> None:
        self.audit_events.append(
            {
                "id": str(uuid.uuid4()),
                "user_id": user_id,
                "event_type": event_type,
                "details": details,
                "createdAtEpoch": int(time.time()),
            }
        )

    def get_audit_events(self, *, user_id: str, limit: int = 100) -> list[dict[str, Any]]:
        events = [event for event in self.audit_events if event["user_id"] == user_id]
        return list(reversed(events[-limit:]))

    def get_profile(self, *, user_id: str) -> ProfileRecord | None:
        return self.profiles_by_user_id.get(user_id)

    def upsert_profile(
        self,
        *,
        user_id: str,
        display_name: str | None = None,
        locale: str | None = None,
        experience_level: str | None = None,
    ) -> ProfileRecord:
        existing = self.profiles_by_user_id.get(user_id)
        if not existing:
            existing = ProfileRecord(user_id=user_id, display_name=display_name or "Practitioner")
            self.profiles_by_user_id[user_id] = existing

        if display_name is not None:
            existing.display_name = display_name.strip() or existing.display_name
        if locale is not None:
            existing.locale = locale
        if experience_level is not None:
            existing.experience_level = experience_level
        return existing

    def save_onboarding_answers(self, *, user_id: str, answers: dict[str, Any]) -> None:
        self.onboarding_answers_by_user_id[user_id] = json.loads(json.dumps(answers))

    def save_calibration(self, *, user_id: str, calibration: dict[str, Any]) -> None:
        self.calibration_by_user_id[user_id] = json.loads(json.dumps(calibration))

    def create_practice_session(self, *, user_id: str, sequence_id: str, started_at_epoch: int) -> PracticeSessionRecord:
        session = PracticeSessionRecord(
            practice_session_id=str(uuid.uuid4()),
            user_id=user_id,
            sequence_id=sequence_id,
            started_at_epoch=started_at_epoch,
        )
        self.practice_sessions[session.practice_session_id] = session
        return session

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
        attempt = PoseAttemptRecord(
            attempt_id=str(uuid.uuid4()),
            practice_session_id=practice_session_id,
            pose_index=pose_index,
            expected_pose_name=expected_pose_name,
            detected_pose_name=detected_pose_name,
            error_descriptions=error_descriptions,
            confidence=confidence,
            latency_ms=latency_ms,
            created_at_epoch=created_at_epoch,
        )
        self.pose_attempts_by_session[practice_session_id].append(attempt)
        return attempt

    def complete_practice_session(
        self,
        *,
        practice_session_id: str,
        completed_at_epoch: int,
        summary_text: str,
        summary_speech: str,
    ) -> PracticeSessionRecord | None:
        session = self.practice_sessions.get(practice_session_id)
        if not session:
            return None
        session.completed_at_epoch = completed_at_epoch
        session.status = "completed"
        session.summary_text = summary_text
        session.summary_speech = summary_speech
        return session

    def get_practice_session(self, practice_session_id: str) -> dict[str, Any] | None:
        session = self.practice_sessions.get(practice_session_id)
        if not session:
            return None
        attempts = self.pose_attempts_by_session.get(practice_session_id, [])
        return {
            "practiceSession": {
                "id": session.practice_session_id,
                "userId": session.user_id,
                "sequenceId": session.sequence_id,
                "status": session.status,
                "startedAtEpoch": session.started_at_epoch,
                "completedAtEpoch": session.completed_at_epoch,
                "summaryText": session.summary_text,
                "summarySpeech": session.summary_speech,
            },
            "poseAttempts": [
                {
                    "id": attempt.attempt_id,
                    "poseIndex": attempt.pose_index,
                    "expectedPoseName": attempt.expected_pose_name,
                    "detectedPoseName": attempt.detected_pose_name,
                    "errorDescriptions": attempt.error_descriptions,
                    "confidence": attempt.confidence,
                    "latencyMs": attempt.latency_ms,
                    "createdAtEpoch": attempt.created_at_epoch,
                }
                for attempt in attempts
            ],
        }

    def get_recent_pose_explanations(self, *, user_id: str, limit: int = 10) -> list[str]:
        explanations: list[str] = []
        sessions = sorted(self.practice_sessions.values(), key=lambda s: s.started_at_epoch)
        for practice_session in sessions:
            if practice_session.user_id != user_id:
                continue
            for attempt in self.pose_attempts_by_session.get(practice_session.practice_session_id, []):
                explanations.extend(attempt.error_descriptions)
        return explanations[-limit:]

    def get_user_progress(self, *, user_id: str) -> dict[str, Any]:
        sessions = [item for item in self.practice_sessions.values() if item.user_id == user_id]
        completed = [item for item in sessions if item.status == "completed"]
        total_attempts = sum(len(self.pose_attempts_by_session[item.practice_session_id]) for item in sessions)
        readiness = min(100, len(completed) * 10 + total_attempts)
        return {
            "totalSessions": len(sessions),
            "completedSessions": len(completed),
            "currentStreakDays": min(14, len(completed)),
            "readinessScore": readiness,
        }


def stable_hash(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()
