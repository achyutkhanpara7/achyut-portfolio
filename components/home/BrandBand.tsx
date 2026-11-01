import Link from 'next/link';
import { projects } from '@/content/work';
import Reveal from '../Reveal';
import ProjectCard from '../work/ProjectCard';
import s from './brand.module.css';

// Brand & visual work gets its own clearly-labelled band instead of hiding behind a toggle.
export default function BrandBand() {
  const brand = projects.filter((p) => p.discipline === 'brand');
  return (
    <section className={s.band}>
      <div className={`pattern-dots-light ${s.dots}`} aria-hidden />
      <div className="container">
        <Reveal className={s.head}>
          <div>
            <span className={s.kicker}>Beyond product</span>
            <h2 className={s.h2}>
              Brand &amp; <span className={s.turn}>visual work.</span>
            </h2>
            <p className={s.sub}>
              The same rule, applied to identity: one clear idea per piece. Including the system behind this site.
            </p>
          </div>
          <Link href="/work/brand/" className={s.link}>
            See brand work <span aria-hidden>→</span>
          </Link>
        </Reveal>
        <ul className={s.grid}>
          {brand.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.06}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
