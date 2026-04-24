# Backend v2 Overview

This backend now supports both legacy `v1` routes and a production-style `v2` API.

## v2 domains
- Auth: `/api/v2/auth/*`
- Users: `/api/v2/users/*`
- Practice: `/api/v2/practice/*`
- Coach: `/api/v2/coach/*`
- Admin: `/api/v2/admin/*`

## Security model
- Opaque server-side session cookie: `sid` (`HttpOnly`, `SameSite=Lax`, optional `Secure`).
- CSRF token cookie: `csrf_token` + required `X-CSRF-Token` header for mutating authenticated endpoints.
- Password hashing uses Argon2id when available (`argon2-cffi`), with PBKDF2 fallback for local development only.

## Datastore model
- `DATASTORE_BACKEND=memory` for local and tests.
- `DATASTORE_BACKEND=snowflake` attempts to initialize Snowflake adapter and falls back to memory if unavailable.
- Snowflake bootstrap SQL is in `backend/sql/snowflake_schema.sql`.

## Worker model
- Celery app scaffold at `backend/services/workers/celery_app.py` with Redis broker/backend.

## Response envelope (v2)
All write/read responses use:

```json
{
  "requestId": "...",
  "status": "ok",
  "data": {},
  "errors": []
}
```

Legacy `v1` response shapes are intentionally unchanged.
