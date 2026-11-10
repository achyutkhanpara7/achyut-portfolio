'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import s from './tabs.module.css';

// Several related views in one place: pill tabs on top, one panel at a time below.
export default function Tabs({ tabs, label }: { tabs: { id: string; label: string; panel: React.ReactNode }[]; label: string }) {
  const [i, setI] = useState(0);
  return (
    <div className={s.wrap}>
      <div className={s.tabs} role="tablist" aria-label={label}>
        {tabs.map((t, k) => (
          <button key={t.id} type="button" role="tab" aria-selected={k === i} className={k === i ? s.on : ''} onClick={() => setI(k)}>
            {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={tabs[i].id}
          role="tabpanel"
          className={s.panel}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {tabs[i].panel}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
