import { site } from '@/content/work';
import s from './statusBar.module.css';

// A slim line above the header for recruiters: availability, location and a one-click booking.
export default function StatusBar() {
  return (
    <div className={s.bar}>
      <p className={s.inner}>
        <span className={s.live}>
          <i aria-hidden /> Open to Product Design &amp; UX Research roles
        </span>
        <span className={s.sep} aria-hidden>
          ·
        </span>
        <span className={s.hideSm}>Plano, TX · relocating anywhere in the US</span>
        <a href={site.calendly} target="_blank" rel="noreferrer" className={s.cta}>
          Book a call <span aria-hidden>→</span>
        </a>
      </p>
    </div>
  );
}
