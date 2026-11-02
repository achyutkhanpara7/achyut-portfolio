import CountUp from '../CountUp';
import Reveal from '../../Reveal';
import s from './snapshot.module.css';

// Career at a glance. Every number here is real; no source captions on the cards.
const journey = [
  { at: 'Thinkwik Technologies', where: 'India' },
  { at: 'Arizona State University', where: 'Arizona' },
  { at: 'WorldLink', where: 'Dallas–Fort Worth' },
];

export default function Snapshot() {
  return (
    <div className={s.grid}>
      {/* 20+ initiatives */}
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
        <p className={s.text}>Across Thinkwik, Arizona State and WorldLink. Each one taken from the first interview to the coded prototype.</p>
        <ul className={s.chips}>
          <li>Enterprise AI</li>
          <li>Design systems</li>
          <li>UX research</li>
          <li>Front-end</li>
        </ul>
      </Reveal>

      {/* journey */}
      <Reveal className={`${s.card} ${s.journey}`} delay={0.05}>
        <p className={s.label}>Where I&apos;ve worked</p>
        <p className={s.mid}>
          From Gujarat to <span>Texas.</span>
        </p>
        <div className={s.route}>
          <svg viewBox="0 0 600 90" aria-hidden>
            <path id="route" d="M20 70 C 160 -10, 260 -10, 300 50 S 470 100, 580 30" />
            <circle r="6" cx="20" cy="70" className={s.pinA} />
            <circle r="6" cx="300" cy="50" className={s.pinA} />
            <circle r="7" cx="580" cy="30" className={s.pinB} />
            <circle r="5" className={s.traveller}>
              <animateMotion dur="4.5s" repeatCount="indefinite" path="M20 70 C 160 -10, 260 -10, 300 50 S 470 100, 580 30" />
            </circle>
          </svg>
          <ol className={s.stopsRow}>
            {journey.map((j) => (
              <li key={j.at}>
                <b>{j.at}</b>
                <span>{j.where}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* rework */}
      <Reveal className={`${s.card} ${s.night}`} delay={0.08}>
        <p className={s.label}>Less design-to-dev rework</p>
        <p className={s.huge}>
          <CountUp to={50} prefix="~" suffix="%" />
        </p>
        <div className={s.bars} aria-hidden>
          <span>
            <em>Before</em>
            <i style={{ width: '100%' }} />
          </span>
          <span>
            <em>WorldKit</em>
            <i className={s.on} style={{ width: '50%' }} />
          </span>
        </div>
      </Reveal>

      {/* GPA */}
      <Reveal className={`${s.card} ${s.gpa}`} delay={0.12}>
        <div className={s.ring} aria-hidden>
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" className={s.track} />
            <circle cx="60" cy="60" r="52" className={s.fill} pathLength={100} />
          </svg>
          <span>
            <CountUp to={4} decimals={1} />
          </span>
        </div>
        <p className={s.label}>GPA · M.S. UX Design</p>
        <p className={s.small}>Arizona State University</p>
      </Reveal>

      {/* Fortune 100 */}
      <Reveal className={`${s.card} ${s.paper}`} delay={0.05}>
        <p className={s.label}>Fortune 100 clients</p>
        <p className={s.huge}>
          <CountUp to={4} />
        </p>
        <ul className={s.chips}>
          <li>Banking</li>
          <li>Wealth</li>
          <li>Pharma</li>
          <li>Retail</li>
        </ul>
      </Reveal>

      {/* award sticker */}
      <Reveal className={`${s.card} ${s.award}`} delay={0.1}>
        <div className={s.sticker} aria-hidden>
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="sun-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
            </defs>
            <text>
              <textPath href="#sun-circle">ASU SUN AWARD · 2024 · ASU SUN AWARD · 2024 ·</textPath>
            </text>
          </svg>
          <span className={s.sun} />
        </div>
        <p className={s.label}>ASU Sun Award</p>
        <p className={s.small}>For the Harkins Ultimate Fundraiser campaign banner</p>
      </Reveal>

      {/* now */}
      <Reveal className={`${s.card} ${s.mint}`} delay={0.14}>
        <p className={s.label}>
          <i className={s.live} aria-hidden /> Right now
        </p>
        <p className={s.mid}>
          Designing enterprise <span>AI products</span> in Dallas–Fort Worth.
        </p>
        <p className={s.small}>Open to relocating anywhere in the US.</p>
      </Reveal>
    </div>
  );
}
