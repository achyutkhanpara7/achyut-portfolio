import Link from 'next/link';
import { projects, projectCounts } from '@/content/work';
import Reveal from '../Reveal';
import s from './lenses.module.css';

// Two doors into the portfolio: UX case studies or Brand & visual work.
export default function Lenses() {
  const uxTitles = projects.filter((p) => p.discipline === 'ux').slice(0, 4).map((p) => p.title);
  const brandTitles = projects.filter((p) => p.discipline === 'brand').map((p) => p.title);

  return (
    <div className={s.grid}>
      <Reveal className={s.cell}>
        <Link href="/work/ux/" className={`${s.lens} ${s.ux}`}>
          <div className={`pattern-grid ${s.texture}`} aria-hidden />
          <div className={s.top}>
            <span className={s.count}>{String(projectCounts.ux).padStart(2, '0')}</span>
            <span className={s.go} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
            </span>
          </div>
          <h3 className={s.title}>
            UX <span className="accent">case studies</span>
          </h3>
          <p className={s.desc}>Research, flows, design systems and coded prototypes for enterprise and AI products.</p>
          <ul className={s.list}>
            {uxTitles.map((t) => (
              <li key={t}>{t}</li>
            ))}
            <li className={s.more}>+{projectCounts.ux - uxTitles.length} more</li>
          </ul>
        </Link>
      </Reveal>

      <Reveal className={s.cell} delay={0.08}>
        <Link href="/work/brand/" className={`${s.lens} ${s.brand}`}>
          <div className={`pattern-rings ${s.texture} ${s.rings}`} aria-hidden />
          <div className={s.top}>
            <span className={s.count}>{String(projectCounts.brand).padStart(2, '0')}</span>
            <span className={s.go} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
            </span>
          </div>
          <h3 className={s.title}>
            Brand &amp; <span className="accent">visual</span>
          </h3>
          <p className={s.desc}>Identities, campaign graphics and the system behind my own brand.</p>
          <ul className={s.list}>
            {brandTitles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Link>
      </Reveal>
    </div>
  );
}
