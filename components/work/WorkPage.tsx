import Reveal from '../Reveal';
import WorkIndex from './WorkIndex';
import type { Discipline } from '@/content/work';
import s from './workPage.module.css';

const heads = {
  all: { kicker: 'All work', a: 'Enterprise, AI and brand —', b: 'made clear.' },
  ux: { kicker: 'UX case studies', a: 'Complex products,', b: 'made usable.' },
  brand: { kicker: 'Brand & visual', a: 'Identities and visuals', b: 'with a point.' },
};

export default function WorkPage({ filter }: { filter: 'all' | Discipline }) {
  const h = heads[filter];
  return (
    <section className={`container ${s.wrap}`}>
      <Reveal>
        <span className="kicker">{h.kicker}</span>
        <h1 className={s.h1}>
          {h.a} <span className="accent">{h.b}</span>
        </h1>
        <p className={s.sub}>
          {filter === 'brand' ? (
            'Brand identities, campaign graphics and the system behind my own brand. Full write-ups are on the way.'
          ) : (
            <>
              Work for WorldLink and its clients is under NDA — those case studies open with a password.{' '}
              <a href="/#contact">Ask me for access.</a>
            </>
          )}
        </p>
      </Reveal>
      <WorkIndex filter={filter} />
    </section>
  );
}
