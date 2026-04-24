from __future__ import annotations

from pydantic import AliasChoices, BaseModel, Field, field_validator


class RegisterRequest(BaseModel):
    email: str
    password: str = Field(min_length=10, max_length=128)
    fullName: str = Field(
        min_length=1,
        max_length=120,
        validation_alias=AliasChoices("fullName", "displayName", "full_name", "name"),
    )

    @field_validator("email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        normalized = value.strip().lower()
        if "@" not in normalized or "." not in normalized.split("@")[-1]:
            raise ValueError("invalid_email")
        return normalized

    @field_validator("fullName")
    @classmethod
    def validate_full_name(cls, value: str) -> str:
        normalized = value.strip()
        if not normalized:
            raise ValueError("invalid_full_name")
        return normalized


class LoginRequest(BaseModel):
    email: str
    password: str = Field(min_length=1, max_length=128)

    @field_validator("email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        normalized = value.strip().lower()
        if "@" not in normalized or "." not in normalized.split("@")[-1]:
            raise ValueError("invalid_email")
        return normalized


class ForgotPasswordRequest(BaseModel):
    email: str

    @field_validator("email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        normalized = value.strip().lower()
        if "@" not in normalized or "." not in normalized.split("@")[-1]:
            raise ValueError("invalid_email")
        return normalized


class ResetPasswordRequest(BaseModel):
    token: str = Field(min_length=8)
    newPassword: str = Field(min_length=10, max_length=128)


class VerifyEmailRequest(BaseModel):
    token: str = Field(min_length=8)


class UpdateProfileRequest(BaseModel):
    displayName: str | None = Field(default=None, max_length=120)
    locale: str | None = Field(default=None, max_length=20)
    experienceLevel: str | None = Field(default=None, max_length=40)


class CreatePracticeSessionRequest(BaseModel):
    sequenceId: str = Field(min_length=1, max_length=80)


class PoseAttemptRequest(BaseModel):
    poseIndex: int = Field(ge=0)
    expectedPoseName: str = Field(min_length=1)
    detectedPoseName: str = Field(min_length=1)
    errorDescriptions: list[str] = Field(default_factory=list)
    confidence: float = Field(ge=0.0, le=1.0)
    latencyMs: int = Field(ge=0)


class CompletePracticeSessionRequest(BaseModel):
    feedbackItems: list[str] = Field(default_factory=list)


class SaveOnboardingRequest(BaseModel):
    answers: dict


class SaveCalibrationRequest(BaseModel):
    calibration: dict


class CoachPersonalizedRequest(BaseModel):
    expectedPoseName: str = Field(min_length=1)
    analysisFeedback: dict


class CoachSummaryRequest(BaseModel):
    feedbackItems: list[str] = Field(default_factory=list)
