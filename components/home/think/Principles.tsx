'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import s from './think.module.css';

// Four rules, laid out like cards on a table. Hover (or tap) flips a card to the example.
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

const tilt = [-3, 2, -1.5, 3];

export default function Principles() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className={s.rules}>
      <div className={s.rulesHead}>
        <h3 className={s.rulesT}>
          Four rules <span>I design by.</span>
        </h3>
        <p className={s.rulesHint}>Hover a card to see it in practice</p>
      </div>
      <ul className={s.table}>
        {rules.map((r, i) => {
          const on = flipped === i;
          return (
            <motion.li
              key={r.t}
              className={s.slot}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: tilt[i] }}
              whileHover={{ rotate: 0, y: -10 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, delay: i * 0.08 }}
              onHoverStart={() => setFlipped(i)}
              onHoverEnd={() => setFlipped(null)}
            >
              <button
                type="button"
                className={`${s.flip} ${on ? s.flipped : ''}`}
                onClick={() => setFlipped(on ? null : i)}
                aria-pressed={on}
                aria-label={`${r.t}: ${r.d} In practice: ${r.ex}`}
              >
                <span className={`${s.face} ${s.front} ${s[r.tone]}`}>
                  <span className={s.cardTop}>
                    <span className={s.hole} aria-hidden />
                    Rule {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={s.cardT}>{r.t}</span>
                  <span className={s.cardD}>{r.d}</span>
                </span>
                <span className={`${s.face} ${s.back} ${s[r.tone]}`}>
                  <span className={s.cardTop}>In practice</span>
                  <span className={s.cardEx}>{r.ex}</span>
                  <span className={s.cardN}>{String(i + 1).padStart(2, '0')}</span>
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
