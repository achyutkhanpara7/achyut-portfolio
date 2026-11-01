'use client';

import { motion, useReducedMotion } from 'motion/react';
import s from './HangingTags.module.css';

// Signature motif #2: white tag = the cheap/obvious thing, emerald tag = the valuable thing.
// Tags swing on hover like real paper tags.
const tags = [
  { label: 'Pixels', price: 'cheap', emerald: false, rotate: -6 },
  { label: 'Clarity', price: 'priceless', emerald: true, rotate: 5 },
];

export default function HangingTags() {
  const reduce = useReducedMotion();
  return (
    <div className={s.wrap} aria-hidden>
      <span className={s.string} />
      {tags.map((t, i) => (
        <motion.div
          key={t.label}
          className={`${s.tag} ${t.emerald ? s.emerald : ''}`}
          style={{ transformOrigin: '50% -60px', left: `${18 + i * 44}%` }}
          initial={{ rotate: t.rotate }}
          animate={reduce ? undefined : { rotate: [t.rotate, t.rotate * -0.6, t.rotate] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={reduce ? undefined : { rotate: [t.rotate, -t.rotate * 2, t.rotate * 1.4, t.rotate], transition: { duration: 0.9 } }}
        >
          <span className={s.cord} />
          <span className={s.hole} />
          <span className={s.label}>{t.label}</span>
          <span className={s.price}>{t.price}</span>
        </motion.div>
      ))}
    </div>
  );
}
