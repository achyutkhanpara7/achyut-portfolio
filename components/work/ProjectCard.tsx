import Link from 'next/link';
import type { Project } from '@/content/work';
import Cover from '../Cover';
import s from './work.module.css';

export function LockChip({ label = 'NDA · Password' }: { label?: string }) {
  return (
    <span className="lock">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
      {label}
    </span>
  );
}

// One card for any project (UX or Brand). Visual: real image → abstract cover → brand pattern.
export default function ProjectCard({ p }: { p: Project }) {
  const visual = p.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={p.image} alt="" loading="lazy" className={s.img} />
  ) : p.cover ? (
    <Cover kind={p.cover} />
  ) : (
    <div className={`${s.patternCover} pattern-${p.pattern ?? 'dots'} ${p.discipline === 'brand' ? s.brandCover : ''}`}>
      <span className={s.monogram}>{initials(p.title)}</span>
    </div>
  );

  const body = (
    <>
      <div className={s.visual}>
        {visual}
        <div className={s.badges}>
          <span className={`${s.disc} ${p.discipline === 'brand' ? s.discBrand : ''}`}>
            {p.discipline === 'ux' ? 'UX' : 'Brand'}
          </span>
          {p.locked && <LockChip label="NDA" />}
        </div>
      </div>
      <div className={s.body}>
        <p className={s.context}>
          {p.context}
          {p.year && <span> · {p.year}</span>}
        </p>
        <h3 className={s.title}>{p.title}</h3>
        <span className={s.cta}>
          {p.link === 'case' && (p.locked ? 'Unlock case study' : 'Read case study')}
          {p.link === 'external' && 'View project ↗'}
          {p.link === 'soon' && 'Coming soon'}
          {p.link !== 'soon' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          )}
        </span>
      </div>
    </>
  );

  if (p.link === 'case')
    return (
      <Link href={`/work/${p.slug}/`} className={`card-hover ${s.card}`}>
        {body}
      </Link>
    );
  if (p.link === 'external' && p.href)
    return (
      <a href={p.href} target="_blank" rel="noreferrer" className={`card-hover ${s.card}`}>
        {body}
      </a>
    );
  return <div className={`${s.card} ${s.soon}`}>{body}</div>;
}

function initials(t: string) {
  return t
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}
