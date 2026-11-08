'use client';

import { useEffect, useRef, useState } from 'react';
import s from './PlaceScene.module.css';

/* A stippled landscape made of a few thousand dots. Every few seconds the dots drift into the next place
   I've lived or travelled: Arizona → Wyoming → Washington → Texas (home). Silhouettes are drawn with
   canvas paths into a small offscreen mask, then sampled into dot positions. */

const VW = 720;
const VH = 180;
const GROUND = 158;

type Draw = (c: CanvasRenderingContext2D) => void;

function saguaro(c: CanvasRenderingContext2D, x: number, h: number, w: number, flip = false) {
  const top = GROUND - h;
  c.beginPath();
  c.roundRect(x - w / 2, top, w, h + 2, [w / 2, w / 2, 0, 0]);
  c.fill();
  const d = flip ? -1 : 1;
  // left arm
  const ay = top + h * 0.42;
  c.beginPath();
  c.roundRect(x - d * (w * 1.9) - (d > 0 ? 0 : w * 0.7), ay, w * 2.2, w * 0.7, w * 0.35);
  c.fill();
  c.beginPath();
  c.roundRect(x - d * (w * 1.9) - (d > 0 ? 0 : w * 0.7), ay - h * 0.26, w * 0.72, h * 0.28 + w * 0.6, [w * 0.36, w * 0.36, w * 0.2, w * 0.2]);
  c.fill();
  // right arm
  const by = top + h * 0.55;
  c.beginPath();
  c.roundRect(x, by, d * w * 1.7 + (d > 0 ? 0 : -w * 0.0), w * 0.66, w * 0.33);
  c.fill();
  c.beginPath();
  c.roundRect(x + d * w * 1.25 - (d > 0 ? 0 : w * 0.66), by - h * 0.2, w * 0.66, h * 0.22 + w * 0.5, [w * 0.33, w * 0.33, w * 0.2, w * 0.2]);
  c.fill();
}

function pine(c: CanvasRenderingContext2D, x: number, h: number) {
  const w = h * 0.36;
  c.beginPath();
  c.moveTo(x, GROUND - h);
  c.lineTo(x + w / 2, GROUND);
  c.lineTo(x - w / 2, GROUND);
  c.closePath();
  c.fill();
}

const arizona: Draw = (c) => {
  // mesa
  c.globalAlpha = 0.55;
  c.beginPath();
  c.moveTo(430, GROUND);
  c.lineTo(462, 104);
  c.lineTo(486, 98);
  c.lineTo(600, 96);
  c.lineTo(622, 104);
  c.lineTo(660, GROUND);
  c.fill();
  c.globalAlpha = 1;
  saguaro(c, 70, 110, 16);
  saguaro(c, 250, 62, 10, true);
  saguaro(c, 330, 50, 8);
  saguaro(c, 690, 72, 10, true);
  // brush
  for (let x = 20; x < VW; x += 34) {
    c.beginPath();
    c.ellipse(x + ((x * 7) % 13), GROUND - 2, 9, 5, 0, 0, Math.PI * 2);
    c.fill();
  }
};

const wyoming: Draw = (c) => {
  const peaks: [number, number][] = [
    [0, 132], [60, 112], [110, 96], [150, 70], [178, 84], [214, 40], [236, 58], [262, 30], [292, 64], [330, 52],
    [372, 86], [420, 74], [470, 104], [520, 92], [580, 118], [640, 104], [720, 126],
  ];
  c.globalAlpha = 0.7;
  c.beginPath();
  c.moveTo(0, GROUND);
  peaks.forEach(([x, y]) => c.lineTo(x, y));
  c.lineTo(VW, GROUND);
  c.fill();
  c.globalAlpha = 1;
  for (let x = 10; x < VW; x += 22) pine(c, x + ((x * 13) % 9), 22 + ((x * 31) % 26));
};

