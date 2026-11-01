'use client';

import { motion } from 'motion/react';
import s from './process.module.css';

const steps = [
  {
    t: 'Understand',
    d: 'Talk to the people who use it, audit what exists, map the real tasks.',
    out: ['Stakeholder interviews', 'UX audit', 'Task maps'],
    icon: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4" />,
  },
  {
    t: 'Structure',
    d: 'Decide what goes where before deciding how it looks.',
    out: ['Information architecture', 'User flows', 'Personas'],
    icon: <path d="M9 3h6v5H9zM3 16h6v5H3zM15 16h6v5h-6zM12 8v4M6 16v-4h12v4" />,
  },
  {
    t: 'Design',
    d: 'Screens built from the design system, not one-off frames.',
    out: ['WorldKit components', 'Hi-fi UI', 'WCAG 2.2 checks'],
    icon: <path d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3" />,
  },
  {
    t: 'Build',
    d: 'A coded prototype the team can click, on the same tokens engineers ship.',
    out: ['React prototypes', 'Storybook', 'Dev hand-off'],
    icon: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  },
];

const pipeline = ['Figma Variables', 'Design tokens', 'Tailwind', 'React', 'Storybook'];

const ease = [0.22, 1, 0.36, 1] as const;

// "How I work" as a diagram: a four-step rail plus the design-to-code pipeline.
export default function Process() {
  return (
    <div className={s.wrap}>
      <ol className={s.rail}>
        <motion.span
          className={s.track}
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease }}
        />
        {steps.map((st, i) => (
          <motion.li
            key={st.t}
            className={s.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.18, ease }}
          >
            <span className={s.node}>
              <svg viewBox="0 0 24 24" aria-hidden>
                {st.icon}
              </svg>
              <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
            </span>
            <h3 className={s.t}>{st.t}</h3>
            <p className={s.d}>{st.d}</p>
            <ul className={s.out}>
              {st.out.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <motion.div
        className={s.pipe}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className={s.pipeHead}>
          <span className={s.pipeKick}>Where design meets code</span>
          <p className={s.pipeTitle}>
            One pipeline, so the design <em>is</em> the build.
          </p>
        </div>
        <ol className={s.flow}>
          {pipeline.map((p, i) => (
            <li key={p}>
              <span className={s.box}>{p}</span>
              {i < pipeline.length - 1 && (
                <span className={s.arrow} aria-hidden>
                  <i style={{ animationDelay: `${i * 0.35}s` }} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </motion.div>
    </div>
  );
}
