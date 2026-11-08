import Reveal from '@/components/Reveal';
import s from './skills.module.css';

// Six things I do, carried over from the old site and tightened. Brand and marketing design sits
// with visual design, because the same eye makes both.
const skills = [
  {
    t: 'User research',
    b: 'Interviews, usability tests, audits and surveys that turn opinions into evidence before anything gets drawn.',
    tags: ['Interviews', 'Usability testing', 'Mixed methods'],
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.8-4.8" />
        <path d="M8 10.5h5M10.5 8v5" />
      </>
    ),
  },
  {
    t: 'UX strategy',
    b: 'Findings become journeys, priorities and a plan that fits both the people using it and the business paying for it.',
    tags: ['Journey mapping', 'Information architecture', 'Roadmaps'],
    icon: (
      <>
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18h6a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h6" />
      </>
    ),
  },
  {
    t: 'Interaction design',
    b: 'Flows, states and prototypes that feel obvious on the first try, with accessibility built in from the start.',
    tags: ['Prototyping', 'Accessibility', 'Micro-interactions'],
    icon: (
      <>
        <path d="M5 4l13 6-5.5 1.8L10.7 17z" />
        <path d="M13 13l5 5" />
      </>
    ),
  },
  {
    t: 'Product & UI design',
    b: 'From wireframes to production-ready screens on a shared design system, so design and code stay in step.',
    tags: ['Wireframes', 'Design systems', 'High-fidelity UI'],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M9 9v11" />
      </>
    ),
  },
  {
    t: 'Brand & marketing design',
    b: 'Visual identity, campaign graphics and social content, plus the marketing thinking behind what gets made and why.',
    tags: ['Brand identity', 'Graphic design', 'Marketing strategy'],
    icon: (
      <>
        <path d="M12 3l7 7-7 11-7-11z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 3v6" />
      </>
    ),
  },
  {
    t: 'Collaboration',
    b: 'Clear notes, honest trade-offs and workshops that get product, engineering and stakeholders deciding together.',
    tags: ['Workshops', 'Stakeholder alignment', 'Dev handoff'],
    icon: (
      <>
        <circle cx="8.5" cy="8" r="3" />
        <circle cx="16.5" cy="9.5" r="2.5" />
        <path d="M3 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
        <path d="M15 14.2c2.6-.4 5 1.2 5.8 4.3" />
      </>
    ),
  },
];

export default function Skills() {
  return (
    <ul className={s.grid}>
      {skills.map((k, i) => (
        <Reveal as="li" key={k.t} delay={(i % 3) * 0.05} className={s.card}>
          <div className={s.top}>
            <span className={s.icon} aria-hidden>
              <svg viewBox="0 0 24 24">{k.icon}</svg>
            </span>
            <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3 className={s.title}>{k.t}</h3>
          <p className={s.body}>{k.b}</p>
          <ul className={s.tags}>
            {k.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ul>
  );
}
