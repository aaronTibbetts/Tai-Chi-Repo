export type ApiEnvelope<T> = {
  requestId: string;
  status: string;
  data: T;
  errors: Array<{ code?: string; message?: string }>;
};

const DEFAULT_BASE = 'http://localhost:5001';
function isLoopbackHost(host: string): boolean {
  return host === 'localhost' || host === '127.0.0.1';
}

function resolveBackendBaseUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_FLASK_API_BASE_URL?.trim() ||
    process.env.FLASK_API_BASE_URL?.trim() ||
    DEFAULT_BASE;

  // Keep loopback requests on the same host as the frontend so session cookies can round-trip.
  if (typeof window !== 'undefined') {
    try {
      const url = new URL(configured);
      const frontendHost = window.location.hostname;
      if (isLoopbackHost(url.hostname) && isLoopbackHost(frontendHost) && url.hostname !== frontendHost) {
        url.hostname = frontendHost;
      }
      return url.toString().replace(/\/$/, '');
    } catch {
      return configured;
    }
  }

  return configured;
}

export const CLIENT_BACKEND_BASE_URL = resolveBackendBaseUrl();

function buildUrl(path: string): string {
  const resolved = resolveBackendBaseUrl();
  const base = resolved.endsWith('/') ? resolved.slice(0, -1) : resolved;
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}

function readCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const encoded = encodeURIComponent(name);
  const parts = document.cookie.split(';').map((p) => p.trim());
  for (const part of parts) {
    if (!part.startsWith(`${encoded}=`)) continue;
    return decodeURIComponent(part.slice(encoded.length + 1));
  }
  return '';
}

function csrfHeader(): Record<string, string> {
  const token = readCookie('csrf_token');
  return token ? { 'X-CSRF-Token': token } : {};
}

export async function backendFetch<T>(
  path: string,
  init: RequestInit = {},
  options?: { withCsrf?: boolean }
): Promise<T> {
  const headers = new Headers(init.headers || {});
  if (!headers.has('Content-Type') && init.body) {
    headers.set('Content-Type', 'application/json');
  }

  if (options?.withCsrf) {
    for (const [k, v] of Object.entries(csrfHeader())) {
      headers.set(k, v);
    }
  }

  const res = await fetch(buildUrl(path), {
    ...init,
    headers,
    credentials: 'include',
    cache: 'no-store',
  });

  const text = await res.text();
  let payload: any = {};
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = {};
    }
  }

  if (!res.ok) {
    const errors = payload?.errors;
    const message =
      (Array.isArray(errors) && errors[0]?.message) ||
      payload?.error ||
      `Request failed (${res.status})`;
    throw new Error(String(message));
  }

  return payload as T;
}
