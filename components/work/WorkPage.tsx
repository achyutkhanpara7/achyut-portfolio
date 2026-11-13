import Link from 'next/link';
import Reveal from '../Reveal';
import WorkIndex from './WorkIndex';
import type { Discipline } from '@/content/work';
import s from './workPage.module.css';

const heads = {
  all: { kicker: 'All work', a: 'Enterprise and AI products,', b: 'made clear.' },
  ux: { kicker: 'Product & UX design', a: 'Complex products,', b: 'made usable.' },
  brand: { kicker: 'Brand design', a: 'Identities and visuals', b: 'with a point.' },
};

export default function WorkPage({ filter }: { filter: 'all' | Discipline }) {
  const h = heads[filter];
  return (
    <section className={`container ${s.wrap}`}>
      <Link href="/" className={s.back}>
        <span aria-hidden>←</span> Back to home
      </Link>
      <Reveal>
        <span className="kicker">{h.kicker}</span>
        <h1 className={s.h1}>
          {h.a} <span className="accent">{h.b}</span>
        </h1>
        <p className={s.sub}>
          Research, design systems and AI products, from the first interview to the coded prototype.
        </p>
      </Reveal>
      <WorkIndex filter={filter} />
    </section>
  );
}
