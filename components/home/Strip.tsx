import s from './strip.module.css';

// Two crossing ribbons under the hero: what I design (emerald) and who it's for (ink).
// They scroll in opposite directions and pause on hover.
const what = [
  'Agentic AI UX',
  'Enterprise SaaS',
  'Design systems',
  'UX research',
  'Design engineering',
  '0→1 products',
  'Complex workflows',
  'React prototypes',
];
const who = [
  'Fortune 100 teams',
  'Banking',
  'Wealth',
  'Pharma',
  'Retail',
  'Research to React',
  'Pixels are cheap',
  'Confusion is expensive',
];

function Band({ words, tone, reverse }: { words: string[]; tone: 'emerald' | 'ink'; reverse?: boolean }) {
  const row = [...words, ...words];
  return (
    <div className={`${s.band} ${s[tone]} ${reverse ? s.reverse : ''}`}>
      <ul className={s.track}>
        {row.map((w, i) => (
          <li key={i} aria-hidden={i >= words.length}>
            <span className={s.word}>{w}</span>
            <span className={s.sep} aria-hidden />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Strip() {
  return (
    <div className={s.strip} aria-label="What I design and who I design for">
      <Band words={who} tone="ink" reverse />
      <Band words={what} tone="emerald" />
    </div>
  );
}
