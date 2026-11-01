'use client';

import { useEffect, useRef, useState } from 'react';
import s from './hero.module.css';

const WORDS = ['revenue', 'adoption', 'retention', 'growth'];

// v2 headline: each line rises out of its own mask, a marker sweeps under
// "enterprise AI", and the keyword after "drive" rotates every 3.8s.
// Lines start when <html data-ready> is set (after the splash, or immediately).
export default function HeroHeadline() {
  const [i, setI] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [first, setFirst] = useState(true);
  const morph = useRef<HTMLSpanElement>(null);
  const items = useRef<(HTMLElement | null)[]>([]);

  // width follows the current word, so the comma glides along
  useEffect(() => {
    const fit = () => {
      const el = items.current[i];
      if (el && morph.current) morph.current.style.setProperty('--w', `${el.offsetWidth - 4}px`);
    };
    fit();
    window.addEventListener('resize', fit);
    document.fonts?.ready.then(fit);
    return () => window.removeEventListener('resize', fit);
  }, [i]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setFirst(false);
      setI((cur) => {
        setPrev(cur);
        return (cur + 1) % WORDS.length;
      });
    }, 3800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 720);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <h1 className={s.h1}>
      <span className={s.line} data-line style={{ ['--s' as string]: '170ms' }}>
        <span className={s.quiet}>
          I design <span className={s.mark}><i>enterprise AI</i></span>
        </span>
      </span>
      <span className={s.line} data-line style={{ ['--s' as string]: '250ms' }}>
        <span className={s.quiet}>products that</span>
      </span>
      <span className={s.line} data-line style={{ ['--s' as string]: '340ms' }}>
        <span>
          drive
          <span className={s.sr}> {WORDS[i]}</span>
          <span ref={morph} className={`${s.morph} ${first ? s.first : ''}`} aria-hidden>
            {WORDS.map((w, k) => (
              <i
                key={w}
                ref={(el) => {
                  items.current[k] = el;
                }}
                className={`accent ${k === i ? s.on : ''} ${k === prev ? s.out : ''}`}
              >
                {w}
              </i>
            ))}
          </span>
          ,
        </span>
      </span>
      <span className={s.line} data-line style={{ ['--s' as string]: '440ms' }}>
        <span>and delight users.</span>
      </span>
    </h1>
  );
}
