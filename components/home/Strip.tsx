'use client';

import { useState } from 'react';
import s from './strip.module.css';

// One emerald ribbon right under the hero, read like a sentence in four parts:
// what I design · who for · what I build with · what I believe.
const groups: { label: string; items: string[] }[] = [
  { label: 'I design', items: ['Agentic AI experiences', 'Enterprise SaaS', 'Data-heavy dashboards', 'Design systems', '0→1 products'] },
  { label: 'For', items: ['Fortune 100 teams in banking, wealth, pharma & retail'] },
  { label: 'I build with', items: ['Figma', 'FigJam', 'Claude Code', 'React', 'Next.js', 'Tailwind', 'Storybook'] },
  { label: 'I believe', items: ['Pixels are cheap. Confusion is expensive.'] },
];

function Run({ hidden }: { hidden?: boolean }) {
  return (
    <li className={s.run} aria-hidden={hidden}>
      {groups.map((g) => (
        <span key={g.label} className={s.group}>
          <span className={s.label}>{g.label}</span>
          {g.items.map((it, i) => (
            <span key={it} className={s.item}>
              {it}
              {i < g.items.length - 1 && <i className={s.dot} aria-hidden />}
            </span>
          ))}
        </span>
      ))}
    </li>
  );
}

export default function Strip() {
  const [paused, setPaused] = useState(false);
  return (
    <div role="region" className={`${s.strip} ${paused ? s.paused : ''}`} aria-label="What I design, who for, and what I build with">
      <div className={s.band}>
        <ul className={s.track}>
          <Run />
          <Run hidden />
        </ul>
      </div>
      <button type="button" className={s.pause} onClick={() => setPaused((p) => !p)} aria-pressed={paused} aria-label={paused ? 'Play the scrolling ribbon' : 'Pause the scrolling ribbon'}>
        {paused ? (
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
            <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
            <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
