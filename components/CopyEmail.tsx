'use client';

import { useState } from 'react';
import s from './Footer.module.css';

// The one emerald-glass key action on the page: click copies the email, with a mailto fallback.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy(e: React.MouseEvent) {
    try {
      await navigator.clipboard.writeText(email);
      e.preventDefault();
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* falls through to mailto */
    }
  }

  return (
    <a href={`mailto:${email}`} onClick={copy} className={`glass-emerald ${s.email}`} aria-live="polite">
      <span className={s.emailLabel}>{copied ? 'Copied to clipboard' : 'Say hi'}</span>
      <span className={s.emailAddr}>{email}</span>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {copied ? <path d="M5 12l5 5L20 7" /> : <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h9" /></>}
      </svg>
    </a>
  );
}
