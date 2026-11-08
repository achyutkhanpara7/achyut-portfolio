'use client';

import { useCallback, useRef, useState } from 'react';
import s from './beforeAfter.module.css';

// Drag (or use the arrow keys) to wipe between the old page and the redesign.
export default function BeforeAfter({
  before,
  after,
  alt,
  ratio = '16 / 11',
}: {
  before: string;
  after: string;
  alt: [string, string];
  ratio?: string;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const move = useCallback((clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={box}
      className={s.ba}
      style={{ aspectRatio: ratio }}
      onPointerDown={(e) => {
        drag.current = true;
        (e.target as Element).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => drag.current && move(e.clientX)}
      onPointerUp={() => (drag.current = false)}
      onPointerCancel={() => (drag.current = false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={s.img} src={after} alt={alt[1]} draggable={false} />
      <div className={s.clip} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={s.img} src={before} alt={alt[0]} draggable={false} />
      </div>
      <span className={`${s.tag} ${s.tagL}`}>Before</span>
      <span className={`${s.tag} ${s.tagR}`}>After</span>
      <div
        className={s.handle}
        style={{ left: `${pos}%` }}
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5));
          if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5));
        }}
      >
        <i aria-hidden>‹ ›</i>
      </div>
    </div>
  );
}
