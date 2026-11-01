import Link from 'next/link';
import { getCase } from '@/content/work';
import Cover from '../Cover';
import s from './case.module.css';

/* ------------------------------------------------------------
   Building blocks for case studies. Use them inside page.mdx:
   <CaseHeader slug="grc" />, <Callout>, <Figure>, <Decision>,
   <Stat>, <Note>, <Todo>
   ------------------------------------------------------------ */

export function CaseHeader({ slug }: { slug: string }) {
  const { item } = getCase(slug);
  if (!item) return null;
  const meta = [
    ['Role', item.role],
    ['Team', item.team],
    ['Timeline', item.timeline],
    ['Tools', item.tools.join(', ')],
  ];
  return (
    <header className={s.header}>
      <Link href="/work/" className={s.back}>← All work</Link>
      <p className="eyebrow">{item.client} · {item.year}</p>
      <h1 className={s.title}>{item.title}</h1>
      <p className={s.summary}>{item.summary}</p>
      <div className={s.heroCover}>
        <Cover kind={item.cover} />
      </div>
      <dl className={s.meta}>
        {meta.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

/** The one-sentence insight a skimmer should leave with. */
export function Callout({ label = 'Key insight', children }: { label?: string; children: React.ReactNode }) {
  return (
    <aside className={s.callout}>
      <span className="eyebrow">{label}</span>
      <div>{children}</div>
    </aside>
  );
}

/** Screenshot / video frame. Leave `src` empty to show a placeholder while drafting. */
export function Figure({
  src,
  alt = '',
  caption,
  video = false,
  ratio = '16 / 10',
}: {
  src?: string;
  alt?: string;
  caption?: string;
  video?: boolean;
  ratio?: string;
}) {
  return (
    <figure className={s.figure}>
      <div className={s.frame} style={{ aspectRatio: ratio }}>
        {!src && <span className={s.placeholder}>Add visual: {caption ?? alt}</span>}
        {src && video && <video src={src} autoPlay muted loop playsInline aria-label={alt} />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {src && !video && <img src={src} alt={alt} loading="lazy" />}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Problem → what I decided → why. The heart of a senior case study. */
export function Decision({
  n,
  problem,
  decision,
  children,
}: {
  n: number;
  problem: string;
  decision: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.decision}>
      <span className={s.decisionN}>{String(n).padStart(2, '0')}</span>
      <div>
        <p className={s.decisionProblem}>{problem}</p>
        <p className={s.decisionTitle}>{decision}</p>
        <div className={s.decisionWhy}>{children}</div>
      </div>
    </div>
  );
}

/** Only for real, sourced numbers. `source` is shown next to the number. */
export function Stat({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className={s.stat}>
      <span className={s.statValue}>{value}</span>
      <span className={s.statLabel}>{label}</span>
      <span className={s.statSource}>Source: {source}</span>
    </div>
  );
}

export function Stats({ children }: { children: React.ReactNode }) {
  return <div className={s.stats}>{children}</div>;
}

/** The single handwritten aside per view. Lowercase, ends in :) */
export function Note({ children }: { children: React.ReactNode }) {
  return <p className={`hand ${s.note}`}>{children}</p>;
}

/** Draft placeholder — every one of these must be gone before launch. */
export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <div className="todo" role="note">
      <strong>TODO</strong>
      {children}
    </div>
  );
}
