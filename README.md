# Virtual Exercise Coach

Next.js frontend + Flask backend for Tai Chi pose analysis, AI feedback, and image generation.

## Requirements

- Node.js 20+
- Python 3.11+ (tested with 3.13)

## Install

1. Install frontend dependencies:
   `npm install`
2. Install backend dependencies:
   `pip install -r backend/requirements.txt`
3. Create root `.env` (for Next server actions) from `.env.example`.
4. Create `backend/.env` from `backend/.env.example`.

## Environment Variables

### Root `.env` (Next.js)

- `FLASK_API_BASE_URL=http://localhost:5001`
- `NEXT_PUBLIC_FLASK_API_BASE_URL=http://localhost:5001`

### `backend/.env` (Flask)

- `FLASK_API_HOST=127.0.0.1`
- `FLASK_API_PORT=5001`
- `FLASK_API_DEBUG=true`
- `VEC_API_BASE_URL=https://vec-api-9cvw.onrender.com`
- `GEMINI_API_KEY=...`
- `GEMINI_TEXT_MODEL=gemini-2.5-flash`
- `GEMINI_IMAGE_MODEL=gemini-2.5-flash-image`
- `ELEVENLABS_API_KEY=...`
- `ELEVENLABS_VOICE_ID=...`
- `DATASTORE_BACKEND=memory` (or `snowflake`)
- Snowflake settings when using Snowflake:
  - `SNOWFLAKE_ACCOUNT=...`
  - `SNOWFLAKE_USER=...`
  - `SNOWFLAKE_PASSWORD=...`
  - `SNOWFLAKE_WAREHOUSE=...`
  - `SNOWFLAKE_DATABASE=...`
  - `SNOWFLAKE_SCHEMA=APP_CORE`

## Run

Start Flask backend:

```bash
npm run backend:dev
```

Start Next frontend:

```bash
npm run dev
```

App URLs:

- Frontend: `http://localhost:9002`
- Backend health: `http://localhost:5001/api/v1/health`
- Backend v2 health (shows active datastore): `http://localhost:5001/api/v2/health`

## Snowflake Setup

Run the bootstrap SQL from:

- `backend/sql/snowflake_schema.sql`

Then set `DATASTORE_BACKEND=snowflake` in `backend/.env` and restart the backend.

## Backend API

- `GET /api/v1/health`
- `GET /api/v1/ai/ping`
- `POST /api/v1/analysis/predict-csv`
- `POST /api/v1/feedback/details`
- `POST /api/v1/feedback/personalized`
- `POST /api/v1/feedback/summary`
- `POST /api/v1/media/generate-image`

## Tests

Run backend tests:

```bash
npm run backend:test
```
