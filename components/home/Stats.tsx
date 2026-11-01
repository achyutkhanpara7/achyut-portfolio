import CountUp from './CountUp';
import Reveal from '../Reveal';
import s from './stats.module.css';

// Real numbers only, each with its source — a calm grid instead of a busy bento.
const stats: { v: React.ReactNode; l: string; src: string }[] = [
  { v: <CountUp to={20} suffix="+" />, l: '0→1 initiatives led', src: 'WorldLink, 2025–26' },
  { v: <CountUp to={4} />, l: 'Fortune 100 clients', src: 'JPMorgan Chase, Citi, AbbVie, 7-Eleven' },
  { v: <CountUp to={50} prefix="~" suffix="%" />, l: 'less design-to-dev rework', src: 'WorldKit design system' },
  { v: 'WCAG 2.2', l: 'built into components', src: 'WorldKit' },
  { v: <CountUp to={4} decimals={1} />, l: 'GPA, M.S. UX Design', src: 'Arizona State University, 2025' },
  { v: '2024', l: 'ASU Sun Award', src: 'Harkins Ultimate Fundraiser banner' },
];

export default function Stats() {
  return (
    <ul className={s.grid}>
      {stats.map((x, i) => (
        <Reveal as="li" key={x.l} delay={(i % 3) * 0.05} className={s.cell}>
          <span className={s.value}>{x.v}</span>
          <span className={s.label}>{x.l}</span>
          <span className={s.src}>{x.src}</span>
        </Reveal>
      ))}
    </ul>
  );
}
