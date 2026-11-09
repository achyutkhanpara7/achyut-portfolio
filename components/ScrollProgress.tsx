'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

// A thin bar along the top edge that fills as you read down the page.
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 200,
        transformOrigin: '0 50%',
        scaleX: reduce ? scrollYProgress : scaleX,
        background: 'linear-gradient(90deg, var(--emerald), var(--ring))',
        pointerEvents: 'none',
      }}
    />
  );
}
