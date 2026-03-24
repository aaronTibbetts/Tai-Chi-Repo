from __future__ import annotations

from pydantic import BaseModel, Field


class CsvJsonRequest(BaseModel):
    csvData: str = Field(min_length=1)


class FeedbackDetailsRequest(BaseModel):
    poseName: str = Field(min_length=1)
    speechText: str = Field(min_length=1)


class AnalysisFeedbackModel(BaseModel):
    poseName: str = Field(min_length=1)
    speechText: str = Field(min_length=1)
    explanation: str | None = None


class PersonalizedFeedbackRequest(BaseModel):
    expectedPoseName: str = Field(min_length=1)
    analysisFeedback: AnalysisFeedbackModel
    previousFeedback: str | None = None


class SummaryRequest(BaseModel):
    feedbackItems: list[str] = Field(default_factory=list)


class ImageRequest(BaseModel):
    prompt: str = Field(min_length=1)
