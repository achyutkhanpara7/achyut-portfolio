'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import s from './voices.module.css';

// Recommendations: one big quote at a time, people listed on the side.
// Auto-advances every 7s (pauses on hover); click a name to jump.
const voices = [
  {
    i: 'HD',
    n: 'Hemal Darji',
    r: 'Sr. UX Designer, Thinkwik Technologies',
    pre: 'Achyut’s dedication to user research and his insight-driven designs make him a standout UX professional. He ',
    hl: 'transforms complex requirements into seamless, impactful user experiences.',
    post: '',
  },
  {
    i: 'ER',
    n: 'Dr. Elaine Rettger',
    r: 'Associate Director, Bus & Fin Comms, ASU',
    pre: 'Achyut consistently demonstrated exceptional UX design, research and digital communication skills, ',
    hl: 'becoming a key contributor to our projects at ASU.',
    post: ' His professionalism, creativity and user-first mindset made him an invaluable asset to our team.',
  },
  {
    i: 'SC',
    n: 'Stephen Carradini',
    r: 'Assistant Professor, Arizona State University',
    pre: 'Achyut’s designs are ',
    hl: 'not just visually appealing but also highly functional,',
    post: ' ensuring usability and clarity for the end user. His teamwork experience and coordination skills make him a valuable asset to any user experience team.',
  },
  {
    i: 'NP',
    n: 'Nikit Patel',
    r: 'Team Lead Design, Thinkwik Technologies',
    pre: 'Achyut’s ',
    hl: 'creative vision and user-centric approach elevate every project he undertakes.',
    post: ' His designs are not only visually engaging but also highly intuitive and user-friendly.',
  },
];

const TICK = 7000;

export default function Voices() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setI((x) => (x + 1) % voices.length), TICK);
    return () => clearTimeout(id);
  }, [i, paused]);

  const v = voices[i];

  return (
    <div className={s.wrap} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <ul className={s.people} role="tablist" aria-label="Recommendations">
        {voices.map((p, k) => {
          const on = k === i;
          return (
            <li key={p.n}>
              <button
                type="button"
                role="tab"
                aria-selected={on}
                className={`${s.person} ${on ? s.on : ''}`}
                onClick={() => setI(k)}
              >
                <span className={s.avatar}>{p.i}</span>
                <span className={s.who}>
                  <b>{p.n}</b>
                  <span>{p.r}</span>
                </span>
                {on && (
                  <span className={s.timer} aria-hidden>
                    <i key={`${i}-${paused}`} style={{ animationDuration: `${TICK}ms`, animationPlayState: paused ? 'paused' : 'running' }} />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div className={s.stage} role="tabpanel">
        <span className={s.mark} aria-hidden>
          “
        </span>
        <AnimatePresence mode="wait">
          <motion.figure
            key={v.n}
            className={s.quote}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote>
              {v.pre}
              <mark>{v.hl}</mark>
              {v.post}
            </blockquote>
            <figcaption>
              <span className={s.avatarLg}>{v.i}</span>
              <span>
                <b>{v.n}</b>
                <span>{v.r}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className={s.nav}>
          <span className={s.page}>
            {String(i + 1).padStart(2, '0')} <em>/ {String(voices.length).padStart(2, '0')}</em>
          </span>
          <button type="button" aria-label="Previous" onClick={() => setI((x) => (x - 1 + voices.length) % voices.length)}>
            <svg viewBox="0 0 24 24">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" aria-label="Next" onClick={() => setI((x) => (x + 1) % voices.length)}>
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
