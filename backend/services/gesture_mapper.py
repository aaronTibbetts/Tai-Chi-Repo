from __future__ import annotations

import csv
import re
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class GestureErrorRow:
    gesture_id: str
    gesture_name: str
    error_code: str
    error_desc: str


def normalize_pose_name(name: str) -> str:
    normalized = (name or "").strip().lower()
    normalized = normalized.replace("’", "'").replace("`", "'").replace("â€™", "'")
    normalized = re.sub(r"\s+", " ", normalized)
    return normalized


class GestureMapper:
    def __init__(self, csv_path: str | Path):
        self._rows: list[GestureErrorRow] = []
        self._rows_by_gesture: dict[str, list[GestureErrorRow]] = {}
        self._load_rows(csv_path)

    def _load_rows(self, csv_path: str | Path) -> None:
        path = Path(csv_path)
        with path.open("r", encoding="utf-8", newline="") as handle:
            reader = csv.DictReader(handle)
            for row in reader:
                item = GestureErrorRow(
                    gesture_id=(row.get("gesture_id") or "").strip(),
                    gesture_name=(row.get("gesture_name") or "").strip(),
                    error_code=(row.get("error_code") or "").strip(),
                    error_desc=(row.get("error_desc") or "").strip(),
                )
                self._rows.append(item)
                self._rows_by_gesture.setdefault(item.gesture_id, []).append(item)

    def get_feedback_details(self, pose_name: str, speech_text: str) -> dict[str, list[str] | str]:
        gesture_id = (pose_name or "").strip()
        speech = speech_text or ""

        rows_for_gesture = self._rows_by_gesture.get(gesture_id, [])
        gesture_name = rows_for_gesture[0].gesture_name if rows_for_gesture else "Unknown Gesture"

        matches = re.findall(r"errors?\s+(\d+(?:,\s*\d+)*)", speech, flags=re.IGNORECASE)
        error_numbers: list[int] = []
        for match in matches:
            for part in match.split(","):
                part = part.strip()
                if part.isdigit():
                    error_numbers.append(int(part))

        error_descriptions: list[str] = []
        for error_number in error_numbers:
            error_code = f"E{error_number:02d}"
            desc = next(
                (
                    row.error_desc
                    for row in rows_for_gesture
                    if row.error_code == error_code and row.error_desc != "No Error"
                ),
                None,
            )
            if desc:
                error_descriptions.append(desc)

        if (
            not error_descriptions
            and "great form" not in speech.lower()
            and "error" in speech.lower()
        ):
            error_descriptions.append(
                "Maintain focus and continue with smooth, deliberate movements."
            )

        return {"gestureName": gesture_name, "errorDescriptions": error_descriptions}
