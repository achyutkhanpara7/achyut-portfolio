'use client';

import { useState } from 'react';
import { motion, type PanInfo } from 'motion/react';
import s from './think.module.css';

// Four rules, dealt like a deck of cards. Drag the top card away, tap it, or use the button.
const rules = [
  {
    t: 'Clarity first',
    d: 'If someone needs a walkthrough to use it, the design isn’t done yet.',
    ex: 'GRC platform: six modules, one place to start.',
    tone: 'emerald',
  },
  {
    t: 'Evidence over opinion',
    d: 'I bring interview notes and audit findings to the review, not my taste.',
    ex: 'Network governance: a UX audit came before any redesign.',
    tone: 'paper',
  },
  {
    t: 'Build what I design',
    d: 'I prototype in code, so engineers see how it behaves, not just how it looks.',
    ex: 'This site: designed and built by me, in Next.js.',
    tone: 'night',
  },
  {
    t: 'Business-minded',
    d: 'A screen is good when it moves something the business actually measures.',
    ex: 'WorldKit: about 50% less design-to-dev rework.',
    tone: 'mint',
  },
] as const;

const tilt = [-2, 3, -4, 5];

export default function Principles() {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const next = () => setOrder((o) => [...o.slice(1), o[0]]);
  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 90 || Math.abs(info.velocity.x) > 500) next();
  };

  return (
    <div className={s.deckWrap}>
      <div className={s.deckHead}>
        <span className={s.kick}>Four rules I design by</span>
        <span className={s.count}>
          {String(order[0] + 1).padStart(2, '0')} / {String(rules.length).padStart(2, '0')}
        </span>
      </div>

      <div className={s.deck}>
        {rules.map((r, i) => {
          const pos = order.indexOf(i);
          const top = pos === 0;
          return (
            <motion.article
              key={r.t}
              className={`${s.card} ${s[r.tone]}`}
              style={{ zIndex: rules.length - pos }}
              animate={{
                rotate: top ? -1 : tilt[pos],
                y: pos * 10,
                x: pos * 6,
                scale: 1 - pos * 0.035,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              drag={top ? 'x' : false}
              dragSnapToOrigin
              dragElastic={0.6}
              onDragEnd={top ? onDragEnd : undefined}
              onClick={top ? next : undefined}
              aria-hidden={!top}
            >
              <div className={s.cardTop}>
                <span className={s.hole} aria-hidden />
                <span>Rule {String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={s.cardT}>{r.t}</h3>
              <p className={s.cardD}>{r.d}</p>
              <div className={s.cardEx}>
                <span>In practice</span>
                <p>{r.ex}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <button type="button" className={s.deal} onClick={next}>
        Next rule
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
