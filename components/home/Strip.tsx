import s from './strip.module.css';

// One emerald ribbon under the hero: what I design, and who it's for.
// Skills read in bold cream, the sectors and lines in a softer mint, so the two sets stay distinct.
const words: { w: string; soft?: boolean }[] = [
  { w: 'Agentic AI UX' },
  { w: 'Fortune 100 teams', soft: true },
  { w: 'Enterprise SaaS' },
  { w: 'Banking · Wealth', soft: true },
  { w: 'Design systems' },
  { w: 'Pharma', soft: true },
  { w: 'UX research' },
  { w: 'Retail', soft: true },
  { w: 'Design engineering' },
  { w: 'Research to React', soft: true },
  { w: '0→1 products' },
  { w: 'Pixels are cheap. Confusion is expensive.', soft: true },
  { w: 'Complex workflows' },
  { w: 'React prototypes' },
];

export default function Strip() {
  const row = [...words, ...words];
  return (
    <div className={s.strip} aria-label="What I design and who I design for">
      <div className={s.band}>
        <ul className={s.track}>
          {row.map((x, i) => (
            <li key={i} aria-hidden={i >= words.length}>
              <span className={`${s.word} ${x.soft ? s.soft : ''}`}>{x.w}</span>
              <span className={s.sep} aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
