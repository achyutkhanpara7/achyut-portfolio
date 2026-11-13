'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import s from './voices.module.css';

// Recommendations: one big quote at a time, people listed on the side.
// Auto-advances every 7s (pauses on hover); click a name to jump.
const voices = [
  {
    i: 'HD',
    ph: '/img/voices/hemal.webp',
    n: 'Hemal Darji',
    r: 'Sr. UX Designer, Thinkwik Technologies',
    pre: 'Achyut’s dedication to user research and his insight-driven designs make him a standout UX professional. He ',
    hl: 'transforms complex requirements into seamless, impactful user experiences.',
    post: '',
  },
  {
    i: 'ER',
    ph: '/img/voices/elaine.webp',
    n: 'Dr. Elaine Rettger',
    r: 'Associate Director, Business & Finance Communications, Arizona State University',
    pre: 'Achyut consistently demonstrated exceptional UX design, research and digital communication skills, ',
    hl: 'becoming a key contributor to our projects at ASU.',
    post: ' His professionalism, creativity and user-first mindset made him an invaluable asset to our team.',
  },
  {
    i: 'SC',
    ph: '/img/voices/stephen.webp',
    n: 'Stephen Carradini',
    r: 'Assistant Professor, Arizona State University',
    pre: 'Achyut’s designs are ',
    hl: 'not just visually appealing but also highly functional,',
    post: ' ensuring usability and clarity for the end user. His teamwork experience and coordination skills make him a valuable asset to any user experience team.',
  },
  {
    i: 'NP',
    ph: '/img/voices/nikit.webp',
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
  const [paused, setPaused] = useState(false); // hover / focus
  const [stopped, setStopped] = useState(false); // the pause button, or reduced motion

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setStopped(true);
  }, []);

  useEffect(() => {
    if (paused || stopped) return;
    const id = setTimeout(() => setI((x) => (x + 1) % voices.length), TICK);
    return () => clearTimeout(id);
  }, [i, paused, stopped]);

  const v = voices[i];

  return (
    <div
      className={s.wrap}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <ul className={s.people} role="tablist" aria-label="Recommendations">
        {voices.map((p, k) => {
          const on = k === i;
          return (
            <li key={p.n} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={on}
                className={`${s.person} ${on ? s.on : ''}`}
                onClick={() => setI(k)}
              >
                <span className={s.avatar}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.ph} alt="" loading="lazy" />
                </span>
                <span className={s.who}>
                  <b>{p.n}</b>
                  <span>{p.r}</span>
                </span>
                {on && !stopped && (
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
        <button
          type="button"
          className={s.stop}
          onClick={() => setStopped((x) => !x)}
          aria-pressed={stopped}
          aria-label={stopped ? 'Play recommendations' : 'Pause recommendations'}
        >
          {stopped ? (
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
              <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
              <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" />
            </svg>
          )}
        </button>
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
              <span className={s.avatarLg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.ph} alt={`Photo of ${v.n}`} />
              </span>
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
