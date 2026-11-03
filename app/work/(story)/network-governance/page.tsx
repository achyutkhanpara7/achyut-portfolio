import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';
import { site } from '@/content/work';
import Screen, { Clip } from './Screen';
import Rail from './Rail';
import s from './story.module.css';

export const metadata = {
  title: 'VERRDICT · Designing trust into network governance',
  description:
    'A governance platform for a large financial company. Scattered network checks in one place, so every decision can be explained.',
  robots: { index: false, follow: false },
};

const IMG = '/work/network-governance';

/* ---------------- content (from the VERRDICT copy doc) ---------------- */

const team = [
  { n: 'Me', r: 'UX designer · end to end', me: true },
  { n: '1', r: 'Subject matter expert' },
  { n: '1', r: 'Project manager' },
  { n: '5', r: 'Developers' },
  { n: '3', r: 'Delivery, sales & business' },
];

const loop = [
  { n: '01', t: 'Estate', d: 'Thousands of devices, versions and vendors.' },
  { n: '02', t: 'Warnings', d: 'Vendor warnings keep arriving.' },
  { n: '03', t: 'Verdict', d: 'Compliant, gap, or needs review.' },
  { n: '04', t: 'Evidence', d: 'It has to hold up when audited.' },
];

const personas = [
  { r: 'Network analyst', q: 'Where do I start today?' },
  { r: 'Change reviewer', q: 'Why does it say gap?' },
  { r: 'Compliance officer', q: 'What is our exposure?' },
  { r: 'Platform admin', q: 'Is this data current?' },
];

const pains = [
  { t: 'No sense of priority', d: 'Everything looked equally urgent.' },
  { t: 'Verdicts without reasons', d: 'The status showed, the reason did not.' },
  { t: 'Data of unknown age', d: 'Nothing said when it was last checked.' },
  { t: 'Dead ends', d: 'Seeing and fixing were separate trips.' },
];

const criteria = [
  { t: 'One place to look', d: 'Devices, risk and open decisions without leaving the page.' },
  { t: 'Every flag explains itself', d: 'No status appears without a way to see why.' },
  { t: 'Calm under load', d: 'Hundreds of alerts should feel like a to-do list.' },
];

const lens = [
  'Can I tell what needs attention first?',
  'Can I see why it says what it says?',
  'Do I know where this came from and how old it is?',
  'Can I act from here?',
  'Does my action leave a record?',
];

const probes = [
  'Walk me through the last decision someone had to defend.',
  'When a reviewer opens the tool, what do they look at first?',
  'Which numbers do people trust, and which do they check somewhere else?',
  'After a verdict, where does the work go next?',
];

const compare = [
  { c: 'Scanners', good: 'Find issues across the estate', stop: 'Produce volume, with no view of what to act on first' },
  { c: 'Inventories', good: 'Hold the record of what exists', stop: 'Say nothing about risk or decisions' },
  { c: 'Ticketing', good: 'Track the work and its owner', stop: 'Carry no evidence of why the ticket exists' },
];

const insights = [
  {
    t: 'Reviewers needed a first move, not more alerts.',
    d: 'The question was never how many. It was which one to open first.',
  },
  {
    t: 'A verdict without a reason is a liability.',
    d: 'A status nobody can explain is worse than no status. This insight gave the product its name.',
  },
  {
    t: 'Where data came from mattered as much as what it said.',
    d: 'A number from a live external feed and a number from a week-old upload are not the same number.',
  },
];

const constraints = [
  { t: 'Two-week build window', d: 'The design had to be buildable inside the sprint the team already had planned.' },
  { t: 'One designer', d: 'No research team, no second pair of hands. Every artefact here is mine.' },
  { t: 'Build on what exists', d: 'New screens had to reuse the existing component set rather than start a new one.' },
  { t: 'Requirements were fixed', d: 'The brief named the modules. The freedom was in how they behaved, not what shipped.' },
];

const principles = [
  { p: 'P1', t: 'Explainable by default', d: 'No status ships unless the reason is one click away.' },
  { p: 'P2', t: 'Priority over volume', d: 'Rank the work. Counts alone tell a reviewer nothing.' },
  { p: 'P3', t: 'Label the source', d: 'External or internal, live or snapshot, and how old.' },
  { p: 'P4', t: 'Calm at density', d: 'Colour is reserved for risk. Nothing else competes.' },
];

