import { backendFetch, type ApiEnvelope } from '@/lib/backend-client';

export type AuthUser = {
  id: string;
  email: string;
  displayName: string;
  isVerified: boolean;
  isAdmin?: boolean;
  locale?: string | null;
  experienceLevel?: string | null;
};

type AuthData = { user: AuthUser };

export async function registerUser(input: {
  fullName: string;
  email: string;
  password: string;
}): Promise<AuthUser> {
  const response = await backendFetch<ApiEnvelope<AuthData>>('/api/v2/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      fullName: input.fullName,
      email: input.email,
      password: input.password,
    }),
  });
  return response.data.user;
}

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<AuthUser> {
  const response = await backendFetch<ApiEnvelope<AuthData>>('/api/v2/auth/login', {
    method: 'POST',
    body: JSON.stringify(input),
  });
  return response.data.user;
}

export async function logoutUser(): Promise<void> {
  await backendFetch<ApiEnvelope<{ loggedOut: boolean }>>('/api/v2/auth/logout', {
    method: 'POST',
  }, { withCsrf: true });
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const response = await backendFetch<ApiEnvelope<AuthData>>('/api/v2/auth/me', {
      method: 'GET',
    });
    return response.data.user;
  } catch {
    return null;
  }
}

export async function saveOnboarding(answers: Record<string, unknown>): Promise<void> {
  await backendFetch<ApiEnvelope<{ saved: boolean }>>(
    '/api/v2/users/onboarding',
    {
      method: 'POST',
      body: JSON.stringify({ answers }),
    },
    { withCsrf: true }
  );
}

export async function saveCalibration(calibration: Record<string, unknown>): Promise<void> {
  await backendFetch<ApiEnvelope<{ saved: boolean }>>(
    '/api/v2/users/calibration',
    {
      method: 'POST',
      body: JSON.stringify({ calibration }),
    },
    { withCsrf: true }
  );
}

export async function createPracticeSession(sequenceId: string): Promise<string> {
  const response = await backendFetch<
    ApiEnvelope<{ practiceSession: { id: string } }>
  >(
    '/api/v2/practice/sessions',
    {
      method: 'POST',
      body: JSON.stringify({ sequenceId }),
    },
    { withCsrf: true }
  );
  return response.data.practiceSession.id;
}

export async function addPoseAttempt(
  practiceSessionId: string,
  payload: {
    poseIndex: number;
    expectedPoseName: string;
    detectedPoseName: string;
    errorDescriptions: string[];
    confidence: number;
    latencyMs: number;
  }
): Promise<void> {
  await backendFetch<ApiEnvelope<{ poseAttempt: { id: string } }>>(
    `/api/v2/practice/sessions/${practiceSessionId}/poses`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
    { withCsrf: true }
  );
}

export async function completePracticeSession(
  practiceSessionId: string,
  feedbackItems: string[]
): Promise<{ summaryText: string; summarySpeech: string; status: string }> {
  const response = await backendFetch<
    ApiEnvelope<{
      practiceSession: {
        id: string;
        status: string;
        summaryText: string;
        summarySpeech: string;
      };
    }>
  >(
    `/api/v2/practice/sessions/${practiceSessionId}/complete`,
    {
      method: 'POST',
      body: JSON.stringify({ feedbackItems }),
    },
    { withCsrf: true }
  );
  return response.data.practiceSession;
}
