'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { getCase } from '@/content/work';
import s from './case.module.css';

type Section = { id: string; label: string };

// Wraps every case study: reading-progress bar, sticky section rail with scroll-spy,
// and a "next project" card at the end.
export default function CaseShell({ children }: { children: React.ReactNode }) {
  const path = usePathname() ?? '';
  const slug = path.split('/').filter(Boolean)[1] ?? '';
  const { next } = getCase(slug);
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const heads = Array.from(document.querySelectorAll<HTMLHeadingElement>('article h2[id]'));
    setSections(heads.map((h) => ({ id: h.id, label: h.textContent ?? '' })));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [path]);

  return (
    <>
      <motion.div className={s.progress} style={{ scaleX: progress }} aria-hidden />
      <div className={`container ${s.shell}`}>
        <aside className={s.rail} aria-label="Sections">
          <ol>
            {sections.map((sec) => (
              <li key={sec.id}>
                <a href={`#${sec.id}`} className={active === sec.id ? s.railOn : ''}>
                  {sec.label}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article className={s.article}>{children}</article>
      </div>

      {next && next.slug !== slug && (
        <div className="container">
          <Link href={`/work/${next.slug}/`} className={`card-hover ${s.next}`}>
            <span className="eyebrow">Next project</span>
            <span className={s.nextTitle}>{next.title}</span>
            <span className={s.nextArrow} aria-hidden>→</span>
          </Link>
        </div>
      )}
    </>
  );
}
