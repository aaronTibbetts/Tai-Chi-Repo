from __future__ import annotations

from flask import Flask

from ...config import APP_CONFIG
from .base import AppDataStore
from .in_memory import InMemoryDataStore


def create_datastore(app: Flask) -> AppDataStore:
    backend = APP_CONFIG.datastore_backend

    if backend == "snowflake":
        try:
            from .snowflake import SnowflakeDataStore

            return SnowflakeDataStore()
        except Exception as exc:  # noqa: BLE001
            app.logger.warning("Snowflake datastore unavailable; falling back to in-memory store. reason=%s", exc)

    return InMemoryDataStore()
