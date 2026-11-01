'use client';

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import s from './Rings.module.css';

// Signature motif: three rings around a mint disc. Each ring follows the cursor
// by a different amount, so the stack feels like it has depth.
export default function Rings() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });

  const layers = [0.06, 0.12, 0.2, 0.3].map((f) => ({
    x: useTransform(sx, (v) => v * f),
    y: useTransform(sy, (v) => v * f),
  }));

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set(e.clientX - (r.left + r.width / 2));
      my.set(e.clientY - (r.top + r.height / 2));
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [reduce, mx, my]);

  return (
    <div ref={ref} className={s.stage} aria-hidden>
      <motion.span className={`${s.ring} ${s.r3}`} style={layers[0]} />
      <motion.span className={`${s.ring} ${s.r2}`} style={layers[1]} />
      <motion.span className={`${s.ring} ${s.r1}`} style={layers[2]} />
      <motion.span className={s.disc} style={layers[3]}>
        <span className={s.mono}>ak</span>
      </motion.span>
    </div>
  );
}
