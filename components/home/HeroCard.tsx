'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, AnimatePresence } from 'motion/react';
import { site } from '@/content/work';
import s from './hero.module.css';

const ease = [0.2, 0.8, 0.2, 1] as const;

const answers = [
  {
    q: 'What do you do?',
    a: 'I take enterprise and AI products that are powerful but confusing, and make them clear enough to use on the first try.',
  },
  {
    q: 'How do you work?',
    a: 'Research first, then flows and UI on a design system, then a coded prototype so the team can feel it before it ships.',
  },
  {
    q: 'What tools?',
    a: 'Figma and Figma Variables for design, React and Claude Code for prototypes, Storybook for the system.',
  },
];

const minis = [
  { title: 'GRC Platform', href: '/work/grc/', r: -7, x: -8, y: 10 },
  { title: 'WorldKit DS', href: '/work/worldkit/', r: 0, x: 0, y: 0 },
  { title: '7-Eleven Ops', href: '/work/seven-eleven/', r: 6, x: 8, y: 12 },
];

export default function HeroCard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [typed, setTyped] = useState('');

  // Subtle 3D tilt that follows the pointer
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 18 });

  function onMove(e: React.PointerEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  // Typewriter for the answer
  useEffect(() => {
    if (active === null) return;
    const text = answers[active].a;
    if (reduce) {
      setTyped(text);
      return;
    }
    setTyped('');
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active, reduce]);

  return (
    <motion.div
      ref={ref}
      className={`glass ${s.card}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: 0.15, ease }}
    >
      {/* Top bar */}
      <div className={s.cardTop}>
        <div className={s.tools} aria-hidden>
          <span><svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg></span>
          <span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></svg></span>
          <span><svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg></span>
        </div>
        <a className={s.topLink} href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <svg viewBox="0 0 24 24" aria-hidden><path d="M7 17L17 7M9 7h8v8" /></svg>
        </a>
      </div>

      <div className={s.greet}>
        <p className={s.greetTitle}>Good to see you.</p>
        <p className={s.greetSub}>Here&apos;s what I&apos;ve been building</p>
      </div>

      {/* Portrait with the rings motif behind it */}
      <div className={s.portrait} aria-hidden>
        <span className={`${s.pRing} ${s.pr3}`} />
        <span className={`${s.pRing} ${s.pr2}`} />
        <span className={`${s.pRing} ${s.pr1}`} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/achyut-hero.webp" alt="" className={s.photo} />
      </div>
      <p className={`hand ${s.note}`}>the hard part of AI is the UX :)</p>

      {/* Facts — solid surfaces, never glass on glass */}
      <div className={`${s.facts} ${s.factsL}`}>
        <Fact label="Focus" value="Enterprise & AI UX" icon={<path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />} />
        <Fact label="Builds with" value="Figma + React" icon={<path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />} />
      </div>
      <div className={`${s.facts} ${s.factsR}`}>
        <Fact label="Based in" value="Dallas–Fort Worth" icon={<><circle cx="12" cy="10" r="3" /><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" /></>} />
        <Fact label="Clients" value="Fortune 100" icon={<path d="M4 20V8l8-4 8 4v12M9 20v-6h6v6" />} />
      </div>

      {/* Fanned mini case cards */}
      <div className={s.minis}>
        {minis.map((m, i) => (
          <Link
            key={m.title}
            href={m.href}
            className={s.mini}
            style={{ ['--r' as string]: `${m.r}deg`, ['--x' as string]: `${m.x}px`, ['--y' as string]: `${m.y}px`, zIndex: i === 1 ? 2 : 1 }}
          >
            <span className={s.miniTitle}>{m.title}</span>
            <i /><i /><i />
            <span className={s.miniGo}>Case study →</span>
          </Link>
        ))}
      </div>

      {/* Ask bar */}
      <div className={s.ask}>
        <div className={s.answer} aria-live="polite">
          <AnimatePresence mode="wait">
            {active === null ? (
              <motion.p key="ph" className={s.placeholder} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Ask about the work, my process or my tools…
              </motion.p>
            ) : (
              <motion.p key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {typed}
                <span className={s.caret} aria-hidden />
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className={s.chips}>
          {answers.map((x, i) => (
            <button
              key={x.q}
              className={`${s.chip} ${active === i ? s.chipOn : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
            >
              {x.q}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Fact({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className={s.fact}>
      <span className={s.factIcon}>
        <svg viewBox="0 0 24 24" aria-hidden>{icon}</svg>
      </span>
      <span>
        <span className={s.factLabel}>{label}</span>
        <span className={s.factValue}>{value}</span>
      </span>
    </div>
  );
}
