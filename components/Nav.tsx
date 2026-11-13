'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/content/work';
import LiquidButton from './LiquidButton';
import s from './Nav.module.css';

const links = [
  { href: '/work/', label: 'Work', match: ['/work'] },
  { href: '/about/', label: 'About', match: ['/about'] },
];

// Full-width glass header, fixed to the top: name · links · local time · CTA.
export default function Nav() {
  const path = usePathname() ?? '';
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');

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

  // Mobile menu: Escape closes it and returns focus to the toggle; tabbing out of the header closes it;
  // opening it moves focus to the first link.
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onFocus = (e: FocusEvent) => {
      const header = toggleRef.current?.closest('header');
      if (header && e.target instanceof Node && !header.contains(e.target)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('focusin', onFocus);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('focusin', onFocus);
    };
  }, [open]);

  return (
    <header className={s.bar}>
      <div className={s.inner}>
        <Link href="/" className={s.brand} aria-label="Achyut Khanpara, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.photo} alt="" width={34} height={34} className={s.avatar} />
          <span className={s.name}>
            Achyut Khanpara<span className={s.dot}>.</span>
          </span>
        </Link>

        <nav ref={menuRef} id="site-menu" className={`${s.links} ${open ? s.open : ''}`} aria-label="Main">
          {links.map((l) => {
            const active = l.match.some((m) => path.startsWith(m));
            return (
              <Link key={l.href} href={l.href} className={`${s.link} ${active ? s.active : ''}`} aria-current={active ? 'page' : undefined}>
                {l.label}
              </Link>
            );
          })}
          <a href={site.linkedin} target="_blank" rel="noreferrer" className={s.link}>
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <span className={s.mobileCta}>
            <LiquidButton href="/contact/" variant="emerald">
              Let&apos;s talk
            </LiquidButton>
          </span>
        </nav>

        <div className={s.right}>
          <span className={s.time} title="My local time">
            <i aria-hidden />
            Plano {time && <b suppressHydrationWarning>{time}</b>}
          </span>
          <LiquidButton href="/contact/" size="sm" variant="black" className={s.cta}>
            Let&apos;s talk
          </LiquidButton>
          <button
            ref={toggleRef}
            className={s.toggle}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={s.srOnly}>{open ? 'Close menu' : 'Menu'}</span>
            <span className={`${s.burger} ${open ? s.x : ''}`} aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
