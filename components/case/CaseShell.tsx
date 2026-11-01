'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { getCase, site } from '@/content/work';
import { CaseHero } from './index';
import LiquidButton from '../LiquidButton';
import s from './case.module.css';

type Section = { id: string; label: string };

// Wraps every case study: reading progress, "On this page" rail with scroll-spy,
// and a "Thanks for reading" sign-off with the next project.
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
      <CaseHero slug={slug} />
      <div className={`container ${s.shell}`}>
        <aside className={s.rail} aria-label="On this page">
          <p className={s.railTitle}>On this page</p>
          <ol>
            {sections.map((sec, i) => (
              <li key={sec.id}>
                <a href={`#${sec.id}`} className={active === sec.id ? s.railOn : ''}>
                  <em>{String(i + 1).padStart(2, '0')}</em>
                  {sec.label}
                </a>
              </li>
            ))}
          </ol>
          <Link href="/work/" className={s.railBack}>
            ← All work
          </Link>
        </aside>
        <article className={s.article}>{children}</article>
      </div>

      <section className={`container ${s.thanks}`}>
        <div className={s.thanksCard}>
          <div>
            <h2>
              Thanks for <span>reading.</span>
            </h2>
            <p>Happy to walk you through the research, the flows or the decisions behind this one.</p>
            <LiquidButton href={`mailto:${site.email}`}>Let&apos;s talk</LiquidButton>
          </div>
          {next && next.slug !== slug && (
            <Link href={`/work/${next.slug}/`} className={s.next}>
              <span className={s.nextLabel}>Next case study</span>
              <span className={s.nextTitle}>{next.title}</span>
              <span className={s.nextSum}>{next.summary}</span>
              <span className={s.nextArrow} aria-hidden>
                →
              </span>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
