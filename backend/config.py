from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class SecurityConfig:
    session_cookie_name: str = os.getenv("SESSION_COOKIE_NAME", "sid")
    csrf_cookie_name: str = os.getenv("CSRF_COOKIE_NAME", "csrf_token")
    session_ttl_seconds: int = int(os.getenv("SESSION_TTL_SECONDS", "1209600"))
    refresh_ttl_seconds: int = int(os.getenv("REFRESH_TTL_SECONDS", "2592000"))
    password_reset_ttl_seconds: int = int(os.getenv("PASSWORD_RESET_TTL_SECONDS", "1800"))
    email_verify_ttl_seconds: int = int(os.getenv("EMAIL_VERIFY_TTL_SECONDS", "86400"))
    secure_cookies: bool = os.getenv("SECURE_COOKIES", "false").lower() in {"1", "true", "yes", "on"}
    cookie_domain: str | None = os.getenv("COOKIE_DOMAIN") or None
    cookie_path: str = os.getenv("COOKIE_PATH", "/")
    csrf_header_name: str = os.getenv("CSRF_HEADER_NAME", "X-CSRF-Token")
    allowed_origin: str | None = os.getenv("ALLOWED_ORIGIN") or None


@dataclass(frozen=True)
class AppConfig:
    datastore_backend: str = os.getenv("DATASTORE_BACKEND", "memory").lower()
    snowflake_account: str = os.getenv("SNOWFLAKE_ACCOUNT", "")
    snowflake_user: str = os.getenv("SNOWFLAKE_USER", "")
    snowflake_password: str = os.getenv("SNOWFLAKE_PASSWORD", "")
    snowflake_warehouse: str = os.getenv("SNOWFLAKE_WAREHOUSE", "")
    snowflake_database: str = os.getenv("SNOWFLAKE_DATABASE", "")
    snowflake_schema: str = os.getenv("SNOWFLAKE_SCHEMA", "APP_CORE")
    rate_limit_per_minute: int = int(os.getenv("RATE_LIMIT_PER_MINUTE", "120"))
    write_rate_limit_per_minute: int = int(os.getenv("WRITE_RATE_LIMIT_PER_MINUTE", "60"))


SECURITY_CONFIG = SecurityConfig()
APP_CONFIG = AppConfig()
