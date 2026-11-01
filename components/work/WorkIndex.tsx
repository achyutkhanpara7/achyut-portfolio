'use client';

import Link from 'next/link';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { projects, projectCounts, type Discipline } from '@/content/work';
import ProjectCard from './ProjectCard';
import s from './work.module.css';

type Filter = 'all' | Discipline;

const tabs: { key: Filter; label: string; href: string }[] = [
  { key: 'all', label: 'All work', href: '/work/' },
  { key: 'ux', label: 'UX case studies', href: '/work/ux/' },
  { key: 'brand', label: 'Brand & visual', href: '/work/brand/' },
];

// /work, /work/ux and /work/brand all render this with a different filter.
export default function WorkIndex({ filter }: { filter: Filter }) {
  const list = filter === 'all' ? projects : projects.filter((p) => p.discipline === filter);

  return (
    <LayoutGroup>
      <nav className={s.tabs} aria-label="Filter work">
        {tabs.map((t) => (
          <Link key={t.key} href={t.href} className={`${s.tab} ${t.key === filter ? s.tabOn : ''}`} scroll={false}>
            {t.key === filter && <motion.span layoutId="work-tab" className={s.tabPill} transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }} />}
            <span className={s.tabLabel}>
              {t.label} <em>{projectCounts[t.key]}</em>
            </span>
          </Link>
        ))}
      </nav>

      <motion.ul className={s.grid} layout>
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.32, delay: Math.min(i, 6) * 0.03, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <ProjectCard p={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}
