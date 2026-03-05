from __future__ import annotations

import os

from backend.app import create_app

app = create_app()


if __name__ == "__main__":
    host = os.getenv("FLASK_API_HOST", "127.0.0.1")
    port = int(os.getenv("FLASK_API_PORT", "5001"))
    debug = os.getenv("FLASK_API_DEBUG", "true").lower() in {"1", "true", "yes", "on"}
    app.run(host=host, port=port, debug=debug)
