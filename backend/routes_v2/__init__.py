from .admin import bp as admin_bp
from .auth import bp as auth_bp
from .coach import bp as coach_bp
from .practice import bp as practice_bp
from .system import bp as system_bp
from .users import bp as users_bp

__all__ = [
    "admin_bp",
    "auth_bp",
    "coach_bp",
    "practice_bp",
    "system_bp",
    "users_bp",
]
