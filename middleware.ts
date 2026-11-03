import { NextResponse, type NextRequest } from 'next/server';
import { lockedSlugs } from '@/content/work';
import { ACCESS_COOKIE, isValidToken } from '@/lib/access';

// Password gate for NDA case studies. The page is never sent until the
// visitor has the access cookie. Set PORTFOLIO_PASSWORD in Vercel →
// Settings → Environment Variables (and in .env.local for local dev).
export async function middleware(req: NextRequest) {
  // Only gate pages — cover images under /work/<slug>/ stay public (they're teasers).
  if (/\.[a-z0-9]+$/i.test(req.nextUrl.pathname)) return NextResponse.next();
  const slug = req.nextUrl.pathname.split('/').filter(Boolean)[1];
  if (!slug || !lockedSlugs.includes(slug)) return NextResponse.next();

  const cookie = req.cookies.get(ACCESS_COOKIE)?.value;
  if (await isValidToken(cookie)) {
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
