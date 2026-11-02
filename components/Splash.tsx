'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Splash.module.css';

const NAME = 'Achyut Khanpara';

// First visit per session: the wordmark rises letter by letter while a counter runs to 100,
// then the whole panel lifts away like a curtain. Skipped for reduced motion (see layout bootScript).
export default function Splash() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'load' | 'exit' | 'gone'>('load');
  const started = useRef(false);

  useEffect(() => {
    const d = document.documentElement;
    if (d.classList.contains('no-splash')) {
      setPhase('gone');
      return;
    }
    if (started.current) return;
    started.current = true;

    const total = 1500;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / total);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setPhase('exit'), 180);
        setTimeout(() => {
          d.classList.remove('splashing');
          d.setAttribute('data-ready', '1');
        }, 420);
        setTimeout(() => {
          setPhase('gone');
          d.classList.add('no-splash');
          try {
            sessionStorage.setItem('ak-splash', '1');
          } catch {
            /* private mode — fine */
          }
        }, 1250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`splash ${s.splash} ${phase === 'exit' ? s.exit : ''}`} aria-hidden>
      <div className={s.top}>
        <span>Portfolio · 2026</span>
        <span>Dallas–Fort Worth, TX</span>
      </div>

      <div className={s.center}>
        <p className={s.word}>
          {NAME.split('').map((ch, i) => (
            <span key={i} className={s.mask}>
              <span className={s.ch} style={{ animationDelay: `${0.08 + i * 0.035}s` }}>
                {ch === ' ' ? ' ' : ch}
              </span>
            </span>
          ))}
          <span className={s.mask}>
            <span className={`${s.ch} ${s.dot}`} style={{ animationDelay: `${0.12 + NAME.length * 0.035}s` }}>
              .
            </span>
          </span>
        </p>
        <p className={s.role}>
          <span>UX Designer</span>
          <i aria-hidden />
          <span>Design Engineer</span>
        </p>
      </div>

      <div className={s.bottom}>
        <span className={s.count}>{count}</span>
        <span className={s.bar}>
          <i style={{ transform: `scaleX(${count / 100})` }} />
        </span>
        <span className={s.label}>loading the good stuff</span>
      </div>
    </div>
  );
}
