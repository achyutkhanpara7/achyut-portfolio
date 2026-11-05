import Reveal from '@/components/Reveal';
import HeroCard from '@/components/home/HeroCard';
import HeroHeadline from '@/components/home/HeroHeadline';
import Snapshot from '@/components/home/snapshot/Snapshot';
import Strip from '@/components/home/Strip';
import Squiggle from '@/components/home/think/Squiggle';
import WorkTabs from '@/components/home/WorkTabs';
import Voices from '@/components/home/Voices';
import LiquidButton from '@/components/LiquidButton';
import { site, projects, caseStudies, projectCounts } from '@/content/work';
import h from '@/components/home/hero.module.css';
import s from '@/components/home/home.module.css';


export default function Home() {
  // home shows four case studies; the rest join the wider UX list
  const featured = projects.filter((p) => caseStudies.some((c) => c.slug === p.slug)).slice(0, 4);
  const brand = projects.filter((p) => p.discipline === 'brand');
  const moreUx = projects.filter((p) => p.discipline === 'ux' && !featured.some((f) => f.slug === p.slug));

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
              I design <b>enterprise and agentic AI</b> products for <b>Fortune 100</b> teams. I also build the
              front-end, so what I design is what actually ships.
            </p>

            <div className={`${h.ctas} ${h.stag}`} style={{ ['--s' as string]: '550ms' }}>
              <LiquidButton href="/#work" variant="emerald">
                View selected work
              </LiquidButton>
              <LiquidButton href="/#approach" variant="cream" icon={false}>
                How I think
              </LiquidButton>
            </div>

          </div>

          <HeroCard />
        </div>
        {/* strip sits inside the hero so the aura runs behind it */}
        <Strip />
      </section>

      {/* ---------- Snapshot ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Snapshot</span>
            <h2 className={s.h2}>
              My career, <span className="accent">at a glance.</span>
            </h2>
          </div>
          <p className={s.sub}>From an engineering degree in Gujarat to enterprise AI in Texas.</p>
        </Reveal>
        <Snapshot />
      </section>

      {/* ---------- Selected work: tabs switch the grid in place ---------- */}
      <section id="work" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Selected work</span>
            <h2 className={s.h2}>
              Enterprise products, <span className="accent">made usable.</span>
            </h2>
            <p className={s.sub}>
              Client case studies are under NDA, so each one opens with a password. Brand work is open to everyone.
            </p>
          </div>
        </Reveal>
        <WorkTabs cases={featured} brand={brand} moreUx={moreUx} />
        <div className={s.viewAll}>
          <LiquidButton href="/work/" variant="ink">
            View all work · {projectCounts.all}
          </LiquidButton>
        </div>
      </section>

      {/* ---------- How I think: process, principles, why me ---------- */}
      <section id="approach" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">How I think</span>
            <h2 className={s.h2}>
              Pixels are cheap. <span className="accent">Confusion is expensive.</span>
            </h2>
          </div>
          <p className={s.sub}>
            My job is to make complex enterprise and AI products clear enough to use on the first try. Here&apos;s how a
            messy problem gets there.
          </p>
        </Reveal>
        <Squiggle />
      </section>

      {/* ---------- Recommendations ---------- */}
      <section id="voices" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Recommendations</span>
            <h2 className={s.h2}>
              What people say about <span className="accent">working with me.</span>
            </h2>
          </div>
        </Reveal>
        <Voices />
      </section>
    </>
  );
}
