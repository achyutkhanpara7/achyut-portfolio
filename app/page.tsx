import Link from 'next/link';
import Reveal from '@/components/Reveal';
import HeroCard from '@/components/home/HeroCard';
import HeroHeadline from '@/components/home/HeroHeadline';
import Marquee from '@/components/home/Marquee';
import Bento from '@/components/home/Bento';
import SelectedWork from '@/components/home/SelectedWork';
import Perspectives from '@/components/home/Perspectives';
import Voices from '@/components/home/Voices';
import { site } from '@/content/work';
import h from '@/components/home/hero.module.css';
import s from '@/components/home/sections.module.css';

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={h.hero}>
        <div className="aura aura-morning" aria-hidden>
          <span /><span /><span />
        </div>
        <div className={`container ${h.grid}`}>
          <div>
            <span className={`${h.status} ${h.stag}`} style={{ ['--s' as string]: '100ms' }}>
              <i aria-hidden />
              {site.role} · {site.location}
            </span>

            <HeroHeadline />

            <p className={`${h.lede} ${h.stag}`} style={{ ['--s' as string]: '450ms' }}>
              I design and ship <b>enterprise AI</b> and data-heavy SaaS — pairing deep research with scalable design
              systems, so <b>complex workflows</b> become products teams <b>keep using</b>.
            </p>

            <div className={`${h.ctas} ${h.stag}`} style={{ ['--s' as string]: '550ms' }}>
              <Link href="/#work" className="btn btn-primary">
                View selected work
                <span className={h.ctaIcon} aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
                </span>
              </Link>
              <Link href="/#perspectives" className="btn btn-ghost">About my approach</Link>
            </div>

            <ul className={`${h.meta} ${h.stag}`} style={{ ['--s' as string]: '620ms' }}>
              <li>Fortune 100 experience</li>
              <li>Enterprise AI</li>
              <li>0→1 products</li>
              <li>Design systems</li>
            </ul>
          </div>

          <HeroCard />
        </div>
        <div className={h.scroll} aria-hidden>
          SCROLL
          <span className={h.mouse} />
        </div>
      </section>

      <Marquee />

      {/* ---------- Snapshot ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Snapshot</span>
          <h2 className={s.h2}>
            The work, by the <span className="accent">numbers.</span>
          </h2>
          <p className={s.sub}>Only real numbers, each with where it comes from.</p>
        </Reveal>
        <Bento />
      </section>

      {/* ---------- Selected work: UX (main 4) or Brand ---------- */}
      <section id="work" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Selected work</span>
          <h2 className={s.h2}>
            Complex products. Made <span className="accent">usable.</span>
          </h2>
          <p className={s.sub}>
            Four enterprise problems, four very different answers — plus the brand work behind them. WorldLink work is
            under NDA, so those case studies open with a password.
          </p>
        </Reveal>
        <SelectedWork />
      </section>

      {/* ---------- Perspectives ---------- */}
      <section id="perspectives" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">About me</span>
          <h2 className={s.h2}>
            Three perspectives.
            <br />
            One <span className="accent">designer.</span>
          </h2>
          <p className={s.sub}>Engineering degree, UX master&apos;s, Fortune 100 clients. Pick the lens that matches you.</p>
        </Reveal>
        <Reveal>
          <Perspectives />
        </Reveal>
      </section>

      {/* ---------- Recommendations ---------- */}
      <section id="voices" className={s.section}>
        <div className="container">
          <Reveal className={s.head}>
            <span className="kicker">Recommendations</span>
            <h2 className={s.h2}>
              What people say about <span className="accent">working with me.</span>
            </h2>
          </Reveal>
        </div>
        <Voices />
      </section>
    </>
  );
}
