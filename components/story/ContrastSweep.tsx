import { contrast, luminance } from '@/lib/oklch';
import s from './playground.module.css';

/* White text on the step-9 fill, measured at every hue: the old lightness against the shipped one.
   Computed at build time with the same OKLCH maths the browser uses (sRGB, clipped). */
const W = 720;
const H = 260;
const PAD = { l: 44, r: 16, t: 18, b: 52 };
const YMIN = 2.5;
const YMAX = 7.5;

const x = (h: number) => PAD.l + (h / 359) * (W - PAD.l - PAD.r);
const y = (c: number) => PAD.t + (1 - (c - YMIN) / (YMAX - YMIN)) * (H - PAD.t - PAD.b);

function sweep(L: number) {
  const pts: { h: number; c: number }[] = [];
  for (let h = 0; h < 360; h += 2) {
    pts.push({ h, c: contrast(luminance(L, 0.195, h), luminance(0.99, 0.005, h)) });
  }
  return pts;
}

const path = (pts: { h: number; c: number }[]) =>
  pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.h).toFixed(1)} ${y(Math.min(YMAX, p.c)).toFixed(1)}`).join(' ');

export default function ContrastSweep() {
  const old = sweep(0.56);
  const now = sweep(0.495);
  const worst = old.reduce((a, b) => (b.c < a.c ? b : a));
  const worstNow = now.reduce((a, b) => (b.c < a.c ? b : a));

  return (
    <figure className={s.sweep}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`White text contrast on the solid fill across every hue. At lightness 0.560 it drops to ${worst.c.toFixed(1)}:1 near hue ${worst.h}; at 0.495 the lowest is ${worstNow.c.toFixed(1)}:1.`}>
        {[3, 4, 5, 6, 7].map((t) => (
          <g key={t}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} className={s.grid} />
            <text x={PAD.l - 10} y={y(t) + 4} className={s.tick} textAnchor="end">
              {t}:1
            </text>
          </g>
        ))}
        <rect x={PAD.l} y={y(4.5)} width={W - PAD.l - PAD.r} height={y(YMIN) - y(4.5)} className={s.failBand} />
        <line x1={PAD.l} x2={W - PAD.r} y1={y(4.5)} y2={y(4.5)} className={s.aa} />
        <text x={PAD.l + 8} y={y(4.5) + 16} className={s.aaLabel}>
          AA body text · 4.5:1
        </text>

        <path d={path(old)} className={s.old} />
        <path d={path(now)} className={s.now} />

        <circle cx={x(worst.h)} cy={y(worst.c)} r="5" className={s.dotOld} />
        <text x={x(worst.h) + 10} y={y(worst.c) + 18} className={s.callout}>
          {worst.c.toFixed(1)}:1 at the cyans
        </text>

        {Array.from({ length: 90 }, (_, i) => i * 4).map((h) => (
          <rect key={h} x={x(h)} y={H - PAD.b + 12} width={x(4) - x(0) + 0.6} height="12" fill={`oklch(0.495 0.195 ${h})`} />
        ))}
        {[0, 90, 180, 270, 359].map((h) => (
          <text key={h} x={x(h)} y={H - 8} className={s.tick} textAnchor="middle">
            {h === 359 ? '360' : h}
          </text>
        ))}
      </svg>
      <figcaption>
        <span className={s.kOld}>Step 9 at L 0.560</span>
        <span className={s.kNow}>Step 9 at L 0.495, shipped</span>
        <span>White text on the solid fill, at every hue from 0 to 360</span>
      </figcaption>
    </figure>
  );
}
