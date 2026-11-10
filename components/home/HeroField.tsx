'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react';
import s from './heroField.module.css';

// A designer's canvas behind the hero: a dot grid that lights up around the pointer, a few tool objects
// (pen path, selection frame, toggle, swatches, sparkle) drifting at different depths, and two
// multiplayer cursors wandering over the page like a live Figma file.

function useDepth(mx: MotionValue<number>, my: MotionValue<number>, scroll: MotionValue<number>, d: number) {
  const x = useTransform(mx, (v) => v * d);
  const y = useTransform([my, scroll] as MotionValue<number>[], ([a, b]: number[]) => a * d - b * d * 0.6);
  return { x, y };
}

export default function HeroField() {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });
  const { scrollY } = useScroll();
  const scroll = useTransform(scrollY, (v) => Math.min(v, 900));

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
      document.documentElement.style.setProperty('--hx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--hy', `${e.clientY + window.scrollY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, rawX, rawY]);

  const d1 = useDepth(mx, my, scroll, 10);
  const d2 = useDepth(mx, my, scroll, 22);
  const d3 = useDepth(mx, my, scroll, 36);
  const d4 = useDepth(mx, my, scroll, 16);

  return (
    <>
      <div className={s.field} aria-hidden>
        <div className={s.grid} />
        <div className={s.spot} />

        {/* pen tool: a bezier path with anchors and handles */}
        <motion.svg className={s.pen} style={d1} viewBox="0 0 420 120">
          <path className={s.penPath} d="M10 92 C 90 10, 170 10, 210 60 S 330 112, 410 28" />
          <line x1="90" y1="10" x2="10" y2="92" className={s.handle} />
          <line x1="330" y1="112" x2="410" y2="28" className={s.handle} />
          {[
            [10, 92],
            [210, 60],
            [410, 28],
          ].map(([x, y]) => (
            <rect key={x} x={x - 5} y={y - 5} width="10" height="10" className={s.anchor} />
          ))}
          {[
            [90, 10],
            [330, 112],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="4" className={s.knob} />
          ))}
        </motion.svg>

        {/* selection frame with size label */}
        <motion.div className={s.frame} style={d2}>
          <span className={s.frameName}>Frame · Dashboard</span>
          <i />
          <i />
          <i />
          <i />
          <span className={s.frameSize}>1440 × 900</span>
        </motion.div>

        {/* AI sparkle */}
        <motion.svg className={s.spark} style={d3} viewBox="0 0 40 40">
          <path d="M20 2 C 22 14, 26 18, 38 20 C 26 22, 22 26, 20 38 C 18 26, 14 22, 2 20 C 14 18, 18 14, 20 2 Z" />
        </motion.svg>

        {/* component diamond */}
        <motion.svg className={s.comp} style={d2} viewBox="0 0 40 40">
          <path d="M20 3 L37 20 L20 37 L3 20 Z" />
          <path d="M20 11 L29 20 L20 29 L11 20 Z" />
        </motion.svg>

        {/* toggle + swatches, a little UI kit */}
        <motion.div className={s.kit} style={d4}>
          <span className={s.toggle}>
            <b />
          </span>
          <span className={s.swatches}>
            <i />
            <i />
            <i />
            <i />
          </span>
        </motion.div>

        {/* sticky note peeking out from behind the photo card */}
        <motion.div className={s.note} style={d1}>
          <span>ship it ✓</span>
        </motion.div>
      </div>

      {/* multiplayer cursors, above the content but never catching clicks */}
      {!reduce && (
        <div className={s.cursors} aria-hidden>
          <motion.div
            className={`${s.cursor} ${s.me}`}
            animate={{ left: ['54%', '50%', '40%', '55%', '54%'], top: ['18%', '46%', '79%', '64%', '18%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 2 L20 11 L12 13 L9 21 Z" />
            </svg>
            <span>Achyut</span>
          </motion.div>
          <motion.div
            className={`${s.cursor} ${s.dev}`}
            animate={{ left: ['30%', '44%', '52%', '38%', '30%'], top: ['80%', '78%', '30%', '72%', '80%'] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.55, 0.8, 1], delay: 1.5 }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 2 L20 11 L12 13 L9 21 Z" />
            </svg>
            <span>Engineer</span>
          </motion.div>
        </div>
      )}
    </>
  );
}
