import Reveal from '@/components/Reveal';
import HeroCard from '@/components/home/HeroCard';
import HeroHeadline from '@/components/home/HeroHeadline';
import Snapshot from '@/components/home/snapshot/Snapshot';
import Strip from '@/components/home/Strip';
import Skills from '@/components/home/Skills';
import Toolbelt from '@/components/home/Toolbelt';
import WorkTabs from '@/components/home/WorkTabs';
import Voices from '@/components/home/Voices';
import Expertise from '@/components/home/Expertise';
import LiquidButton from '@/components/LiquidButton';
import { site, projects, caseStudies, projectCounts } from '@/content/work';
import h from '@/components/home/hero.module.css';
import s from '@/components/home/home.module.css';


export default function Home() {
  // home shows four case studies; the rest join the wider UX list
  const featured = projects.filter((p) => caseStudies.some((c) => c.slug === p.slug)).slice(0, 4);

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
              I design <b>B2B SaaS and agentic AI</b> products for <b>Fortune 100</b> teams in fintech, pharma and
              retail: dashboards, data visualization and complex workflows. I also build the front-end, so what I
              design is what actually ships.
            </p>

            <div className={`${h.ctas} ${h.stag}`} style={{ ['--s' as string]: '550ms' }}>
              <LiquidButton href="/#work" variant="emerald">
                View selected work
              </LiquidButton>
              <LiquidButton href="/about/" variant="cream" icon={false}>
                About me
              </LiquidButton>
            </div>

          </div>

          <HeroCard />
        </div>
        {/* strip sits inside the hero so the aura runs behind it */}
        <Strip />
      </section>

      {/* ---------- Snapshot: four numbers in one band ---------- */}
      <section className={`container ${s.snapshot}`} aria-label="Career at a glance">
        <Snapshot />
      </section>

      {/* ---------- Selected work: tabs switch the grid in place ---------- */}
      <section id="work" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Featured projects</span>
            <h2 className={s.h2}>
              Creative craft, <span className="accent">enterprise scale.</span>
            </h2>
          </div>
          <p className={s.sub}>
            I blend creativity with technical depth, so complex products feel simple, human and a little bit delightful.
          </p>
        </Reveal>
        <WorkTabs featured={featured} all={projects.filter((p) => caseStudies.some((c) => c.slug === p.slug))} />
        <div className={s.viewAll}>
          <LiquidButton href="/work/" variant="ink">
            View all work · {projectCounts.all}
          </LiquidButton>
        </div>
      </section>

      {/* ---------- What I do ---------- */}
      <section id="skills" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">What I do</span>
            <h2 className={s.h2}>
              Research, design, <span className="accent">and the product in between.</span>
            </h2>
          </div>
          <p className={s.sub}>
            UX designer, UX researcher and product designer in one seat. Hover a card to see each one in motion.
          </p>
        </Reveal>
        <Skills />
        <Toolbelt />
        <Expertise />
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
