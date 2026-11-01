'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Splash.module.css';

// First visit per session: rings + counter, then the rings zoom through the screen
// and the page settles in from a slight zoom. Skipped for reduced-motion (see layout bootScript).
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

    const total = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / total);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase('exit');
        // reveal page under the expanding rings
        setTimeout(() => {
          d.classList.remove('splashing');
          d.setAttribute('data-ready', '1');
        }, 260);
        setTimeout(() => {
          setPhase('gone');
          d.classList.add('no-splash');
          try {
            sessionStorage.setItem('ak-splash', '1');
          } catch {
            /* private mode — fine */
          }
        }, 1000);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`splash ${s.splash} ${phase === 'exit' ? s.exit : ''}`} aria-hidden>
      <div className={`pattern-dots ${s.dots}`} />
      <div className={s.stage}>
        <span className={`${s.ring} ${s.r3}`} />
        <span className={`${s.ring} ${s.r2}`} />
        <span className={`${s.ring} ${s.r1}`} />
        <span className={s.disc}>
          <span className={s.mono}>ak</span>
        </span>
      </div>
      <div className={s.meta}>
        <span className={s.name}>
          Achyut Khanpara<span className={s.dot}>.</span>
        </span>
        <span className={s.role}>UX Designer &amp; Design Engineer</span>
      </div>
      <div className={s.counter}>
        <span>{String(count).padStart(3, '0')}</span>
        <i style={{ transform: `scaleX(${count / 100})` }} />
      </div>
    </div>
  );
}
