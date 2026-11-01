'use client';

import { useState } from 'react';
import s from './Footer.module.css';

const icons = {
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  in: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
  doc: <path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" />,
};

// A contact row: icon, label + value, and either a Copy or an Open button.
export default function CopyRow({
  label,
  value,
  href,
  icon,
  copy = false,
}: {
  label: string;
  value: string;
  href: string;
  icon: keyof typeof icons;
  copy?: boolean;
}) {
  const [done, setDone] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      window.location.href = href;
    }
  }

  return (
    <div className={s.row}>
      <span className={s.rowIcon} aria-hidden>
        <svg viewBox="0 0 24 24">{icons[icon]}</svg>
      </span>
      <a href={href} className={s.rowText} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        <span className={s.rowLabel}>{label}</span>
        <span className={s.rowValue}>{value}</span>
      </a>
      {copy ? (
        <button type="button" className={s.rowBtn} onClick={onCopy} aria-live="polite">
          {done ? 'Copied' : 'Copy'}
        </button>
      ) : (
        <a href={href} className={s.rowBtn} target="_blank" rel="noreferrer">
          Open ↗
        </a>
      )}
    </div>
  );
}
