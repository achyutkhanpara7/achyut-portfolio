'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import s from './stickers.module.css';

// A desk of polaroids you can push around. Each one is a real photo; the last one dragged comes to the top.
const shots = [
  { src: '/img/about/teton-me.webp', cap: 'the tetons', x: 4, y: 8, r: -7, w: 34, pos: '50% 62%' },
  { src: '/img/about/yellowstone-me.webp', cap: 'yellowstone', x: 44, y: 2, r: 5, w: 40, pos: '50% 40%', wide: true },
  { src: '/img/about/concert.webp', cap: 'front row', x: 50, y: 46, r: -4, w: 42, pos: '25% 50%', wide: true },
  { src: '/img/about/coffee.webp', cap: 'coffee first', x: 22, y: 56, r: 8, w: 30, pos: '50% 50%' },
  { src: '/img/about/asu-diploma.webp', cap: 'class of 2025', x: 72, y: 14, r: 10, w: 24, pos: '50% 30%' },
];

const alts = [
  'Achyut in front of the Teton range',
  'Achyut at Mammoth Hot Springs in Yellowstone',
  'Achyut at a concert under blue lasers',
  'Two lattes and a croissant',
  'Achyut in his ASU cap and gown with his diploma',
];

export default function Stickers() {
  const desk = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [order, setOrder] = useState(shots.map((_, i) => i));
  const lift = (i: number) => setOrder((o) => [...o.filter((k) => k !== i), i]);

  return (
    <div ref={desk} className={s.desk}>
      {shots.map((p, i) => (
        <motion.figure
          key={p.src}
          className={`${s.card} ${p.wide ? s.wide : ''}`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.w}%`, zIndex: order.indexOf(i) + 1 }}
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 0, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: p.r, scale: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 16, delay: 0.15 + i * 0.09 }}
          drag
          dragConstraints={desk}
          dragElastic={0.18}
          dragMomentum
          whileDrag={{ scale: 1.06, rotate: 0, cursor: 'grabbing' }}
          whileHover={reduce ? undefined : { scale: 1.03 }}
          onPointerDown={() => lift(i)}
        >
          <span className={s.tape} aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.src} alt={alts[i]} draggable={false} style={{ objectPosition: p.pos }} />
          <figcaption>{p.cap}</figcaption>
        </motion.figure>
      ))}
      <p className={`hand ${s.hint}`}>go on, move them around :)</p>
    </div>
  );
}