const journey = ['Land', 'Open', 'Inspect', 'Decide', 'Act', 'Record'];
const journeyD = [
  'The ranked queue opens.',
  'The device and its trigger are named.',
  'Controls, records and source.',
  'In place, on the row.',
  'The fix is raised from the verdict.',
  'Written to the audit log.',
];

const decisions = [
  {
    t: 'Land on four ranked items',
    chose: 'The Overview opens on a ranked queue of the four items that need attention, each with its next action.',
    rejected: 'A landing page of totals and charts. Counts describe the estate but do not tell a reviewer where to start.',
    cost: 'The ranking rules have to be defined, shown and maintained. Everything below the fourth item sits one click away.',
  },
  {
    t: 'Every verdict opens into its working',
    chose: 'Each verdict expands to the checks, records and thresholds that produced it.',
    rejected: 'A status badge with the reasoning held in a separate report.',
    cost: 'Denser detail views, and more states to design and build inside two weeks.',
  },
  {
    t: 'Every feed labels itself',
    chose: 'Each data source shows whether it is external or internal, live or a snapshot, and when it last ran.',
    rejected: 'One global “last updated” stamp for the whole page.',
    cost: 'More metadata on screen, and stale data becomes visible instead of hidden. That is uncomfortable, and it is the point.',
  },
  {
    t: 'Lifecycle alerts start 18 months out and escalate',
    chose: 'A device enters the list 18 months before its deadline and moves up in severity as time runs down.',
    rejected: 'Alerting only when a deadline is breached, when the only move left is an emergency one.',
    cost: 'A much longer list. It only works because breached and upcoming items are separated and colour is held back for real risk.',
  },
  {
    t: 'Act without leaving the record',
    chose: 'The reviewer raises the ticket from inside the verdict, pre-filled with its evidence.',
    rejected: 'A link out to the ticketing tool, which is where context was lost before.',
    cost: 'A two-way sync to design for, including the state where the two systems disagree.',
  },
];

const screens = [
  {
    id: 'overview',
    n: '01',
    name: 'Overview',
    tag: 'P2 · Priority over volume',
    title: 'The day starts ranked, not counted',
    problem: 'A landing page of totals told reviewers how big the estate was, not where to start.',
    did: 'The first thing a reviewer sees is four items in order, each with the action it needs.',
    img: `${IMG}/overview.webp`,
    clip: 'verdict',
    alt: 'Overview screen with four summary tiles and a ranked list of four items needing attention.',
    marks: [
      { x: 45, y: 27, t: 'Four tiles, one question each' },
      { x: 24, y: 42, t: '“What needs attention”, ranked 1 to 4' },
      { x: 61, y: 58, t: 'Every row carries its verb' },
      { x: 26, y: 18.5, t: 'Freshness in the header' },
    ],
  },
  {
    id: 'lifecycle',
    n: '02',
    name: 'Lifecycle Alerts',
    tag: 'P4 · Calm at density',
    title: 'Overdue and upcoming are different jobs',
    problem: 'Hundreds of end-of-life alerts looked equally urgent, so none of them felt urgent.',
    did: 'A breached deadline needs action today. A deadline 18 months away needs a plan. The screen keeps them apart.',
    img: `${IMG}/lifecycle-alerts.webp`,
    clip: 'alerts',
    alt: 'Lifecycle Alerts screen with one critical banner and a list split into breached and upcoming devices.',
    marks: [
      { x: 37, y: 15, t: 'One banner, one device' },
      { x: 52, y: 25, t: 'Breached vs. 18-month look-ahead' },
      { x: 59, y: 65, t: 'The team’s own words as filters' },
      { x: 55, y: 55, t: 'Ranking rules and audit ledger as tabs' },
    ],
  },
  {
    id: 'assurance',
    n: '03',
    name: 'Change Assurance',
    tag: 'P1 · Explainable by default',
    title: 'The verdict shows its work',
    problem: 'A change record showed “gap” or “compliant” with nothing behind it.',
    did: 'Each change record walks through its checks in order, and the verdict comes last.',
    img: `${IMG}/change-assurance.webp`,
    clip: 'change',
    alt: 'Change Assurance screen showing change records with implementation, test and tier-2 checks leading to a verdict.',
    marks: [
      { x: 76, y: 68, t: 'Implementation, Test, Tier-2, then verdict' },
      { x: 44, y: 24, t: 'Evidence gaps counted separately' },
      { x: 51, y: 41, t: 'Deadlines stated as time, not colour' },
      { x: 89, y: 41, t: 'Source of record, named' },
    ],
  },
  {
    id: 'assets',
    n: '04',
    name: 'Asset Intelligence',
    tag: 'P3 · Label the source',
    title: 'Where every number came from',
    problem: 'Live feeds and week-old uploads sat side by side, looking equally true.',
    did: 'Every feed states its origin and its age, and the path from raw advisories to relevant ones is shown as a count.',
    img: `${IMG}/asset-intelligence.webp`,
    clip: 'inventory',
    alt: 'Asset Intelligence screen listing data feeds, each labelled as external or internal and live or snapshot.',
    marks: [
      { x: 29, y: 14, t: 'External and internal are tabs' },
      { x: 24, y: 66, t: 'Live or snapshot, per feed' },
      { x: 37, y: 38, t: '1,744 loaded, 6 relevant: a visible narrowing' },
      { x: 24, y: 88, t: 'Manual uploads follow the same path' },
    ],
  },
  {
    id: 'trends',
    n: '05',
    name: 'Trend Analysis',
    tag: 'P1 · Explainable by default',
    title: 'Exposure with a named cause',
    problem: 'Charts showed that risk moved, but not why, or where to look.',
    did: 'The page opens with a sentence that states the finding. The charts support it, and the method sits one click beneath.',
    img: `${IMG}/trend-analysis.webp`,
    clip: 'verra',
    alt: 'Trend Analysis screen with a one-sentence summary above charts of exposure and failure trend.',
    marks: [
      { x: 31, y: 13, t: 'A sentence before the charts' },
      { x: 29, y: 38, t: 'Primary exposure with its controls' },
      { x: 27, y: 53, t: 'Method one click below the claim' },
      { x: 25, y: 62, t: 'Trend against the prior period' },
    ],
  },
];

