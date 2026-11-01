import Link from 'next/link';
import CopyEmail from './CopyEmail';
import { site } from '@/content/work';
import s from './Footer.module.css';

const cols = [
  {
    title: 'Work',
    links: [
      { label: 'UX case studies', href: '/work/ux/' },
      { label: 'Brand & visual', href: '/work/brand/' },
      { label: 'All work', href: '/work/' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About me', href: '/about/' },
      { label: 'How I work', href: '/#perspectives' },
      { label: 'Recommendations', href: '/#voices' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn ↗', href: site.linkedin, external: true },
      { label: 'Email', href: `mailto:${site.email}`, external: true },
      ...(site.resume ? [{ label: 'Résumé ↗', href: site.resume, external: true }] : []),
    ],
  },
];

// Hook + one key action on the left, sitemap on the right, the wordmark as a big sign-off.
export default function Footer() {
  return (
    <footer id="contact" className={s.footer}>
      <div className={s.glow} aria-hidden />
      <div className={`container ${s.inner}`}>
        <div className={s.top}>
          <div className={s.lead}>
            <h2 className={s.hook}>
              Enough about me.
              <br />
              <span className={s.turn}>Let&apos;s connect</span> 🤝
            </h2>
            <p className={s.lede}>Building something powerful that people find confusing? That&apos;s the conversation I like most.</p>
            <CopyEmail email={site.email} />
          </div>

          <nav className={s.cols} aria-label="Footer">
            {cols.map((c) => (
              <div key={c.title}>
                <p className={s.colTitle}>{c.title}</p>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {'external' in l && l.external ? (
                        <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href}>{l.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={s.bottom}>
          <span>© {new Date().getFullYear()} {site.name} · Designed and built by me</span>
          <span>{site.location}</span>
          <a href="#main" className={s.up}>
            Back to top
            <span aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            </span>
          </a>
        </div>
      </div>

      <p className={s.sign} aria-hidden>
        Achyut Khanpara<span>.</span>
      </p>
    </footer>
  );
}
