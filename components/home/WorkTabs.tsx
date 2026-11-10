'use client';

import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import type { Project } from '@/content/work';
import WorkTile from '../work/WorkTile';
import s from './home.module.css';

// Selected work, filterable by industry. "All" shows the featured picks; each industry shows every case study in it.
const groups: { id: string; label: string; sectors: string[] }[] = [
  { id: 'fintech', label: 'Fintech', sectors: ['Fintech'] },
  { id: 'pharma', label: 'Pharma', sectors: ['Pharma'] },
  { id: 'supply', label: 'Retail & supply chain', sectors: ['Retail', 'Supply chain'] },
  { id: 'systems', label: 'Design systems', sectors: ['Design systems'] },
  { id: 'edu', label: 'Higher ed', sectors: ['Higher ed'] },
];

export default function WorkTabs({ featured, all }: { featured: Project[]; all: Project[] }) {
  const [tab, setTab] = useState('all');
  const tabs = [
    { id: 'all', label: 'Featured', count: featured.length },
    ...groups
      .map((g) => ({ id: g.id, label: g.label, count: all.filter((p) => g.sectors.includes(p.sector ?? '')).length }))
      .filter((g) => g.count > 0),
  ];
  const g = groups.find((x) => x.id === tab);
  const shown = g ? all.filter((p) => g.sectors.includes(p.sector ?? '')) : featured;

  return (
    <div className={s.panel}>
      <LayoutGroup id="work-tabs">
        <div className={s.tabs} role="tablist" aria-label="Filter case studies by industry">
          {tabs.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} className={`${s.tab} ${tab === t.id ? s.tabOn : ''}`} onClick={() => setTab(t.id)}>
              {tab === t.id && <motion.span layoutId="work-tab-pill" className={s.tabPill} transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              <span className={s.tabLabel}>
                {t.label}
                <i>{t.count}</i>
              </span>
            </button>
          ))}
        </div>
      </LayoutGroup>
      <AnimatePresence mode="wait" initial={false}>
        <motion.ul
          key={tab}
          role="tabpanel"
          className={s.grid2}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {shown.map((p) => (
            <li key={p.slug}>
              <WorkTile p={p} />
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
