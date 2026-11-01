import { NextResponse, type NextRequest } from 'next/server';
import { lockedSlugs } from '@/content/work';
import { ACCESS_COOKIE, accessToken } from '@/lib/access';

// Password gate for NDA case studies. The page is never sent until the
// visitor has the access cookie. Set PORTFOLIO_PASSWORD in Vercel →
// Settings → Environment Variables (and in .env.local for local dev).
export async function middleware(req: NextRequest) {
  const slug = req.nextUrl.pathname.split('/').filter(Boolean)[1];
  if (!slug || !lockedSlugs.includes(slug)) return NextResponse.next();

  const password = process.env.PORTFOLIO_PASSWORD;
  const cookie = req.cookies.get(ACCESS_COOKIE)?.value;
  if (password && cookie && cookie === (await accessToken(password))) {
    const res = NextResponse.next();
    res.headers.set('X-Robots-Tag', 'noindex');
    return res;
  }

  const url = req.nextUrl.clone();
  url.pathname = '/unlock/';
  url.search = '';
  url.searchParams.set('next', `/work/${slug}/`);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/work/:slug*'],
};
