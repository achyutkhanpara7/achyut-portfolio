'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { lockedSlugs } from '@/content/work';
import { PASS_KEY } from './PassMark';

// Password-protected case studies ask again on every new visit: the server cookie alone isn't enough,
// this tab must also have typed the password (sessionStorage is cleared when the tab is closed).
// Until that's confirmed the page stays covered, so nothing flashes before the redirect.
export default function LockGuard() {
  const path = usePathname();
  const slug = path.split('/').filter(Boolean)[1] ?? '';
  const locked = lockedSlugs.includes(slug);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!locked) return;
    let pass = false;
    try {
      pass = !!sessionStorage.getItem(PASS_KEY);
    } catch {}
    if (pass) setOk(true);
    else window.location.replace(`/api/lock/?next=${encodeURIComponent(`/work/${slug}/`)}`);
  }, [locked, slug]);

  if (!locked || ok) return null;
  return <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--cream, #f4efe6)' }} />;
}
