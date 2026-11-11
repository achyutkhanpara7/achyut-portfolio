'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import s from './story.module.css';

// Motion for every case study, applied once from the (story) layout so no page has to opt in.
// - hero: staggered entrance, title wipes up, the shot drifts with scroll
// - sections: content rises into place as it scrolls in; list and grid items arrive one after another;
//   large media reveals with a soft clip
// - stats count up; cards lift on hover
// Plain IntersectionObserver + CSS transitions (globals.css, "fx-"), so it works in every browser.
// Everything is skipped with prefers-reduced-motion.

const NUM = /^([↓↑+−-]?)(\d{1,3}(?:,\d{3})*|\d+)(\.\d+)?(\s?[%+x×]?)$/;

export default function StoryMotion() {
  const path = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const page = document.querySelector<HTMLElement>(`article.${s.page}`);
    if (!page) return;

    const cleanups: (() => void)[] = [];
    const timers: number[] = [];
    const skip = (el: Element) => !!el.closest('[style*="opacity"], [aria-hidden="true"] *') || el.closest(`.${s.rail}`);
    const big = (el: Element) => {
      const r = el.getBoundingClientRect();
      return { w: r.width, h: r.height };
    };
    const hasMedia = (el: Element) => !!el.querySelector('img, video, svg[viewBox]') && big(el).h > 160;

    // ---------- reveal on scroll ----------
    const targets: HTMLElement[] = [];
    const mark = (el: Element, kind: string, i = 0) => {
      const h = el as HTMLElement;
      if (skip(h) || h.classList.contains('fx-pre')) return;
      h.classList.add('fx-pre', kind);
      h.style.setProperty('--fx-i', String(Math.min(i, 10)));
      targets.push(h);
    };

    const splitInto = (box: Element) => {
      const kids = [...box.children].filter((k) => !(k as HTMLElement).hidden);
      kids.forEach((k, i) => mark(k, hasMedia(k) ? 'fx-media' : 'fx-rise', i));
    };

    // hero
    const hero = page.querySelector(`.${s.hero}`);
    if (hero) {
      [...hero.children].forEach((k, i) => {
        if (k.matches(`.${s.h1}`)) mark(k, 'fx-title', i);
        else if (k.matches(`.${s.heroShot}`)) mark(k, 'fx-media', i);
        else mark(k, 'fx-rise', i);
      });
    }

    // sections and the "next case study" block
    page.querySelectorAll(`.${s.main} > section, .${s.main} > .${s.next}`).forEach((sec) => {
      [...sec.children].forEach((child) => {
        const el = child as HTMLElement;
        if (skip(el)) return;
        if (el.matches(`.${s.h2}`)) return mark(el, 'fx-title');
        if (el.matches(`.${s.kick}`)) return mark(el, 'fx-kick');
        const cs = getComputedStyle(el);
        const n = el.children.length;
        const listy = (el.tagName === 'UL' || el.tagName === 'OL') && n > 1;
        const gridy = (cs.display === 'grid' || (cs.display === 'flex' && cs.flexWrap === 'wrap')) && n > 1 && n <= 16;
        if (listy || gridy) return splitInto(el);
        mark(el, hasMedia(el) ? 'fx-media' : 'fx-rise');
      });
    });

    const land = (el: HTMLElement) => {
      el.classList.add('fx-in');
      const i = Number(el.style.getPropertyValue('--fx-i')) || 0;
      // hand the element back to its own styles once it has landed (frees hover transitions)
      timers.push(
        window.setTimeout(() => {
          el.classList.remove('fx-pre', 'fx-in', 'fx-rise', 'fx-media', 'fx-title', 'fx-kick');
          el.style.removeProperty('--fx-i');
        }, 1300 + i * 70),
      );
    };
    // A fully clipped title has no visible area, so titles are watched through their parent.
    const proxies = new Map<Element, HTMLElement[]>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const via = proxies.get(e.target);
          if (via) via.forEach(land);
          else land(e.target as HTMLElement);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );
    requestAnimationFrame(() =>
      targets.forEach((t) => {
        if (t.classList.contains('fx-title') && t.parentElement) {
          const list = proxies.get(t.parentElement) ?? [];
          list.push(t);
          if (!proxies.has(t.parentElement)) {
            proxies.set(t.parentElement, list);
            io.observe(t.parentElement);
          }
        } else io.observe(t);
      }),
    );
    cleanups.push(() => io.disconnect());

    // ---------- count-up stats ----------
    const nums = [...page.querySelectorAll<HTMLElement>(`.${s.stats} b, [class*="stat"] b, [class*="metric"] b, [class*="kpi"] b`)].filter(
      (b) => b.children.length === 0 && NUM.test((b.textContent || '').trim()),
    );
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const b = e.target as HTMLElement;
          cio.unobserve(b);
          const final = (b.textContent || '').trim();
          const m = final.match(NUM);
          if (!m) return;
          const [, pre, int, dec = '', suf] = m;
          const target = parseFloat(int.replace(/,/g, '') + dec);
          const places = dec ? dec.length - 1 : 0;
          const comma = int.includes(',');
          const t0 = performance.now();
          const dur = 1300;
          b.style.fontVariantNumeric = 'tabular-nums';
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const v = target * (1 - Math.pow(1 - p, 3));
            const txt = comma ? Math.round(v).toLocaleString('en-US') : v.toFixed(places);
            b.textContent = p < 1 ? `${pre}${txt}${suf}` : final;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 },
    );
    nums.forEach((b) => cio.observe(b));
    cleanups.push(() => cio.disconnect());

    // ---------- hover lift for cards ----------
    page.querySelectorAll<HTMLElement>(`.${s.main} li, .${s.main} figure, .${s.main} section > div > div, .${s.main} section > div`).forEach((el) => {
      if (skip(el) || el.closest('a, button') || el.querySelector('video')) return;
      const cs = getComputedStyle(el);
      const filled = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' || cs.backgroundImage !== 'none' || cs.boxShadow !== 'none';
      const round = parseFloat(cs.borderTopLeftRadius) >= 10;
      const { w, h } = big(el);
      if (filled && round && w >= 120 && h >= 56 && w < 900) el.classList.add('fx-card');
    });

    // ---------- hero shot drifts with scroll ----------
    const shot = page.querySelector<HTMLElement>(`.${s.heroShot}`);
    if (shot) {
      let raf = 0;
      const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, window.innerHeight * 1.2);
          shot.style.setProperty('--fx-drift', `${(-y * 0.06).toFixed(1)}px`);
        });
      };
      shot.classList.add('fx-drift');
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(raf);
      });
    }

    return () => {
      cleanups.forEach((c) => c());
      timers.forEach((t) => clearTimeout(t));
    };
  }, [path]);

  return null;
}
