import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_COOKIE, safeNext } from '@/lib/access';

// Ends the current pass and sends the visitor back to the password page.
export function GET(req: NextRequest) {
  const next = safeNext(req.nextUrl.searchParams.get('next'));
  const url = new URL('/unlock/', req.url);
  url.searchParams.set('next', next);
  const res = NextResponse.redirect(url, 303);
  res.cookies.set(ACCESS_COOKIE, '', { path: '/', maxAge: 0 });
  return res;
}
