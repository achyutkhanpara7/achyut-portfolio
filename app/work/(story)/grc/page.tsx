import Image from 'next/image';
import { pageMeta, caseImage } from '@/lib/meta';
import Link from 'next/link';
import { caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen from '@/components/story/Screen';
import s from '@/components/story/story.module.css';

export const metadata = {
  ...pageMeta('/work/grc/', 'GRC Platform · Taking compliance work from days to hours', 'An AI-powered governance, risk and compliance platform at WorldLink: six modules on one design system, designed so compliance teams move from document upload to insight in hours, not days.', caseImage('grc')),
  keywords: caseKeywords('grc'),
};

const IMG = '/work/grc';
const V = `${IMG}/video`;

/* ---------------- content: from the GRC case study on Framer, research detail from the UXR deck ---------------- */

const audiences = ['Compliance officers', 'Risk managers', 'Security architects', 'Enterprise orgs', 'WorldKit design system'];

const pains = [
  {
    t: 'Regulatory fragmentation',
    d: 'Compliance officers managed 5–10+ frameworks by hand, each with its own spreadsheet, folder and tracking method. Cross-framework visibility was close to impossible.',
  },
  {
    t: 'Manual document processing',
    d: 'Pulling obligations out of regulatory PDFs meant tagging hundreds of pages by hand. A single document took 2–3 days.',
  },
  {
    t: 'No real-time gap visibility',
    d: 'Gaps surfaced during audits, never before. No live score, no early warning, no summary a non-technical stakeholder could act on in 30 seconds.',
  },
  {
    t: 'Zero AI assistance',
    d: 'Plenty of compliance data, but no insight, automation or plain-language querying. Teams ran on institutional knowledge.',
  },
];

const methods = [
  { n: '4', t: 'Contextual inquiries', d: 'Sat in on live compliance reviews at 4 enterprise organisations and mapped 40+ discrete actions per cycle.' },
  { n: '14', t: 'Stakeholder interviews', d: '45–60 minute sessions with compliance officers, risk managers, security architects and legal teams.' },
  { n: '67', t: 'Survey respondents', d: 'A 28-question survey on time spent parsing, tool count, when gaps were found and interest in AI.' },
  { n: '9', t: 'Competitors analysed', d: 'ServiceNow, OneTrust, Vanta, Drata and five others across 24 UX dimensions.' },
];

const questions = [
  { k: 'Workflow', q: 'Where do compliance teams spend the most time today?' },
  { k: 'Pain points', q: 'What causes the most frustration or delay during audit preparation?' },
  { k: 'Mental models', q: 'How do compliance, security and audit teams read the same data differently?' },
  { k: 'AI readiness', q: 'What would it take to trust and act on an AI recommendation?' },
  { k: 'Prioritisation', q: 'How do teams decide what to fix first when several gaps exist?' },
];

const findings = [
  { t: 'Tool fragmentation overhead', d: 'Teams switched between 5–10+ tools per cycle. Context switching was the biggest time thief, at 40+ actions per framework review.' },
  { t: '2–3 days per document', d: 'Processing one regulatory document took 2–3 days: 9 actions across 3 phases, all repetitive and error-prone.' },
  { t: 'Gaps found only at audit time', d: 'Every interviewee had discovered critical gaps during an audit rather than before it.' },
  { t: 'Appetite for AI was high', d: 'Asked what AI should do first, 89% said automated document extraction. No product had delivered it.' },
];

const voices = [
  { q: 'I need to walk into the board meeting and tell them our compliance posture in one sentence, backed by real data, not gut feel.', r: 'Chief Compliance Officer · Regional bank' },
  { q: 'I spend 60% of my day extracting data from PDFs. If AI can do that, I can actually focus on analysis.', r: 'Regulatory Compliance Analyst · Financial services' },
  { q: 'Architecture scanning and code compliance should be automated. Manual checks mean we’re always behind.', r: 'IT Risk & Security Manager · Insurance' },
];

const clusters = [
  { t: 'Navigation & findability', c: '#c43c47', bg: '#fbd4e3', notes: ['Can’t find relevant data', 'No clear entry point', 'Deep nesting is exhausting', 'Back button breaks flow'] },
  { t: 'Manual duplication', c: '#9c5514', bg: '#fdf1a8', notes: ['Copy-paste across tools', 'Re-entering the same data', 'Version conflicts in docs', 'Email is the source of record'] },
  { t: 'AI trust & transparency', c: '#3d6fd6', bg: '#cfe3fb', notes: ['Why did AI flag this?', 'Need to see evidence', 'A score isn’t enough', 'Can’t sign off blind'] },
  { t: 'Workflow friction', c: '#267a5a', bg: '#cdeccf', notes: ['4–6 tool switches a task', 'Unclear handoffs', 'Approval bottlenecks', 'Status always unclear'] },
];

const journey = [
  { s: 'Receive audit notice', e: '😩', f: 'Overwhelmed', tools: 'Email, Jira, Drive, spreadsheet', pain: 'Unclear scope, no standard checklist' },
  { s: 'Gather evidence', e: '😤', f: 'Frustrated', tools: 'SharePoint, email, Confluence, GitHub', pain: 'Hours of search, broken links, wrong versions' },
  { s: 'Map to framework', e: '😰', f: 'Anxious', tools: 'Spreadsheet + framework PDF', pain: 'Days of manual mapping, human error' },
  { s: 'Identify gaps', e: '😐', f: 'Uncertain', tools: 'Spreadsheet, calls with the team', pain: 'No priority signal, guesswork' },
  { s: 'Remediate & track', e: '😓', f: 'Stressed', tools: 'Jira, Slack, email', pain: 'Slow approvals, status unknown' },
  { s: 'Report results', e: '😌', f: 'Relieved', tools: 'Excel, PowerPoint, PDF', pain: 'Formatting the export takes hours' },
];

const personas = [
  {
    i: 'MC',
    n: 'Maya Chen',
    r: 'Compliance Officer · primary',
    q: 'I spend more time collecting evidence than actually analysing it. The tool should do the heavy lifting.',
    goal: 'A real-time view of compliance posture; audit packages ready faster',
    pain: 'Switching between 5+ tools; AI flags she can’t explain to auditors',
  },
  {
    i: 'RP',
    n: 'Raj Patel',
    r: 'Security Architect · primary',
    q: 'I need to see code-level risk and policy gaps in one view. Right now I build that picture myself every time.',
    goal: 'Link vulnerabilities to frameworks; catch gaps before external audits do',
    pain: 'Findings invisible to compliance; no way to track remediation in one place',
  },
  {
    i: 'DW',
    n: 'Dana Williams',
    r: 'Audit Lead · secondary',
    q: 'Audit prep takes my team 3 weeks. Half of that is just finding the right documents.',
    goal: 'A complete, traceable evidence package; know which controls are tested',
    pain: 'Evidence scattered across Confluence and SharePoint; no trail for AI findings',
  },
];

const opportunities = [
  { f: 'Overwhelmed by dense dashboards with no hierarchy', o: 'Prioritise critical signals and cut noise at the default view', d: 'Compliance score card and a severity-coded gap table' },
  { f: '4–6 tool switches per task', o: 'One contextual workspace for the whole workflow', d: 'Unified module navigation with persistent filters and side panels' },
  { f: 'No way to tell critical gaps from minor ones', o: 'Prioritise by risk and evidence count', d: 'AI-scored gap ranking with severity badges and urgency tiers' },
  { f: 'AI flags not trusted without evidence', o: 'Make AI reasoning visible at the point of decision', d: 'Inline confidence, evidence citations and an expandable rationale' },
  { f: 'Audit prep takes weeks of evidence collection', o: 'Automate discovery and framework alignment', d: 'Artifact discovery with AI-matched evidence and framework mapping' },
];

const modules = [
  {
    id: 'm-extraction',
    n: '01',
    t: 'Regulatory Extraction Engine',
    problem: 'Analysts spent 2–3 days tagging obligations by hand inside dense regulatory PDFs.',
    did: 'An AI-assisted extraction pipeline behind a clean review interface, turning document processing into a structured, auditable workflow.',
    feats: ['AI extraction from regulatory PDFs in under 60 seconds', 'Human-in-the-loop review with inline accept / reject', 'Severity auto-classified from Critical to Low', 'Export as a structured obligation register (CSV / JSON)'],
    note: 'I kept the review table deliberately minimal, with no modal overload. Analysts triage 50+ obligations in one scroll, with keyboard-accessible actions.',
    clip: 'extraction',
  },
  {
    id: 'm-alignment',
    n: '02',
    t: 'Alignment Engine',
    problem: 'Enterprises rarely comply with one framework, and the same control was mapped again and again.',
    did: 'Controls mapped across SOC 2, ISO 27001, NIST CSF, GDPR and others, surfacing overlap and removing redundant work.',
    feats: ['Automated cross-framework control mapping', 'Overlap detection to cut redundant work', 'Coverage heatmap per framework', 'Custom framework imports via CSV / JSON'],
    clip: 'alignment',
  },
  {
    id: 'm-artifacts',
    n: '03',
    t: 'Artifacts Discovery Engine',
    problem: 'Policies, procedures and evidence packs were assembled by hand over weeks.',
    did: 'An AI generation flow that drafts structured artifacts from extracted obligations, each mapped to the right framework controls.',
    feats: ['Auto-linked to relevant framework controls', 'One-click policy and procedure drafts', 'Version history with diff tracking', 'Approval workflow with role-based permissions'],
    clip: 'artifacts',
  },
  {
    id: 'm-gap',
    n: '04',
    t: 'Gap Analysis',
    problem: 'Gaps were only found at audit time, far too late to fix calmly.',
    did: 'Gap detection redesigned as a continuous, real-time layer with an executive-readable dashboard. No more surprises on audit day.',
    feats: ['Real-time gap scoring against active frameworks', 'Remediation owner assigned per gap', 'Auto-escalation as SLA breaches approach', 'An executive summary built for a 30-second read'],
    note: 'The hardest call: severity that feels urgent without alert fatigue. Red is used only inside a 7-day risk window, and “days remaining” sits in the primary column.',
    clip: 'gap-analysis',
  },
  {
    id: 'm-architecture',
    n: '05',
    t: 'Architecture Scanner',
    problem: 'Security architects validated infrastructure through 200-page reports nobody read.',
    did: 'A scannable, interactive architecture view that puts risk directly on the system diagram.',
    feats: ['Import via Terraform, draw.io or manual nodes', 'Risk overlaid directly on the diagram', 'Findings auto-linked to obligations and controls', 'One-click remediation tickets'],
    clip: 'architecture',
  },
  {
    id: 'm-code',
    n: '06',
    t: 'Code Scanner',
    problem: 'Compliance stopped at the documents; nobody could see it in the code.',
    did: 'Misconfigurations, hardcoded secrets and non-compliant patterns found inside the codebase, without developers leaving their workflow.',
    feats: ['Deep scan across 10+ languages and frameworks', 'Findings auto-mapped to compliance obligations', 'CI/CD integration: scan on every PR', 'Developer-friendly inline fix suggestions'],
    clip: 'code-scanner',
  },
];

const decisions = [
  { f: 'People lost context deep inside modules; Back didn’t restore it', d: 'Progressive disclosure, with a persistent side-panel detail view instead of full-page navigation', before: 'Full-page navigation loses context', after: 'Side panel keeps the table visible' },
  { f: '“Everything looks equally urgent”', d: 'A six-state severity system, Critical to Pass, with colour-coded badges', before: 'Plain-text status in the table', after: 'Severity chip, sorted by risk' },
  { f: 'A confidence score alone wasn’t enough to sign off', d: 'An inline evidence panel: confidence, evidence count and an expandable rationale', before: 'Just a confidence number', after: 'Score, evidence list and reasoning' },
  { f: 'Compliance, security and audit read the same data differently', d: 'Role-aware default views, with column sets per persona', before: 'One fixed table view for every role', after: 'Role-filtered defaults and saved views' },
];

const tests = [
  { n: '4', t: 'Test rounds' },
  { n: '16', t: 'Participants' },
  { n: '12', t: 'Tasks tested' },
  { n: '89%', t: 'Completion rate' },
  { n: '77', t: 'SUS score' },
];

const changes = [
  { k: 'Dashboard navigation', heard: 'Users couldn’t find Gap Analysis: it was hidden in secondary nav', did: 'Moved to primary nav, with jump-to links on the dashboard' },
  { k: 'Filtering', heard: 'The filter panel in the right sidebar was missed by 6 of 8 users', did: 'Filters moved inline above the table; the right panel became the detail view' },
  { k: 'AI recommendation', heard: '“What does 73% confidence even mean?”', did: 'Tier labels (High / Medium / Low) plus a plain-language rationale under the score' },
  { k: 'Evidence discovery', heard: 'People expected to click a clause and see its evidence', did: 'Click-through from clause to matched evidence with source links' },
  { k: 'Gap identification', heard: 'Rows were too dense; people lost their place in long tables', did: 'A row-density toggle: compact, comfortable, spacious' },
];

const impact = [
  { k: 'Manual effort', v: '↓74%', d: 'Reduction in manual compliance effort' },
  { k: 'Satisfaction', v: '4.7', d: 'User satisfaction score after launch, out of 5' },
  { k: 'AI adoption', v: '91%', d: 'AI feature adoption in the first two weeks' },
];

const learnings = [
  { t: 'Automation confidence ≠ automation trust', d: 'People were impressed by the extraction accuracy and still wanted to verify every item. Trust comes from transparency, so every AI output got a confidence score and a source citation.' },
  { t: 'Removing is as important as adding', d: 'Early prototypes had too much on every screen. Compliance officers want the right data, faster. Every screen went through at least two “subtraction” rounds.' },
  { t: 'Executive dashboards are a product of their own', d: 'The most-used view was the executive summary: 3 KPIs and a risk heat map for a 30-second read by a non-technical CISO. A different vocabulary, grammar and density.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'research', label: 'Research' },
  { id: 'define', label: 'Define' },
  { id: 'trust', label: 'Designing for trust' },
  { id: 'modules', label: 'Six modules' },
  { id: 'validate', label: 'Validate' },
  { id: 'outcome', label: 'Outcome' },
];

export default function Grc() {
  return (
    <article className={`${s.page} ${s.red}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>GRC platform · WorldLink Labs · 2025–2026</p>
        <h1 className={s.h1}>Designing an AI-powered GRC platform that takes compliance work from days to hours</h1>
        <ul className={s.heroMeta}>
          <li>Lead UX / product designer</li>
          <li>6 months</li>
          <li>Web · enterprise SaaS</li>
          <li>6 modules on WorldKit</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/screens/artifacts.webp`}
            alt="The GRC platform: the Artifacts Discovery Engine with an upload, analysis, review and applicability stepper, extracted facts and the documents list"
            width={2400}
            height={1368}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="GRC Platform" logo="G" meta="6 months" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>One platform for compliance work that lived in ten tools</h2>
            <p>
              An AI-powered GRC platform that brings compliance workflows, risk analysis and system insight into one
              scalable, intuitive enterprise experience. I designed the end-to-end UX, helping compliance officers, risk
              managers and security teams move through complex work with clarity.
            </p>
            <div className={s.tldr}>
              <div>
                <em>Why it mattered</em>
                <p>Compliance teams were drowning in manual workflows. They needed one platform, with AI automation, to cut days to hours.</p>
              </div>
              <div>
                <em>What I did</em>
                <ul>
                  <li>Led end-to-end UX across six modules on the shared WorldKit design system</li>
                  <li>Extraction, Alignment, Artifacts, Gap Analysis, Architecture and Code scanners</li>
                </ul>
              </div>
              <div>
                <em>What I learned</em>
                <p>AI-heavy enterprise tools have to balance automation confidence with human oversight, and removing is as important as adding.</p>
              </div>
            </div>
            <h3 className={s.h3}>Designed for</h3>
            <ul className={`${s.qChips} ${s.chipsSoft}`}>
              {audiences.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          {/* ===== Challenge ===== */}
          <section className={s.sec} id="challenge">
            <p className={s.kick}>01 · The challenge</p>
            <h2 className={s.h2}>What was broken?</h2>
            <p>
              Compliance teams were running fragmented, time-heavy workflows across too many disconnected tools, with no AI
              help and no single view of where they stood.
            </p>
            <ol className={s.cards}>
              {pains.map((p, i) => (
                <li key={p.t}>
                  <span>Pain 0{i + 1}</span>
                  <b>{p.t}</b>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
            <div className={s.question}>
              <p>How might we</p>
              <blockquote>
                replace <em>reactive, manual</em> compliance work with proactive <em>AI workflows</em> enterprise teams
                actually trust?
              </blockquote>
            </div>
          </section>

          {/* ===== Research ===== */}
          <section className={s.sec} id="research">
            <p className={s.kick}>02 · Research</p>
            <h2 className={s.h2}>Four methods, one clear picture</h2>
            <p>
              Before designing a single screen, I spent time in the world compliance professionals live in: watching them
              work, talking to them and reading the data.
            </p>
            <ul className={s.stats}>
              {methods.map((m) => (
                <li key={m.t}>
                  <b>{m.n}</b>
                  <p>
                    <strong>{m.t}.</strong> {m.d}
                  </p>
                </li>
              ))}
            </ul>
            <p className={s.fine}>No tool on the market combined AI, a real-time executive dashboard and cross-framework mapping.</p>

            <h3 className={s.h3}>What I needed to understand</h3>
            <ul className={s.cards}>
              {questions.map((q) => (
                <li key={q.k}>
                  <span>{q.k}</span>
                  <p>{q.q}</p>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Key findings</h3>
            <ol className={s.cards}>
              {findings.map((f, i) => (
                <li key={f.t}>
                  <span>0{i + 1}</span>
                  <b>{f.t}</b>
                  <p>{f.d}</p>
                </li>
              ))}
            </ol>
            <h3 className={s.h3}>Voices from the field</h3>
            <ul className={`${s.quotes} ${s.quotes3}`}>
              {voices.map((v) => (
                <li key={v.r}>
                  <q>{v.q}</q>
                  <small>{v.r}</small>
                </li>
              ))}
            </ul>
          </section>

          {/* ===== Define ===== */}
          <section className={s.sec} id="define">
            <p className={s.kick}>03 · Define</p>
            <h2 className={s.h2}>From interview notes to four themes</h2>
            <p>
              I moved every observation and quote onto sticky notes in FigJam and grouped them until four clusters held.
            </p>
            <div className={s.clusters}>
              {clusters.map((c) => (
                <div key={c.t}>
                  <b style={{ background: c.c }}>{c.t}</b>
                  <ul>
                    {c.notes.map((n) => (
                      <li key={n} style={{ background: c.bg }}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className={s.h3}>The compliance officer’s audit-prep journey</h3>
            <div className={s.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways on small screens">
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Feeling</th>
                    <th>Tools</th>
                    <th>Pain point</th>
                  </tr>
                </thead>
                <tbody>
                  {journey.map((j) => (
                    <tr key={j.s}>
                      <td>
                        <b>{j.s}</b>
                      </td>
                      <td>
                        <span className={s.emoji} aria-hidden>
                          {j.e}
                        </span>{' '}
                        {j.f}
                      </td>
                      <td>{j.tools}</td>
                      <td className={s.pain}>{j.pain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={s.h3}>Who I designed for</h3>
            <ul className={`${s.personas} ${s.personas3}`}>
              {personas.map((p) => (
                <li key={p.n}>
                  <div className={s.pHead}>
                    <span className={s.avatar} aria-hidden>
                      {p.i}
                    </span>
                    <div>
                      <b>{p.n}</b>
                      <small>{p.r}</small>
                    </div>
                  </div>
                  <q>{p.q}</q>
                  <dl>
                    <dt>Goals</dt>
                    <dd>{p.goal}</dd>
                    <dt>Pains</dt>
                    <dd>{p.pain}</dd>
                  </dl>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Where design could make the biggest difference</h3>
            <div className={s.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways on small screens">
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Finding</th>
                    <th>Opportunity</th>
                    <th>Design direction</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map((o) => (
                    <tr key={o.f}>
                      <td>{o.f}</td>
                      <td>{o.o}</td>
                      <td>
                        <b>{o.d}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== Designing for trust ===== */}
          <section className={s.sec} id="trust">
            <p className={s.kick}>04 · Designing for trust</p>
            <h2 className={s.h2}>Designing for sceptical enterprise users</h2>
            <p>
              People won’t act on an AI recommendation they don’t understand, especially where every decision has to be
              auditable. Explainability is a compliance requirement, not a UX nicety.
            </p>
            <div className={s.compare}>
              <div className={s.v1}>
                <span>The problem</span>
                <p>
                  Early designs showed AI-flagged controls with only a confidence percentage. In testing: “I can’t act on a
                  number. I need to know why.” Only 22% said they’d trust the flag.
                </p>
              </div>
              <div className={s.v2}>
                <span>The solution</span>
                <p>
                  Every AI flag now carries a tier label, an evidence count, the framework clause it maps to, a plain-language
                  rationale and a link to the source data.
                </p>
              </div>
            </div>
            <div className={s.question}>
              <p>Three principles for AI in a regulated context</p>
              <ul className={s.qChips}>
                <li>Show the evidence, not just the conclusion</li>
                <li>Make confidence readable, not numeric</li>
                <li>Always let people drill down to the source</li>
              </ul>
            </div>
          </section>

          {/* ===== Modules ===== */}
          <section className={s.sec} id="modules">
            <p className={s.kick}>05 · The solution</p>
            <h2 className={s.h2}>One platform. Six modules. No blind spots.</h2>
            <p>
              Rather than patching the old workflows, I reimagined the experience from the ground up: six connected modules,
              each solving one pain point, on one interaction model and the WorldKit design system. Teams move from document
              upload to insight in minutes, not days.
            </p>

            {modules.map((m) => (
              <div key={m.id} className={s.decision} id={m.id}>
                <div className={s.dHead}>
                  <span className={s.dNum}>{m.n}</span>
                  <h3>{m.t}</h3>
                </div>
                <div className={s.dText}>
                  <div>
                    <em>The problem</em>
                    <p>{m.problem}</p>
                  </div>
                  <div>
                    <em>What I designed</em>
                    <p>{m.did}</p>
                  </div>
                </div>
                <ul className={s.feat}>
                  {m.feats.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {m.note && (
                  <p className={s.note}>
                    <b>Design decision.</b> {m.note}
                  </p>
                )}
                <Screen
                  src={`${IMG}/screens/${m.clip}.webp`}
                  alt={`${m.t}, a real screen from the platform`}
                  w={2400}
                  h={1368}
                  clip={{ src: `${V}/${m.clip}.mp4`, poster: `${V}/${m.clip}-poster.webp` }}
                />
              </div>
            ))}

            <div className={s.band}>
              <h3 className={s.h3}>How research drove the design decisions</h3>
              <div className={s.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways on small screens">
                <table className={s.table}>
                  <thead>
                    <tr>
                      <th>Research finding</th>
                      <th>Design decision</th>
                      <th>Before → after</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisions.map((d) => (
                      <tr key={d.f}>
                        <td>{d.f}</td>
                        <td>
                          <b>{d.d}</b>
                        </td>
                        <td>
                          <span className={s.pain}>{d.before}</span>
                          <br />→ {d.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ===== Validate ===== */}
          <section className={s.sec} id="validate">
            <p className={s.kick}>06 · Validate</p>
            <h2 className={s.h2}>Validating with real users, every sprint</h2>
            <p>Usability testing ran before each engineering handoff, with compliance analysts and security engineers.</p>
            <ul className={`${s.stats} ${s.stats5}`}>
              {tests.map((x) => (
                <li key={x.t}>
                  <b>{x.n}</b>
                  <p>{x.t}</p>
                </li>
              ))}
            </ul>
            <h3 className={s.h3}>What testing changed</h3>
            <div className={s.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways on small screens">
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>What I tested</th>
                    <th>What users said or did</th>
                    <th>Design change</th>
                  </tr>
                </thead>
                <tbody>
                  {changes.map((c) => (
                    <tr key={c.k}>
                      <td>
                        <span className={s.partChip}>{c.k}</span>
                      </td>
                      <td>{c.heard}</td>
                      <td>
                        <b>{c.did}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>07 · Outcome</p>
            <h2 className={s.h2}>Measurable results within weeks of launch</h2>
            <ul className={`${s.glance} ${s.glance3}`}>
              {impact.map((x) => (
                <li key={x.k}>
                  <span>{x.k}</span>
                  <p className={s.glanceNum}>
                    <b>{x.v}</b>
                  </p>
                  <small>{x.d}</small>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>What I learned</h3>
            <ol className={s.learn}>
              {learnings.map((l, i) => (
                <li key={l.t}>
                  <span>{i + 1}</span>
                  <div>
                    <b>{l.t}</b>
                    <p>{l.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={`hand ${s.hand}`}>explainability is a feature, not a footnote :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/retail-ops/" className={s.nextCard}>
              <span className={s.nextImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/retail-ops/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>Fortune 100 retail · AI operations</em>
                <b>Designing an AI operations platform that shows every retail role what to act on first</b>
                <span>Six portals, from the store floor to corporate and IT, on one design system.</span>
                <i>View case study →</i>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
