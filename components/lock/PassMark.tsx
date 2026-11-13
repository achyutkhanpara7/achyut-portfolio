'use client';

import { useEffect } from 'react';

export const PASS_KEY = 'ak-pass';

// On the password page: remember, for this browser tab only, that the password was just typed.
// The case-study guard (LockGuard) requires this mark, so closing the tab asks for the password again.
export default function PassMark() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>('form[action="/api/unlock/"]');
    if (!form) return;
    const mark = () => {
      try {
        sessionStorage.setItem(PASS_KEY, String(Date.now()));
      } catch {}
    };
    form.addEventListener('submit', mark);
    return () => form.removeEventListener('submit', mark);
  }, []);
  return null;
}
