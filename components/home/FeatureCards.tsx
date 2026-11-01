import Link from 'next/link';
import { caseStudies } from '@/content/work';
import Cover from '../Cover';
import { LockChip } from '../work/ProjectCard';
import s from './featured.module.css';

// Main UX case studies: white cards that stack as you scroll.
// Left: number, title, hook, summary, role. Right: the work on a mint stage.
export default function FeatureCards() {
  const total = String(caseStudies.length).padStart(2, '0');
  return (
    <div className={s.stack}>
      {caseStudies.map((c, i) => (
        <article key={c.slug} className={s.card} style={{ ['--i' as string]: i }}>
          <div className={s.copy}>
            <div className={s.top}>
              <span className={s.num}>
                {String(i + 1).padStart(2, '0')}
                <em>/{total}</em>
              </span>
              <div className={s.chips}>
                <span className={s.chip}>{c.client}</span>
                <span className={s.chip}>{c.year}</span>
                {c.locked && <LockChip />}
              </div>
            </div>

            <h3 className={s.title}>{c.title}</h3>
            <p className={s.hook}>
              {c.hook[0]} <span>{c.hook[1]}</span>
            </p>
            <p className={s.summary}>{c.summary}</p>

            <dl className={s.meta}>
              <div>
                <dt>Role</dt>
                <dd>{c.role}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{c.tags.slice(0, 2).join(' · ')}</dd>
              </div>
            </dl>

            <Link href={`/work/${c.slug}/`} className={s.cta}>
              {c.locked ? 'Unlock case study' : 'Read case study'}
              <span aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </span>
            </Link>
          </div>

          <Link href={`/work/${c.slug}/`} className={`card-hover ${s.stage}`} tabIndex={-1} aria-hidden>
            <div className={`pattern-dots ${s.dots}`} />
            <div className={s.shot}>
              {c.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.image} alt="" loading="lazy" />
              ) : (
                <Cover kind={c.cover} />
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
