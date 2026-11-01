import Wordmark from './Wordmark';
import CopyEmail from './CopyEmail';
import { site } from '@/content/work';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={s.footer}>
      <div className={s.aura} aria-hidden>
        <span /><span /><span />
      </div>
      <div className={`container ${s.inner}`}>
        <div className={s.grid}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--ring-faint)' }}>Contact</p>
            <h2 className={s.hook}>
              Enough about me.
              <br />
              <span className={s.turn}>Let&apos;s connect</span> 🤝
            </h2>
            <p className={s.lede}>
              Building something powerful that people find confusing? That&apos;s the conversation I like most.
            </p>
            <CopyEmail email={site.email} />
          </div>

          {/* Dark glass card — floating over the emerald-night aura */}
          <div className={s.card}>
            <div className={s.cardHead}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.photo} alt="" width={56} height={56} className={s.photo} />
              <div>
                <p className={s.cardName}>{site.name}</p>
                <p className={s.cardRole}>{site.location}</p>
              </div>
            </div>
            <p className={s.cardLabel}>Write to me</p>
            <a href={`mailto:${site.email}`} className={s.cardEmail}>{site.email}</a>
            <div className={s.socials}>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></svg>
                LinkedIn
              </a>
              {site.resume && (
                <a href={site.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
              )}
            </div>
          </div>
        </div>

        <div className={s.bottom}>
          <Wordmark light />
          <span>© {new Date().getFullYear()} · Designed and built by me</span>
          <a href="#main" className={s.top}>
            Back to top
            <span aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
