'use client';

import { motion, useReducedMotion } from 'motion/react';

// Brand motion rule: elements enter with a fade + 8px rise, 320ms, brand easing.
export default function Reveal({
  children,
  delay = 0,
  as = 'div',
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'li';
  className?: string;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.32, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
