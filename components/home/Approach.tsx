import Reveal from '../Reveal';
import s from './approach.module.css';

const pillars = [
  {
    n: '01',
    t: 'Research first',
    d: 'Interviews, audits and task maps before any pixels. The evidence decides the direction.',
  },
  {
    n: '02',
    t: 'Systems, not screens',
    d: 'Tokens and components in Figma that flow into code, so every product stays consistent.',
  },
  {
    n: '03',
    t: 'I build what I design',
    d: 'Coded React prototypes, so teams can feel the idea before anyone writes a spec.',
  },
];

// Editorial statement + three pillars. Replaces the earlier interactive block.
export default function Approach() {
  return (
    <div className={s.wrap}>
      <Reveal>
        <p className={s.statement}>
          I design it. <span className={s.hl}>Then I build it.</span> Most confusion in enterprise and AI products is
          decided long before launch — in research nobody did, systems nobody shared, and specs that didn&apos;t survive
          the build. I work on all three.
        </p>
      </Reveal>
      <ol className={s.pillars}>
        {pillars.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i * 0.06} className={s.pillar}>
            <span className={s.n}>{p.n}</span>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
