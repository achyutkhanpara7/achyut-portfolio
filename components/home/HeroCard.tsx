'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { site } from '@/content/work';
import s from './hero.module.css';

const ease = [0.2, 0.8, 0.2, 1] as const;

// Portrait-first card: the photo is the hero. Rings sit behind it, one handwritten note,
// two small facts, and a glass name plate floating over the bottom of the photo.
export default function HeroCard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [3, -3]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 18 });
  // the photo drifts a little against the rings for depth
  const photoX = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 90, damping: 20 });
  const ringX = useSpring(useTransform(px, [-0.5, 0.5], [10, -10]), { stiffness: 90, damping: 20 });

  function onMove(e: React.PointerEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={s.card}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease }}
    >
      <div className={`pattern-dots ${s.cardDots}`} aria-hidden />

      <motion.div className={s.rings} style={{ x: ringX }} aria-hidden>
        <span className={s.ring3} />
        <span className={s.ring2} />
        <span className={s.ring1} />
      </motion.div>

      <motion.div className={s.portrait} style={{ x: photoX }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/achyut-hero.webp" alt="Achyut Khanpara" className={s.photo} />
      </motion.div>

      <p className={`hand ${s.note}`}>
        the hard part of AI
        <br />
        is the UX :)
      </p>

      <span className={`${s.fact} ${s.factA}`}>
        <i aria-hidden>
          <svg viewBox="0 0 24 24"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" /></svg>
        </i>
        Design → Code
      </span>
      <span className={`${s.fact} ${s.factB}`}>
        <i aria-hidden>
          <svg viewBox="0 0 24 24"><path d="M4 20V8l8-4 8 4v12M9 20v-6h6v6" /></svg>
        </i>
        Fortune 100 clients
      </span>

      <div className={s.plate}>
        <div>
          <p className={s.plateName}>
            Achyut Khanpara<span>.</span>
          </p>
          <p className={s.plateRole}>
            <i aria-hidden /> {site.location}
          </p>
        </div>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className={s.plateBtn} aria-label="LinkedIn profile">
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
