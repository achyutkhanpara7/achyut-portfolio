'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import s from './sections.module.css';

const lenses = [
  {
    tab: 'Recruiters & hiring managers',
    greeting: 'Dear recruiters & hiring managers,',
    body: 'I work on the products most teams find intimidating — compliance platforms, network governance, AI operations dashboards — and make them clear enough to use on the first try. Engineering degree, UX master’s, and a year of Fortune 100 client work at WorldLink.',
    link: { label: 'See the case studies', href: '/work/' },
    facts: [
      ['20+', '0→1 initiatives led end-to-end'],
      ['F100', 'JPMorgan Chase, Citi, AbbVie, 7-Eleven'],
      ['4.0', 'M.S. UX Design, ASU'],
    ],
  },
  {
    tab: 'Designers',
    greeting: 'Hey, fellow designer,',
    body: 'I start with evidence — interviews, audits, task maps — and only then open Figma. Everything I design sits on tokens and components, so the system does the boring work and the craft goes where people actually notice it.',
    link: { label: 'Try the WorldKit token playground', href: '/work/worldkit/' },
    facts: [
      ['Tokens', 'Figma Variables → Tailwind → Storybook'],
      ['WCAG 2.2', 'Accessibility built into components'],
      ['Research', 'Audits, interviews, usability tests'],
    ],
  },
  {
    tab: 'Engineers & PMs',
    greeting: 'Hi, engineers & PMs,',
    body: 'I design it, then I build it. Prototypes come as working React, not just pictures, and design decisions arrive as tokens you can import — fewer “that’s not what the mock showed” conversations.',
    link: { label: 'See a coded prototype', href: '/work/network-governance/' },
    facts: [
      ['~50%', 'Less design-to-dev rework with WorldKit'],
      ['React', 'Coded prototypes with Claude Code'],
      ['Hand-off', 'Specs, tokens and Storybook docs'],
    ],
  },
];

export default function Perspectives() {
  const [i, setI] = useState(0);
  const l = lenses[i];
  return (
    <div>
      <div className={s.tabs} role="tablist" aria-label="Choose your perspective">
        {lenses.map((x, k) => (
          <button
            key={x.tab}
            role="tab"
            aria-selected={k === i}
            className={`${s.tab} ${k === i ? s.tabOn : ''}`}
            onClick={() => setI(k)}
          >
            {k === i && <motion.span layoutId="tab-pill" className={s.tabPill} transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }} />}
            <span className={s.tabLabel}>{x.tab}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          className={s.lens}
          role="tabpanel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className={s.lensCopy}>
            <p className={s.lensHi}>{l.greeting}</p>
            <p className={s.lensBody}>{l.body}</p>
            <Link href={l.link.href} className={s.lensLink}>{l.link.label} →</Link>
          </div>
          <ul className={s.lensFacts}>
            {l.facts.map(([v, t]) => (
              <li key={v}>
                <span className={s.lensV}>{v}</span>
                <span className={s.lensT}>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
