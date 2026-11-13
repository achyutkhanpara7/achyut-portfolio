'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import s from './story.module.css';

// Sticky chapter rail for the whole case study. The current chapter is the last one
// whose top has passed a line a third of the way down the screen; the track fills
// with reading progress through the article.
export default function Rail({
  sections,
  name,
  logo,
  meta,
}: {
  sections: { id: string; label: string }[];
  name: string;
  logo: string;
  meta: string;
}) {
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
        const p = (window.scrollY - start) / Math.max(1, end - start);
        setProgress(Math.min(1, Math.max(0, p)));
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
      <div className={s.railInner}>
        <Link href="/work/" className={s.goBack}>
          <span aria-hidden>←</span> All work
        </Link>
        <div className={s.railCard}>
          <div className={s.railHead}>
            <span className={s.railLogo} aria-hidden>
              {logo}
            </span>
            <div>
              <b>{name}</b>
              <small>
                {meta} · {sections.length} chapters
              </small>
            </div>
          </div>
          <nav aria-label="Chapters">
            <ol className={s.railList} style={{ ['--p' as string]: progress }}>
              {sections.map((x, i) => (
                <li key={x.id} className={i === active ? s.railOn : i < active ? s.railDone : ''}>
                  <a href={`#${x.id}`} aria-current={i === active ? 'location' : undefined}>
                    {/* numbers match the section kickers: Overview is unnumbered, the story starts at 01 */}
                    <i aria-hidden={sections[0]?.id === 'overview' && i === 0 ? true : undefined}>
                      {sections[0]?.id === 'overview' ? (i === 0 ? '•' : String(i).padStart(2, '0')) : String(i + 1).padStart(2, '0')}
                    </i>
                    <span>{x.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className={s.railPct}>{Math.round(progress * 100)}% read</p>
        </div>
      </div>
    </aside>
  );
}
