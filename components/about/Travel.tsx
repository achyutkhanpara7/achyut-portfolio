'use client';

import { useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Lightbox, { type Photo } from './Lightbox';
import s from './travel.module.css';

export type Trip = {
  key: string;
  title: string;
  state: string;
  abbr: string;
  cover: string;
  coverAlt: string;
  coverPos?: string;
  note: string;
  photos: Photo[];
};

// Postcards with a curled corner that begs to be turned. The back has a handwritten note, a stamp,
// and a button that opens the few photos picked from that trip.
export default function Travel({ trips }: { trips: Trip[] }) {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState<string | null>(null);
  const [roll, setRoll] = useState<Photo[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const open = (photos: Photo[], i: number) => {
    setRoll(photos);
    setIndex(i);
  };
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + roll.length) % roll.length)), [roll.length]);

  return (
    <>
      <div className={s.cards}>
        {trips.map((t, i) => {
          const on = flipped === t.key;
          return (
            <motion.div
              key={t.key}
              className={s.slot}
              initial={reduce ? false : { opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: [-2.5, 2, 1.5, -2][i % 4] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.08 }}
            >
              <div className={`${s.card} ${on ? s.on : ''}`}>
                <button
                  type="button"
                  className={`${s.face} ${s.front}`}
                  onClick={() => setFlipped(on ? null : t.key)}
                  aria-label={`Flip the ${t.title} postcard`}
                  aria-pressed={on}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.cover} alt={t.coverAlt} style={{ objectPosition: t.coverPos }} loading="lazy" />
                  <span className={s.greet}>Greetings from</span>
                  <span className={s.big}>{t.title}</span>
                  <span className={s.curl} aria-hidden>
                    <i />
                  </span>
                  <span className={`hand ${s.turnHint}`}>turn me over</span>
                </button>
                <div className={`${s.face} ${s.back}`}>
                  <div className={s.msg}>
                    <p className="hand">{t.note}</p>
                    <span className={s.sig}>— A.</span>
                  </div>
                  <div className={s.addr}>
                    <span className={s.stamp}>
                      <b>{t.abbr}</b>
                      <i>USA</i>
                    </span>
                    <span className={s.postmark} aria-hidden>
                      {t.state.toUpperCase()}
                    </span>
                    <span className={s.line}>to: whoever&apos;s reading</span>
                    <span className={s.line}>{t.state}</span>
                    <div className={s.backBtns}>
                      <button type="button" className={s.roll} onClick={() => open(t.photos, 0)}>
                        Photos · {t.photos.length}
                      </button>
                      <button type="button" className={s.unflip} onClick={() => setFlipped(null)} aria-label="Flip back">
                        ↻
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Lightbox photos={roll} index={index} onClose={() => setIndex(null)} onStep={step} />
    </>
  );
}
