'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import s from './intro.module.css';

// The role in the heading cycles inside a frosted glass pill that resizes to fit each word.
const roles = ['Product Designer', 'UX Designer', 'UX Researcher', 'Design Engineer'];

export default function RoleRotator() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <motion.span layout className={s.role} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
      <span className={s.srOnly}>{roles.join(', ')}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[i]}
          className={s.roleWord}
          aria-hidden
          initial={{ y: '90%', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-90%', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
