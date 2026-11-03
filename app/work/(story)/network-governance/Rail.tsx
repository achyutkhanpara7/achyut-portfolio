'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import s from './story.module.css';

// Sticky left rail: a Go back pill and the section list, with a dot on the section in view.
export default function Rail({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((x) => document.getElementById(x.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const seen = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (seen[0]) setActive(seen[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <aside className={s.rail}>
      <div className={s.railInner}>
        <Link href="/work/" className={s.goBack}>
          Go back
        </Link>
        <nav aria-label="On this page">
          <ol>
            {sections.map((x) => (
              <li key={x.id}>
                <a href={`#${x.id}`} className={active === x.id ? s.railOn : ''}>
                  {x.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
