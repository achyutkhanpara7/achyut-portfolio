'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import s from './Mockup.module.css';

// THE one presentation format for every project image on the site:
// a stage in the project's colour (brand mint by default) → a frosted glass bezel → a 16:10 image,
// or a looping preview video that only plays while it's on screen.
// Cards open up as they scroll into view (a soft inset clip that relaxes to full size).
export default function Mockup({
  src,
  alt = '',
  locked = false,
  size = 'md',
  priority = false,
  theme,
  video,
  poster,
  sector,
}: {
  src: string;
  alt?: string;
  /** kept for older call sites; the glass frame has no title bar */
  label?: string;
  locked?: boolean;
  size?: 'md' | 'lg';
  priority?: boolean;
  /** project colour family; without it the stage stays brand mint */
  theme?: string;
  /** looping preview; the still image is the fallback */
  video?: string;
  poster?: string;
  /** short industry label, e.g. "Pharma" */
  sector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 35%'] });
  const inset = useTransform(scrollYProgress, [0, 1], [9, 0]);
  const side = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const clip = useTransform([inset, side], ([i, sd]) => `inset(${i}% ${sd}% 0% ${sd}% round 28px)`);
  const scale = useTransform(scrollYProgress, [0, 1], [0.965, 1]);

  // play only while visible; respect reduced motion
  useEffect(() => {
    const v = vid.current;
    if (!v || reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  const showVideo = video && !reduce;

  return (
    <motion.div
      ref={ref}
      className={`${s.stage} ${size === 'lg' ? s.lg : ''} ${theme ? s[theme] : ''} ${showVideo ? s.hasVideo : ''}`}
      style={size === 'lg' || reduce ? undefined : { clipPath: clip, scale }}
    >
      <span className={s.blobA} aria-hidden />
      <span className={s.blobB} aria-hidden />
      <span className={s.dots} aria-hidden />
      {showVideo ? (
        <video
          ref={vid}
          className={s.video}
          src={video}
          poster={poster ?? src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      ) : (
        <div className={s.glass}>
          <div className={s.shot}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} />
            <span className={s.sheen} aria-hidden />
          </div>
        </div>
      )}
      <div className={s.chips}>
        {locked && (
          <span className={s.lock} aria-label="Password-protected">
            <svg viewBox="0 0 24 24" aria-hidden>
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          </span>
        )}
        {sector && <span className={s.sector}>{sector}</span>}
      </div>
    </motion.div>
  );
}
