import Link from 'next/link';
import type { Project } from '@/content/work';
import Mockup from '../Mockup';
import s from './tile.module.css';

// Every project card: the shared Mockup on top, a short caption underneath.
export default function WorkTile({ p }: { p: Project; size?: 'lg' | 'md' }) {
  const visual = (
    <Mockup src={p.image ?? '/work/placeholder.webp'} alt={`${p.title} — preview`} label={p.title} locked={p.locked} />
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
      <Link href={`/work/${p.slug}/`} className={`mockup-hover ${s.tile}`}>
        {visual}
        {caption}
      </Link>
    );
  if (p.link === 'external' && p.href)
    return (
      <a href={p.href} target="_blank" rel="noreferrer" className={`mockup-hover ${s.tile}`}>
        {visual}
        {caption}
      </a>
    );
  return (
    <div className={`${s.tile} ${s.soon}`}>
      {visual}
      {caption}
    </div>
  );
}
