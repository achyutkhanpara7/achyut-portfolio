'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import s from './story.module.css';

const facts = [
  { k: 'Role', v: 'UX designer, end to end' },
  { k: 'Timeline', v: '12 weeks' },
  { k: 'Client', v: 'Fortune 100 bank' },
];

// A full-height panel pinned under the site nav, dressed like VERRDICT's own product
// sidebar. The current chapter is the last one whose top has passed a line a third of
// the way down the screen; the bar at the bottom fills with reading progress.
export default function Rail({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.34;
      let idx = 0;
      sections.forEach((x, i) => {
        const el = document.getElementById(x.id);
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      setActive(idx);
      const first = document.getElementById(sections[0].id);
      const last = document.getElementById(sections[sections.length - 1].id);
      if (first && last) {
        const start = first.getBoundingClientRect().top + window.scrollY - line;
        const end = last.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
        setProgress(Math.min(1, Math.max(0, (window.scrollY - start) / Math.max(1, end - start))));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sections]);

  return (
    <aside className={s.rail}>
      <div className={s.panel}>
        <Link href="/work/" className={s.goBack}>
          <span aria-hidden>←</span> All work
        </Link>

        <div className={s.panelHead}>
          <span className={s.panelLogo} aria-hidden>
            V
          </span>
          <div>
            <b>VERRDICT</b>
            <small>AI network governance</small>
          </div>
        </div>

        <dl className={s.facts}>
          {facts.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>

        <p className={s.panelLabel}>Chapters</p>
        <nav aria-label="Chapters" className={s.panelNav}>
          <ol>
            {sections.map((x, i) => (
              <li key={x.id} className={i === active ? s.navOn : i < active ? s.navDone : ''}>
                <a href={`#${x.id}`} aria-current={i === active ? 'location' : undefined}>
                  <i>{String(i + 1).padStart(2, '0')}</i>
                  <span>{x.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={s.panelFoot}>
          <div className={s.meter} aria-hidden>
            <i style={{ width: `${progress * 100}%` }} />
          </div>
          <p>
            <span>{Math.round(progress * 100)}% read</span>
            <span>
              {active + 1} / {sections.length}
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
}
