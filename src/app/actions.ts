'use server';

import type { FeedbackDetails } from '@/lib/gesture-errors';

const BACKEND_BASE_URL =
  process.env.FLASK_API_BASE_URL?.trim() || 'http://127.0.0.1:5001';

const DEFAULT_TIMEOUT_MS = 60_000;
const ANALYSIS_TIMEOUT_MS = 120_000;

type BackendErrorPayload = {
  error?: string;
  code?: string;
  details?: unknown;
};

type BackendFeedbackResponse = {
  feedbacks: Feedback[];
};

type BackendFeedbackDetailsResponse = {
  gestureName: string;
  errorDescriptions: string[];
};

type BackendPersonalizedResponse = {
  aiFeedback: PersonalizedTaiChiFeedbackOutput;
  translationDetails: {
    gestureName: string;
    errorDescriptions: string[];
  };
};

type BackendSummaryResponse = SummarizeFeedbackOutput;
type BackendImageResponse = GenerateImageOutput;
type BackendPingResponse = { message: string };

export type PersonalizedTaiChiFeedbackOutput = {
  speech: string;
  explanation: string;
};

export type SummarizeFeedbackOutput = {
  summarySpeech: string;
  summaryText: string;
};

export type GenerateImageOutput = {
  imageUrl: string;
};

export type AiFeedbackResult =
  | {
      aiFeedback: PersonalizedTaiChiFeedbackOutput;
      translationDetails: {
        gestureName: string;
        errorDescriptions: string[];
      };
    }
  | { error: string };

export type Feedback = {
  poseName: string;
  speechText: string;
  explanation: string;
};

export type AnalysisResult = { feedbacks: Feedback[] } | { error: string };
export type GenerateImageResult = GenerateImageOutput | { error: string };

function buildBackendUrl(path: string): string {
  const base = BACKEND_BASE_URL.endsWith('/')
    ? BACKEND_BASE_URL.slice(0, -1)
    : BACKEND_BASE_URL;
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}

function formatBackendError(status: number, payload: BackendErrorPayload): string {
  const errorMessage = payload.error?.trim() || `Request failed with status ${status}.`;
  const details =
    typeof payload.details === 'string'
      ? payload.details.trim()
      : payload.details
        ? JSON.stringify(payload.details)
        : '';
  return details ? `${errorMessage} Details: ${details}` : errorMessage;
}

async function callBackend<T>(
  path: string,
  init: RequestInit,
  timeoutMs = DEFAULT_TIMEOUT_MS
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(buildBackendUrl(path), {
      ...init,
      cache: 'no-store',
      signal: controller.signal,
    });

    const text = await response.text();
    let payload: any = {};
    if (text) {
      try {
        payload = JSON.parse(text);
      } catch {
        payload = {};
      }
    }

    if (!response.ok) {
      throw new Error(formatBackendError(response.status, payload));
    }

    return payload as T;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timed out after ${Math.round(timeoutMs / 1000)} seconds.`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export async function getPoseAnalysisFromCsv(csvData: string): Promise<AnalysisResult> {
  try {
    if (!csvData) {
      return { error: 'CSV data is empty.' };
    }

    const result = await callBackend<BackendFeedbackResponse>(
      '/api/v1/analysis/predict-csv',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ csvData }),
      },
      ANALYSIS_TIMEOUT_MS
    );

    if (result && Array.isArray(result.feedbacks)) {
      return { feedbacks: result.feedbacks };
    }

    return { error: 'Analysis successful, but feedback data is missing from the response.' };
  } catch (error) {
    console.error('Error getting pose analysis:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { error: `Failed to get analysis. Details: ${errorMessage}` };
  }
}

export async function getFeedbackDetailsAction(
  poseName: string,
  speechText: string
): Promise<FeedbackDetails> {
  const result = await callBackend<BackendFeedbackDetailsResponse>(
    '/api/v1/feedback/details',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ poseName, speechText }),
    }
  );
  return {
    gestureName: result.gestureName,
    errorDescriptions: result.errorDescriptions,
  };
}

export async function getAiFeedbackForAnalysis(
  expectedPoseName: string,
  analysisFeedback: Feedback,
  previousFeedback?: string
): Promise<AiFeedbackResult> {
  try {
    if (!analysisFeedback) {
      return { error: 'No analysis feedback provided.' };
    }

    const result = await callBackend<BackendPersonalizedResponse>(
      '/api/v1/feedback/personalized',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expectedPoseName,
          analysisFeedback,
          previousFeedback,
        }),
      }
    );

    return {
      aiFeedback: result.aiFeedback,
      translationDetails: result.translationDetails,
    };
  } catch (error) {
    console.error('Error getting AI feedback:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { error: `Failed to get feedback from AI coach. Details: ${errorMessage}` };
  }
}

export async function getFinalSummaryAction(
  feedbackItems: string[]
): Promise<SummarizeFeedbackOutput | { error: string }> {
  try {
    const result = await callBackend<BackendSummaryResponse>('/api/v1/feedback/summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ feedbackItems }),
    });
    return result;
  } catch (error) {
    console.error('Error getting final summary:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { error: `Failed to get final summary from AI coach. Details: ${errorMessage}` };
  }
}

export async function testGemini(): Promise<string> {
  try {
    const result = await callBackend<BackendPingResponse>('/api/v1/ai/ping', {
      method: 'GET',
    });
    return result.message || 'Connection successful.';
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred.';
    return `Error: ${message}`;
  }
}

export async function generateImageAction(prompt: string): Promise<GenerateImageResult> {
  if (!prompt) {
    return { error: 'Prompt cannot be empty.' };
  }

  try {
    const result = await callBackend<BackendImageResponse>('/api/v1/media/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    return result;
  } catch (error) {
    console.error('Error generating image:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { error: `Failed to generate image. Details: ${errorMessage}` };
  }
}
