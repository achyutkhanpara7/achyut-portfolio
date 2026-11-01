import Link from 'next/link';
import type { Project } from '@/content/work';
import Cover from '../Cover';
import s from './tile.module.css';

// One tile for every project: a big tinted stage with the work floating on it,
// then a short caption underneath (client · year, title, one line, action).
export default function WorkTile({ p, size = 'lg' }: { p: Project; size?: 'lg' | 'md' }) {
  const tone = p.tone ?? (p.discipline === 'brand' ? 'night' : 'mint');

  const stage = (
    <div className={`${s.stage} ${s[`tone_${tone}`]} ${size === 'md' ? s.md : ''}`}>
      <div className={`${tone === 'night' || tone === 'emerald' ? 'pattern-dots-light' : 'pattern-dots'} ${s.dots}`} aria-hidden />
      {p.image ? (
        <div className={s.shot}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt="" loading="lazy" />
        </div>
      ) : p.cover ? (
        <div className={s.coverWrap}>
          <Cover kind={p.cover} />
        </div>
      ) : (
        <BrandArt slug={p.slug} title={p.title} />
      )}
      {p.locked && (
        <span className={s.lock}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          NDA
        </span>
      )}
    </div>
  );

  const caption = (
    <div className={s.caption}>
      <p className={s.meta}>
        <span>{p.context}</span>
        {p.year && <span>{p.year}</span>}
      </p>
      <h3 className={s.title}>{p.title}</h3>
      {p.summary && <p className={s.summary}>{p.summary}</p>}
      <span className={s.cta}>
        {p.link === 'case' && (p.locked ? 'Unlock case study' : 'Read case study')}
        {p.link === 'external' && 'View project'}
        {p.link === 'soon' && 'Write-up coming soon'}
        {p.link !== 'soon' && <i aria-hidden>→</i>}
      </span>
    </div>
  );

  if (p.link === 'case')
    return (
      <Link href={`/work/${p.slug}/`} className={s.tile}>
        {stage}
        {caption}
      </Link>
    );
  if (p.link === 'external' && p.href)
    return (
      <a href={p.href} target="_blank" rel="noreferrer" className={s.tile}>
        {stage}
        {caption}
      </a>
    );
  return (
    <div className={`${s.tile} ${s.soon}`}>
      {stage}
      {caption}
    </div>
  );
}

// Brand projects without screenshots yet get a designed placeholder in the brand system.
function BrandArt({ slug, title }: { slug: string; title: string }) {
  if (slug === 'personal-brand')
    return (
      <div className={s.art}>
        <span className={s.artRings} aria-hidden>
          <i /><i /><i />
        </span>
        <span className={s.artWord}>
          Achyut Khanpara<b>.</b>
        </span>
        <span className={s.artNote}>pixels are cheap :)</span>
      </div>
    );
  if (slug === 'attune')
    return (
      <div className={s.art}>
        <span className={s.artWordLg}>attune</span>
        <span className={s.artWave} aria-hidden>
          <i /><i /><i /><i /><i />
        </span>
      </div>
    );
  return (
    <div className={s.art}>
      <span className={s.artBanner}>
        <b>{title.split(' ')[0]}</b>
        <em>{title.split(' ').slice(1).join(' ')}</em>
      </span>
    </div>
  );
}