const remediation = [
  { t: 'Verdict reached', d: 'The check runs and the reason is attached to the record.' },
  { t: 'Ticket raised', d: 'Sent to Jira pre-filled with records, controls and a link back.' },
  { t: 'Tracked in place', d: 'Assignee, status and age read back from Jira, shown on the record.' },
  { t: 'Fix confirmed', d: 'Status returns and the record closes against its own evidence.' },
  { t: 'Trail kept', d: 'Reason, action and outcome sit on one object for the audit.' },
];

const states = [
  { t: 'Empty', h: 'Zero is an achievement', d: '“0 fully compliant · no change vs last 7 days” still reports the comparison.' },
  { t: 'Loading', h: 'Refresh is per source', d: 'One feed can scan while the rest stay readable. The screen never blanks.' },
  { t: 'Stale', h: 'Age is always on screen', d: 'Last run per feed, last sync per integration. Stale is labelled, not hidden.' },
  { t: 'Critical', h: 'One banner, never two', d: 'Only the single most urgent breach gets the top slot.' },
];

const handoff = [
  { t: 'Annotated screens', d: 'Every state, every threshold and the rule behind each ranking, written next to the screen it governs.' },
  { t: 'Component specs', d: 'Sizes, spacing and named tokens, so a new module inherits the risk language for free.' },
  { t: 'Walkthrough sessions', d: 'I walked engineering through the flows before the build, not after, and stayed available during it.' },
  { t: 'Design review of the build', d: 'I inspected the implemented screens against the specs and logged the differences that mattered.' },
];

const brief = [
  { a: 'One place to look', b: 'Overview holds the day’s ranked work. Every other module is one level down.' },
  { a: 'Every flag explains itself', b: 'Each verdict opens into its checks and records. Each feed names its source and age.' },
  { a: 'Calm under load', b: 'Colour is used only for risk. One banner at most. The landing view shows four items, in order.' },
  { a: 'Buildable in two weeks', b: 'Every screen reuses the existing component set, handed over with specs and named tokens.' },
];

