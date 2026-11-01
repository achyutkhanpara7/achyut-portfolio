import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_COOKIE, ACCESS_MAX_AGE, accessToken, safeNext } from '@/lib/access';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const attempt = String(form.get('password') ?? '');
  const next = safeNext(String(form.get('next') ?? ''));
  const password = process.env.PORTFOLIO_PASSWORD;

  const back = (error: string) => {
    const url = new URL('/unlock/', req.url);
    url.searchParams.set('next', next);
    url.searchParams.set('error', error);
    return NextResponse.redirect(url, 303);
  };

  if (!password) return back('config');
  if (attempt.trim() !== password) return back('wrong');

  const res = NextResponse.redirect(new URL(next, req.url), 303);
  res.cookies.set(ACCESS_COOKIE, await accessToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ACCESS_MAX_AGE,
  });
  return res;
}
