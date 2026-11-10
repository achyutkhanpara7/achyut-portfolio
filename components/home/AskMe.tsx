'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { site } from '@/content/work';
import s from './askMe.module.css';

// Quick answers for recruiters skimming the hero: tap a question, get a short, true answer.
const qa: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Working on now?',
    a: (
      <>
        UX Designer & Researcher at WorldLink since October 2025, designing agentic AI products for Fortune 100 teams, like{' '}
        <a href="/work/tariff-io/">TARIFF.IO</a> for import compliance and an <a href="/work/grc/">AI GRC platform</a>.
      </>
    ),
  },
  {
    q: 'Design systems?',
    a: (
      <>
        Three, including <a href="/work/worldkit/">WorldKit</a>, WorldLink’s design system: 93 components, from Figma variables to a
        themeable React library.
      </>
    ),
  },
  {
    q: 'Does he code?',
    a: <>Yes. An engineer by degree (B.E. Computer Engineering), he builds front-ends in React, this site included.</>,
  },
  {
    q: 'Open to relocating?',
    a: <>Yes, anywhere in the US. He’s based in Plano, Texas and available for work.</>,
  },
  {
    q: 'How to reach him?',
    a: (
      <>
        <a href={site.calendly} target="_blank" rel="noreferrer">
          Book a 30-minute call
        </a>{' '}
        or email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </>
    ),
  },
];

export default function AskMe() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={s.ask}>
      <p className={s.label}>
        <i aria-hidden>✦</i> Quick answers
      </p>
      <ul className={s.chips}>
        {qa.map((x, i) => (
          <li key={x.q}>
            <button type="button" className={open === i ? s.on : ''} aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              {x.q}
            </button>
          </li>
        ))}
      </ul>
      <AnimatePresence mode="wait">
        {open !== null && (
          <motion.p
            key={open}
            className={s.answer}
            role="status"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {qa[open].a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
