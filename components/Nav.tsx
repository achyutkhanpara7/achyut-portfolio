'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/content/work';
import LiquidButton from './LiquidButton';
import s from './Nav.module.css';

const links = [
  { href: '/work/ux/', label: 'UX work', match: ['/work/ux', '/work/grc', '/work/worldkit', '/work/network', '/work/seven'] },
  { href: '/work/brand/', label: 'Brand work', match: ['/work/brand'] },
  { href: '/about/', label: 'About', match: ['/about'] },
];

// At the top it's an open bar: name · links · local time · CTA.
// Scroll and it morphs into a compact floating glass pill.
export default function Nav() {
  const path = usePathname() ?? '';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const fmt = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit' }).format(
          new Date(),
        ),
      );
    fmt();
    const id = setInterval(fmt, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className={`${s.bar} ${scrolled ? s.compact : ''}`}>
      <div className={s.inner}>
        <Link href="/" className={s.brand} aria-label="Achyut Khanpara, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.photo} alt="" width={34} height={34} className={s.avatar} />
          <span className={s.name}>
            Achyut Khanpara<span className={s.dot}>.</span>
          </span>
        </Link>

        <nav id="site-menu" className={`${s.links} ${open ? s.open : ''}`} aria-label="Main">
          {links.map((l) => {
            const active = l.match.some((m) => path.startsWith(m));
            return (
              <Link key={l.href} href={l.href} className={`${s.link} ${active ? s.active : ''}`} aria-current={active ? 'page' : undefined}>
                {l.label}
              </Link>
            );
          })}
          <Link href="/#contact" className={s.mobileCta}>Let&apos;s talk →</Link>
        </nav>

        <div className={s.right}>
          <span className={s.time} title="My local time">
            <i aria-hidden />
            DFW {time && <b suppressHydrationWarning>{time}</b>}
          </span>
          <LiquidButton href="/#contact" size="sm" className={s.cta}>
            Let&apos;s talk
          </LiquidButton>
          <button className={s.toggle} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
            <span className={s.srOnly}>Menu</span>
            <span className={`${s.burger} ${open ? s.x : ''}`} aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
