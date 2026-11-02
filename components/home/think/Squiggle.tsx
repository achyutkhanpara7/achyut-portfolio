'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { SQUIGGLE } from './squigglePath';
import s from './think.module.css';

// How I think: a messy scribble that draws itself straight as you scroll.
// The four stops sit under the line at 12.5 / 37.5 / 62.5 / 87.5 % of the width.
const stops = [
  { t: 'Listen', d: 'Sit with the people who use it. Audit what’s there. Write down what actually hurts.' },
  {
    t: 'Untangle',
    d: 'Sort the mess into jobs, flows and priorities. Most of the clarity comes from here.',
    note: 'my favourite part :)',
  },
  { t: 'Shape', d: 'Sketch, test, repeat. Every screen built from the design system, with real data.' },
  { t: 'Build', d: 'A React prototype the team can click. I hand over code, not just pictures.' },
];

function Stop({ i, progress, stop }: { i: number; progress: MotionValue<number>; stop: (typeof stops)[number] }) {
  const at = 0.12 + i * 0.24;
  const opacity = useTransform(progress, [at - 0.08, at], [0.25, 1]);
  const y = useTransform(progress, [at - 0.08, at], [14, 0]);
  const fill = useTransform(progress, [at - 0.02, at], ['#f4efe6', '#087f63']);
  return (
    <motion.li className={s.stop} style={{ opacity, y }}>
      <motion.span className={s.pin} style={{ backgroundColor: fill }} aria-hidden />
      <span className={s.stopN}>{String(i + 1).padStart(2, '0')}</span>
      <h3 className={s.stopT}>{stop.t}</h3>
      <p className={s.stopD}>{stop.d}</p>
      {stop.note && <span className={s.note}>{stop.note}</span>}
    </motion.li>
  );
}

export default function Squiggle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={s.squiggle}>
      <div className={s.lineWrap}>
        <span className={s.tagMess}>a messy problem</span>
        <span className={s.tagClear}>a clear product</span>
        <svg viewBox="-40 20 1240 310" className={s.svg} aria-hidden preserveAspectRatio="none">
          <defs>
            <linearGradient id="sq-ink" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#1a1420" />
              <stop offset="0.45" stopColor="#1a1420" />
              <stop offset="0.8" stopColor="#087f63" />
              <stop offset="1" stopColor="#087f63" />
            </linearGradient>
          </defs>
          <path d={SQUIGGLE} className={s.ghost} />
          <motion.path d={SQUIGGLE} className={s.ink} stroke="url(#sq-ink)" style={{ pathLength: draw }} />
        </svg>
      </div>
      <ol className={s.stops}>
        {stops.map((st, i) => (
          <Stop key={st.t} i={i} progress={scrollYProgress} stop={st} />
        ))}
      </ol>
    </div>
  );
}
