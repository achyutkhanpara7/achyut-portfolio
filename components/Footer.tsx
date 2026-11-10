import Link from 'next/link';
import CopyRow from './CopyRow';
import LiquidButton from './LiquidButton';
import LocalTime from './LocalTime';
import PlaceScene from './PlaceScene';
import { site } from '@/content/work';
import s from './Footer.module.css';

// Simple sign-off: one big line, contact rows you can copy, and a slim bottom bar.
export default function Footer() {
  return (
    <footer id="contact" className={s.footer}>
      <div className={s.glow} aria-hidden />
      <div className={`container ${s.inner}`}>
        <div className={s.top}>
          <div>
            <h2 className={`${s.hook} sfx`}>
              Enough about me.
              <br />
              <span className={s.turn}>Let&apos;s connect</span> 🤝
            </h2>
            <p className={s.lede}>
              Building something powerful that people find confusing? That&apos;s the conversation I like most.
            </p>
            <div className={s.say}>
              <LiquidButton href={site.calendly} variant="mint">
                Book a call
              </LiquidButton>
              <LiquidButton href="/contact/" variant="cream" icon={false}>
                Say hello
              </LiquidButton>
            </div>
          </div>

          <div className={s.rows}>
            <CopyRow label="Email" value={site.email} href={`mailto:${site.email}`} icon="mail" copy />
            <CopyRow label="LinkedIn" value="in/achyut-khanpara" href={site.linkedin} icon="in" />
            {site.resume && <CopyRow label="Résumé" value="PDF" href={site.resume} icon="doc" />}
            <p className={s.status}>
              <span className={s.avail}>
                <i aria-hidden /> Available for work
              </span>
              <span className={s.reloc}>Open to relocation anywhere in the US</span>
            </p>
            <p className={s.time}>
              <i aria-hidden /> <LocalTime /> in Plano, Texas
            </p>
          </div>
        </div>

        <PlaceScene />

        <div className={s.bottom}>
          <span className={s.word}>
            Achyut Khanpara<b>.</b>
          </span>
          <nav className={s.links} aria-label="Footer">
            <Link href="/work/">Work</Link>
            <Link href="/about/">About</Link>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </nav>
          <span>© {new Date().getFullYear()} · Designed and built by me</span>
          <a href="#main" className={s.up} aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
