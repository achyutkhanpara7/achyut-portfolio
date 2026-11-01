import Link from 'next/link';
import Reveal from '@/components/Reveal';
import HeroCard from '@/components/home/HeroCard';
import Marquee from '@/components/home/Marquee';
import Bento from '@/components/home/Bento';
import FeatureCards from '@/components/home/FeatureCards';
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
            <Reveal>
              <span className={h.status}>
                <i aria-hidden />
                {site.role} · {site.location}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className={h.h1}>
                <span className={h.soft}>Pixels are cheap.</span>
                <br />
                Confusion is <span className={h.marker}>expensive.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className={h.lede}>
                I design and build <b>enterprise and AI products</b> — pairing deep research with scalable design
                systems, so <b>complex workflows</b> become products people <b>use on the first try</b>.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className={h.ctas}>
                <Link href="/#work" className="btn btn-primary">
                  View selected work
                  <span className={h.ctaIcon} aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </span>
                </Link>
                <Link href="/#perspectives" className="btn btn-ghost">How I work</Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className={h.meta}>
                <li>Fortune 100 clients</li>
                <li>Enterprise AI</li>
                <li>0→1 products</li>
                <li>Design systems</li>
              </ul>
            </Reveal>
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
          <span className={s.kicker}>Snapshot</span>
          <h2 className={s.h2}>
            The work, <span className="turn">by the numbers.</span>
          </h2>
          <p className={s.sub}>Only real numbers, each with where it comes from.</p>
        </Reveal>
        <Bento />
      </section>

      {/* ---------- Selected work ---------- */}
      <section id="work" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className={s.kicker}>Selected work</span>
          <h2 className={s.h2}>
            Complex products. <span className="turn">Made usable.</span>
          </h2>
          <p className={s.sub}>Four enterprise problems, four very different answers — and the thinking behind each one.</p>
        </Reveal>
        <FeatureCards />
      </section>

      {/* ---------- Perspectives ---------- */}
      <section id="perspectives" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className={s.kicker}>About me</span>
          <h2 className={s.h2}>
            Three perspectives.
            <br />
            <span className="turn">One designer.</span>
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
            <span className={s.kicker}>Recommendations</span>
            <h2 className={s.h2}>
              What people say <span className="turn">about working with me.</span>
            </h2>
          </Reveal>
        </div>
        <Voices />
      </section>
    </>
  );
}
