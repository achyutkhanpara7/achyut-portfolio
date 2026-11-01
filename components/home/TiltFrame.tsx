'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import s from './sections.module.css';

// Browser-style frame that tilts toward the pointer, with a light glare.
export default function TiltFrame({ children, url }: { children: React.ReactNode; url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 140, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 140, damping: 18 });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);

  return (
    <motion.div
      ref={ref}
      className={s.frame}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      onPointerMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      <div className={s.frameBar} aria-hidden>
        <i /><i /><i />
        <span>{url}</span>
      </div>
      <div className={s.frameBody}>{children}</div>
      <motion.span
        className={s.glare}
        style={{ ['--gx' as string]: gx, ['--gy' as string]: gy }}
        aria-hidden
      />
    </motion.div>
  );
}
