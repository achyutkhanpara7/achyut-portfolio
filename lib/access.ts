// Shared by middleware and the unlock API route (both run on the edge/web runtime).
export const ACCESS_COOKIE = 'ak_access';
// Access is per visit: the cookie is a session cookie (gone when the browser closes) and it also
// expires 30 minutes after unlocking, so a returning visitor is asked for the password again.
export const ACCESS_TTL_MS = 30 * 60 * 1000;

async function sha256(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** Token stored in the cookie: a hash of the password, never the password itself. */
export function accessToken(password: string): Promise<string> {
  return sha256(`${password}::ak-portfolio-v1`);
}

// Temporary fallback until PORTFOLIO_PASSWORD is set in Vercel. This is a hash of the
// cookie token (not the token, not the password), so reading it here doesn't unlock anything.
// Once the env var is set it takes over and this is ignored.
const FALLBACK_VERIFIER = '9574c1245f8a1656c2ea167591bd20c29bf61c96f244418cd8bf3f6a95dbecb5';

/** Is this cookie value a valid access token? */
export async function isValidToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const pw = process.env.PORTFOLIO_PASSWORD;
  if (pw) return token === (await accessToken(pw));
  return (await sha256(token)) === FALLBACK_VERIFIER;
}

/** Cookie value: when access was granted, then the token. */
export function accessCookieValue(token: string): string {
  return `${Date.now()}.${token}`;
}

/** Is this cookie still a valid, unexpired pass? */
export async function hasAccess(cookie: string | undefined): Promise<boolean> {
  if (!cookie) return false;
  const dot = cookie.indexOf('.');
  if (dot < 1) return false;
  const at = Number(cookie.slice(0, dot));
  if (!Number.isFinite(at) || Date.now() - at > ACCESS_TTL_MS || at > Date.now() + 60_000) return false;
  return isValidToken(cookie.slice(dot + 1));
}

/** Check a typed password; returns the cookie token if it's right, otherwise null. */
export async function checkPassword(attempt: string): Promise<string | null> {
  const token = await accessToken(attempt.trim());
  return (await isValidToken(token)) ? token : null;
}

/** Only allow redirects back into locked case studies on this site. */
export function safeNext(next: string | null | undefined): string {
  if (next && /^\/work\/[a-z0-9-]+\/?$/.test(next)) return next.endsWith('/') ? next : `${next}/`;
  return '/work/';
}
