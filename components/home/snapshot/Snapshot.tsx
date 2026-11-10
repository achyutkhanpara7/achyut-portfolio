import CountUp from '../CountUp';
import Reveal from '../../Reveal';
import s from './snapshot.module.css';

// Career at a glance: the green 20+ card, then three supporting numbers, each with a small motif.
const stats = [
  {
    to: 4,
    suffix: '+',
    label: 'years of experience',
    note: 'From India to Arizona to Texas',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r="18" className={s.track} />
        <circle cx="24" cy="24" r="18" className={s.arc} />
        <path d="M24 14v10l6 4" className={s.hand} />
      </svg>
    ),
  },
  {
    to: 10,
    suffix: '+',
    label: 'certifications',
    note: 'Always learning something new',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden>
        <path d="M14 8h20v18l-10 6-10-6z" className={s.badgeBack} />
        <path d="M12 12h24v18l-12 7-12-7z" className={s.badge} />
        <path d="M18 22l4 4 8-8" className={s.tick} />
      </svg>
    ),
  },
  {
    to: 3,
    suffix: '',
    label: 'design systems built',
    note: 'Tokens, components and docs',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden>
        <rect x="8" y="26" width="32" height="12" rx="4" className={s.l1} />
        <rect x="8" y="17" width="32" height="12" rx="4" className={s.l2} />
        <rect x="8" y="8" width="32" height="12" rx="4" className={s.l3} />
      </svg>
    ),
  },
];

export default function Snapshot() {
  return (
    <div className={s.grid}>
      <Reveal className={s.big}>
        <div className={s.rings} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <p className={s.label}>0→1 products, across my career</p>
        <p className={s.huge}>
          <CountUp to={20} suffix="+" />
        </p>
        <p className={s.text}>Each one taken from the first interview to the coded prototype.</p>
        <ul className={s.chips}>
          <li>Enterprise AI</li>
          <li>Agentic AI</li>
          <li>Design systems</li>
          <li>Front-end</li>
        </ul>
      </Reveal>

      <ul className={s.tiles}>
        {stats.map((x, i) => (
          <Reveal as="li" key={x.label} delay={0.08 + i * 0.08} className={s.tile}>
            <span className={s.icon}>{x.icon}</span>
            <b>
              <CountUp to={x.to} suffix={x.suffix} />
            </b>
            <span className={s.tLabel}>{x.label}</span>
            <span className={s.tNote}>{x.note}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
