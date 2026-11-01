import Link from 'next/link';
import Cover from './Cover';
import type { CaseStudy } from '@/content/work';
import s from './WorkCard.module.css';

export default function WorkCard({ item, index }: { item: CaseStudy; index: number }) {
  return (
    <Link href={`/work/${item.slug}/`} className={`card-hover ${s.card}`}>
      <Cover kind={item.cover} />
      <div className={s.body}>
        <div className={s.meta}>
          <span className={s.num}>{String(index + 1).padStart(2, '0')}</span>
          <span>{item.client}</span>
        </div>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.summary}>{item.summary}</p>
        <div className={s.foot}>
          <div className={s.tags}>
            {item.tags.slice(0, 2).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <span className={s.arrow} aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
