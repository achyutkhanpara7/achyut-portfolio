'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import s from '@/app/brand/brand.module.css';

export type Slide = { src: string; title: string; n: string };

// The brand book turns sideways as you scroll down: the section pins and the slide row slides left.
// Phones and reduced motion get a plain swipeable row instead.
export default function BookScroll({ slides }: { slides: Slide[] }) {
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: pin, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  useEffect(() => {
    const measure = () => {
      const t = track.current;
      if (t) setDist(Math.max(0, t.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const row = slides.map((sl) => (
    <figure key={sl.src} className={s.slide}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={sl.src} alt={`WorldLink brand book: ${sl.title}`} loading="lazy" width={1600} height={900} />
      <figcaption>
        <b>{sl.n}</b>
        {sl.title}
      </figcaption>
    </figure>
  ));

  if (reduce)
    return (
      <div className={s.bookPlain} tabIndex={0} role="region" aria-label="Brand book slides">
        {row}
      </div>
    );

  return (
    <>
      <div ref={pin} className={s.bookPin} style={{ height: `calc(100vh + ${Math.round(dist * 0.6)}px)` }}>
        <div className={s.bookStage}>
          <motion.div ref={track} className={s.bookTrack} style={{ x }}>
            {row}
          </motion.div>
        </div>
      </div>
      <div className={s.bookPlainMobile} tabIndex={0} role="region" aria-label="Brand book slides">
        {row}
      </div>
    </>
  );
}
