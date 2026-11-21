'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import s from '@/app/brand/brand.module.css';

// Muted looping reel with a visible pause control (WCAG 2.2.2). Reduced motion starts it paused.
export default function Reel({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduce) {
      v.pause();
      setPlaying(false);
    }
  }, [reduce]);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className={s.reel}>
      <video ref={ref} src={src} poster={poster} autoPlay={!reduce} muted loop playsInline preload="metadata" aria-label={label} />
      <button type="button" className={s.reelBtn} onClick={toggle} aria-label={playing ? 'Pause reel' : 'Play reel'}>
        {playing ? (
          <svg viewBox="0 0 24 24" aria-hidden>
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
