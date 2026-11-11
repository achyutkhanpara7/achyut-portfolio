import Image from 'next/image';
import Link from 'next/link';
import { caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen from '@/components/story/Screen';
import s from '@/components/story/story.module.css';

export const metadata = {
  keywords: caseKeywords('retail-ops'),
  title: 'Retail AI operations · Showing every role what to act on first',
  description:
    'An AI operations platform for a Fortune 100 retailer: six portals, from the store floor to corporate, distribution and IT, built on one shared design system.',
  robots: { index: false, follow: false },
};

const IMG = '/work/retail-ops';
const V = `${IMG}/video`;

/* ---------------- content: from the project files, prototypes and earlier case study ---------------- */

const owned = [
  { t: 'Research', d: 'Discovery across all six roles, synthesised into one set of goals.' },
  { t: 'Structure', d: 'What each role decides first, and the IA for six portals.' },
  { t: 'System', d: 'One component library on the client’s brand tokens.' },
  { t: 'Working portals', d: 'Six interactive portals in Figma Make, plus animated showcases.' },
];

const signals = ['Sales', 'Inventory', 'Freshness', 'Appliance health', 'Tickets', 'Deliveries', 'Credentials'];

const roles6 = [
  { n: 'Store Manager', d: 'Runs one store' },
  { n: 'Area Manager', d: 'Looks after 24 stores' },
  { n: 'Corporate VP', d: 'Owns the whole operation' },
  { n: 'Distributor', d: 'Moves stock to stores' },
  { n: 'Store staff', d: 'Needs access to work' },
  { n: 'IT Admin', d: 'Keeps access secure' },
];

// Projected impact (not production measurements).
const targets = [
  { v: '45%', t: 'Faster resolution', d: 'Store issues resolved sooner.' },
  { v: '60%', t: 'Improved efficiency', d: 'Routine workflows completed with less effort.' },
  { v: '35%', t: 'Less manual work', d: 'AI agents handle repetitive tasks and lookups.' },
];

const problems = [
  { t: 'Five products, one team', d: 'Each role had its own tool and its own look, even when everyone was looking at the same store.' },
  { t: 'Severity that meant nothing', d: 'A critical alert in one tool looked like a low-priority note in another. Nobody could triage at a glance.' },
  { t: 'No shared components', d: 'Cards, tables and status pills were rebuilt differently each time, multiplying design and engineering work.' },
  { t: 'Security felt bolted on', d: 'Password reset and IT admin looked nothing like the dashboards, and that broke trust in the whole system.' },
];

const quotes = [
  { q: 'I check four different screens before I even know if today is going to be a good day.', r: 'Store Manager' },
  { q: 'I want to see all my stores at a glance. Right now I click into each one just to know if anything needs attention.', r: 'Area Manager' },
  { q: 'By the time I see a problem in my report, it’s already cost us money.', r: 'Corporate VP of Operations' },
  { q: 'Delivery tracking is scattered across emails, a spreadsheet and the old portal.', r: 'Distributor Manager' },
  { q: 'Every reset request looks the same until I open it. I don’t know if it’s urgent until I’m inside the ticket.', r: 'IT Admin' },
];

const stickies = [
  'Why does every role feel like a different product?',
  'How do we cut response time across thousands of stores?',
  'Can security feel like part of the system, not separate from it?',
];

const personas = [
  {
    i: 'SM',
    n: 'Store Manager',
    r: 'One store, every shift',
    q: 'Is today going to be a good day?',
    decide: 'What to restock, fix or throw out',
    first: 'Urgent items, units to order, store rank',
  },
  {
    i: 'AM',
    n: 'Area Manager',
    r: '24 stores in a region',
    q: 'Which store needs me today?',
    decide: 'Where to spend the next visit',
    first: 'A store grid with revenue, staffing and restock',
  },
  {
    i: 'VP',
    n: 'Corporate VP',
    r: 'The whole operation',
    q: 'What becomes a loss if nobody acts?',
    decide: 'Which risks get an owner this week',
    first: 'Sales vs target, stores at risk, an action queue',
  },
  {
    i: 'DM',
    n: 'Distributor',
    r: 'A distribution centre',
    q: 'What’s moving, and what’s stuck?',
    decide: 'Which route request to approve',
    first: 'Order queue and live deliveries per store',
  },
  {
    i: 'ST',
    n: 'Store staff',
    r: 'Self-service security',
    q: 'Can I get back in without a call?',
    decide: 'Which credential to reset',
    first: 'My credentials, MFA status and one reset button',
  },
  {
    i: 'IT',
    n: 'IT Admin',
    r: 'Access and policy',
    q: 'Is this reset urgent, and is it allowed?',
    decide: 'Approve, block or escalate',
    first: 'Policy engine, approvals and audit',
  },
];

const goals = [
  { t: 'One visual language for six experiences', d: 'The same cards, status pills and KPI tiles, whichever persona is looking.' },
  { t: 'Severity you can read instantly', d: 'Colour, icon and words working together, so Critical reads as critical for a store manager and a VP alike.' },
  { t: 'Security that feels native', d: 'Password self-service and the IT policy engine belong to the same product family, not an afterthought.' },
];

const tokens = [
  { n: 'Brand green', u: 'Shell, primary action', bg: '#008062' },
  { n: 'Signal orange', u: 'Attention, high', bg: '#F4811F' },
  { n: 'Alert red', u: 'Critical only', bg: '#ED2525' },
  { n: 'Surface', u: 'Page ground', bg: '#F5F7FA' },
];

const library = [
  { t: 'One shell', d: 'Green sidebar, a header that says who you are and where, and an AI assistant on every screen.' },
  { t: 'KPI tile', d: 'One number, one label, one consequence. The same tile in all six portals.' },
  { t: 'Alert card', d: 'What happened, where, how long ago, and a Take action button.' },
  { t: 'Status pill', d: 'Critical, High, Medium, Good. Always a word, never colour alone.' },
];

const portals = [
  {
    id: 'p-store',
    n: '01',
    t: 'Store Manager: the shift starts with what’s urgent',
    who: 'Store Manager',
    problem: 'Four screens before knowing if the day was going to be good: stock, freshness, appliances and tickets, all separate.',
    did: 'One regional dashboard: urgent items, units to order and perishables up top, the store’s rank beneath. Restock recommendations come from a demand forecast, and freshness shows what to sell or pull before it spoils.',
    img: `${IMG}/screens/store-manager.webp`,
    clip: 'store-manager',
    alt: 'Store Manager regional dashboard with urgent items, units to order, store rank and weekly sales.',
  },
  {
    id: 'p-area',
    n: '02',
    t: 'Area Manager: every store at a glance',
    who: 'Area Manager',
    problem: 'Knowing if anything needed attention meant clicking into each store, one at a time.',
    did: 'A grid of every location, each card carrying revenue, staffing, restock and its weekly trend, so the store that needs a visit stands out without a click.',
    img: `${IMG}/screens/area-manager.webp`,
    clip: 'area-manager',
    alt: 'Area Manager store grid showing each location with revenue, staffing and restock status.',
  },
  {
    id: 'p-corporate',
    n: '03',
    t: 'Corporate: synthesis, not more data',
    who: 'Corporate VP',
    problem: 'Reports arrived after the money was already lost. More charts would only have made a bigger data graveyard.',
    did: 'An overview of sales vs target, stores at risk, appliance alerts and stockouts, then AI Insights: each business risk with its estimated impact, a confidence score, the stores affected and a recommended action that becomes an owned item in the Action Center.',
    img: `${IMG}/screens/corporate-insights.webp`,
    clip: 'corporate',
    alt: 'Corporate AI Insights listing business risks with impact, confidence score, affected stores and a recommended action.',
  },
  {
    id: 'p-dist',
    n: '04',
    t: 'Distributor: what’s moving and what’s stuck',
    who: 'Distributor',
    problem: 'Delivery tracking lived across emails, a spreadsheet and an old portal.',
    did: 'One dashboard of pending orders, routes awaiting approval and active deliveries. A store with a new order request lights up, and Review Route Request is the next step right on its card.',
    img: `${IMG}/screens/distributor.webp`,
    clip: 'distributor',
    alt: 'Distributor dashboard with order counts and store cards, one highlighted with a new order request to review.',
  },
  {
    id: 'p-staff',
    n: '05',
    t: 'Password Management: store staff get back in without a call',
    who: 'Password Management',
    problem: 'Password resets looked nothing like the rest of the product, and every request went through a ticket.',
    did: 'A self-service Password Management portal in the same shell: each credential with its risk level, MFA status and when it last changed, and one reset button. Cases and history sit one tab away.',
    img: `${IMG}/screens/security-hub.webp`,
    clip: 'security',
    alt: 'Password Management portal listing the staff member’s credentials with status and a reset action.',
  },
  {
    id: 'p-it',
    n: '06',
    t: 'IT Admin: security that doesn’t feel like security',
    who: 'IT Admin',
    problem: 'Every reset request looked the same until it was opened, and the rules behind each decision were invisible.',
    did: 'A policy engine where every rule is readable as a condition, with the compliance requirement it serves, plus approvals, a user directory and an audit trail. Strict, but in the same family as everything else.',
    img: `${IMG}/screens/it-admin.webp`,
    clip: 'it-admin',
    alt: 'IT admin console with the policy engine, user directory, workflow monitor and audit tabs.',
  },
];

const decisions = [
  {
    t: 'One design system, six personas',
    chose: 'The shared library came first: the same shell, tiles, tables and pills. Role-specific information architecture was layered on top.',
    instead: 'Designing each portal on its own and aligning them later.',
  },
  {
    t: 'Severity drives colour, not decoration',
    chose: 'A strict semantic scale: red for Critical, orange for High, green for good, the same in every dashboard, table and pill, always with its word.',
    instead: 'Brand colour used for emphasis, which made green mean both “brand” and “healthy”.',
  },
  {
    t: 'AI recommends, people own the action',
    chose: 'Every AI insight shows its confidence, the stores it affects and its estimated impact, and turns into an owned item with a due date.',
    instead: 'A list of AI observations nobody was responsible for.',
  },
  {
    t: 'Security is part of the product',
    chose: 'Password self-service and the IT policy engine share the sidebar, cards and status system of the operational dashboards.',
    instead: 'A separate, utilitarian admin tool.',
  },
];

const policy = [
  ['IF', 'daysSinceLastChange', '<', '7', 'THEN', 'BLOCK'],
  ['IF', 'role', '==', '"executive"', 'THEN', 'REQUIRE_MFA'],
  ['IF', 'failedAttempts', '>', '3', 'THEN', 'LOCK + NOTIFY'],
];

const before = [
  'Each persona used a separate tool with its own patterns',
  'Severity levels meant different things in different tools',
  'Security and admin portals looked like another company’s product',
  'No shared library: every change meant five updates',
];
const after = [
  'One shared component library across all six portals',
  'One severity scale that reads the same everywhere',
  'Password and IT admin match the operational dashboards',
  'One token set: update once, it applies everywhere',
];

const learnings = [
  { t: 'Six jobs, one product', d: 'The hardest part wasn’t a screen. It was making six genuinely different jobs feel like one product.' },
  { t: 'Severity is a promise', d: 'When “red” means different things in different portals, people stop trusting the whole system.' },
  { t: 'Admin tools deserve the same care', d: 'Treating security with the same design rigour as the dashboards builds confidence across the platform.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'research', label: 'Research' },
  { id: 'define', label: 'Define' },
  { id: 'system', label: 'Design system' },
  { id: 'portals', label: 'Six portals' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'outcome', label: 'Outcome' },
];

export default function RetailOps() {
  return (
    <article className={`${s.page} ${s.green}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>AI operations platform · Fortune 100 retail · Six personas</p>
        <h1 className={s.h1}>Designing an AI operations platform that shows every retail role what to act on first</h1>
        <ul className={s.heroMeta}>
          <li>UX designer · WorldLink</li>
          <li>6 personas · 6 portals</li>
          <li>Web, responsive</li>
          <li>Built in Figma Make</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="Corporate overview of the AI operations platform: total sales, sales vs target, stores at risk, IoT alerts, stockout risks and open tickets"
            width={2400}
            height={1500}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="Retail AI Ops" logo="R" meta="6 personas" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>Six roles, one operational backbone</h2>
            <div className={s.twoCol}>
              <div>
                <h3 className={s.h3}>What it is</h3>
                <p>
                  An AI operations platform for a Fortune 100 retailer with thousands of stores. Every store produces the
                  same signals, and six different roles depend on them, from the person running one store to corporate,
                  distribution and IT.
                </p>
                <p className={s.small}>
                  Because every signal flows through one system, the design system itself became the highest-leverage
                  surface: consistency compounds across six experiences.
                </p>
              </div>
              <div>
                <h3 className={s.h3}>My role</h3>
                <p>UX designer at WorldLink, working on the client’s brand tokens. I owned four things.</p>
                <ul className={s.owned}>
                  {owned.map((o) => (
                    <li key={o.t}>
                      <b>{o.t}</b>
                      <span>{o.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className={s.h3}>The same signals, six different questions</h3>
            <div className={s.flow6}>
              <ul className={s.signals}>
                {signals.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <span className={s.flowArrow} aria-hidden>
                →
              </span>
              <div className={s.hub}>
                <b>One platform</b>
                <span>One shell, one library, one severity scale</span>
              </div>
              <span className={s.flowArrow} aria-hidden>
                →
              </span>
              <ul className={s.roles6}>
                {roles6.map((r) => (
                  <li key={r.n}>
                    <b>{r.n}</b>
                    <span>{r.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===== Challenge ===== */}
          <section className={s.sec} id="challenge">
            <p className={s.kick}>01 · The challenge</p>
            <h2 className={s.h2}>The cost of disconnected tools</h2>
            <p>
              The business wanted faster issue resolution and clearer accountability. The people on the ground reported
              alert fatigue and tool-switching fatigue. Both were symptoms of the same thing.
            </p>
            <ol className={s.cards}>
              {problems.map((p, i) => (
                <li key={p.t}>
                  <span>0{i + 1}</span>
                  <b>{p.t}</b>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
            <div className={s.question}>
              <p>The question every screen had to answer</p>
              <blockquote>
                What does <em>this role</em> need to <em>decide right now</em>?
              </blockquote>
            </div>
          </section>

          {/* ===== Research ===== */}
          <section className={s.sec} id="research">
            <p className={s.kick}>02 · Research</p>
            <h2 className={s.h2}>In their own words</h2>
            <p>
              Discovery ran across all six roles: shadowing store managers, briefings with operations leadership and
              deep-dives with IT admins. Three questions kept coming back.
            </p>
            <ul className={`${s.notes} ${s.notes3}`}>
              {stickies.map((q, i) => (
                <li key={q} className={[s.noteYellow, s.noteGreen, s.notePink][i]}>
                  {q}
                </li>
              ))}
            </ul>
            <ul className={s.quotes}>
              {quotes.map((x) => (
                <li key={x.r}>
                  <q>{x.q}</q>
                  <small>{x.r}</small>
                </li>
              ))}
            </ul>
            <p className={s.fine}>Adapted from stakeholder interviews across store, regional, corporate, distribution and IT roles.</p>
          </section>

          {/* ===== Define ===== */}
          <section className={s.sec} id="define">
            <p className={s.kick}>03 · Define</p>
            <h2 className={s.h2}>Six people, six first screens</h2>
            <p>Not a different product for each role. The same product, with a different first screen.</p>
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
                    <dt>Decides</dt>
                    <dd>{p.decide}</dd>
                    <dt>Sees first</dt>
                    <dd>{p.first}</dd>
                  </dl>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>What I set out to solve</h3>
            <ol className={s.cards}>
              {goals.map((g, i) => (
                <li key={g.t}>
                  <span>0{i + 1}</span>
                  <b>{g.t}</b>
                  <p>{g.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Design system ===== */}
          <section className={s.sec} id="system">
            <p className={s.kick}>04 · Design system</p>
            <h2 className={s.h2}>One design system, six different jobs</h2>
            <p>
              Built on the client’s brand tokens. Green holds the shell together; orange and red are reserved for things
              that need attention, and every status also says its word.
            </p>
            <div className={s.ds}>
              <div className={s.dsCol}>
                <p className={s.dsHead}>Brand &amp; surfaces</p>
                <ul className={`${s.swatches} ${s.swatches4}`}>
                  {tokens.map((t) => (
                    <li key={t.n}>
                      <i style={{ background: t.bg }} />
                      <b>{t.n}</b>
                      <small>{t.u}</small>
                    </li>
                  ))}
                </ul>
                <p className={s.dsHead}>Status carries the word, not just the colour</p>
                <div className={s.chips}>
                  <span className={s.cCrit}>● Critical</span>
                  <span className={s.cHigh}>● High</span>
                  <span className={s.cMed}>● Medium</span>
                  <span className={s.cOk}>✓ Good</span>
                  <span className={s.cOk}>✓ All systems operational</span>
                </div>
              </div>
              <ul className={s.libCards}>
                {library.map((l) => (
                  <li key={l.t}>
                    <b>{l.t}</b>
                    <p>{l.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className={s.h3}>The proof: the same shell, six times</h3>
            <ul className={s.shells}>
              {portals.map((p) => (
                <li key={p.id}>
                  <div className={s.stage}>
                    <div className={s.glass}>
                      <Image src={p.img} alt="" width={2400} height={1500} sizes="(max-width: 720px) 100vw, 30vw" />
                    </div>
                  </div>
                  <b>{p.who}</b>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>How the design evolved</h3>
            <p>
              The first versions already shared a shell, but they still read like dashboards of data. The second round
              moved the decision to the top: urgency, risk and the next step first, totals underneath.
            </p>
            <div className={s.iter}>
              <figure>
                <span>Version 1</span>
                <div className={s.stage}>
                  <div className={s.glass}>
                    <Image src={`${IMG}/iter/corporate-v1.webp`} alt="An early corporate operations dashboard with totals and a weekly sales chart" width={1025} height={657} sizes="40vw" />
                  </div>
                </div>
              </figure>
              <figure>
                <span className={s.iterOn}>Version 2</span>
                <div className={s.stage}>
                  <div className={s.glass}>
                    <Image src={`${IMG}/hero.webp`} alt="The later corporate overview with sales vs target, stores at risk and alerts first" width={2400} height={1500} sizes="40vw" />
                  </div>
                </div>
              </figure>
            </div>
          </section>

          {/* ===== Portals ===== */}
          <section className={s.sec} id="portals">
            <p className={s.kick}>05 · Six portals</p>
            <h2 className={s.h2}>One product, six first screens</h2>
            <p>Each portal is interactive. Watch it work, or switch to the still screen.</p>

            {portals.map((d) => (
              <div key={d.id} className={s.decision} id={d.id}>
                <div className={s.dHead}>
                  <span className={s.dNum}>{d.n}</span>
                  <h3>{d.t}</h3>
                </div>
                <div className={s.dText}>
                  <div>
                    <em>The problem</em>
                    <p>{d.problem}</p>
                  </div>
                  <div>
                    <em>What I designed</em>
                    <p>{d.did}</p>
                  </div>
                </div>
                <Screen
                  src={d.img}
                  alt={d.alt}
                  w={2400}
                  h={1500}
                  clip={{ src: `${V}/${d.clip}.mp4`, poster: `${V}/${d.clip}-poster.webp` }}
                />
              </div>
            ))}
          </section>

          {/* ===== Decisions ===== */}
          <section className={s.sec} id="decisions">
            <p className={s.kick}>06 · Decisions</p>
            <h2 className={s.h2}>Four calls that shaped the system</h2>
            <ul className={s.calls}>
              {decisions.map((d, i) => (
                <li key={d.t}>
                  <span className={s.dNum}>0{i + 1}</span>
                  <div>
                    <b>{d.t}</b>
                    <p>{d.chose}</p>
                    <p className={s.instead}>
                      <s>Instead of</s> {d.instead}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={s.band}>
              <h3 className={s.h3}>Security rules people can read</h3>
              <p>
                The IT policy engine had to enforce strict compliance, PCI-DSS, SOX and MFA mandates, without feeling bolted
                on. So every rule reads as a plain condition, next to the requirement it serves.
              </p>
              <div className={s.code}>
                {policy.map((row) => (
                  <p key={row.join(' ')}>
                    <b>{row[0]}</b> {row[1]} <b>{row[2]}</b> <i>{row[3]}</i> <b>{row[4]}</b> {row[5]}
                  </p>
                ))}
                <small>{'// PCI-DSS compliance · critical priority'}</small>
              </div>
            </div>
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>07 · Outcome</p>
            <h2 className={s.h2}>From five disconnected tools to one system</h2>
            <p>
              Six portals, delivered on one shared design system and the client’s own tokens, with
              animated showcases for the stakeholder reviews.
            </p>
            <div className={s.ba}>
              <div className={s.baBefore}>
                <span>Before</span>
                <b>Five products, no shared language</b>
                <ol>
                  {before.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ol>
              </div>
              <div className={s.baAfter}>
                <span>After</span>
                <b>One platform, six experiences</b>
                <ol>
                  {after.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ol>
              </div>
            </div>
            <p className={s.fine}>Built as interactive portals in Figma Make. The figures inside the screens are design data.</p>

            <h3 className={s.h3}>Impact</h3>
            <ul className={`${s.stats} ${s.stats3}`}>
              {targets.map((t) => (
                <li key={t.t}>
                  <b>{t.v}</b>
                  <strong>{t.t}</strong>
                  <p>{t.d}</p>
                </li>
              ))}
            </ul>
            <p className={s.changeBar}>
              <span>What I’d change</span>
              Ask earlier which roles matter most.
            </p>

            <h3 className={s.h3}>What I learned building this</h3>
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
            <p className={`hand ${s.hand}`}>the store floor doesn’t have time for a tutorial :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/tariff-io/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextRed}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/tariff-io/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>WorldLink · TARIFF.IO</em>
                <b>Designing TARIFF.IO, an agentic AI platform that makes every U.S. tariff decision defensible</b>
                <span>Classify, calculate, file and audit imports, with a broker in the loop.</span>
                <i>View case study →</i>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
