import Reveal from '@/components/Reveal';
import HeroCard from '@/components/home/HeroCard';
import HeroHeadline from '@/components/home/HeroHeadline';
import Bento from '@/components/home/Bento';
import Squiggle from '@/components/home/think/Squiggle';
import Principles from '@/components/home/think/Principles';
import Different from '@/components/home/think/Different';
import WorkTile from '@/components/work/WorkTile';
import Voices from '@/components/home/Voices';
import LiquidButton from '@/components/LiquidButton';
import { site, projects, caseStudies, projectCounts } from '@/content/work';
import h from '@/components/home/hero.module.css';
import s from '@/components/home/home.module.css';
import t from '@/components/home/think/think.module.css';

// No client names on the site (NDA): sectors only.
const sectors = ['Financial services', 'Pharma', 'Retail', 'Enterprise AI'];

export default function Home() {
  const featured = projects.filter((p) => caseStudies.some((c) => c.slug === p.slug));

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
                How I think
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

      {/* ---------- Selected work: the four main case studies ---------- */}
      <section id="work" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Selected work</span>
            <h2 className={s.h2}>
              Enterprise products, <span className="accent">made usable.</span>
            </h2>
            <p className={s.sub}>
              Four case studies from client work. They&apos;re under NDA, so each one opens with a password.
            </p>
          </div>
        </Reveal>
        <ul className={s.grid2}>
          {featured.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 0.08}>
              <WorkTile p={p} />
            </Reveal>
          ))}
        </ul>
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
        <div className={t.pair}>
          <Different />
          <Principles />
        </div>
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
