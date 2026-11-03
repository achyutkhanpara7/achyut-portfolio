'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import s from './story.module.css';

type Mark = { x: number; y: number; t: string };

// A looping product walkthrough, recorded in Figma for the client presentation.
// Plays only while on screen; with reduced motion it waits for a tap.
export function Clip({ src, poster, label, eager }: { src: string; poster: string; label: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setStill(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => setStill(true));
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className={s.clip}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload={eager ? 'auto' : 'none'}
        controls={still}
        aria-label={label}
      />
    </div>
  );
}

// A real product screen with numbered markers. Hovering a marker or its legend
// row highlights the pair. With a clip, a switch flips between the walkthrough
// and the annotated still.
export default function Screen({
  src,
  alt,
  marks,
  clip,
  start = 'clip',
}: {
  src: string;
  alt: string;
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
            Watch it work
          </button>
          <button type="button" aria-pressed={view === 'still'} onClick={() => setView('still')}>
            Annotated screen
          </button>
        </div>
      )}
      <div className={s.stage}>
        {clip && view === 'clip' ? (
          <Clip src={clip.src} poster={clip.poster} label={`Walkthrough: ${alt}`} />
        ) : (
          <div className={s.imgWrap}>
            <Image src={src} alt={alt} width={1916} height={1030} sizes="(max-width: 1000px) 100vw, 80vw" />
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
      {marks && (
        <ol className={s.legend}>
          {marks.map((m, i) => (
            <li
              key={m.t}
              className={on === i ? s.legendOn : ''}
              onMouseEnter={() => setOn(i)}
              onMouseLeave={() => setOn(null)}
              onClick={() => setView('still')}
            >
              <span>{i + 1}</span>
              {m.t}
            </li>
          ))}
        </ol>
      )}
    </figure>
  );
}
