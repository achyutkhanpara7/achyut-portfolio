import Reveal from '@/components/Reveal';
import WorkCard from '@/components/WorkCard';
import MoreWork from '@/components/MoreWork';
import { caseStudies } from '@/content/work';
import s from '../home.module.css';

export const metadata = { title: 'Work' };

export default function WorkPage() {
  return (
    <>
      <section className={`container ${s.section}`} style={{ paddingTop: 'clamp(40px, 7vw, 88px)' }}>
        <Reveal>
          <div className={s.head}>
            <p className="eyebrow">Work</p>
            <h1 className={s.h2}>
              Enterprise and AI products,
              <br />
              <span className="turn">made clear.</span>
            </h1>
          </div>
        </Reveal>
        <div className={s.grid}>
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.08} className={s.cell}>
              <WorkCard item={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className={`container ${s.section}`}>
        <Reveal>
          <div className={s.head}>
            <p className="eyebrow">More work</p>
            <h2 className={s.h2}>Also on the shelf.</h2>
          </div>
        </Reveal>
        <MoreWork />
      </section>
    </>
  );
}
