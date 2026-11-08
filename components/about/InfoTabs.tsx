'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import s from './intro.module.css';

export type Row = { role: string; at: string; when: string; now?: boolean };
export type Tool = { n: string; d: string; img: string };

type Key = 'exp' | 'edu' | 'tools' | 'skills';

// One frosted glass panel instead of four long lists: pick a tab, the panel swaps in place.
export default function InfoTabs({
  experience,
  education,
  tools,
  skills,
}: {
  experience: Row[];
  education: Row[];
  tools: Tool[];
  skills: string[];
}) {
  const [tab, setTab] = useState<Key>('exp');
  const tabs: { k: Key; n: string; c: number }[] = [
    { k: 'exp', n: 'Experience', c: experience.length },
    { k: 'edu', n: 'Education', c: education.length },
    { k: 'tools', n: 'Tools', c: tools.length },
    { k: 'skills', n: 'Skills', c: skills.length },
  ];

  const rows = (list: Row[]) => (
    <ol className={s.rows}>
      {list.map((e) => (
        <li key={e.at + e.when} className={e.now ? s.rowNow : ''}>
          <div>
            <b>{e.role}</b>
            <span>{e.at}</span>
          </div>
          <em>{e.when}</em>
        </li>
      ))}
    </ol>
  );

  return (
    <div className={s.panel}>
      <div className={s.tabs} role="tablist" aria-label="About me">
        {tabs.map((t) => (
          <button
            key={t.k}
            type="button"
            role="tab"
            aria-selected={tab === t.k}
            className={tab === t.k ? s.tabOn : ''}
            onClick={() => setTab(t.k)}
          >
            {tab === t.k && <motion.span layoutId="info-tab" className={s.tabPill} transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            <span className={s.tabLabel}>
              {t.n} <em>{t.c}</em>
            </span>
          </button>
        ))}
      </div>

      <div className={s.body} role="tabpanel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {tab === 'exp' && rows(experience)}
            {tab === 'edu' && rows(education)}
            {tab === 'tools' && (
              <ul className={s.tools}>
                {tools.map((t) => (
                  <li key={t.n}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt="" width={44} height={44} />
                    <div>
                      <b>{t.n}</b>
                      <span>{t.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {tab === 'skills' && (
              <ul className={s.skills}>
                {skills.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
