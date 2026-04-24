from __future__ import annotations

import json
import os
import uuid
from contextlib import contextmanager
from datetime import datetime, timezone
from typing import Any

import snowflake.connector

from ...config import APP_CONFIG
from .base import (
    AppDataStore,
    PoseAttemptRecord,
    PracticeSessionRecord,
    ProfileRecord,
    SessionRecord,
    UserRecord,
)


def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


class SnowflakeDataStore(AppDataStore):
    def __init__(self) -> None:
        self.core_schema = (APP_CONFIG.snowflake_schema or "APP_CORE").strip() or "APP_CORE"
        self.ops_schema = (os.getenv("SNOWFLAKE_OPS_SCHEMA", "APP_OPS") or "APP_OPS").strip() or "APP_OPS"
        self._audit_events_table = f"{self.ops_schema}.audit_events"
        self.conn = snowflake.connector.connect(
            account=APP_CONFIG.snowflake_account,
            user=APP_CONFIG.snowflake_user,
            password=APP_CONFIG.snowflake_password,
            warehouse=APP_CONFIG.snowflake_warehouse,
            database=APP_CONFIG.snowflake_database,
            autocommit=True,
        )
        self._bootstrap_required_objects()

    @contextmanager
    def _cursor(self):
        cur = self.conn.cursor(snowflake.connector.DictCursor)
        try:
            yield cur
        finally:
            cur.close()

    def _bootstrap_required_objects(self) -> None:
        with self._cursor() as cur:
            cur.execute(f"create schema if not exists {self.core_schema}")
            cur.execute(f"create schema if not exists {self.ops_schema}")

            cur.execute(
                f"""
                create table if not exists {self.core_schema}.users (
                  user_id string,
                  email string,
                  is_verified boolean,
                  is_admin boolean,
                  created_at timestamp_ntz,
                  updated_at timestamp_ntz
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.credentials (
                  user_id string,
                  password_hash string,
                  failed_login_attempts number,
                  locked_until_epoch number,
                  updated_at timestamp_ntz
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.profiles (
                  user_id string,
                  display_name string,
                  locale string,
                  experience_level string,
                  updated_at timestamp_ntz
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.tokens (
                  token_type string,
                  token_hash string,
                  user_id string,
                  expires_at_epoch number,
                  consumed boolean
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.sessions (
                  session_id string,
                  user_id string,
                  csrf_token string,
                  created_at_epoch number,
                  expires_at_epoch number,
                  user_agent string,
                  ip_address string,
                  revoked boolean
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.onboarding_answers (
                  user_id string,
                  answers variant,
                  updated_at timestamp_ntz
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.calibrations (
                  user_id string,
                  calibration variant,
                  updated_at timestamp_ntz
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.practice_sessions (
                  practice_session_id string,
                  user_id string,
                  sequence_id string,
                  started_at_epoch number,
                  completed_at_epoch number,
                  status string,
                  summary_text string,
                  summary_speech string
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self.core_schema}.pose_attempts (
                  attempt_id string,
                  practice_session_id string,
                  pose_index number,
                  expected_pose_name string,
                  detected_pose_name string,
                  error_descriptions variant,
                  confidence float,
                  latency_ms number,
                  created_at_epoch number
                )
                """
            )
            cur.execute(
                f"""
                create table if not exists {self._audit_events_table} (
                  event_id string,
                  user_id string,
                  event_type string,
                  details variant,
                  created_at timestamp_ntz
                )
                """
            )
            cur.execute(f"use schema {self.core_schema}")

    def create_user(
        self,
        *,
        email: str,
        password_hash: str,
        display_name: str,
        is_admin: bool = False,
    ) -> UserRecord:
        normalized_email = email.strip().lower()
        existing = self.get_user_by_email(normalized_email)
        if existing:
            raise ValueError("user_exists")

        user_id = str(uuid.uuid4())
        now = _utcnow()
        with self._cursor() as cur:
            cur.execute(
                """
                insert into users (user_id, email, is_verified, is_admin, created_at, updated_at)
                values (%s, %s, %s, %s, %s, %s)
                """,
                (user_id, normalized_email, False, is_admin, now, now),
            )
            cur.execute(
                """
                insert into credentials (user_id, password_hash, failed_login_attempts, locked_until_epoch, updated_at)
                values (%s, %s, 0, 0, %s)
                """,
                (user_id, password_hash, now),
            )
            cur.execute(
                """
                insert into profiles (user_id, display_name, locale, experience_level, updated_at)
                values (%s, %s, null, null, %s)
                """,
                (user_id, (display_name.strip() or normalized_email.split("@")[0]), now),
            )

        return UserRecord(
            user_id=user_id,
            email=normalized_email,
            password_hash=password_hash,
            created_at=now,
            updated_at=now,
            is_verified=False,
            is_admin=is_admin,
        )

    def get_user_by_email(self, email: str) -> UserRecord | None:
        normalized_email = email.strip().lower()
        with self._cursor() as cur:
            cur.execute(
                """
                select u.user_id, u.email, c.password_hash, u.created_at, u.updated_at,
                       u.is_verified, u.is_admin, c.failed_login_attempts, c.locked_until_epoch
                from users u
                join credentials c on c.user_id = u.user_id
                where u.email = %s
                limit 1
                """,
                (normalized_email,),
            )
            row = cur.fetchone()
        if not row:
            return None
        return UserRecord(
            user_id=row["USER_ID"],
            email=row["EMAIL"],
            password_hash=row["PASSWORD_HASH"],
            created_at=row["CREATED_AT"],
            updated_at=row["UPDATED_AT"],
            is_verified=bool(row["IS_VERIFIED"]),
            is_admin=bool(row["IS_ADMIN"]),
            failed_login_attempts=int(row["FAILED_LOGIN_ATTEMPTS"] or 0),
            locked_until_epoch=int(row["LOCKED_UNTIL_EPOCH"] or 0),
        )

    def get_user_by_id(self, user_id: str) -> UserRecord | None:
        with self._cursor() as cur:
            cur.execute(
                """
                select u.user_id, u.email, c.password_hash, u.created_at, u.updated_at,
                       u.is_verified, u.is_admin, c.failed_login_attempts, c.locked_until_epoch
                from users u
                join credentials c on c.user_id = u.user_id
                where u.user_id = %s
                limit 1
                """,
                (user_id,),
            )
            row = cur.fetchone()
        if not row:
            return None
        return UserRecord(
            user_id=row["USER_ID"],
            email=row["EMAIL"],
            password_hash=row["PASSWORD_HASH"],
            created_at=row["CREATED_AT"],
            updated_at=row["UPDATED_AT"],
            is_verified=bool(row["IS_VERIFIED"]),
            is_admin=bool(row["IS_ADMIN"]),
            failed_login_attempts=int(row["FAILED_LOGIN_ATTEMPTS"] or 0),
            locked_until_epoch=int(row["LOCKED_UNTIL_EPOCH"] or 0),
        )

    def verify_user_email(self, user_id: str) -> None:
        with self._cursor() as cur:
            cur.execute(
                "update users set is_verified = true, updated_at = current_timestamp() where user_id = %s",
                (user_id,),
            )

    def update_password_hash(self, user_id: str, password_hash: str) -> None:
        with self._cursor() as cur:
            cur.execute(
                "update credentials set password_hash = %s, updated_at = current_timestamp() where user_id = %s",
                (password_hash, user_id),
            )

    def track_login_failure(self, user_id: str, lock_seconds: int) -> UserRecord:
        user = self.get_user_by_id(user_id)
        if not user:
            raise ValueError("user_not_found")
        attempts = user.failed_login_attempts + 1
        locked_until = user.locked_until_epoch
        if attempts >= 5:
            locked_until = int(datetime.now(timezone.utc).timestamp()) + lock_seconds
        with self._cursor() as cur:
            cur.execute(
                """
                update credentials
                set failed_login_attempts = %s, locked_until_epoch = %s, updated_at = current_timestamp()
                where user_id = %s
                """,
                (attempts, locked_until, user_id),
            )
        user.failed_login_attempts = attempts
        user.locked_until_epoch = locked_until
        return user

    def clear_login_failures(self, user_id: str) -> None:
        with self._cursor() as cur:
            cur.execute(
                """
                update credentials
                set failed_login_attempts = 0, locked_until_epoch = 0, updated_at = current_timestamp()
                where user_id = %s
                """,
                (user_id,),
            )

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
        with self._cursor() as cur:
            cur.execute(
                """
                insert into sessions (
                    session_id, user_id, csrf_token, created_at_epoch, expires_at_epoch,
                    user_agent, ip_address, revoked
                ) values (%s, %s, %s, %s, %s, %s, %s, false)
                """,
                (session_id, user_id, csrf_token, created_at_epoch, expires_at_epoch, user_agent, ip_address),
            )
        return SessionRecord(
            session_id=session_id,
            user_id=user_id,
            csrf_token=csrf_token,
            created_at_epoch=created_at_epoch,
            expires_at_epoch=expires_at_epoch,
            user_agent=user_agent,
            ip_address=ip_address,
            revoked=False,
        )

    def get_session(self, session_id: str) -> SessionRecord | None:
        with self._cursor() as cur:
            cur.execute("select * from sessions where session_id = %s limit 1", (session_id,))
            row = cur.fetchone()
        if not row:
            return None
        return SessionRecord(
            session_id=row["SESSION_ID"],
            user_id=row["USER_ID"],
            csrf_token=row["CSRF_TOKEN"],
            created_at_epoch=int(row["CREATED_AT_EPOCH"]),
            expires_at_epoch=int(row["EXPIRES_AT_EPOCH"]),
            user_agent=row.get("USER_AGENT") or "",
            ip_address=row.get("IP_ADDRESS") or "",
            revoked=bool(row.get("REVOKED") or False),
        )

    def revoke_session(self, session_id: str) -> None:
        with self._cursor() as cur:
            cur.execute("update sessions set revoked = true where session_id = %s", (session_id,))

    def revoke_all_sessions_for_user(self, user_id: str) -> int:
        with self._cursor() as cur:
            cur.execute("select count(*) as C from sessions where user_id = %s and revoked = false", (user_id,))
            row = cur.fetchone()
            count = int(row["C"]) if row else 0
            cur.execute("update sessions set revoked = true where user_id = %s and revoked = false", (user_id,))
        return count

    def create_token(self, *, token_type: str, user_id: str, token_hash: str, expires_at_epoch: int) -> None:
        with self._cursor() as cur:
            cur.execute(
                """
                insert into tokens (token_type, token_hash, user_id, expires_at_epoch, consumed)
                values (%s, %s, %s, %s, false)
                """,
                (token_type, token_hash, user_id, expires_at_epoch),
            )

    def consume_token(self, *, token_type: str, token_hash: str) -> str | None:
        now_epoch = int(datetime.now(timezone.utc).timestamp())
        with self._cursor() as cur:
            cur.execute(
                """
                select user_id
                from tokens
                where token_type = %s and token_hash = %s and consumed = false and expires_at_epoch >= %s
                order by expires_at_epoch desc
                limit 1
                """,
                (token_type, token_hash, now_epoch),
            )
            row = cur.fetchone()
            if not row:
                return None
            user_id = row["USER_ID"]
            cur.execute(
                """
                update tokens
                set consumed = true
                where token_type = %s and token_hash = %s
                """,
                (token_type, token_hash),
            )
        return str(user_id)

    def append_audit_event(self, *, user_id: str | None, event_type: str, details: dict[str, Any]) -> None:
        with self._cursor() as cur:
            cur.execute(
                f"""
                insert into {self._audit_events_table} (event_id, user_id, event_type, details, created_at)
                select %s, %s, %s, parse_json(%s), current_timestamp()
                """,
                (str(uuid.uuid4()), user_id, event_type, json.dumps(details)),
            )

    def get_audit_events(self, *, user_id: str, limit: int = 100) -> list[dict[str, Any]]:
        with self._cursor() as cur:
            cur.execute(
                f"""
                select event_id, user_id, event_type, details, created_at
                from {self._audit_events_table}
                where user_id = %s
                order by created_at desc
                limit %s
                """,
                (user_id, limit),
            )
            rows = cur.fetchall()
        events: list[dict[str, Any]] = []
        for row in rows:
            details_raw = row.get("DETAILS")
            details = json.loads(details_raw) if isinstance(details_raw, str) else details_raw
            events.append(
                {
                    "id": row["EVENT_ID"],
                    "user_id": row["USER_ID"],
                    "event_type": row["EVENT_TYPE"],
                    "details": details or {},
                    "created_at": str(row["CREATED_AT"]),
                }
            )
        return events

    def get_profile(self, *, user_id: str) -> ProfileRecord | None:
        with self._cursor() as cur:
            cur.execute(
                "select user_id, display_name, locale, experience_level from profiles where user_id = %s limit 1",
                (user_id,),
            )
            row = cur.fetchone()
        if not row:
            return None
        return ProfileRecord(
            user_id=row["USER_ID"],
            display_name=row.get("DISPLAY_NAME") or "Practitioner",
            locale=row.get("LOCALE"),
            experience_level=row.get("EXPERIENCE_LEVEL"),
        )

    def upsert_profile(
        self,
        *,
        user_id: str,
        display_name: str | None = None,
        locale: str | None = None,
        experience_level: str | None = None,
    ) -> ProfileRecord:
        current = self.get_profile(user_id=user_id)
        next_name = (display_name.strip() if display_name else (current.display_name if current else "Practitioner"))
        next_locale = locale if locale is not None else (current.locale if current else None)
        next_exp = experience_level if experience_level is not None else (current.experience_level if current else None)

        with self._cursor() as cur:
            cur.execute(
                """
                merge into profiles t
                using (select %s as user_id, %s as display_name, %s as locale, %s as experience_level) s
                on t.user_id = s.user_id
                when matched then update set
                    display_name = s.display_name,
                    locale = s.locale,
                    experience_level = s.experience_level,
                    updated_at = current_timestamp()
                when not matched then insert (user_id, display_name, locale, experience_level, updated_at)
                    values (s.user_id, s.display_name, s.locale, s.experience_level, current_timestamp())
                """,
                (user_id, next_name, next_locale, next_exp),
            )
        return ProfileRecord(user_id=user_id, display_name=next_name, locale=next_locale, experience_level=next_exp)

    def save_onboarding_answers(self, *, user_id: str, answers: dict[str, Any]) -> None:
        with self._cursor() as cur:
            cur.execute(
                """
                merge into onboarding_answers t
                using (select %s as user_id, parse_json(%s) as answers) s
                on t.user_id = s.user_id
                when matched then update set answers = s.answers, updated_at = current_timestamp()
                when not matched then insert (user_id, answers, updated_at)
                    values (s.user_id, s.answers, current_timestamp())
                """,
                (user_id, json.dumps(answers)),
            )

    def save_calibration(self, *, user_id: str, calibration: dict[str, Any]) -> None:
        with self._cursor() as cur:
            cur.execute(
                """
                merge into calibrations t
                using (select %s as user_id, parse_json(%s) as calibration) s
                on t.user_id = s.user_id
                when matched then update set calibration = s.calibration, updated_at = current_timestamp()
                when not matched then insert (user_id, calibration, updated_at)
                    values (s.user_id, s.calibration, current_timestamp())
                """,
                (user_id, json.dumps(calibration)),
            )

    def create_practice_session(self, *, user_id: str, sequence_id: str, started_at_epoch: int) -> PracticeSessionRecord:
        practice_session_id = str(uuid.uuid4())
        with self._cursor() as cur:
            cur.execute(
                """
                insert into practice_sessions (
                    practice_session_id, user_id, sequence_id, started_at_epoch,
                    completed_at_epoch, status, summary_text, summary_speech
                ) values (%s, %s, %s, %s, null, 'in_progress', '', '')
                """,
                (practice_session_id, user_id, sequence_id, started_at_epoch),
            )
        return PracticeSessionRecord(
            practice_session_id=practice_session_id,
            user_id=user_id,
            sequence_id=sequence_id,
            started_at_epoch=started_at_epoch,
        )

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
        attempt_id = str(uuid.uuid4())
        with self._cursor() as cur:
            cur.execute(
                """
                insert into pose_attempts (
                    attempt_id, practice_session_id, pose_index, expected_pose_name,
                    detected_pose_name, error_descriptions, confidence, latency_ms, created_at_epoch
                ) select %s, %s, %s, %s, %s, parse_json(%s), %s, %s, %s
                """,
                (
                    attempt_id,
                    practice_session_id,
                    pose_index,
                    expected_pose_name,
                    detected_pose_name,
                    json.dumps(error_descriptions),
                    confidence,
                    latency_ms,
                    created_at_epoch,
                ),
            )
        return PoseAttemptRecord(
            attempt_id=attempt_id,
            practice_session_id=practice_session_id,
            pose_index=pose_index,
            expected_pose_name=expected_pose_name,
            detected_pose_name=detected_pose_name,
            error_descriptions=error_descriptions,
            confidence=confidence,
            latency_ms=latency_ms,
            created_at_epoch=created_at_epoch,
        )

    def complete_practice_session(
        self,
        *,
        practice_session_id: str,
        completed_at_epoch: int,
        summary_text: str,
        summary_speech: str,
    ) -> PracticeSessionRecord | None:
        with self._cursor() as cur:
            cur.execute(
                """
                update practice_sessions
                set completed_at_epoch = %s,
                    status = 'completed',
                    summary_text = %s,
                    summary_speech = %s
                where practice_session_id = %s
                """,
                (completed_at_epoch, summary_text, summary_speech, practice_session_id),
            )
        payload = self.get_practice_session(practice_session_id)
        if not payload:
            return None
        ps = payload["practiceSession"]
        return PracticeSessionRecord(
            practice_session_id=ps["id"],
            user_id=ps["userId"],
            sequence_id=ps["sequenceId"],
            started_at_epoch=ps["startedAtEpoch"],
            completed_at_epoch=ps["completedAtEpoch"],
            status=ps["status"],
            summary_text=ps["summaryText"],
            summary_speech=ps["summarySpeech"],
        )

    def get_practice_session(self, practice_session_id: str) -> dict[str, Any] | None:
        with self._cursor() as cur:
            cur.execute(
                "select * from practice_sessions where practice_session_id = %s limit 1",
                (practice_session_id,),
            )
            session_row = cur.fetchone()
            if not session_row:
                return None
            cur.execute(
                """
                select * from pose_attempts
                where practice_session_id = %s
                order by pose_index asc, created_at_epoch asc
                """,
                (practice_session_id,),
            )
            attempts = cur.fetchall()

        pose_attempts: list[dict[str, Any]] = []
        for row in attempts:
            raw = row.get("ERROR_DESCRIPTIONS")
            errors = json.loads(raw) if isinstance(raw, str) else (raw or [])
            pose_attempts.append(
                {
                    "id": row["ATTEMPT_ID"],
                    "poseIndex": int(row["POSE_INDEX"]),
                    "expectedPoseName": row["EXPECTED_POSE_NAME"],
                    "detectedPoseName": row["DETECTED_POSE_NAME"],
                    "errorDescriptions": errors,
                    "confidence": float(row["CONFIDENCE"]),
                    "latencyMs": int(row["LATENCY_MS"]),
                    "createdAtEpoch": int(row["CREATED_AT_EPOCH"]),
                }
            )

        return {
            "practiceSession": {
                "id": session_row["PRACTICE_SESSION_ID"],
                "userId": session_row["USER_ID"],
                "sequenceId": session_row["SEQUENCE_ID"],
                "status": session_row["STATUS"],
                "startedAtEpoch": int(session_row["STARTED_AT_EPOCH"]),
                "completedAtEpoch": int(session_row["COMPLETED_AT_EPOCH"]) if session_row.get("COMPLETED_AT_EPOCH") is not None else None,
                "summaryText": session_row.get("SUMMARY_TEXT") or "",
                "summarySpeech": session_row.get("SUMMARY_SPEECH") or "",
            },
            "poseAttempts": pose_attempts,
        }

    def get_recent_pose_explanations(self, *, user_id: str, limit: int = 10) -> list[str]:
        with self._cursor() as cur:
            cur.execute(
                """
                select p.error_descriptions
                from pose_attempts p
                join practice_sessions s on s.practice_session_id = p.practice_session_id
                where s.user_id = %s
                order by p.created_at_epoch desc
                limit %s
                """,
                (user_id, max(limit, 1)),
            )
            rows = cur.fetchall()

        explanations: list[str] = []
        for row in rows:
            raw = row.get("ERROR_DESCRIPTIONS")
            errors = json.loads(raw) if isinstance(raw, str) else (raw or [])
            for error in errors:
                if isinstance(error, str):
                    explanations.append(error)
        return explanations[:limit]

    def get_user_progress(self, *, user_id: str) -> dict[str, Any]:
        with self._cursor() as cur:
            cur.execute(
                """
                select count(*) as total_sessions,
                       count_if(status = 'completed') as completed_sessions
                from practice_sessions
                where user_id = %s
                """,
                (user_id,),
            )
            row = cur.fetchone() or {"TOTAL_SESSIONS": 0, "COMPLETED_SESSIONS": 0}
            cur.execute(
                """
                select count(*) as attempts
                from pose_attempts p
                join practice_sessions s on s.practice_session_id = p.practice_session_id
                where s.user_id = %s
                """,
                (user_id,),
            )
            attempts_row = cur.fetchone() or {"ATTEMPTS": 0}

        total_sessions = int(row["TOTAL_SESSIONS"] or 0)
        completed_sessions = int(row["COMPLETED_SESSIONS"] or 0)
        attempts = int(attempts_row["ATTEMPTS"] or 0)
        readiness = min(100, completed_sessions * 10 + attempts)
        return {
            "totalSessions": total_sessions,
            "completedSessions": completed_sessions,
            "currentStreakDays": min(30, completed_sessions),
            "readinessScore": readiness,
        }

