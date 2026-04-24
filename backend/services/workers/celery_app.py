from __future__ import annotations

import os

from celery import Celery


celery_app = Celery(
    "tai_chi_backend",
    broker=os.getenv("REDIS_URL", "redis://localhost:6379/0"),
    backend=os.getenv("REDIS_URL", "redis://localhost:6379/0"),
)


@celery_app.task(name="jobs.summary_regeneration")
def summary_regeneration_job(practice_session_id: str) -> dict[str, str]:
    # Placeholder task for async summary replay.
    return {"practiceSessionId": practice_session_id, "status": "queued"}
