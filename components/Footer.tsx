import Link from 'next/link';
import Wordmark from './Wordmark';
import CopyEmail from './CopyEmail';
import { site } from '@/content/work';
import s from './Footer.module.css';

// Compact footer: one hook, one key action, a slim bottom row.
export default function Footer() {
  return (
    <footer id="contact" className={s.footer}>
      <div className={`pattern-dots-light ${s.texture}`} aria-hidden />
      <div className={s.glow} aria-hidden />
      <div className={`container ${s.inner}`}>
        <div className={s.top}>
          <h2 className={s.hook}>
            Enough about me.
            <br />
            <span className={s.turn}>Let&apos;s connect</span> 🤝
          </h2>
          <div className={s.actions}>
            <CopyEmail email={site.email} />
            <a className={s.ghost} href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            {site.resume && (
              <a className={s.ghost} href={site.resume} target="_blank" rel="noreferrer">
                Résumé ↗
              </a>
            )}
          </div>
        </div>

        <div className={s.bottom}>
          <Wordmark light />
          <nav className={s.links} aria-label="Footer">
            <Link href="/work/ux/">UX work</Link>
            <Link href="/work/brand/">Brand work</Link>
            <Link href="/about/">About</Link>
          </nav>
          <span className={s.copy}>© {new Date().getFullYear()} · Designed and built by me</span>
          <a href="#main" className={s.up} aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
