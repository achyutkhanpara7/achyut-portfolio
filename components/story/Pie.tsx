'use client';

import { useEffect, useRef, useState } from 'react';
import s from './pie.module.css';

type Slice = { v: number; label: string; color: string; text?: string };

// A donut that draws itself once it scrolls into view. Values are percentages that add up to 100.
export default function Pie({ slices, title }: { slices: Slice[]; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const r = 70;
  const c = 2 * Math.PI * r;
  let acc = 0;

  return (
    <div ref={ref} className={`${s.pie} ${on ? s.on : ''}`}>
      <svg viewBox="0 0 200 200" role="img" aria-label={`${title}: ${slices.map((x) => `${x.v}% ${x.label}`).join(', ')}`}>
        <circle cx="100" cy="100" r={r} className={s.track} />
        {slices.map((x, i) => {
          const len = (x.v / 100) * c;
          const off = acc;
          acc += len;
          return (
            <circle
              key={x.label}
              cx="100"
              cy="100"
              r={r}
              className={s.seg}
              style={{
                stroke: x.color,
                strokeDasharray: `${on ? len : 0} ${c}`,
                strokeDashoffset: -off,
                transitionDelay: `${0.15 + i * 0.5}s`,
              }}
            />
          );
        })}
      </svg>
      <ul className={s.legend}>
        {slices.map((x, i) => (
          <li key={x.label} style={{ transitionDelay: `${0.5 + i * 0.5}s` }}>
            <i style={{ background: x.color }} />
            <b>{x.v}%</b>
            <span>{x.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
