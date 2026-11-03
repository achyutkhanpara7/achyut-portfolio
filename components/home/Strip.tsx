import s from './strip.module.css';

// One emerald ribbon right under the hero, read like a sentence in four parts:
// what I design · who for · what I build with · what I believe.
const groups: { label: string; items: string[] }[] = [
  { label: 'I design', items: ['Agentic AI experiences', 'Enterprise SaaS', 'Data-heavy dashboards', 'Design systems', '0→1 products'] },
  { label: 'For', items: ['Fortune 100 teams in banking, wealth, pharma & retail'] },
  { label: 'I build with', items: ['Figma', 'FigJam', 'Claude Code', 'React', 'Next.js', 'Tailwind', 'Storybook'] },
  { label: 'I believe', items: ['Pixels are cheap. Confusion is expensive.'] },
];

function Run({ hidden }: { hidden?: boolean }) {
  return (
    <li className={s.run} aria-hidden={hidden}>
      {groups.map((g) => (
        <span key={g.label} className={s.group}>
          <span className={s.label}>{g.label}</span>
          {g.items.map((it, i) => (
            <span key={it} className={s.item}>
              {it}
              {i < g.items.length - 1 && <i className={s.dot} aria-hidden />}
            </span>
          ))}
        </span>
      ))}
    </li>
  );
}

export default function Strip() {
  return (
    <div className={s.strip} aria-label="What I design, who for, and what I build with">
      <div className={s.band}>
        <ul className={s.track}>
          <Run />
          <Run hidden />
        </ul>
      </div>
    </div>
  );
}
