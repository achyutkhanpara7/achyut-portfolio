import Reveal from '@/components/Reveal';
import HeroCard from '@/components/home/HeroCard';
import HeroHeadline from '@/components/home/HeroHeadline';
import Bento from '@/components/home/Bento';
import Process from '@/components/home/Process';
import WorkSwitch from '@/components/home/WorkSwitch';
import Voices from '@/components/home/Voices';
import LiquidButton from '@/components/LiquidButton';
import { site, projects, caseStudies, projectCounts } from '@/content/work';
import h from '@/components/home/hero.module.css';
import s from '@/components/home/home.module.css';

// No client names on the site (NDA): sectors only.
const sectors = ['Financial services', 'Pharma', 'Retail', 'Enterprise AI'];

export default function Home() {
  const featured = projects.filter((p) => caseStudies.some((c) => c.slug === p.slug));
  const brand = projects.filter((p) => p.discipline === 'brand');

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
              I design <b>enterprise AI</b> and data-heavy SaaS for <b>Fortune 100</b> teams. I also build the front-end,
              so what I design is what actually ships.
            </p>

            <div className={`${h.ctas} ${h.stag}`} style={{ ['--s' as string]: '550ms' }}>
              <LiquidButton href="/#work" variant="emerald">
                View selected work
              </LiquidButton>
              <LiquidButton href="/#approach" variant="cream" icon={false}>
                How I work
              </LiquidButton>
            </div>

          </div>

          <HeroCard />
        </div>
      </section>

      {/* ---------- Clients ---------- */}
      <div className="container">
        <div className={s.clients}>
          <span className={s.clientsLabel}>Fortune 100 work in</span>
          <ul className={s.clientsList}>
            {sectors.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Snapshot ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Snapshot</span>
            <h2 className={s.h2}>
              The work, by the <span className="accent">numbers.</span>
            </h2>
          </div>
          <p className={s.sub}>Each number has its source written on the card.</p>
        </Reveal>
        <Bento />
      </section>

      {/* ---------- Work: one section, two paths ---------- */}
      <section id="work" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Work</span>
            <h2 className={s.h2}>
              Two kinds of work. <span className="accent">Pick one.</span>
            </h2>
            <p className={s.sub}>
              Enterprise UX case studies are client work under NDA, so they open with a password. Brand work is open to
              everyone.
            </p>
          </div>
        </Reveal>
        <WorkSwitch ux={featured} brand={brand} uxTotal={projectCounts.ux} brandTotal={projectCounts.brand} />
      </section>

      {/* ---------- How I work ---------- */}
      <section id="approach" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">How I work</span>
            <h2 className={s.h2}>
              From research <span className="accent">to React.</span>
            </h2>
          </div>
          <p className={s.sub}>
            Most designers hand off a file. I hand off a working prototype, built on the same tokens the engineers use.
          </p>
        </Reveal>
        <Process />
      </section>

      {/* ---------- Recommendations ---------- */}
      <section id="voices" className={s.section}>
        <div className="container">
          <Reveal className={s.head}>
            <div>
              <span className="kicker">Recommendations</span>
              <h2 className={s.h2}>
                What people say about <span className="accent">working with me.</span>
              </h2>
            </div>
          </Reveal>
        </div>
        <Voices />
      </section>
    </>
  );
}
