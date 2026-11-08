import Reveal from '@/components/Reveal';
import s from './skills.module.css';

// Six things I do. Each card carries a tiny scene of the work itself; hover plays it.
const skills = [
  {
    k: 'research',
    t: 'User research',
    b: 'Interviews, usability tests, audits and surveys that turn opinions into evidence before anything gets drawn.',
    tags: ['Interviews', 'Usability testing', 'Mixed methods'],
    tone: 'paper',
  },
  {
    k: 'strategy',
    t: 'UX strategy',
    b: 'Findings become journeys, priorities and a plan that fits both the people using it and the business paying for it.',
    tags: ['Journey mapping', 'Information architecture', 'Roadmaps'],
    tone: 'mint',
  },
  {
    k: 'interaction',
    t: 'Interaction design',
    b: 'Flows, states and prototypes that feel obvious on the first try, with accessibility built in from the start.',
    tags: ['Prototyping', 'Accessibility', 'Micro-interactions'],
    tone: 'paper',
  },
  {
    k: 'ui',
    t: 'Product & UI design',
    b: 'From wireframes to production-ready screens on a shared design system, so design and code stay in step.',
    tags: ['Wireframes', 'Design systems', 'High-fidelity UI'],
    tone: 'night',
  },
  {
    k: 'ai',
    t: 'AI product design',
    b: 'Agentic and AI features people can follow, check and trust before they act on what the model says.',
    tags: ['Agentic AI', 'Human in the loop', 'Explainability'],
    tone: 'emerald',
  },
  {
    k: 'collab',
    t: 'Collaboration',
    b: 'Clear notes, honest trade-offs and workshops that get product, engineering and stakeholders deciding together.',
    tags: ['Workshops', 'Stakeholder alignment', 'Dev handoff'],
    tone: 'paper',
  },
] as const;

function Scene({ k }: { k: (typeof skills)[number]['k'] }) {
  switch (k) {
    case 'research':
      return (
        <svg viewBox="0 0 240 120" className={`${s.scene} ${s.research}`} aria-hidden>
          <g className={s.bubbleA}>
            <rect x="14" y="16" width="110" height="44" rx="12" />
            <path d="M34 60 l-6 14 l18 -14z" />
            <line x1="30" y1="32" x2="104" y2="32" />
            <line x1="30" y1="44" x2="84" y2="44" />
          </g>
          <g className={s.bubbleB}>
            <rect x="110" y="56" width="116" height="44" rx="12" />
            <path d="M206 100 l6 14 l-18 -14z" />
            <line x1="126" y1="72" x2="206" y2="72" />
            <line x1="126" y1="84" x2="176" y2="84" />
          </g>
          <g className={s.lens}>
            <circle cx="70" cy="70" r="20" />
            <line x1="84" y1="84" x2="100" y2="100" />
          </g>
        </svg>
      );
    case 'strategy':
      return (
        <svg viewBox="0 0 240 120" className={`${s.scene} ${s.strategy}`} aria-hidden>
          <path className={s.ghost} d="M18 96 C 60 96, 60 34, 104 34 S 150 96, 190 60 S 214 26, 224 26" />
          <path className={s.route} d="M18 96 C 60 96, 60 34, 104 34 S 150 96, 190 60 S 214 26, 224 26" pathLength={1} />
          <circle cx="18" cy="96" r="6" className={s.node} />
          <circle cx="104" cy="34" r="6" className={s.node} />
          <circle cx="160" cy="80" r="6" className={s.node} />
          <g className={s.flag}>
            <line x1="224" y1="26" x2="224" y2="2" />
            <path d="M224 2 h14 l-4 6 l4 6 h-14z" />
          </g>
        </svg>
      );
    case 'interaction':
      return (
        <svg viewBox="0 0 240 120" className={`${s.scene} ${s.interaction}`} aria-hidden>
          <rect x="22" y="22" width="196" height="76" rx="14" className={s.frame} />
          <g className={s.toggle}>
            <rect x="40" y="46" width="44" height="26" rx="13" />
            <circle cx="53" cy="59" r="9" />
          </g>
          <g className={s.btn}>
            <rect x="104" y="44" width="96" height="30" rx="15" />
            <text x="152" y="64">Continue</text>
          </g>
          <circle className={s.ripple} cx="164" cy="60" r="4" />
          <path className={s.cursor} d="M0 0 L0 22 L6 16 L11 27 L15 25 L10 14 L18 14 Z" />
        </svg>
      );
    case 'ui':
      return (
        <svg viewBox="0 0 240 120" className={`${s.scene} ${s.ui}`} aria-hidden>
          <rect x="16" y="10" width="208" height="102" rx="10" className={s.win} />
          <line x1="16" y1="26" x2="224" y2="26" className={s.winLine} />
          <circle cx="26" cy="18" r="2.5" className={s.dot} />
          <circle cx="34" cy="18" r="2.5" className={s.dot} />
          <circle cx="42" cy="18" r="2.5" className={s.dot} />
          <rect x="24" y="34" width="40" height="70" rx="5" className={`${s.blk} ${s.b1}`} />
          <rect x="72" y="34" width="68" height="30" rx="5" className={`${s.blk} ${s.b2}`} />
          <rect x="148" y="34" width="68" height="30" rx="5" className={`${s.blk} ${s.b3}`} />
          <rect x="72" y="72" width="144" height="32" rx="5" className={`${s.blk} ${s.b4}`} />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 240 120" className={`${s.scene} ${s.ai}`} aria-hidden>
          <rect x="96" y="14" width="128" height="32" rx="14" className={s.ask} />
          <line x1="112" y1="30" x2="196" y2="30" className={s.askLine} />
          <rect x="16" y="58" width="150" height="48" rx="14" className={s.answer} />
          <circle cx="40" cy="82" r="4.5" className={`${s.typing} ${s.t1}`} />
          <circle cx="56" cy="82" r="4.5" className={`${s.typing} ${s.t2}`} />
          <circle cx="72" cy="82" r="4.5" className={`${s.typing} ${s.t3}`} />
          <g className={s.check}>
            <rect x="112" y="72" width="40" height="20" rx="10" />
            <path d="M122 82 l5 5 l9 -10" />
          </g>
          <path className={s.spark} d="M196 64 l5 13 l13 5 l-13 5 l-5 13 l-5 -13 l-13 -5 l13 -5z" />
        </svg>
      );
    case 'collab':
      return (
        <svg viewBox="0 0 240 120" className={`${s.scene} ${s.collab}`} aria-hidden>
          <line x1="60" y1="60" x2="120" y2="60" className={s.link} />
          <line x1="120" y1="60" x2="180" y2="60" className={s.link} />
          <g className={s.p1}>
            <circle cx="60" cy="60" r="24" />
            <text x="60" y="66">PM</text>
          </g>
          <g className={s.p2}>
            <circle cx="120" cy="60" r="24" />
            <text x="120" y="66">UX</text>
          </g>
          <g className={s.p3}>
            <circle cx="180" cy="60" r="24" />
            <text x="180" y="66">DEV</text>
          </g>
          <g className={s.agree}>
            <circle cx="120" cy="22" r="12" />
            <path d="M114 22 l4 4 l8 -8" />
          </g>
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <ul className={s.grid}>
      {skills.map((k, i) => (
        <Reveal as="li" key={k.t} delay={(i % 3) * 0.05} className={`${s.card} ${s[k.tone]}`}>
          <div className={s.stage}>
            <Scene k={k.k} />
            <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className={s.text}>
            <h3 className={s.title}>{k.t}</h3>
            <p className={s.body}>{k.b}</p>
            <ul className={s.tags}>
              {k.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
