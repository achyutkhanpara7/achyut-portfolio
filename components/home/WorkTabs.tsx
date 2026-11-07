'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Project } from '@/content/work';
import WorkTile from '../work/WorkTile';
import s from './home.module.css';

type Tab = 'all' | 'ux' | 'brand';

// Selected work with glass tabs that switch the grid right here on the home page.
export default function WorkTabs({ cases, brand, moreUx }: { cases: Project[]; brand: Project[]; moreUx: Project[] }) {
  const [tab, setTab] = useState<Tab>('all');
  const tabs: { k: Tab; label: string; n: number }[] = [
    { k: 'all', label: 'All work', n: cases.length + moreUx.length + brand.length },
    { k: 'ux', label: 'Product & UX design', n: cases.length + moreUx.length },
    { k: 'brand', label: 'Brand design', n: brand.length },
  ];

  return (
    <>
      <div className={s.paths} role="tablist" aria-label="Type of work">
        {tabs.map((t) => (
          <button
            key={t.k}
            type="button"
            role="tab"
            aria-selected={tab === t.k}
            className={`${s.path} ${tab === t.k ? s.pathOn : ''}`}
            onClick={() => setTab(t.k)}
          >
            {t.label} <em>{t.n}</em>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={tab}
          role="tabpanel"
          className={s.panel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {tab !== 'brand' && (
            <ul className={s.grid2}>
              {cases.map((p) => (
                <li key={p.slug}>
                  <WorkTile p={p} />
                </li>
              ))}
            </ul>
          )}

          {tab === 'ux' && moreUx.length > 0 && (
            <div className={s.more}>
              <p className={s.moreHead}>More UX work · write-ups in progress</p>
              <ul>
                {moreUx.map((p) => (
                  <li key={p.slug}>
                    <b>{p.title}</b>
                    <span>{p.context}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === 'all' && <p className={s.subHead}>Brand &amp; visual</p>}
          {tab !== 'ux' && (
            <ul className={s.grid3}>
              {brand.map((p) => (
                <li key={p.slug}>
                  <WorkTile p={p} />
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
