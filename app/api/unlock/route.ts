import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_COOKIE, accessCookieValue, checkPassword, safeNext } from '@/lib/access';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const attempt = String(form.get('password') ?? '');
  const next = safeNext(String(form.get('next') ?? ''));

  const back = (error: string) => {
    const url = new URL('/unlock/', req.url);
    url.searchParams.set('next', next);
    url.searchParams.set('error', error);
    return NextResponse.redirect(url, 303);
  };

  const token = await checkPassword(attempt);
  if (!token) return back('wrong');

  const res = NextResponse.redirect(new URL(next, req.url), 303);
  // No maxAge: a session cookie. The timestamp inside it also expires it after 30 minutes.
  res.cookies.set(ACCESS_COOKIE, accessCookieValue(token), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  return res;
}
