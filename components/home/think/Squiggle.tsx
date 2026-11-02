'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SQUIGGLE } from './squigglePath';
import s from './think.module.css';

// How I think: when the section comes into view, a messy scribble draws itself
// and settles into a straight line. Plays once, on its own — not tied to scroll.
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

const DRAW = 3.2; // seconds for the whole line
const ease = [0.45, 0, 0.25, 1] as const;

export default function Squiggle() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref} className={s.squiggle}>
      <div className={s.lineWrap}>
        <span className={s.tagMess}>a messy problem</span>
        <motion.span
          className={s.tagClear}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: DRAW - 0.3, duration: 0.5 }}
        >
          a clear product
        </motion.span>
        <svg viewBox="-40 20 1240 310" className={s.svg} aria-hidden>
          <defs>
            <linearGradient id="sq-ink" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#1a1420" />
              <stop offset="0.45" stopColor="#1a1420" />
              <stop offset="0.8" stopColor="#087f63" />
              <stop offset="1" stopColor="#087f63" />
            </linearGradient>
          </defs>
          <path d={SQUIGGLE} className={s.ghost} />
          <motion.path
            d={SQUIGGLE}
            className={s.ink}
            stroke="url(#sq-ink)"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: DRAW, ease }}
          />
          <motion.circle
            cx="1160"
            cy="170"
            r="9"
            fill="#087f63"
            initial={{ scale: 0 }}
            animate={inView ? { scale: [0, 1.5, 1] } : {}}
            transition={{ delay: DRAW - 0.05, duration: 0.5 }}
          />
        </svg>
      </div>
      <ol className={s.stops}>
        {stops.map((st, i) => {
          const delay = 0.3 + i * (DRAW / 4.2);
          return (
            <motion.li
              key={st.t}
              className={s.stop}
              initial={{ opacity: 0.2, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className={s.pin}
                initial={{ backgroundColor: '#f4efe6' }}
                animate={inView ? { backgroundColor: '#087f63' } : {}}
                transition={{ delay: delay + 0.2, duration: 0.3 }}
                aria-hidden
              />
              <span className={s.stopN}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={s.stopT}>{st.t}</h3>
              <p className={s.stopD}>{st.d}</p>
              {st.note && <span className={s.note}>{st.note}</span>}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
