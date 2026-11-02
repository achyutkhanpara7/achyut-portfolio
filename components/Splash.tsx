'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Splash.module.css';

// Minimal loader, first visit per session: the wordmark fades in, a hairline fills under it,
// then everything fades away. Skipped for reduced motion (see layout bootScript).
export default function Splash() {
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

    const t1 = setTimeout(() => {
      setPhase('exit');
      d.classList.remove('splashing');
      d.setAttribute('data-ready', '1');
    }, 1150);
    const t2 = setTimeout(() => {
      setPhase('gone');
      d.classList.add('no-splash');
      try {
        sessionStorage.setItem('ak-splash', '1');
      } catch {
        /* private mode — fine */
      }
    }, 1750);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`splash ${s.splash} ${phase === 'exit' ? s.exit : ''}`} aria-hidden>
      <div className={s.mark}>
        <p className={s.word}>
          Achyut Khanpara<span className={s.dot}>.</span>
        </p>
        <span className={s.line}>
          <i />
        </span>
      </div>
    </div>
  );
}
