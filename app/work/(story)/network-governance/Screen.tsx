'use client';

import Image from 'next/image';
import { useState } from 'react';
import s from './story.module.css';

type Mark = { x: number; y: number; t: string };

// A real product screen in a browser frame. Numbered markers sit on the screen;
// hovering a marker or its legend row highlights the pair.
export default function Screen({
  src,
  alt,
  marks,
  priority,
  bare,
}: {
  src: string;
  alt: string;
  marks?: Mark[];
  priority?: boolean;
  bare?: boolean;
}) {
  const [on, setOn] = useState<number | null>(null);
  return (
    <figure className={bare ? s.shotBare : s.shot}>
      <div className={s.frame}>
        <div className={s.bar} aria-hidden>
          <i />
          <i />
          <i />
        </div>
        <div className={s.imgWrap}>
          <Image src={src} alt={alt} width={1916} height={1030} sizes="(max-width: 1200px) 100vw, 1120px" priority={priority} />
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
      </div>
      {marks && (
        <ol className={s.legend}>
          {marks.map((m, i) => (
            <li
              key={m.t}
              className={on === i ? s.legendOn : ''}
              onMouseEnter={() => setOn(i)}
              onMouseLeave={() => setOn(null)}
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
