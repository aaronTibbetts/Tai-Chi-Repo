export const AUTH_STORAGE_KEYS = {
  loggedIn: 'isLoggedIn',
  onboardingComplete: 'taiChiOnboardingComplete',
  userEmail: 'taiChiUserEmail',
} as const;

export function readOnboardingComplete(): boolean {
  try {
    return localStorage.getItem(AUTH_STORAGE_KEYS.onboardingComplete) === 'true';
  } catch {
    return false;
  }
}

export function setOnboardingComplete(value: boolean) {
  try {
    if (value) localStorage.setItem(AUTH_STORAGE_KEYS.onboardingComplete, 'true');
    else localStorage.removeItem(AUTH_STORAGE_KEYS.onboardingComplete);
  } catch {
    /* ignore */
  }
}
