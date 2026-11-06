'use client';

import { useState, type CSSProperties } from 'react';
import { contrast, luminance, LIGHT, DARK } from '@/lib/oklch';
import s from './playground.module.css';

/* A working slice of the WorldKit token cascade. The curves, the step jobs, the foreground rule and
   the density values are the real ones from ds-ui (primitives.css, modes.css, density.css); the
   components below only ever read semantic tokens, so four inputs re-theme all of them. */

type Mode = 'light' | 'dark';
type Density = 'roomy' | 'compact';

const presets = [
  { h: 285, n: 'Violet' },
  { h: 250, n: 'Blue' },
  { h: 190, n: 'Cyan' },
  { h: 150, n: 'Green' },
  { h: 25, n: 'Red' },
  { h: 330, n: 'Magenta' },
];

const bars = [38, 52, 44, 66, 58, 74, 63, 88];
const emphases = ['solid', 'tint', 'outline', 'ghost'] as const;
const tones = [
  { k: 'accent', n: 'Save' },
  { k: 'danger', n: 'Delete' },
  { k: 'warm', n: 'Upgrade' },
] as const;

function ratio(mode: Mode, h: number) {
  const fill = mode === 'light' ? LIGHT[8] : DARK[8];
  const fg = mode === 'light' ? luminance(0.99, 0.005, h) : luminance(0.228, 0.005, h);
  return contrast(luminance(fill[0], fill[1], h), fg);
}

export default function ThemePlayground({ initial = 285 }: { initial?: number }) {
  const [h1, setH1] = useState(initial);
  const [h2, setH2] = useState(62);
  const [mode, setMode] = useState<Mode>('light');
  const [density, setDensity] = useState<Density>('roomy');

  const r = ratio(mode, h1);
  const darkLabel = mode === 'dark';

  return (
    <div className={s.wrap}>
      <div className={s.controls} aria-label="Theme controls">
        <div className={s.ctl}>
          <label htmlFor="pg-h1">
            Primary hue <output>{h1}°</output>
          </label>
          <input id="pg-h1" type="range" min={0} max={360} value={h1} onChange={(e) => setH1(+e.target.value)} className={s.hue} />
        </div>
        <div className={s.ctl}>
          <label htmlFor="pg-h2">
            Secondary hue <output>{h2}°</output>
          </label>
          <input id="pg-h2" type="range" min={0} max={360} value={h2} onChange={(e) => setH2(+e.target.value)} className={s.hue} />
        </div>
        <div className={s.ctl}>
          <span className={s.lab}>Mode</span>
          <div className={s.seg} role="group" aria-label="Mode">
            {(['light', 'dark'] as Mode[]).map((m) => (
              <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
                {m === 'light' ? 'Light' : 'Dark'}
              </button>
            ))}
          </div>
        </div>
        <div className={s.ctl}>
          <span className={s.lab}>Density</span>
          <div className={s.seg} role="group" aria-label="Density">
            {(['roomy', 'compact'] as Density[]).map((d) => (
              <button key={d} type="button" aria-pressed={density === d} onClick={() => setDensity(d)}>
                {d === 'roomy' ? 'Roomy' : 'Compact'}
              </button>
            ))}
          </div>
        </div>
        <div className={s.ctl}>
          <span className={s.lab}>Try a brand</span>
          <div className={s.presets}>
            {presets.map((p) => (
              <button
                key={p.h}
                type="button"
                title={`${p.n} · ${p.h}°`}
                aria-label={`${p.n}, hue ${p.h}`}
                aria-pressed={h1 === p.h}
                onClick={() => setH1(p.h)}
                style={{ background: `oklch(0.495 0.195 ${p.h})` }}
              />
            ))}
          </div>
        </div>
        <div className={s.readout}>
          <b>{r.toFixed(2)}:1</b>
          <span>
            {darkLabel ? 'Near-black' : 'White'} label on the solid fill at {h1}° · {r >= 4.5 ? 'passes AA' : 'below AA'}
          </span>
        </div>
      </div>

      <div
        className={s.pg}
        data-mode={mode}
        data-density={density}
        style={{ '--h1': h1, '--h2': h2 } as CSSProperties}
      >
        <div className={s.bar}>
          <div>
            <b>Analytics overview</b>
            <small>Last 30 days · 4 workspaces</small>
          </div>
          <div className={s.barActions}>
            <span className={`${s.btn} ${s.outline} ${s.accent}`}>Export</span>
            <span className={`${s.btn} ${s.solid} ${s.accent}`}>New report</span>
          </div>
        </div>

        <div className={s.stats}>
          <div className={s.card}>
            <small>Open findings</small>
            <b>128</b>
            <span className={`${s.badge} ${s.bad}`}>▲ 12%</span>
          </div>
          <div className={s.card}>
            <small>Controls passing</small>
            <b>94%</b>
            <span className={`${s.badge} ${s.ok}`}>▲ 3 pts</span>
          </div>
          <div className={s.card}>
            <small>Reviews due</small>
            <b>7</b>
            <span className={`${s.badge} ${s.warn}`}>2 this week</span>
          </div>
        </div>

        <div className={s.row}>
          <div className={s.card}>
            <div className={s.cardHead}>
              <small>Findings closed per week</small>
              <span className={`${s.badge} ${s.tintBadge}`}>Live</span>
            </div>
            <div className={s.chart} aria-hidden>
              {bars.map((v, i) => (
                <i key={i} style={{ height: `${v}%`, background: `var(--a${i === bars.length - 1 ? 9 : 5 + Math.floor(i / 2)})` }} />
              ))}
            </div>
          </div>
          <div className={s.feature}>
            <span className={s.pill}>New</span>
            <b>Change one hue.</b>
            <span>Every component follows.</span>
          </div>
        </div>

        <div className={s.row}>
          <div className={s.card}>
            <div className={s.cardHead}>
              <small>One Button · emphasis × tone</small>
            </div>
            <div className={s.matrix}>
              {tones.map((t) =>
                emphases.map((e) => (
                  <span key={t.k + e} className={`${s.btn} ${s[e]} ${s[t.k]}`}>
                    {t.n}
                  </span>
                )),
              )}
            </div>
          </div>
          <div className={s.card}>
            <span className={s.fLabel}>Work email</span>
            <span className={s.input}>alex@worldlink.com</span>
            <span className={s.helper}>We&apos;ll send the report here.</span>
            <div className={s.switchRow}>
              <span className={s.switch} aria-hidden>
                <i />
              </span>
              Weekly digest
            </div>
          </div>
        </div>

        <ol className={s.ramp} aria-label="The 12-step accent ramp">
          {Array.from({ length: 12 }, (_, i) => {
            const step = i + 1;
            const darkText = mode === 'light' ? step <= 8 : step >= 8;
            return (
              <li key={step} style={{ background: `var(--a${step})`, color: darkText ? 'var(--n12x)' : 'var(--n1x)' }}>
                {step}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
