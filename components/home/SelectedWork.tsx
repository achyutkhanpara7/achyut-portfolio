'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { projects, projectCounts } from '@/content/work';
import FeatureCards from './FeatureCards';
import ProjectCard from '../work/ProjectCard';
import s from './selected.module.css';

const ease = [0.2, 0.8, 0.2, 1] as const;

// One section, two lenses: the 4 main UX case studies, or brand & visual work.
export default function SelectedWork() {
  const [lens, setLens] = useState<'ux' | 'brand'>('ux');
  const brand = projects.filter((p) => p.discipline === 'brand');

  return (
    <>
      <div className={s.bar}>
        <div className={s.switch} role="tablist" aria-label="Choose a type of work">
          {(['ux', 'brand'] as const).map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={lens === k}
              className={`${s.opt} ${lens === k ? s.on : ''}`}
              onClick={() => setLens(k)}
            >
              {lens === k && <motion.span layoutId="lens-pill" className={s.pill} transition={{ duration: 0.32, ease }} />}
              <span className={s.label}>
                {k === 'ux' ? 'UX case studies' : 'Brand & visual'}
                <em>{projectCounts[k]}</em>
              </span>
            </button>
          ))}
        </div>
        <Link href={lens === 'ux' ? '/work/ux/' : '/work/brand/'} className={s.all}>
          View all {lens === 'ux' ? 'UX work' : 'brand work'}
          <span aria-hidden>→</span>
        </Link>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={lens}
          role="tabpanel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease }}
        >
          {lens === 'ux' ? (
            <FeatureCards />
          ) : (
            <ul className={s.brandGrid}>
              {brand.map((p) => (
                <li key={p.slug}>
                  <ProjectCard p={p} />
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
