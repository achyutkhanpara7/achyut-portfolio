'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Eased, momentum-style page scrolling (like the Framer site). Off for reduced motion; touch keeps native scrolling.
// A new page always opens at its top: Lenis keeps its own scroll position, so on every route change it is reset
// (and the page is jumped there instantly, not smooth-scrolled). Back/forward keeps the browser's restored position.
export default function SmoothScroll() {
  const path = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const popRef = useRef(false);
  const first = useRef(true);

  useEffect(() => {
    const onPop = () => {
      popRef.current = true;
    };
    window.addEventListener('popstate', onPop);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => window.removeEventListener('popstate', onPop);
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: { offset: -80 },
      allowNestedScroll: true,
    });
    lenisRef.current = lenis;
    let id = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      window.removeEventListener('popstate', onPop);
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const lenis = lenisRef.current;
    if (popRef.current) {
      // back/forward: let the browser restore, then bring Lenis in line with it
      popRef.current = false;
      requestAnimationFrame(() => lenis?.resize());
      return;
    }
    if (window.location.hash) return; // links to a section on the new page scroll there themselves
    const toTop = () => {
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    };
    toTop();
    // once more after the new page has painted, in case its layout shifted
    const id = requestAnimationFrame(() => requestAnimationFrame(toTop));
    return () => cancelAnimationFrame(id);
  }, [path]);

  return null;
}
