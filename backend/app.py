from __future__ import annotations

import logging
import os
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

from backend.errors import register_error_handlers
from backend.routes.analysis import bp as analysis_bp
from backend.routes.feedback import bp as feedback_bp
from backend.routes.health import bp as health_bp
from backend.routes.media import bp as media_bp
from backend.services.elevenlabs_service import ElevenLabsService
from backend.services.gemini_service import GeminiService
from backend.services.gesture_mapper import GestureMapper
from backend.services.vec_proxy import VecApiProxy


def _configure_logging() -> None:
    level_name = os.getenv("BACKEND_LOG_LEVEL", "INFO").upper()
    level = getattr(logging, level_name, logging.INFO)
    logging.basicConfig(
        level=level,
        format="%(asctime)s %(levelname)s [%(name)s] %(message)s",
    )


def create_app(*, testing: bool = False) -> Flask:
    root_dir = Path(__file__).resolve().parent
    load_dotenv(root_dir / ".env", override=False)
    _configure_logging()

    app = Flask(__name__)
    app.config["TESTING"] = testing
    app.url_map.strict_slashes = False

    CORS(app, resources={r"/api/*": {"origins": "*"}})

    gesture_csv_path = root_dir / "data" / "gesture_errors.csv"
    app.extensions["services"] = {
        "vec_proxy": VecApiProxy(),
        "gesture_mapper": GestureMapper(gesture_csv_path),
        "gemini": GeminiService(),
        "elevenlabs": ElevenLabsService(),
    }

    app.register_blueprint(health_bp)
    app.register_blueprint(analysis_bp)
    app.register_blueprint(feedback_bp)
    app.register_blueprint(media_bp)

    register_error_handlers(app)
    return app
