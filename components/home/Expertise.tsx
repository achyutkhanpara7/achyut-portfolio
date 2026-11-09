import Link from 'next/link';
import Reveal from '../Reveal';
import s from './expertise.module.css';

// Industries and problem types, written in the words recruiters search for, each backed by a case study.
const industries = [
  {
    k: 'fin',
    t: 'Fintech & financial services',
    d: 'Governance, risk and compliance (GRC) platforms, network governance dashboards for a Fortune 100 bank, audit trails and approval workflows.',
    work: [
      { n: 'GRC platform', h: '/work/grc/' },
      { n: 'Network governance', h: '/work/network-governance/' },
    ],
  },
  {
    k: 'pharma',
    t: 'Pharma & life sciences',
    d: 'Gross-to-net contract simulation for market access, generative engine optimisation (GEO) for a biopharma brand team, regulated review workflows.',
    work: [
      { n: 'GTN contracting twin', h: '/work/gtn-twin/' },
      { n: 'GEO Sentiments', h: '/work/geo-sentiments/' },
    ],
  },
  {
    k: 'retail',
    t: 'Retail & operations',
    d: 'A multi-persona AI operations platform for a Fortune 100 retailer: store, area, corporate, distribution and IT portals on one design system.',
    work: [{ n: 'AI operations platform', h: '/work/retail-ops/' }],
  },
  {
    k: 'edu',
    t: 'Higher education & public sector',
    d: 'Information architecture, content design and WCAG 2.2 accessibility for Arizona State University’s Business and Finance site.',
    work: [{ n: 'ASU CFO site', h: '/work/asu-cfo/' }],
  },
];

const keywords = [
  'B2B SaaS',
  'Enterprise SaaS',
  'Agentic AI',
  'Generative AI',
  'Data visualization',
  'Dashboards',
  'Complex workflows',
  'Simulation & digital twins',
  'Design systems',
  'Design tokens',
  'UX research',
  'Usability testing',
  'Information architecture',
  'Accessibility (WCAG 2.2)',
  'Rapid prototyping',
  'Design engineering',
];

export default function Expertise() {
  return (
    <>
      <ul className={s.grid}>
        {industries.map((x, i) => (
          <Reveal as="li" key={x.k} delay={(i % 2) * 0.06} className={`${s.card} ${s[x.k]}`}>
            <span className={s.idx}>{String(i + 1).padStart(2, '0')}</span>
            <h3 className={s.t}>{x.t}</h3>
            <p className={s.d}>{x.d}</p>
            <p className={s.work}>
              {x.work.map((w) => (
                <Link key={w.h} href={w.h}>
                  {w.n} <span aria-hidden>→</span>
                </Link>
              ))}
            </p>
          </Reveal>
        ))}
      </ul>
      <Reveal className={s.kw}>
        <p className={s.kwHead}>Skills & keywords</p>
        <ul>
          {keywords.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </Reveal>
    </>
  );
}
