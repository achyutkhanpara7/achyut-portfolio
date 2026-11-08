'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import s from './gallery.module.css';

export type Photo = { src: string; alt: string; cap: string; shape?: 'tall' | 'wide' | 'big' };

// Masonry-ish photo grid. Click any photo to see it large; arrows and Esc work in the viewer.
export default function Gallery({ photos, label }: { photos: Photo[]; label: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDialogElement>(null);

  const show = useCallback((i: number) => {
    setOpen(i);
    ref.current?.showModal();
  }, []);
  const close = useCallback(() => {
    ref.current?.close();
    setOpen(null);
  }, []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, step]);

  const p = open === null ? null : photos[open];

  return (
    <>
      <ul className={s.grid} aria-label={label}>
        {photos.map((ph, i) => (
          <li key={ph.src} className={ph.shape ? s[ph.shape] : ''}>
            <button type="button" onClick={() => show(i)} aria-label={`Open photo: ${ph.cap}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ph.src} alt={ph.alt} loading="lazy" />
              <span className={s.cap}>{ph.cap}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={ref} className={s.viewer} onClose={() => setOpen(null)} onClick={(e) => e.target === ref.current && close()}>
        {p && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} />
            <figcaption>
              <span>{p.cap}</span>
              <span className={s.count}>
                {(open ?? 0) + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className={`${s.nav} ${s.prev}`} onClick={() => step(-1)} aria-label="Previous photo">
          ←
        </button>
        <button type="button" className={`${s.nav} ${s.next}`} onClick={() => step(1)} aria-label="Next photo">
          →
        </button>
        <button type="button" className={s.close} onClick={close} aria-label="Close">
          ×
        </button>
      </dialog>
    </>
  );
}
