'use client';

import { useEffect, useRef, useState } from 'react';
import s from './CursorPill.module.css';

// A small pill that follows the pointer over anything with data-cursor="…" (project cards).
// Mouse and trackpad only; touch screens and reduced motion keep the normal cursor.
export default function CursorPill() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0, on = false;
    const tick = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      if (ref.current) ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as Element | null)?.closest?.('[data-cursor]') as HTMLElement | null;
      if (t && !on) {
        on = true;
        cx = x;
        cy = y;
      }
      if (!t) on = false;
      setLabel(t ? t.dataset.cursor || '' : '');
    };
    window.addEventListener('pointermove', move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`${s.pill} ${label ? s.on : ''}`} aria-hidden>
      <span>{label}</span>
    </div>
  );
}