const washington: Draw = (c) => {
  // Rainier, faint
  c.globalAlpha = 0.28;
  c.beginPath();
  c.moveTo(380, GROUND);
  c.lineTo(560, 70);
  c.lineTo(600, 66);
  c.lineTo(760, GROUND);
  c.fill();
  c.globalAlpha = 1;
  // Space Needle
  const nx = 150;
  c.beginPath();
  c.moveTo(nx - 14, GROUND);
  c.lineTo(nx - 3, 60);
  c.lineTo(nx + 3, 60);
  c.lineTo(nx + 14, GROUND);
  c.fill();
  c.beginPath();
  c.ellipse(nx, 54, 22, 6, 0, 0, Math.PI * 2);
  c.fill();
  c.fillRect(nx - 12, 44, 24, 8);
  c.fillRect(nx - 1, 18, 2, 28);
  // skyline
  const b: [number, number, number][] = [
    [220, 30, 92], [254, 22, 70], [280, 34, 108], [318, 26, 54], [348, 18, 120], [370, 30, 84], [404, 24, 64],
    [432, 34, 98], [470, 20, 58], [494, 28, 76], [526, 22, 50], [552, 30, 40],
  ];
  b.forEach(([x, w, h]) => c.fillRect(x, GROUND - h, w, h + 2));
  c.fillRect(348 + 8, GROUND - 132, 2, 14);
  // water
  c.globalAlpha = 0.35;
  c.fillRect(0, GROUND, VW, 6);
  c.globalAlpha = 1;
};

const texas: Draw = (c) => {
  // Reunion Tower
  const rx = 128;
  c.fillRect(rx - 4, 64, 8, GROUND - 62);
  c.beginPath();
  c.arc(rx, 50, 17, 0, Math.PI * 2);
  c.fill();
  c.fillRect(rx - 1, 24, 2, 12);
  // skyline
  const b: [number, number, number][] = [
    [190, 28, 70], [222, 36, 112], [262, 24, 86], [290, 40, 128], [334, 26, 96], [364, 32, 140], [400, 24, 78],
    [428, 36, 104], [468, 22, 66], [494, 30, 90], [528, 26, 58], [558, 34, 74],
  ];
  b.forEach(([x, w, h]) => c.fillRect(x, GROUND - h, w, h + 2));
  // a slanted crown and a spire
  c.beginPath();
  c.moveTo(290, GROUND - 128);
  c.lineTo(310, GROUND - 146);
  c.lineTo(330, GROUND - 128);
  c.fill();
  c.fillRect(364 + 15, GROUND - 160, 2, 20);
  // highway
  c.globalAlpha = 0.45;
  c.beginPath();
  c.moveTo(0, GROUND - 6);
  c.quadraticCurveTo(360, GROUND - 22, VW, GROUND - 4);
  c.lineTo(VW, GROUND);
  c.lineTo(0, GROUND);
  c.fill();
  c.globalAlpha = 1;
  // a few live oaks
  [40, 620, 680].forEach((x) => {
    c.beginPath();
    c.ellipse(x, GROUND - 16, 22, 13, 0, 0, Math.PI * 2);
    c.fill();
    c.fillRect(x - 2, GROUND - 8, 4, 10);
  });
};

export const places = [
  { key: 'az', name: 'Arizona', note: 'where I studied', draw: arizona },
  { key: 'wy', name: 'Wyoming', note: 'Tetons & Yellowstone', draw: wyoming },
  { key: 'wa', name: 'Washington', note: 'Seattle', draw: washington },
  { key: 'tx', name: 'Texas', note: 'home base', draw: texas },
];

