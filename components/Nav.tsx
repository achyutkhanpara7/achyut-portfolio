'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/content/work';
import s from './Nav.module.css';

const links = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/#voices', label: 'Recommendations' },
];

// Floating glass pill — the brand allows glass on floating surfaces only, and this is one.
export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className={s.bar}>
      <div className={`${s.pill} ${scrolled ? s.scrolled : ''}`}>
        <Link href="/" className={s.brand} aria-label="Achyut Khanpara, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.photo} alt="" width={36} height={36} className={s.avatar} />
          <span className={s.name}>
            Achyut Khanpara<span className={s.dot}>.</span>
          </span>
        </Link>

        <span className={s.sep} aria-hidden />

        <nav id="site-menu" className={`${s.links} ${open ? s.open : ''}`} aria-label="Main">
          {links.map((l) => {
            const active = !l.href.includes('#') && path?.startsWith(l.href.replace(/\/$/, ''));
            return (
              <Link key={l.href} href={l.href} className={`${s.link} ${active ? s.active : ''}`}>
                {l.label}
              </Link>
            );
          })}
          <Link href="/#contact" className={s.linkMobileCta}>Let&apos;s talk →</Link>
        </nav>

        <Link href="/#contact" className={s.cta}>
          Let&apos;s talk
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>

        <button className={s.toggle} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
          <span className={s.srOnly}>Menu</span>
          <span className={`${s.burger} ${open ? s.x : ''}`} aria-hidden />
        </button>
      </div>
    </header>
  );
}
