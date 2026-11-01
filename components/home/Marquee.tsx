import s from './sections.module.css';

const skills = [
  'Enterprise UX',
  'AI products',
  'Design systems',
  'UX research',
  'Figma Variables',
  'React',
  'Storybook',
  'Accessibility · WCAG 2.2',
  'Claude Code',
  'Prototyping',
  'Information architecture',
  'Usability testing',
];

// Infinite chip ribbon. Pauses on hover; stops for reduced-motion users.
export default function Marquee() {
  const row = skills.concat(skills);
  return (
    <div className={s.marquee} aria-label="Skills">
      <ul className={s.track}>
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= skills.length}>
            <span className={s.mChip}>{t}</span>
            <span className={s.mDot} aria-hidden>✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
