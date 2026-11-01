'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import s from './LiquidButton.module.css';

// WebGL liquid-metal shader (Paper Design). Loaded client-side only, and only
// once the button is on screen — until then a crisp CSS chrome ring stands in.
const LiquidMetal = dynamic(() => import('@paper-design/shaders-react').then((m) => m.LiquidMetal), { ssr: false });

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  size?: 'md' | 'sm';
  icon?: boolean;
  className?: string;
  onClick?: () => void;
};

// Liquid metal CTA: real chrome flowing around a dark glossy face.
// Use for the ONE key action in a view — hero CTA, nav "Let's talk", case-study sign-off.
export default function LiquidButton({ children, href, type = 'button', size = 'md', icon = true, className = '', onClick }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [live, setLive] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting), { rootMargin: '120px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const inner = (
    <>
      <span ref={ref} className={s.metal} aria-hidden>
        {live && (
          <LiquidMetal
            className={s.shader}
            colorBack="#9a9ea0"
            colorTint="#e6f6ef"
            shape="none"
            fit="cover"
            scale={1}
            worldWidth={0}
            worldHeight={0}
            repetition={1.6}
            softness={0.06}
            shiftRed={0.12}
            shiftBlue={0.12}
            distortion={0.12}
            contour={0}
            angle={80}
            speed={hover ? 1.6 : 0.6}
          />
        )}
      </span>
      <span className={s.face}>
        <span className={s.sheen} aria-hidden />
        <span className={s.label}>{children}</span>
        {icon && (
          <span className={s.icon} aria-hidden>
            <svg viewBox="0 0 24 24">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        )}
      </span>
    </>
  );
  const cls = `${s.lm} ${size === 'sm' ? s.sm : ''} ${className}`;
  const hov = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };

  if (href) {
    const external = /^(https?:|mailto:)/.test(href);
    return external ? (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" {...hov}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={cls} {...hov}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...hov}>
      {inner}
    </button>
  );
}
