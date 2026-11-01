'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import s from './interactive.module.css';

const ease = [0.2, 0.8, 0.2, 1] as const;

/* ------------------------------------------------------------
   BeforeAfter — drag the handle to compare two screens.
   Without images it shows labelled placeholders.
   ------------------------------------------------------------ */
export function BeforeAfter({
  before,
  after,
  alt = 'Before and after comparison',
  ratio = '16 / 10',
}: {
  before?: string;
  after?: string;
  alt?: string;
  ratio?: string;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div className={s.ba} style={{ aspectRatio: ratio }}>
      <div className={`${s.baPane} ${s.baAfter}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {after ? <img src={after} alt={`${alt} — after`} /> : <span>After</span>}
      </div>
      <div className={`${s.baPane} ${s.baBefore}`} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {before ? <img src={before} alt={`${alt} — before`} /> : <span>Before</span>}
      </div>
      <div className={s.baLine} style={{ left: `${pos}%` }} aria-hidden>
        <span className={s.baKnob}>⟷</span>
      </div>
      <input
        className={s.baRange}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}

/* ------------------------------------------------------------
   Stepper — click through a flow (e.g. Monitor → Resolve → Prove).
   ------------------------------------------------------------ */
export type Step = { label: string; title: string; body: string; image?: string };

export function Stepper({ steps }: { steps: Step[] }) {
  const [i, setI] = useState(0);
  const step = steps[i];
  return (
    <div className={s.stepper}>
      <div className={s.stepTabs} role="tablist">
        {steps.map((st, k) => (
          <button
            key={st.label}
            role="tab"
            aria-selected={k === i}
            className={`${s.stepTab} ${k === i ? s.stepOn : ''}`}
            onClick={() => setI(k)}
          >
            <span className={s.stepNum}>{k + 1}</span>
            {st.label}
          </button>
        ))}
        <motion.span
          className={s.stepBar}
          animate={{ width: `${((i + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.32, ease }}
          aria-hidden
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          className={s.stepPanel}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease }}
          role="tabpanel"
        >
          <h4>{step.title}</h4>
          <p>{step.body}</p>
          {step.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={step.image} alt={step.title} className={s.stepImg} />
          ) : (
            <div className={s.stepPh}>Add screen: {step.label}</div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------
   PersonaSwitcher — one ecosystem, different jobs.
   ------------------------------------------------------------ */
export type Persona = { name: string; needs: string; sees: string[] };

export function PersonaSwitcher({ personas }: { personas: Persona[] }) {
  const [i, setI] = useState(0);
  const p = personas[i];
  return (
    <div className={s.personas}>
      <div className={s.personaList} role="tablist" aria-label="Personas">
        {personas.map((x, k) => (
          <button
            key={x.name}
            role="tab"
            aria-selected={k === i}
            className={`${s.personaBtn} ${k === i ? s.personaOn : ''}`}
            onClick={() => setI(k)}
          >
            <span className={s.avatar} aria-hidden>{x.name.slice(0, 1)}</span>
            {x.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={p.name}
          className={s.personaCard}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          role="tabpanel"
        >
          <span className="eyebrow">Needs</span>
          <p className={s.personaNeeds}>{p.needs}</p>
          <span className="eyebrow">Sees first</span>
          <ul>
            {p.sees.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------
   TokenPlayground — change a few tokens, watch every component follow.
   Shows *why* a token pipeline matters, in five seconds.
   ------------------------------------------------------------ */
const themes = {
  Emerald: { accent: '#087F63', soft: '#DDF1E7' },
  Cobalt: { accent: '#2952CC', soft: '#E3EAFB' },
  Plum: { accent: '#7A3E9D', soft: '#F1E6F7' },
  Ember: { accent: '#C2410C', soft: '#FDEBDD' },
};
type ThemeName = keyof typeof themes;

export function TokenPlayground() {
  const [theme, setTheme] = useState<ThemeName>('Emerald');
  const [radius, setRadius] = useState(12);
  const [dense, setDense] = useState(false);
  const t = themes[theme];
  const vars = {
    ['--pg-accent' as string]: t.accent,
    ['--pg-soft' as string]: t.soft,
    ['--pg-r' as string]: `${radius}px`,
    ['--pg-pad' as string]: dense ? '10px' : '16px',
  };

  return (
    <div className={s.pg}>
      <div className={s.pgControls}>
        <fieldset>
          <legend>color.accent</legend>
          <div className={s.pgSwatches}>
            {(Object.keys(themes) as ThemeName[]).map((n) => (
              <button
                key={n}
                className={`${s.pgSwatch} ${n === theme ? s.pgSwatchOn : ''}`}
                style={{ background: themes[n].accent }}
                onClick={() => setTheme(n)}
                aria-label={`${n} accent`}
                aria-pressed={n === theme}
              />
            ))}
          </div>
        </fieldset>
        <label>
          <span>radius.md — {radius}px</span>
          <input type="range" min={0} max={24} value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
        </label>
        <label className={s.pgToggle}>
          <input type="checkbox" checked={dense} onChange={(e) => setDense(e.target.checked)} />
          <span>density.compact</span>
        </label>
        <code className={s.pgCode}>
          --accent: {t.accent};<br />--radius-md: {radius}px;<br />--space-pad: {dense ? 10 : 16}px;
        </code>
      </div>

      <div className={s.pgPreview} style={vars}>
        <div className={s.pgCard}>
          <div className={s.pgCardHead}>
            <span className={s.pgBadge}>Active</span>
            <span className={s.pgMuted}>Policy review</span>
          </div>
          <p className={s.pgCardTitle}>Quarterly access audit</p>
          <div className={s.pgBar}><span style={{ width: '64%' }} /></div>
          <div className={s.pgRow}>
            <button className={s.pgBtn}>Approve</button>
            <button className={s.pgBtnGhost}>Request changes</button>
          </div>
        </div>
        <div className={s.pgInputRow}>
          <input className={s.pgInput} placeholder="Search controls…" aria-label="Demo search field" />
          <span className={s.pgChip}>Filter: Open</span>
        </div>
      </div>
    </div>
  );
}
