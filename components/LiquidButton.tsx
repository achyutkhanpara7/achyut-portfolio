import Link from 'next/link';
import s from './LiquidButton.module.css';

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  size?: 'md' | 'sm';
  icon?: boolean;
  className?: string;
  onClick?: () => void;
};

// Liquid metal CTA: a chrome ring (emerald-tinted) that flows around a dark glossy face.
// Use for the ONE key action in a view — hero CTA, nav "Let's talk", case-study sign-off.
export default function LiquidButton({ children, href, type = 'button', size = 'md', icon = true, className = '', onClick }: Props) {
  const inner = (
    <>
      <span className={s.metal} aria-hidden />
      <span className={s.glow} aria-hidden />
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

  if (href) {
    const external = /^(https?:|mailto:)/.test(href);
    return external ? (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {inner}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

// One shared SVG filter that gives the metal its liquid wobble. Rendered once in the root layout.
export function LiquidMetalDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden focusable="false">
      <filter id="lm-liquid" x="-10%" y="-30%" width="120%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.018 0.045" numOctaves="2" seed="7" result="noise">
          <animate attributeName="baseFrequency" dur="9s" values="0.018 0.045;0.026 0.06;0.018 0.045" repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
