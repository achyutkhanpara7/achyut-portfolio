import { NextResponse, type NextRequest } from 'next/server';
import { lockedSlugs } from '@/content/work';
import { ACCESS_COOKIE, hasAccess } from '@/lib/access';

// Password gate for protected case studies. Access lasts one visit (see lib/access.ts). The page is never sent until the
// visitor has the access cookie. Set PORTFOLIO_PASSWORD in Vercel →
// Settings → Environment Variables (and in .env.local for local dev).
export async function middleware(req: NextRequest) {
  const parts = req.nextUrl.pathname.split('/').filter(Boolean);
  const slug = parts[1];
  if (!slug || !lockedSlugs.includes(slug)) return NextResponse.next();
  const cookie = req.cookies.get(ACCESS_COOKIE)?.value;

  // Files under a locked study: the tile teasers (cover, preview clip and its poster) stay public;
  // every other screen and video needs the same access as the page.
  if (/\.[a-z0-9]+$/i.test(req.nextUrl.pathname)) {
    const file = parts.slice(2).join('/');
    if (/^(cover\.webp|preview\.mp4|preview-poster\.webp)$/.test(file)) return NextResponse.next();
    if (await hasAccess(cookie)) return NextResponse.next();
    return new NextResponse('Password required', { status: 401, headers: { 'Cache-Control': 'no-store' } });
  }

  if (await hasAccess(cookie)) {
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