const measures = [
  { k: 'Engagement', t: 'Time to first decision', d: 'Minutes from opening the dashboard to acting on the top-ranked item.' },
  { k: 'Throughput', t: 'Share of alerts triaged', d: 'Proportion of the queue that reaches a verdict instead of being scrolled past.' },
  { k: 'Trust', t: 'Evidence attached', d: 'Verdicts that carry a source and a timestamp when an auditor asks.' },
  { k: 'Coverage', t: 'Unknowns closed', d: 'Devices moving out of the unknown bucket week over week.' },
];

/* ---------------- page ---------------- */

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'Problem' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'design', label: 'Final design' },
  { id: 'impact', label: 'Impact' },
];

export default function Verrdict() {
  return (
    <article className={s.page}>
      {/* ===== Hero: product-coloured band, title centred, the real screen below ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>VERRDICT · Network governance · Fortune 100 financial services</p>
        <h1 className={s.h1}>
          Designing trust into network governance, so every decision can be explained
        </h1>
        <ul className={s.heroMeta}>
          <li>Lead UX designer</li>
          <li>2 weeks</li>
          <li>Team of 11</li>
          <li>Proof of concept · NDA</li>
        </ul>
        <div className={s.heroShot}>
          <Clip src={`${IMG}/video/verdict.mp4`} poster={`${IMG}/video/verdict-poster.webp`} label="VERRDICT Overview walkthrough: the day’s work, ranked" eager />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <h2 className={s.h2}>First, a little context</h2>
            <h3 className={s.h3}>About VERRDICT</h3>
            <p>
              A governance platform for a large financial company. It pulls scattered network checks into one place, so a
              reviewer can explain every decision they make.
            </p>
            <h3 className={s.h3}>Overview</h3>
            <p>
              Vendor warnings, the asset inventory and change records lived in separate tools. I audited the existing
              experience, grouped the findings into one problem, and designed six modules against four principles, inside
              a two-week window.
            </p>
            <div className={s.twoCol}>
              <div>
                <h3 className={s.h3}>My role</h3>
                <p>
                  Lead UX designer and the only designer on the project. I took requirements directly from the client and
                  owned the audit, structure, flows, interface, design system and handoff.
                </p>
              </div>
              <div>
                <h3 className={s.h3}>Team</h3>
                <ul className={s.team}>
                  {team.map((t) => (
                    <li key={t.r} className={t.me ? s.me : ''}>
                      <b>{t.n}</b> {t.r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className={s.h3}>Outcomes</h3>
            <div className={s.outcomes}>
              <div>
                <b>6 modules</b>
                <span>Plus one shared component set, delivered</span>
              </div>
              <div>
                <b>2 weeks</b>
                <span>Inside a sprint the team had already planned</span>
              </div>
              <div>
                <b>To adoption</b>
                <span>Strong client response to the proof of concept</span>
              </div>
            </div>
            <p className={s.fine}>A proof of concept: there are no live usage numbers yet, and this page doesn’t invent any.</p>
          </section>

          {/* ===== Context ===== */}
          <section className={s.sec} id="context">
            <h2 className={s.h2}>Governance is a loop, not a report</h2>
            <p>
              A network team doesn’t produce a compliance report once a quarter. It runs the same loop every day, for every
              device, and each step depends on the one before it.
            </p>
            <ol className={s.loop}>
              {loop.map((l) => (
                <li key={l.n}>
                  <span>{l.n}</span>
                  <b>{l.t}</b>
                  <p>{l.d}</p>
                </li>
              ))}
            </ol>
            <p className={s.warn}>Break one link and you can no longer explain the result.</p>

            <h3 className={s.h3}>Four people, one shared record</h3>
            <p>Four roles use the same data and ask four different questions of it. The design had to answer all four from one record.</p>
            <ul className={s.personas}>
              {personas.map((p) => (
                <li key={p.r}>
                  <span className={s.avatar} aria-hidden>
                    {p.r
                      .split(' ')
                      .map((w) => w[0].toUpperCase())
                      .join('')}
                  </span>
                  <b>{p.r}</b>
                  <q>{p.q}</q>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Every decision was pieced together by hand</h3>
            <p>
              Vendor advisories, the asset inventory and change records sat in three separate places. People joined them
              in spreadsheets and email, and the verdict came out the other end with nothing attached to it.
            </p>
            <div className={s.flow}>
              <div className={s.sources}>
                <span>Vendor advisories</span>
                <span>Asset inventory</span>
                <span>Change records</span>
              </div>
              <i className={s.arrow} aria-hidden />
              <div className={s.manual}>Spreadsheets &amp; email</div>
              <i className={s.arrow} aria-hidden />
              <div className={s.bad}>
                <b>A decision with nothing behind it</b>
                <span>Two people, same device, different conclusions.</span>
              </div>
            </div>
          </section>

          {/* ===== Problem ===== */}
          <section className={s.sec} id="problem">
            <h2 className={s.h2}>Where the old experience lost the reviewer</h2>
            <ul className={s.pains}>
              {pains.map((p, i) => (
                <li key={p.t}>
                  <span>{i + 1}</span>
                  <b>{p.t}</b>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>

            <figure className={s.statement}>
              <figcaption>Core problem statement</figcaption>
              <blockquote>
                “Reviewers were accountable for decisions they could not explain. The information existed, but it was
                scattered, unranked, unsourced and cut off from the action it called for.”
              </blockquote>
              <p>Synthesised from the audit and the team interviews</p>
            </figure>

            <h3 className={s.h3}>What good had to mean before I drew anything</h3>
            <p>With two weeks and no research team, I needed a fixed bar to check the work against.</p>
            <ol className={s.cards3}>
              {criteria.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Discovery ===== */}
          <section className={s.sec} id="discovery">
            <h2 className={s.h2}>The audit, the interviews, the findings</h2>
            <p>
              I had two weeks and no research team, so I chose methods I could run alone and finish in days. A fixed set
              of questions kept the audit comparable from screen to screen, and stopped it turning into a list of
              opinions.
            </p>
            <h3 className={s.h3}>Five questions I asked of every screen</h3>
            <ol className={s.lens}>
              {lens.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>

            <h3 className={s.h3}>What I asked the team</h3>
            <p>Four probes, not a script. They’re the themes I came back to, not verbatim quotes.</p>
            <ul className={s.notes}>
              {probes.map((q, i) => (
                <li key={q} className={i % 2 ? s.noteBlue : s.noteGreen}>
                  <span>Interview probe</span>
                  {q}
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Each tool category owns one link of the loop</h3>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Does well</th>
                    <th>Where it stops</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r) => (
                    <tr key={r.c}>
                      <td>
                        <b>{r.c}</b>
                      </td>
                      <td>{r.good}</td>
                      <td>{r.stop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <blockquote className={s.pull}>
              No category held the verdict, its reason and its fix together. That gap is the space VERRDICT sits in.
            </blockquote>

            <h3 className={s.h3}>Three insights</h3>
            <ol className={s.insights}>
              {insights.map((x, i) => (
                <li key={x.t}>
                  <span>{i + 1}</span>
                  <div>
                    <b>{x.t}</b>
                    <p>{x.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Decisions ===== */}
          <section className={s.sec} id="decisions">
            <div className={s.question}>
              <p>The question I designed for</p>
              <blockquote>
                How do we make every decision something a reviewer can <em>act on</em> and <em>explain</em>, in{' '}
                <em>one place</em>?
              </blockquote>
            </div>

            <h3 className={s.h3}>Constraints I had to work with</h3>
            <ol className={s.cards2}>
              {constraints.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>Four rules I designed against</h3>
            <ul className={s.cards2}>
              {principles.map((p) => (
                <li key={p.p}>
                  <span>{p.p}</span>
                  <b>{p.t}</b>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Two halves: what is true, what we decided</h3>
            <div className={s.ia}>
              <div className={s.iaTop}>
                <b>Overview</b>
                <span>The day’s ranked work</span>
              </div>
              <div className={s.iaCols}>
                <div>
                  <p>Intelligence · what is true</p>
                  <span>Asset Intelligence</span>
                  <span>Lifecycle Alerts</span>
                </div>
                <div>
                  <p>Assurance · what we decided</p>
                  <span>Change Assurance</span>
                  <span>Trend Analysis</span>
                </div>
              </div>
              <div className={s.iaFoot}>Remediation is reached from inside a verdict, not from the navigation.</div>
            </div>

            <h3 className={s.h3}>From a ranked alert to a decision you can explain</h3>
            <ol className={s.journey}>
              {journey.map((j, i) => (
                <li key={j}>
                  <span>{i + 1}</span>
                  <b>{j}</b>
                  <p>{journeyD[i]}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      {/* ===== Iterations band: five calls, chose / rejected / cost ===== */}
      <section className={s.bandGrey}>
        <div className={s.bandInner}>
          <h2 className={s.h2}>
            Five calls,
            <br />
            and what each one cost
          </h2>
          <p>The brief fixed which modules shipped. Everything here is about how they behave.</p>
          <ol className={s.decisions}>
            {decisions.map((d, i) => (
              <li key={d.t}>
                <h3>
                  {i + 1}. {d.t}
                </h3>
                <div className={s.dGrid}>
                  <div className={s.chose}>
                    <em>✓ Chose</em>
                    <p>{d.chose}</p>
                  </div>
                  <div className={s.rejected}>
                    <em>✕ Rejected</em>
                    <p>{d.rejected}</p>
                  </div>
                  <div className={s.cost}>
                    <em>Cost</em>
                    <p>{d.cost}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className={s.layout}>
        <div className={s.railSpacer} aria-hidden />
        <div className={s.main}>
          {/* ===== Final design ===== */}
          <section className={s.sec} id="design">
            <h2 className={s.h2}>
              Breaking down
              <br />
              the final design, screen by screen
            </h2>
            <p>Each screen answers one finding from the audit. Watch it work, or switch to the annotated screen and hover a number to see what it points at.</p>

            {screens.map((sc, i) => (
              <div key={sc.id} className={s.screen} id={sc.id}>
                <h3 className={s.screenT}>
                  {i + 1}. {sc.title}
                  <span className={s.tag}>{sc.tag}</span>
                </h3>
                <ul className={s.pd}>
                  <li>
                    <b>Problem identified</b>
                    <p>{sc.problem}</p>
                  </li>
                  <li>
                    <b>What I did</b>
                    <p>{sc.did}</p>
                  </li>
                </ul>
                <Screen
                  src={sc.img}
                  alt={sc.alt}
                  marks={sc.marks}
                  clip={{ src: `${IMG}/video/${sc.clip}.mp4`, poster: `${IMG}/video/${sc.clip}-poster.webp` }}
                  start={sc.id === 'overview' ? 'still' : 'clip'}
                />
                <p className={s.caption}>
                  {sc.name} · real screen from the proof of concept. Walkthroughs recorded for the client presentation.
                </p>
              </div>
            ))}

            <h2 className={s.h2}>
              Going beyond
              <br />
              the screens in the brief
            </h2>
            <div className={s.screen}>
              <h3 className={s.screenT}>6. From verdict to closed, without leaving the record</h3>
              <p>
                Before this, raising and tracking the fix happened in other people’s tools, and nobody could reconstruct it
                afterwards. Now the ticket is raised where the decision is made.
              </p>
              <ol className={s.remed}>
                {remediation.map((r, i) => (
                  <li key={r.t}>
                    <span>{i + 1}</span>
                    <b>{r.t}</b>
                    <p>{r.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className={s.screen}>
              <h3 className={s.screenT}>7. Sitting between the systems, not beside them</h3>
              <div className={s.services}>
                <div>
                  <p>Feeds in</p>
                  <span>
                    Cisco PSIRT <em>external</em>
                  </span>
                  <span>
                    Tenable <em>external</em>
                  </span>
                  <span>
                    Splunk <em>internal</em>
                  </span>
                  <span>
                    ServiceNow <em>internal</em>
                  </span>
                </div>
                <div className={s.core}>
                  <b>One record</b>
                  <p>Verdict, evidence and ticket stay together, every feed labelled with its source and last run.</p>
                </div>
                <div>
                  <p>Actions out</p>
                  <span>
                    Jira <em>two-way</em>
                  </span>
                  <span>
                    ServiceNow <em>two-way</em>
                  </span>
                </div>
              </div>
              <p className={s.clipLead}>
                In the product, that join shows up as the alert-to-asset map: an advisory arrives from outside and lands on
                the exact devices it affects.
              </p>
              <div className={s.stage}>
                <Clip
                  src={`${IMG}/video/map.mp4`}
                  poster={`${IMG}/video/map-poster.webp`}
                  label="Asset Intelligence walkthrough: security advisories mapped to affected devices"
                />
              </div>
            </div>

            <div className={s.screen}>
              <h3 className={s.screenT}>8. Time remaining becomes severity</h3>
              <p>
                A list of 452 alerts is not a to-do list. I tied severity to time remaining and gave each band one verb, so
                the label tells the reviewer what to do next.
              </p>
              <div className={s.severity}>
                <div className={s.sevBig}>
                  <b>452</b>
                  <span>active alerts in the design data</span>
                </div>
                <div className={s.sevBars}>
                  <div style={{ ['--w' as string]: '19%' }} className={s.sevPast}>
                    <b>85</b> past due
                  </div>
                  <div style={{ ['--w' as string]: '40%' }} className={s.sevAdv}>
                    <b>182</b> advance notice
                  </div>
                  <div style={{ ['--w' as string]: '41%' }} className={s.sevMon}>
                    <b>185</b> monitor or plan
                  </div>
                </div>
              </div>
            </div>

            <div className={s.screen}>
              <h3 className={s.screenT}>9. Designed for the states nobody demos</h3>
              <ul className={s.cards2}>
                {states.map((x) => (
                  <li key={x.t}>
                    <span>{x.t}</span>
                    <b>{x.h}</b>
                    <p>{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.screen}>
              <h3 className={s.screenT}>10. Colour is only for risk, and never colour alone</h3>
              <p>
                Structure uses navy, blue, teal and a near-white canvas. Red, amber and green appear only where there is
                risk, and every risk state also carries a word. All text meets 4.5:1 contrast.
              </p>
              <div className={s.swatchRow}>
                <div className={s.swatches}>
                  <span style={{ background: '#002D72' }} title="Navy" />
                  <span style={{ background: '#0B5CD5' }} title="Primary" />
                  <span style={{ background: '#1AA7C7' }} title="Teal" />
                  <span style={{ background: '#F7F9FC' }} title="Canvas" />
                </div>
                <div className={s.chips}>
                  <span className={s.cCrit}>Gap</span>
                  <span className={s.cRev}>Needs review</span>
                  <span className={s.cOk}>Compliant</span>
                </div>
              </div>
            </div>

            <div className={s.screen}>
              <h3 className={s.screenT}>11. How this got to engineering</h3>
              <ul className={s.cards2}>
                {handoff.map((h) => (
                  <li key={h.t}>
                    <b>{h.t}</b>
                    <p>{h.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===== Impact ===== */}
          <section className={s.sec} id="impact">
            <h2 className={s.h2}>Impact after delivery</h2>
            <div className={s.impact}>
              <p className={s.impactKick}>Outcome</p>
              <p className={s.impactBig}>Delivered, well received, moving toward adoption.</p>
              <div className={s.impactGrid}>
                {brief.map((b) => (
                  <div key={b.a}>
                    <b>{b.a}</b>
                    <p>{b.b}</p>
                  </div>
                ))}
              </div>
              <p className={s.impactNote}>
                No live usage numbers yet. When there are, these four measures are how this should be judged.
              </p>
              <ul className={s.measures}>
                {measures.map((m) => (
                  <li key={m.t}>
                    <span>{m.k}</span>
                    <b>{m.t}</b>
                    <p>{m.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className={s.h2}>
              What I’d do
              <br />
              differently next time
            </h2>
            <ul className={s.reflect}>
              <li>
                <b>In regulated work, the interface is the argument.</b> A reviewer has to defend a decision to someone
                who wasn’t in the room. The screen is the evidence they bring, so designing it is designing the case they
                make.
              </li>
              <li>
                <b>Test the ranking rules with real reviewers earlier.</b> The ranked queue is the centre of the product,
                and its rules came from the audit and the team. I’d put them in front of the people who live with them
                before building on top.
              </li>
            </ul>
            <p className={`hand ${s.hand}`}>if it can’t prove it, it isn’t governed :)</p>
          </section>
        </div>
      </div>

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
            <b>AI Operations Platform for Retail</b>
            <span>Six personas, one ecosystem, designed to feel like one product.</span>
            <i>View case study →</i>
          </span>
        </Link>
        <div className={s.talk}>
          <LiquidButton href={`mailto:${site.email}?subject=VERRDICT%20case%20study`} variant="emerald">
            Let&apos;s talk about it
          </LiquidButton>
        </div>
      </section>
    </article>
  );
}
