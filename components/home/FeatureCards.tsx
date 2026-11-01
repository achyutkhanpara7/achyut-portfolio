import Link from 'next/link';
import { caseStudies } from '@/content/work';
import Cover from '../Cover';
import TiltFrame from './TiltFrame';
import { LockChip } from '../work/ProjectCard';
import s from './sections.module.css';

// Full-width project cards that stack as you scroll (sticky), each on a brand ground.
export default function FeatureCards() {
  return (
    <div className={s.stack}>
      {caseStudies.map((c, i) => (
        <article
          key={c.slug}
          className={`${s.feature} ${s[`tone_${c.tone}`]}`}
          style={{ ['--i' as string]: i }}
        >
          {c.tone === 'night' && (
            <div className={s.fAura} aria-hidden>
              <span /><span />
            </div>
          )}
          <div className={s.fCopy}>
            <div className={s.fBadges}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <span>{c.year}</span>
              <span>{c.client}</span>
              {c.locked && <LockChip />}
            </div>
            <h3 className={s.fTitle}>
              {c.hook[0]}
              <br />
              <span className={s.fTurn}>{c.hook[1]}</span>
            </h3>
            <p className={s.fSummary}>{c.summary}</p>
            <ul className={s.fTags}>
              {c.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Link href={`/work/${c.slug}/`} className={s.fBtn}>
              {c.locked ? 'Unlock case study' : 'View case study'}
              <span aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </span>
            </Link>
          </div>
          <div className={s.fArt}>
            <TiltFrame url={`achyutkhanpara.com/work/${c.slug}`}>
              {c.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.image} alt={`${c.title} — screen`} loading="lazy" />
              ) : (
                <Cover kind={c.cover} />
              )}
            </TiltFrame>
          </div>
        </article>
      ))}
    </div>
  );
}