function sample(draw: Draw, n: number, rand: () => number) {
  const cv = document.createElement('canvas');
  cv.width = VW;
  cv.height = VH;
  const c = cv.getContext('2d', { willReadFrequently: true })!;
  c.fillStyle = '#000';
  draw(c);
  // ground haze, densest at the bottom
  const g = c.createLinearGradient(0, GROUND - 6, 0, VH);
  g.addColorStop(0, 'rgba(0,0,0,0.25)');
  g.addColorStop(1, 'rgba(0,0,0,0.9)');
  c.globalAlpha = 1;
  c.fillStyle = g;
  c.fillRect(0, GROUND - 6, VW, VH);
  const data = c.getImageData(0, 0, VW, VH).data;
  const pts: number[] = [];
  let guard = 0;
  while (pts.length < n * 2 && guard < n * 400) {
    guard++;
    const x = rand() * VW;
    const y = rand() * VH;
    const a = data[((y | 0) * VW + (x | 0)) * 4 + 3] / 255;
    if (rand() < a) pts.push(x, y);
  }
  // pair by x so dots travel locally when the scene changes
  const idx = Array.from({ length: pts.length / 2 }, (_, i) => i).sort((a, b) => pts[a * 2] - pts[b * 2]);
  const out = new Float32Array(n * 2);
  idx.forEach((k, i) => {
    out[i * 2] = pts[k * 2];
    out[i * 2 + 1] = pts[k * 2 + 1];
  });
  return out;
}

function mulberry(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const HOLD = 5200;
const MORPH = 2400;

export default function PlaceScene() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(places.length - 1);
  const jump = useRef<(i: number) => void>(() => {});

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext('2d')!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 700;
    const N = small ? 4200 : 10000;
    const rand = mulberry(84);
    const scenes = places.map((p) => sample(p.draw, N, rand));
    const pos = new Float32Array(scenes[3]);
    const from = new Float32Array(N * 2);
    const size = new Float32Array(N);
    const tone = new Uint8Array(N);
    const phase = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      size[i] = 0.8 + rand() * 0.9;
      tone[i] = rand() < 0.16 ? 1 : 0;
      phase[i] = rand() * Math.PI * 2;
    }

    let cur = 3;
    let next = 3;
    let t0 = performance.now();
    let morphing = false;
    let raf = 0;
    let visible = true;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(cv);

    const go = (i: number) => {
      from.set(pos);
      next = i;
      morphing = true;
      t0 = performance.now();
      setActive(i);
    };
    jump.current = (i: number) => {
      if (i !== next) go(i);
    };

    const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const el = now - t0;
      if (morphing) {
        const tgt = scenes[next];
        for (let i = 0; i < N; i++) {
          const x0 = from[i * 2];
          const delay = (x0 / VW) * 0.35;
          const k = ease(Math.min(1, Math.max(0, (el / MORPH - delay) / 0.65)));
          pos[i * 2] = x0 + (tgt[i * 2] - x0) * k;
          pos[i * 2 + 1] = from[i * 2 + 1] + (tgt[i * 2 + 1] - from[i * 2 + 1]) * k - Math.sin(k * Math.PI) * 10;
        }
        if (el > MORPH) {
          morphing = false;
          cur = next;
          t0 = now;
        }
      } else if (!reduce && el > HOLD) {
        go((cur + 1) % scenes.length);
      }

      // scale the 720×180 scene to cover the canvas, centred and anchored to the bottom
      const sx = Math.max(w / VW, (h * 0.92) / VH);
      const ox = (w - VW * sx) / 2;
      const oy = h - VH * sx;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      for (let pass = 0; pass < 2; pass++) {
        ctx.fillStyle = pass === 0 ? 'rgba(244,239,230,0.72)' : 'rgba(111,203,170,0.9)';
        for (let i = 0; i < N; i++) {
          if (tone[i] !== pass) continue;
          const wob = reduce ? 0 : Math.sin(now / 900 + phase[i]) * 0.35;
          const r = size[i];
          ctx.fillRect(ox + pos[i * 2] * sx + wob, oy + pos[i * 2 + 1] * sx, r, r);
        }
      }
    };
    raf = requestAnimationFrame(frame);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) t0 = performance.now();
    });
    io.observe(cv);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div className={s.wrap}>
      <canvas ref={ref} className={s.canvas} aria-hidden />
      <div className={s.places} role="group" aria-label="Places I've lived and travelled">
        {places.map((p, i) => (
          <button key={p.key} type="button" aria-pressed={active === i} onClick={() => jump.current(i)}>
            <b>{p.name}</b>
            <span>{p.note}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
