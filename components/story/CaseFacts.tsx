import { caseStudies } from '@/content/work';
import s from './story.module.css';

// Client, role, timeline, team and tools at the top of every case study, read from content/work.ts.
export default function CaseFacts({ slug }: { slug: string }) {
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return null;
  const when = c.timeline && c.timeline !== 'TODO' ? c.timeline : c.year;
  const facts = [
    { k: 'Client', v: c.client },
    { k: 'My role', v: c.role },
    { k: 'Timeline', v: when },
    { k: 'Team', v: c.team },
  ].filter((f) => f.v);
  return (
    <dl className={s.facts} style={{ ['--n' as string]: facts.length }}>
      {facts.map((f) => (
        <div key={f.k} className={s.fact}>
          <dt>{f.k}</dt>
          <dd>{f.v}</dd>
        </div>
      ))}
      {c.tools.length > 0 && (
        <div className={`${s.fact} ${s.factTools}`}>
          <dt>Tools</dt>
          <dd>
            {c.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </dd>
        </div>
      )}
    </dl>
  );
}
