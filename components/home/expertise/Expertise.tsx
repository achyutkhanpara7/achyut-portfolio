import Reveal from '../../Reveal';
import s from './expertise.module.css';

// What I design: four focus areas, each with a tiny live-looking UI instead of an icon.
function AgentViz() {
  return (
    <div className={`${s.viz} ${s.vizAgent}`} aria-hidden>
      <div className={s.agentHead}>
        <span className={s.agentDot} />
        Agent · Compliance review
      </div>
      <ol className={s.steps}>
        <li className={s.done}>Read 42 policy docs</li>
        <li className={s.done}>Flag 3 gaps</li>
        <li className={s.wait}>Draft fixes</li>
      </ol>
      <div className={s.approve}>
        <span>Needs your OK</span>
        <b>Approve</b>
      </div>
    </div>
  );
}

function DataViz() {
  return (
    <div className={`${s.viz} ${s.vizData}`} aria-hidden>
      <div className={s.kpis}>
        <span>
          <em>Open risks</em>
          <b>12</b>
        </span>
        <span>
          <em>Resolved</em>
          <b className={s.up}>+38</b>
        </span>
      </div>
      <div className={s.chart}>
        {[40, 62, 48, 75, 58, 88, 70].map((h, i) => (
          <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>
      <p className={s.summary}>
        <span>AI summary</span> 3 controls need evidence before Friday.
      </p>
    </div>
  );
}

function SystemViz() {
  return (
    <div className={`${s.viz} ${s.vizSystem}`} aria-hidden>
      <div className={s.swatches}>
        <span style={{ background: '#087F63' }} />
        <span style={{ background: '#1A1420' }} />
        <span style={{ background: '#DDF1E7' }} />
        <span style={{ background: '#F4EFE6' }} />
      </div>
      <div className={s.tokens}>
        <code>color.action.primary</code>
        <code>radius.control · 999</code>
      </div>
      <div className={s.comps}>
        <span className={s.cBtn}>Primary</span>
        <span className={s.cChip}>Chip</span>
        <span className={s.cToggle}>
          <i />
        </span>
      </div>
    </div>
  );
}

function CodeViz() {
  return (
    <div className={`${s.viz} ${s.vizCode}`} aria-hidden>
      <div className={s.codeBar}>
        <i />
        <i />
        <i />
        <span>Agent.tsx</span>
      </div>
      <pre>
        <span className={s.k}>{'<'}</span>
        <span className={s.ct}>AgentStep</span>
        {'\n  '}
        <span className={s.a}>status</span>=<span className={s.str}>&quot;needs-review&quot;</span>
        {'\n  '}
        <span className={s.a}>onApprove</span>={'{'}run{'}'}
        {'\n'}
        <span className={s.k}>{'/>'}</span>
        <span className={s.caret} />
      </pre>
    </div>
  );
}

const areas = [
  {
    t: 'Agentic AI UX',
    d: 'Agents that show their plan, ask before they act, and let people undo. Autonomy people can steer.',
    tags: ['Human-in-the-loop', 'Explainable output', 'Guardrails'],
    viz: <AgentViz />,
    feature: true,
  },
  {
    t: 'Enterprise AI & data-heavy SaaS',
    d: 'Dense data made scannable: dashboards, workflows and AI summaries people can check before they trust.',
    tags: ['Complex workflows', 'Dashboards', 'Multi-persona'],
    viz: <DataViz />,
  },
  {
    t: 'Design systems',
    d: 'Tokens and components that keep many products looking and behaving like one.',
    tags: ['Tokens', 'Components', 'WCAG 2.2'],
    viz: <SystemViz />,
  },
  {
    t: 'Design engineering',
    d: 'React prototypes on real tokens, so the team clicks the idea before anyone writes a spec.',
    tags: ['React', 'Next.js', 'Claude Code'],
    viz: <CodeViz />,
  },
];

export default function Expertise() {
  return (
    <ul className={s.grid}>
      {areas.map((a, i) => (
        <Reveal as="li" key={a.t} delay={i * 0.06} className={`${s.card} ${a.feature ? s.feature : ''}`}>
          {a.viz}
          <div className={s.body}>
            <h3 className={s.t}>{a.t}</h3>
            <p className={s.d}>{a.d}</p>
            <ul className={s.tags}>
              {a.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
