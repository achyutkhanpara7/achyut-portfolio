'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import s from './flowGallery.module.css';

type Flow = { id: string; label: string; slides: { src: string; alt: string }[] };

// Final screens, one flow at a time: tabs pick the flow, arrows step through its screens.
export default function FlowGallery({ flows }: { flows: Flow[] }) {
  const [f, setF] = useState(0);
  const [k, setK] = useState(0);
  const flow = flows[f];
  const n = flow.slides.length;
  const pick = (i: number) => {
    setF(i);
    setK(0);
  };

  return (
    <div className={s.wrap}>
      <div className={s.tabs} role="tablist" aria-label="Screen flows">
        {flows.map((x, i) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={i === f}
            className={i === f ? s.on : ''}
            onClick={() => pick(i)}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div className={s.stage} role="tabpanel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${flow.id}-${k}`}
            className={s.slide}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={flow.slides[k].src} alt={flow.slides[k].alt} width={1600} height={1000} sizes="(max-width: 900px) 100vw, 900px" />
          </motion.div>
        </AnimatePresence>
        {n > 1 && (
          <div className={s.nav}>
            <button type="button" aria-label="Previous screens" onClick={() => setK((v) => (v - 1 + n) % n)}>
              ←
            </button>
            <span>
              {k + 1} / {n}
            </span>
            <button type="button" aria-label="Next screens" onClick={() => setK((v) => (v + 1) % n)}>
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
