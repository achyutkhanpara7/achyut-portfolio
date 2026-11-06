'use client';

import { useState, type CSSProperties } from 'react';
import { contrast, luminance, LIGHT, DARK } from '@/lib/oklch';
import { Dashboard, ComponentSheet, DataTable } from './Specimens';
import s from './playground.module.css';

/* A working slice of the WorldKit token cascade. The curves, the step jobs, the foreground rule,
   surface and density values are the shipped ones; the components only ever read semantic tokens,
   so four inputs re-theme all of them. */

type Mode = 'light' | 'dark';
type Density = 'roomy' | 'compact';
type View = 'dashboard' | 'components' | 'table';

const presets = [
  { h: 23, n: 'WorldLink red' },
  { h: 250, n: 'Blue' },
  { h: 190, n: 'Cyan' },
  { h: 150, n: 'Green' },
  { h: 285, n: 'Violet' },
  { h: 330, n: 'Magenta' },
];

const views: { k: View; n: string }[] = [
  { k: 'dashboard', n: 'Dashboard' },
  { k: 'components', n: 'Components' },
  { k: 'table', n: 'Data table' },
];

function ratio(mode: Mode, h: number) {
  const fill = mode === 'light' ? LIGHT[8] : DARK[8];
  const fg = mode === 'light' ? luminance(0.99, 0.005, h) : luminance(0.228, 0.005, h);
  return contrast(luminance(fill[0], fill[1], h), fg);
}

export default function ThemePlayground({ initial = 23, initialView = 'dashboard' }: { initial?: number; initialView?: View }) {
  const [h1, setH1] = useState(initial);
  const [h2, setH2] = useState(62);
  const [mode, setMode] = useState<Mode>('light');
  const [density, setDensity] = useState<Density>('roomy');
  const [view, setView] = useState<View>(initialView);

  const r = ratio(mode, h1);

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
          <div className={s.segCtl} role="group" aria-label="Mode">
            {(['light', 'dark'] as Mode[]).map((m) => (
              <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
                {m === 'light' ? 'Light' : 'Dark'}
              </button>
            ))}
          </div>
        </div>
        <div className={s.ctl}>
          <span className={s.lab}>Density</span>
          <div className={s.segCtl} role="group" aria-label="Density">
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
            {mode === 'dark' ? 'Near-black' : 'White'} label on the solid fill at {h1}° · {r >= 4.5 ? 'passes AA' : 'below AA'}
          </span>
        </div>
      </div>

      <div className={s.stage}>
        <div className={`${s.segCtl} ${s.segCtl3} ${s.views}`} role="group" aria-label="Preview">
          {views.map((v) => (
            <button key={v.k} type="button" aria-pressed={view === v.k} onClick={() => setView(v.k)}>
              {v.n}
            </button>
          ))}
        </div>
        <div className={s.pg} data-mode={mode} data-density={density} style={{ '--h1': h1, '--h2': h2 } as CSSProperties}>
          {view === 'dashboard' && <Dashboard />}
          {view === 'components' && <ComponentSheet />}
          {view === 'table' && <DataTable />}
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
    </div>
  );
}
