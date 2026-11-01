import Reveal from '@/components/Reveal';
import HeroCard from '@/components/home/HeroCard';
import HeroHeadline from '@/components/home/HeroHeadline';
import Bento from '@/components/home/Bento';
import Approach from '@/components/home/Approach';
import Voices from '@/components/home/Voices';
import WorkTile from '@/components/work/WorkTile';
import LiquidButton from '@/components/LiquidButton';
import { site, projects, caseStudies, projectCounts } from '@/content/work';
import h from '@/components/home/hero.module.css';
import s from '@/components/home/home.module.css';

const clients = ['JPMorgan Chase', 'Citi', 'AbbVie', '7-Eleven'];

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
              I design and ship <b>enterprise AI</b> and data-heavy SaaS — pairing deep research with scalable design
              systems, so <b>complex workflows</b> become products teams <b>keep using</b>.
            </p>

            <div className={`${h.ctas} ${h.stag}`} style={{ ['--s' as string]: '550ms' }}>
              <LiquidButton href="/#work" variant="emerald">
                View selected work
              </LiquidButton>
              <LiquidButton href="/#approach" variant="cream" icon={false}>
                How I work
              </LiquidButton>
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

      {/* ---------- Clients ---------- */}
      <div className="container">
        <div className={s.clients}>
          <span className={s.clientsLabel}>Fortune 100 client work</span>
          <ul className={s.clientsList}>
            {clients.map((c) => (
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
          <p className={s.sub}>Only real numbers, each with where it comes from.</p>
        </Reveal>
        <Bento />
      </section>

      {/* ---------- Selected work ---------- */}
      <section id="work" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Selected work</span>
            <h2 className={s.h2}>
              Complex products, made <span className="accent">clear.</span>
            </h2>
            <p className={s.sub}>
              Four enterprise and AI case studies. Client work is under NDA, so those open with a password.
            </p>
          </div>
          <LiquidButton href="/work/" variant="ink" size="sm">
            All work · {projectCounts.all}
          </LiquidButton>
        </Reveal>
        <ul className={s.grid2}>
          {featured.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 0.08}>
              <WorkTile p={p} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- Approach ---------- */}
      <section id="approach" className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">How I work</span>
        </Reveal>
        <Approach />
      </section>

      {/* ---------- Brand & visual ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <div>
            <span className="kicker">Brand &amp; visual</span>
            <h2 className={s.h2}>
              Identity work, <span className="accent">same rules.</span>
            </h2>
            <p className={s.sub}>One clear idea per piece — including the brand system behind this site.</p>
          </div>
          <LiquidButton href="/work/brand/" variant="mint" size="sm">
            Brand work · {projectCounts.brand}
          </LiquidButton>
        </Reveal>
        <ul className={s.grid3}>
          {brand.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.06}>
              <WorkTile p={p} size="md" />
            </Reveal>
          ))}
        </ul>
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
