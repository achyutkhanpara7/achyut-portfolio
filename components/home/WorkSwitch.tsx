'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Project } from '@/content/work';
import WorkTile from '../work/WorkTile';
import LiquidButton from '../LiquidButton';
import s from './workswitch.module.css';

type Tab = 'ux' | 'brand';

// One work section, two paths. A hiring manager picks UX or Brand and the grid swaps.
// /#brand opens straight on the brand tab.
export default function WorkSwitch({
  ux,
  brand,
  uxTotal,
  brandTotal,
}: {
  ux: Project[];
  brand: Project[];
  uxTotal: number;
  brandTotal: number;
}) {
  const [tab, setTab] = useState<Tab>('ux');

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#brand') setTab('brand');
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const tabs = [
    {
      key: 'ux' as const,
      title: 'UX case studies',
      line: `${ux.length} in depth · ${uxTotal - ux.length} more in the archive`,
      chip: 'NDA · password',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 9h18M9 9v11" />
        </svg>
      ),
    },
    {
      key: 'brand' as const,
      title: 'Brand & visual',
      line: `${brandTotal} projects · identity, campaigns, social`,
      chip: 'Open',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l7 7-7 11-7-11z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className={s.wrap}>
      <div className={s.switch} role="tablist" aria-label="Type of work">
        {tabs.map((t) => {
          const on = tab === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              id={`tab-${t.key}`}
              aria-selected={on}
              aria-controls="work-panel"
              className={`${s.tab} ${on ? s.on : ''}`}
              onClick={() => setTab(t.key)}
            >
              {on && <motion.span layoutId="work-tab" className={s.pill} transition={{ type: 'spring', stiffness: 380, damping: 34 }} />}
              <span className={s.icon} aria-hidden>
                {t.icon}
              </span>
              <span className={s.text}>
                <span className={s.title}>{t.title}</span>
                <span className={s.line}>{t.line}</span>
              </span>
              <span className={s.chip}>{t.chip}</span>
            </button>
          );
        })}
      </div>

      <div id="work-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className={tab === 'ux' ? s.grid2 : s.grid3}>
              {(tab === 'ux' ? ux : brand).map((p) => (
                <li key={p.slug}>
                  <WorkTile p={p} />
                </li>
              ))}
            </ul>
            <div className={s.more}>
              {tab === 'ux' ? (
                <LiquidButton href="/work/ux/" variant="ink">
                  All UX work · {uxTotal}
                </LiquidButton>
              ) : (
                <LiquidButton href="/work/brand/" variant="mint">
                  All brand work · {brandTotal}
                </LiquidButton>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
