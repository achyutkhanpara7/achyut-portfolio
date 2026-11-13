'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import s from './story.module.css';

type Mark = { x: number; y: number; t: string };

// A looping product walkthrough, recorded in Figma for the client presentation.
// Plays only while on screen; with reduced motion it waits for a tap. A pause button stops it for good.
export function Clip({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);
  const [paused, setPaused] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !userPaused.current) v.play().catch(() => setStill(true));
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <div className={s.clip}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        controls={still}
        aria-label={label}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      {!still && (
        <button type="button" className={s.clipPause} onClick={toggle} aria-label={paused ? `Play: ${label}` : `Pause: ${label}`}>
          {paused ? (
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
              <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
              <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

// A real product screen on a glass stage. With a clip, a switch flips between the
// walkthrough and the annotated still; hovering a marker or its legend row highlights the pair.
export default function Screen({
  src,
  alt,
  marks,
  clip,
  start = 'clip',
  w = 1916,
  h = 1030,
}: {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  marks?: Mark[];
  clip?: { src: string; poster: string };
  start?: 'clip' | 'still';
}) {
  const [on, setOn] = useState<number | null>(null);
  const [view, setView] = useState<'clip' | 'still'>(clip ? start : 'still');

  return (
    <figure className={s.shot}>
      {clip && (
        <div className={s.switch} role="group" aria-label="How to view this screen">
          <button type="button" aria-pressed={view === 'clip'} onClick={() => setView('clip')}>
            ▶ Watch it work
          </button>
          <button type="button" aria-pressed={view === 'still'} onClick={() => setView('still')}>
            {marks ? 'Annotated screen' : 'Still screen'}
          </button>
        </div>
      )}
      <div className={s.stage}>
        <div className={s.glass}>
          {clip && view === 'clip' ? (
            <Clip src={clip.src} poster={clip.poster} label={`Walkthrough: ${alt}`} />
          ) : (
            <div className={s.imgWrap}>
              <Image src={src} alt={alt} width={w} height={h} sizes="(max-width: 1000px) 100vw, 80vw" />
              {marks?.map((m, i) => (
                <button
                  key={m.t}
                  type="button"
                  className={`${s.mark} ${on === i ? s.markOn : ''}`}
                  style={{ left: `${m.x}%`, top: `${m.y}%` }}
                  onMouseEnter={() => setOn(i)}
                  onMouseLeave={() => setOn(null)}
                  onFocus={() => setOn(i)}
                  onBlur={() => setOn(null)}
                  aria-label={`${i + 1}: ${m.t}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {marks && view === 'still' && (
        <ol className={s.legend}>
          {marks.map((m, i) => (
            <li key={m.t} className={on === i ? s.legendOn : ''} onMouseEnter={() => setOn(i)} onMouseLeave={() => setOn(null)}>
              <span>{i + 1}</span>
              {m.t}
            </li>
          ))}
        </ol>
      )}
    </figure>
  );
}
