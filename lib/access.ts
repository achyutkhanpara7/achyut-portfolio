// Shared by middleware and the unlock API route (both run on the edge/web runtime).
export const ACCESS_COOKIE = 'ak_access';
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** Token stored in the cookie: a hash of the password, never the password itself. */
export async function accessToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`${password}::ak-portfolio-v1`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** Only allow redirects back into locked case studies on this site. */
export function safeNext(next: string | null | undefined): string {
  if (next && /^\/work\/[a-z0-9-]+\/?$/.test(next)) return next.endsWith('/') ? next : `${next}/`;
  return '/work/';
}
