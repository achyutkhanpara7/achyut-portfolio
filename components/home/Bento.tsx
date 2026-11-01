import CountUp from './CountUp';
import Reveal from '../Reveal';
import s from './sections.module.css';

// Brand rule: numbers only when real, with the source right next to them.
export default function Bento() {
  return (
    <div className={s.bento}>
      {/* Big emerald card */}
      <Reveal className={`${s.b} ${s.bBig}`}>
        <div className={s.bRings} aria-hidden>
          <span /><span /><span />
        </div>
        <p className={s.bLabel}>0→1 initiatives led</p>
        <p className={s.bValue}><CountUp to={20} suffix="+" /></p>
        <p className={s.bText}>End-to-end UX — research, flows, UI and hand-off — across WorldLink&apos;s accelerator portfolio.</p>
        <ul className={s.bList}>
          <li>Enterprise AI products</li>
          <li>Design systems</li>
          <li>UX research</li>
          <li>Front-end prototypes</li>
        </ul>
        <p className={s.bSource}>Source: WorldLink, 2025–26</p>
      </Reveal>

      {/* Clients */}
      <Reveal className={`${s.b} ${s.bPaper}`} delay={0.05}>
        <p className={s.bLabel}>Fortune 100 client work</p>
        <p className={s.bValue}><CountUp to={4} /></p>
        <ul className={s.logos}>
          <li>JPMorgan Chase</li>
          <li>Citi</li>
          <li>AbbVie</li>
          <li>7-Eleven</li>
        </ul>
        <p className={s.bSource}>Source: WorldLink client engagements</p>
      </Reveal>

      {/* Rework */}
      <Reveal className={`${s.b} ${s.bNight}`} delay={0.1}>
        <p className={s.bLabel}>Less design-to-dev rework</p>
        <p className={s.bValue}><CountUp to={50} prefix="~" suffix="%" /></p>
        <div className={s.bars} aria-hidden>
          <span className={s.barRow}><em>Before</em><i style={{ width: '100%' }} /></span>
          <span className={s.barRow}><em>WorldKit</em><i className={s.barOn} style={{ width: '50%' }} /></span>
        </div>
        <p className={s.bSource}>Source: WorldKit design system</p>
      </Reveal>

      <Reveal className={`${s.b} ${s.bMint}`} delay={0.05}>
        <p className={s.bLabel}>M.S. UX Design GPA</p>
        <p className={s.bValue}><CountUp to={4} decimals={1} /></p>
        <p className={s.bSource}>Arizona State University, 2025</p>
      </Reveal>

      <Reveal className={`${s.b} ${s.bPaper}`} delay={0.1}>
        <p className={s.bLabel}>Accessibility standard</p>
        <p className={s.bValue}>WCAG 2.2</p>
        <p className={s.bSource}>Built into WorldKit components</p>
      </Reveal>

      <Reveal className={`${s.b} ${s.bEmeraldSoft}`} delay={0.15}>
        <p className={s.bLabel}>ASU Sun Award</p>
        <p className={s.bValue}>2024</p>
        <p className={s.bSource}>Harkins Ultimate Fundraiser banner</p>
      </Reveal>
    </div>
  );
}
