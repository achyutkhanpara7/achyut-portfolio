import s from './Mockup.module.css';

// THE one presentation format for every project image on the site:
// brand gradient stage → browser window → your 16:10 image, always fully visible.
// Image spec: 1600 × 1000 px (16:10), WebP or PNG, in /public/work/<slug>/cover.webp
export default function Mockup({
  src,
  alt = '',
  label,
  locked = false,
  size = 'md',
  priority = false,
}: {
  src: string;
  alt?: string;
  label?: string;
  locked?: boolean;
  size?: 'md' | 'lg';
  priority?: boolean;
}) {
  return (
    <div className={`${s.stage} ${size === 'lg' ? s.lg : ''}`}>
      <span className={s.blobA} aria-hidden />
      <span className={s.blobB} aria-hidden />
      <span className={s.dots} aria-hidden />
      <div className={s.window}>
        <div className={s.bar} aria-hidden>
          <i />
          <i />
          <i />
          {label && <span>{label}</span>}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} />
      </div>
      {locked && (
        <span className={s.lock}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          NDA
        </span>
      )}
    </div>
  );
}
