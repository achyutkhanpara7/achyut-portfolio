import CountUp from '../CountUp';
import Reveal from '../../Reveal';
import s from './snapshot.module.css';

// Career at a glance: one number, one journey. Each stop carries its real facts.
const stops = [
  {
    at: 'Thinkwik Technologies',
    where: 'India',
    when: 'The start',
    facts: ['Where I started designing products', 'Recommended by its Sr. UX Designer and Design Lead'],
  },
  {
    at: 'Arizona State University',
    where: 'Arizona',
    when: 'M.S. · May 2025',
    facts: ['M.S. User Experience Design · 4.0 GPA', 'Digital Assistant, Business & Finance (2024–25)', 'ASU Sun Award 2024'],
  },
  {
    at: 'WorldLink',
    where: 'Plano, Texas',
    when: 'Oct 2025 – now',
    facts: ['UX Designer & Researcher', '4 Fortune 100 client programs', 'WorldKit: ~50% less design-to-dev rework'],
    now: true,
  },
];

export default function Snapshot() {
  return (
    <div className={s.grid}>
      <Reveal className={`${s.card} ${s.big}`}>
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

      <Reveal className={`${s.card} ${s.journey}`} delay={0.06}>
        <div className={s.jHead}>
          <p className={s.label}>Where I&apos;ve worked</p>
          <p className={s.mid}>
            From Gujarat to <span>Texas.</span>
          </p>
        </div>
        <svg className={s.route} viewBox="0 0 900 70" aria-hidden>
          <path d="M60 50 C 220 -5, 330 -5, 450 35 S 690 75, 840 22" />
          <circle r="7" cx="60" cy="50" className={s.pinA} />
          <circle r="7" cx="450" cy="35" className={s.pinA} />
          <circle r="9" cx="840" cy="22" className={s.pinB} />
          <circle r="5" className={s.traveller}>
            <animateMotion dur="5s" repeatCount="indefinite" path="M60 50 C 220 -5, 330 -5, 450 35 S 690 75, 840 22" />
          </circle>
        </svg>
        <ol className={s.stops}>
          {stops.map((st) => (
            <li key={st.at} className={st.now ? s.now : ''}>
              <span className={s.when}>
                {st.now && <i className={s.live} aria-hidden />}
                {st.when}
              </span>
              <b>{st.at}</b>
              <span className={s.where}>{st.where}</span>
              <ul>
                {st.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}
