'use client';

import { useEffect, useRef } from 'react';
import s from './lightbox.module.css';

export type Photo = { src: string; alt: string; cap: string; place?: string };

// Shared photo viewer. Arrows step, Esc or a click outside closes.
export default function Lightbox({
  photos,
  index,
  onClose,
  onStep,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onStep: (d: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, onStep]);

  const p = index === null ? null : photos[index];

  return (
    <dialog ref={ref} className={s.viewer} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      {p && (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.src} alt={p.alt} />
          <figcaption>
            <span>
              {p.cap}
              {p.place && <em> · {p.place}</em>}
            </span>
            <span className={s.count}>
              {(index ?? 0) + 1} / {photos.length}
            </span>
          </figcaption>
        </figure>
      )}
      {photos.length > 1 && (
        <>
          <button type="button" className={`${s.nav} ${s.prev}`} onClick={() => onStep(-1)} aria-label="Previous photo">
            ←
          </button>
          <button type="button" className={`${s.nav} ${s.next}`} onClick={() => onStep(1)} aria-label="Next photo">
            →
          </button>
        </>
      )}
      <button type="button" className={s.close} onClick={onClose} aria-label="Close">
        ×
      </button>
    </dialog>
  );
}
