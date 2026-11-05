import Image from 'next/image';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';
import { site } from '@/content/work';
import Artifact from '@/components/story/Artifact';
import Rail from '@/components/story/Rail';
import Screen, { Clip } from '@/components/story/Screen';
import s from '@/components/story/story.module.css';

export const metadata = {
  title: 'VERRDICT · Designing trust into network governance',
  description:
    'An AI-powered network governance platform for a Fortune 100 bank. Twelve weeks, eight users, two rounds of testing, five modules and an assistant that asks before it acts.',
  robots: { index: false, follow: false },
};

const IMG = '/work/network-governance';
const P = `${IMG}/process`;
const V = `${IMG}/video`;

/* ---------------- content: from the VERRDICT portfolio presentation ---------------- */

const glance = [
  { k: 'Task success', from: '64%', to: '92%', d: '16 → 23 of 25 task attempts' },
  { k: 'Alert to assignment', from: '4:20', to: '2:35', d: 'Minutes, timed from the recordings' },
  { k: 'Critical errors', from: '7', to: '2', d: 'Steps that would cause real damage' },
  { k: 'Confidence', from: '3.1', to: '4.4', d: 'Out of 5, self-rated after each task' },
];

const timeline = [
  { w: 'Weeks 1–2', t: 'Prove', d: 'I designed a quick proof of concept, and engineering built it with me.' },
  { w: 'Weeks 3–6', t: 'Listen', d: 'A UX audit of the POC and 8 conversations with real users.' },
  { w: 'Weeks 7–11', t: 'Build', d: 'Five modules and Verra, built side by side with engineering. Tested twice.' },
  { w: 'Week 12', t: 'Deliver', d: 'Handed over to the client.' },
];

const owned = [
  { t: 'Prove', d: 'The POC from day one, then its audit.' },
  { t: 'Research', d: 'Users, their tools and their data.' },
  { t: 'Design', d: 'IA, flows, screens and how the AI behaves.' },
  { t: 'Build', d: 'The whole front end, in code, with Claude Code.' },
];

const compliant = [
  { t: 'Supported', d: 'Nothing past its end-of-support date.' },
  { t: 'Secure', d: 'The critical risks get fixed first.' },
  { t: 'Compliant', d: 'Every change is ready for an audit.' },
];

const challenges = [
  { t: 'Data in every shape', d: 'Live feeds, spreadsheets, emails, meeting notes, even scanned PDFs.' },
  { t: 'Three audiences, one product', d: 'Leaders, network engineers and change managers all had to share it.' },
  { t: 'An AI with real reach', d: 'It could touch Jira and ServiceNow, so it needed real guardrails.' },
  { t: 'A language of acronyms', d: 'End-of-support dates, change approvals, advisories. All of it had to read as plain words.' },
];

const stats = [
  { n: '22%', d: 'of exploited vulnerabilities now target edge devices and VPNs, up from 3% a year earlier.', src: 'Verizon DBIR 2025' },
  { n: '54%', d: 'of those device flaws get fully fixed, with a median of 32 days to patch.', src: 'Verizon DBIR 2025' },
  { n: '$5.56M', d: 'average cost of a breach in financial services, above the $4.44M global average.', src: 'IBM Cost of a Data Breach 2025' },
  { n: '241 days', d: 'on average to identify and contain a breach.', src: 'IBM Cost of a Data Breach 2025' },
];

const landscape = [
  { c: 'GRC suites', good: 'Handle policy', stop: 'Can’t see live devices' },
  { c: 'Asset database', good: 'Knows what the bank owns', stop: 'Can’t read a vendor advisory' },
  { c: 'Scanners', good: 'Find vulnerabilities', stop: 'Don’t know end-of-support dates' },
  { c: 'Spreadsheets', good: 'Fill every gap', stop: 'By hand, every time' },
];

const roles = [
  { n: 3, r: 'Network engineers', q: 'Which devices?' },
  { n: 2, r: 'Compliance specialists', q: 'Can we prove it?' },
  { n: 2, r: 'IT ops managers', q: 'Who fixes it?' },
  { n: 1, r: 'Business owner', q: 'Are we OK?' },
];

const guide = [
  'Walk me through the last advisory you handled.',
  'How do you find the affected devices?',
  'Where do end-of-support dates live?',
  'What do you hand an auditor?',
  'Would you let an AI update a ticket? What would it need to show you first?',
];

const audit = [
  'The inventory said zero devices while the overview said hundreds.',
  'The last scan was months old, on a product that promised constant monitoring.',
  'Emails, meeting notes and scanned PDFs had no way in.',
  'A connected spreadsheet source showed zero governed assets.',
];

const themes = [
  { n: 7, t: 'Alerts don’t name the devices', q: 'I read the PDF, then search our inventory by model number.', who: 'Network engineer' },
  { n: 6, t: 'Too many tools for one job', q: 'Inventory in one tab, ServiceNow in another, Excel in the middle.', who: 'IT ops manager' },
  { n: 5, t: 'No shared priority', q: 'The vendor says critical, but it’s a lab switch.', who: 'Network engineer' },
  { n: 4, t: 'No record of decisions', q: 'The approval lives in someone’s inbox.', who: 'Compliance specialist' },
  { n: 4, t: 'AI should ask first', q: 'I’d let AI find things. I won’t let it close tickets.', who: 'IT ops manager' },
];

const journey = [
  { t: 'Advisory lands', tool: 'Email' },
  { t: 'Read it', tool: 'PDF' },
  { t: 'Find devices', tool: 'CMDB + Excel', low: 'Slowest' },
  { t: 'Prioritize', tool: 'Excel' },
  { t: 'Open ticket', tool: 'ServiceNow' },
  { t: 'Prove it', tool: 'Inbox search', low: 'Most stressful' },
];

const personas = [
  {
    i: 'M',
    n: 'Maya',
    r: 'Network engineer · 3 interviewed',
    q: 'Which devices? What do I fix first?',
    goal: 'Know which devices an advisory hits',
    pain: 'Advisories name models, not hostnames',
    need: 'Exact devices, ranked with a reason',
  },
  {
    i: 'P',
    n: 'Priya',
    r: 'Compliance specialist · 2 interviewed',
    q: 'Can we prove it to an auditor?',
    goal: 'Audit-ready proof for every change',
    pain: 'Approvals live in someone’s inbox',
    need: 'Compliant or Gap, with the gap named',
  },
  {
    i: 'D',
    n: 'Daniel',
    r: 'IT ops manager · 2 interviewed',
    q: 'Who fixes it, and by when?',
    goal: 'Assign the right work, fast',
    pain: 'Copy-pasting device IDs into tickets',
    need: 'Tickets that fill in themselves',
  },
  {
    i: 'S',
    n: 'Sarah',
    r: 'Business owner · 1 interviewed',
    q: 'Are we OK today?',
    goal: 'Know network health at a glance',
    pain: 'Every tool shows a different number',
    need: 'One answer first, detail on demand',
  },
];

const rules = [
  { heard: 'Alerts don’t name the devices', rule: 'Show the exact devices', part: 'Asset Map' },
  { heard: 'Too many tools', rule: 'Triage and act in one place', part: 'Alert Center' },
  { heard: 'No shared priority', rule: 'Visible, editable ranking rules', part: 'Ranking rules' },
  { heard: 'No record of decisions', rule: 'Every action is saved', part: 'Audit Ledger' },
  { heard: 'AI should ask first', rule: 'Verra suggests, people decide', part: 'Verra' },
];

const ideas = [
  { q: 'Home screen', a: 'An alert inbox', b: 'A wall of KPI charts', c: 'One verdict, then detail' },
  { q: 'Finding devices', a: 'A filtered inventory link', b: 'A separate map view', c: 'Devices inside the alert' },
  { q: 'Explaining priority', a: 'One AI risk score', b: 'Vendor severity as-is', c: 'A rank plus one reason' },
  { q: 'The AI assistant', a: 'Acts alone, with undo', b: 'Answers only', c: 'Suggests, then waits for a click' },
];

const framework = [
  { n: '01', t: 'Monitor', h: 'See every signal', d: 'Executive Overview and Asset Intelligence: vendor data meets the inventory in one verdict.' },
  { n: '02', t: 'Resolve', h: 'Fix the right thing first', d: 'Alert Intelligence and Verra: ranked, explained alerts and an assistant that asks before it acts.' },
  { n: '03', t: 'Prove', h: 'Show the evidence', d: 'Change Assurance, Trend Analysis and the Audit Ledger: every action traceable.' },
];

const tokens = [
  { n: 'Navy', u: 'Sidebar', bg: 'linear-gradient(180deg, #478CB3, #17486B)' },
  { n: 'Blue', u: 'Primary action', bg: '#2A6FD6' },
  { n: 'Canvas', u: 'Page ground', bg: '#EEF2F6' },
];
const severity = [
  { n: 'Critical', bg: '#D9473F' },
  { n: 'High', bg: '#E8832F' },
  { n: 'Medium', bg: '#E3B341' },
  { n: 'Low', bg: '#3D7FD6' },
  { n: 'Pass', bg: '#3E9D6A' },
];
const library = [
  { t: '20 colour variables', d: 'Brand, surface, text, severity and tints.' },
  { t: 'Variant sets', d: 'Severity chip, status pill and KPI card.' },
  { t: 'Text properties', d: 'Nav item, button, verdict pill and group card.' },
  { t: 'Instances only', d: 'Every hi-fi screen is built from these pieces.' },
];

const team = [
  { t: 'One shared board', d: 'Research, IA and flows lived on one FigJam board the whole team could see.' },
  { t: 'One component library', d: 'Engineers built from the same Figma components I designed with.' },
  { t: 'Working code, not just mockups', d: 'I built the front end with Claude Code, so engineering started from real code.' },
  { t: 'Walkthroughs with the client', d: 'I took the client’s experts and stakeholders through the flows and the demo. No surprises.' },
];

const decisions = [
  {
    id: 'd-verdict',
    n: '01',
    t: 'Lead with one verdict',
    who: 'Sarah',
    problem: 'Sarah only wants to know one thing: are we OK today? An alert list and a wall of charts were both too much.',
    chose: 'One clear answer at the very top, “At Risk, Review Required”. The numbers below explain why, and each one opens its details.',
    img: `${IMG}/overview.webp`,
    clip: 'verdict',
    start: 'still' as const,
    alt: 'Executive Overview with the verdict, summary tiles and a ranked list of what needs attention.',
    marks: [
      { x: 45, y: 27, t: 'Every number opens its list' },
      { x: 24, y: 42, t: 'What needs attention, ranked' },
      { x: 61, y: 58, t: 'Every row carries its next step' },
      { x: 26, y: 18.5, t: 'Freshness in the header' },
    ],
  },
  {
    id: 'd-inventory',
    n: '02',
    t: 'One list for every device',
    who: 'Daniel',
    problem: 'Three tools gave Daniel three different device counts, so he trusted none of them.',
    chose: 'One governed inventory behind every screen. Each row shows its risk, its support dates and whether it runs the latest version. Every source says if it is live or a snapshot.',
    img: `${IMG}/asset-intelligence.webp`,
    clip: 'inventory',
    alt: 'Asset Intelligence with vendor and internal sources, each labelled live or snapshot.',
    marks: [
      { x: 29, y: 14, t: 'External and internal sources as tabs' },
      { x: 24, y: 66, t: 'Live or snapshot, per source' },
      { x: 37, y: 38, t: 'From 1,744 advisories to the 6 that matter' },
      { x: 24, y: 88, t: 'One drop zone for any file' },
    ],
  },
  {
    id: 'd-map',
    n: '03',
    t: 'Put the devices inside the alert',
    who: 'Maya',
    problem: 'Maya searched for devices by model number. It was the slowest part of her day.',
    chose: 'Each alert shows exactly which devices it affects, and where they are. I built this screen myself, in code. In testing it went from the hardest task to one of the easiest.',
    clip: 'map',
    alt: 'Alert-to-Asset Map: a security advisory matched to the exact devices it affects.',
  },
  {
    id: 'd-rank',
    n: '04',
    t: 'Show why, not just a score',
    who: 'Maya',
    problem: '“The vendor says critical, but it’s a test switch in a lab.” One AI score would have been hard to trust.',
    chose: 'Every alert gets a rank plus one plain reason: why it fired, how serious it is and how late it is. The team can edit the ranking rules themselves.',
    img: `${IMG}/lifecycle-alerts.webp`,
    clip: 'alerts',
    alt: 'Alert Center with ranked alerts, each showing its trigger, severity and days overdue.',
    marks: [
      { x: 37, y: 15, t: 'One banner, one device' },
      { x: 52, y: 25, t: 'Overdue kept apart from upcoming' },
      { x: 59, y: 65, t: 'The team’s own words as filters' },
      { x: 55, y: 55, t: 'Ranking rules and Audit Ledger as tabs' },
    ],
  },
  {
    id: 'd-change',
    n: '05',
    t: 'Compliant or Gap',
    who: 'Priya',
    problem: 'Approvals were lost in someone’s inbox, and a score like 80% doesn’t help. 80% still fails an audit.',
    chose: 'Every change gets a clear answer, Compliant or Gap, checked against the rules it needs. A Gap names exactly what is missing. The fix goes back to ServiceNow, but a person approves it first.',
    img: `${IMG}/change-assurance.webp`,
    clip: 'change',
    alt: 'Change Assurance with change records checked step by step, ending in Compliant or Gap.',
    marks: [
      { x: 76, y: 68, t: 'Checks in order, verdict last' },
      { x: 44, y: 24, t: 'Missing proof counted on its own' },
      { x: 51, y: 41, t: 'Deadlines as time, not colour' },
      { x: 89, y: 41, t: 'Source of record, named' },
    ],
  },
  {
    id: 'd-verra',
    n: '06',
    t: 'Verra suggests. You decide.',
    who: 'Daniel',
    problem: '“I’m okay with AI finding things, but not closing tickets.”',
    chose: 'Ask Verra a question in plain English and it answers with sources. It can assign a ticket or approve a fix, but only after you click, and every action is logged. Engineers get speed, compliance gets proof.',
    clip: 'verra',
    alt: 'Verra, the assistant, answering a plain-English question with sources inside Trend Analysis.',
  },
];

const tradeoffs = [
  { cut: 'A single AI risk score', why: 'Fast, but nobody could explain it. Trust mattered more.' },
  { cut: 'An AI that acts on its own', why: 'Too risky for a bank. Every action needs a click.' },
  { cut: 'A wall of KPI charts', why: 'Eight numbers and no answer. Leaders wanted one.' },
  { cut: 'A separate map view', why: 'One more step. The map stays one click away instead.' },
];

const tasks = [
  { t: 'T1 · Rank', a: 3, b: 5 },
  { t: 'T2 · Devices', a: 2, b: 5 },
  { t: 'T3 · Assign', a: 3, b: 4 },
  { t: 'T4 · Verra', a: 4, b: 5 },
  { t: 'T5 · Status', a: 4, b: 4 },
];

const howMeasured = [
  { t: 'Task success', d: 'Finished with no help from me. A hint counted as a fail.' },
  { t: 'Time on the core flow', d: 'From opening the alert to assigning the fix, timed from the recordings.' },
  { t: 'Critical error', d: 'A step that would cause real damage, like the wrong device or approving a Gap.' },
  { t: 'Confidence', d: 'After each task: how sure are you that you did it right, 1 to 5?' },
];

const changed = [
  { heard: 'Ranking felt like a black box', did: 'Editable rules, plus “why it ranked” on every alert' },
  { heard: 'Sources listed vendor by vendor', did: 'Grouped by type: structured, semi-structured, unstructured, scanned' },
  { heard: 'Counts disagreed across screens', did: 'One inventory behind every view' },
  { heard: 'Assistant actions felt risky', did: 'Confirm before every Verra action, logged in the Audit Ledger' },
  { heard: '“Governance” meant different things', did: 'Named it the Network Governance dashboard, defined in one line' },
];

const shipped = [
  { t: 'One answer for leaders', d: 'A clear verdict on network health, and every number opens its source.' },
  { t: 'One trusted device list', d: 'Vendor feeds and bank data together, with support dates on every row.' },
  { t: 'Devices inside every alert', d: 'Each advisory is matched to the exact devices it affects.' },
  { t: 'Changes checked first', d: 'Compliant or Gap before a change ships, with the missing proof named.' },
  { t: 'An AI that asks first', d: 'Verra suggests, people confirm, and every action is logged.' },
];

const before = [
  { t: 'Read the advisory', tool: 'PDF' },
  { t: 'Find the devices', tool: 'CMDB + Excel' },
  { t: 'Rank them', tool: 'Excel' },
  { t: 'Open a ticket', tool: 'ServiceNow' },
  { t: 'Prove it later', tool: 'Inbox search' },
];
const after = [
  { t: 'See the verdict', tool: 'Home screen' },
  { t: 'Devices already in the alert', tool: 'Asset Map' },
  { t: 'Verra suggests an owner', tool: 'Verra' },
  { t: 'One click to confirm', tool: 'Logged automatically' },
];

const learnings = [
  { t: 'Trust is the real feature', d: 'People only act on a number when they can see where it came from. So every number in VERRDICT opens its source.' },
  { t: 'The best AI feature was a button that asks', d: 'A confirm click costs one second. It is the reason people trusted Verra with real work.' },
  { t: 'Design for the whole chain', d: 'One advisory touches an engineer, a manager, compliance and a leader. The product works because it answers all four.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'research', label: 'Research' },
  { id: 'define', label: 'Define' },
  { id: 'ideate', label: 'Ideate' },
  { id: 'design', label: 'Design' },
  { id: 'decisions', label: 'Six decisions' },
  { id: 'validate', label: 'Validate' },
  { id: 'outcome', label: 'Outcome' },
];

export default function Verrdict() {
  return (
    <article className={s.page}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>VERRDICT · AI-powered network governance · Fortune 100 bank</p>
        <h1 className={s.h1}>Designing trust into network governance, so every decision can be explained</h1>
        <ul className={s.heroMeta}>
          <li>UX designer, end to end</li>
          <li>12 weeks · POC to platform</li>
          <li>8 users · 2 test rounds</li>
          <li>5 modules + Verra AI</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/hero-overview.webp`}
            alt="VERRDICT Network Governance Dashboard: the verdict, three key numbers, governance by group and what needs attention"
            width={2396}
            height={1233}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="VERRDICT" logo="V" meta="12 weeks" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>A daily verdict for every device on a bank’s network</h2>

            <div className={s.twoCol}>
              <div>
                <h3 className={s.h3}>What VERRDICT is</h3>
                <p>
                  An AI-powered network governance platform. Think of it as a daily health check for every device on a
                  bank’s network: is it supported, is it secure, is it compliant? I designed it end to end at WorldLink, for
                  a Fortune 100 bank.
                </p>
                <p className={s.small}>
                  The name stands for Verification, End-of-Support, Risk, Regulatory, Diagnostic Intelligence for Compliance
                  and Tracking. The easy way to remember it: it gives you a verdict.
                </p>
              </div>
              <div>
                <h3 className={s.h3}>My role</h3>
                <p>
                  UX designer, from the first day to delivery. I sat between a product lead, engineering, sales and the
                  client’s experts, and owned four things.
                </p>
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

            <h3 className={s.h3}>From a quick test to the full platform, in 12 weeks</h3>
            <ol className={s.timeline}>
              {timeline.map((t) => (
                <li key={t.w}>
                  <span>{t.w}</span>
                  <b>{t.t}</b>
                  <p>{t.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Challenge ===== */}
          <section className={s.sec} id="challenge">
            <p className={s.kick}>01 · The challenge</p>
            <h2 className={s.h2}>One advisory. Six tools. Most of a day.</h2>
            <p>
              Maya is a network engineer at a large bank. On Monday morning a vendor sends a security advisory, and she has
              one question: which of our devices are affected, and what do I fix first? To find out she jumps between six
              tools, and her manager, the compliance team and the business owner are all waiting on the same answer.
            </p>

            <div className={s.question}>
              <p>The question every bank answers for its regulators</p>
              <blockquote>Can you prove your network is compliant?</blockquote>
              <ul className={s.qTriad}>
                {compliant.map((c) => (
                  <li key={c.t}>
                    <b>{c.t}</b>
                    <span>{c.d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              All of it lived in spreadsheets and in audits done once in a while. Risks showed up after something broke,
              instead of months before, and it hit engineers, managers, compliance and leaders every week.
            </p>

            <h3 className={s.h3}>Four things made this hard</h3>
            <ol className={s.cards}>
              {challenges.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>What success had to look like</h3>
            <div className={s.goals}>
              <div>
                <p className={s.goalHead}>For the bank</p>
                <ul>
                  <li>Prove compliance on any day, not once a year</li>
                  <li>Spot end-of-support risk months ahead</li>
                  <li>Less manual work before every audit</li>
                </ul>
              </div>
              <div>
                <p className={s.goalHead}>For the people using it</p>
                <ul>
                  <li>Find the affected devices in minutes</li>
                  <li>Agree on what to fix first</li>
                  <li>Trust the AI, because it asks first</li>
                </ul>
              </div>
              <div>
                <p className={s.goalHead}>How I’d know</p>
                <ul>
                  <li>Task success</li>
                  <li>Time from alert to assignment</li>
                  <li>Critical errors, in usability testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== Research ===== */}
          <section className={s.sec} id="research">
            <p className={s.kick}>02 · Research</p>
            <h2 className={s.h2}>Is it real, what do people use, and what do they say?</h2>

            <h3 className={s.h3}>The industry data says yes, it’s real</h3>
            <ul className={s.stats}>
              {stats.map((x) => (
                <li key={x.n}>
                  <b>{x.n}</b>
                  <p>{x.d}</p>
                  <small>{x.src}</small>
                </li>
              ))}
            </ul>
            <p className={s.fine}>Secondary research for context. Industry numbers, not VERRDICT results.</p>

            <h3 className={s.h3}>Every tool holds one piece. Nothing connects all four.</h3>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Does well</th>
                    <th>Where it stops</th>
                  </tr>
                </thead>
                <tbody>
                  {landscape.map((r) => (
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

            <h3 className={s.h3}>8 people. 4 roles. One question each.</h3>
            <p>
              After the proof of concept and before the full build, I sat down with eight users for 45 minutes each, over
              screen share. My questions were about real work, never opinions: not “would you like a dashboard?” but “show
              me what you did last time.”
            </p>
            <ul className={s.roles}>
              {roles.map((r) => (
                <li key={r.r}>
                  <b>{r.n}</b>
                  <span>{r.r}</span>
                  <q>{r.q}</q>
                </li>
              ))}
            </ul>
            <ul className={s.notes}>
              {guide.map((q, i) => (
                <li key={q} className={[s.noteYellow, s.noteBlue, s.noteGreen, s.notePink, s.noteYellow][i]}>
                  {q}
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Meanwhile, a UX audit of my own POC</h3>
            <p>I went back to the proof of concept with fresh eyes. It had honest problems.</p>
            <ol className={s.auditList}>
              {audit.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
            <blockquote className={s.pull}>When numbers disagree, people stop trusting everything else.</blockquote>
          </section>

          {/* ===== Define ===== */}
          <section className={s.sec} id="define">
            <p className={s.kick}>03 · Define</p>
            <h2 className={s.h2}>Hours of conversations, turned into decisions</h2>
            <p>
              Every note from the eight conversations went onto a FigJam board. I grouped them, regrouped them, and kept
              going until the patterns stopped moving.
            </p>
            <Artifact
              src={`${P}/affinity.webp`}
              alt="FigJam research synthesis: interview notes grouped by role, then clustered into pain points, needs and workarounds"
              w={2400}
              h={1161}
              from="My FigJam board · VERRDICT · Research synthesis"
            />

            <h3 className={s.h3}>Five problems, and how many of the 8 raised each</h3>
            <ol className={s.themes}>
              {themes.map((t) => (
                <li key={t.t}>
                  <p className={s.themeN}>
                    <b>{t.n}</b>/8
                  </p>
                  <b>{t.t}</b>
                  <q>{t.q}</q>
                  <small>{t.who}</small>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>The journey of one advisory, before</h3>
            <ol className={s.journey}>
              {journey.map((j, i) => (
                <li key={j.t} className={j.low ? s.journeyLow : ''}>
                  <span>
                    0{i + 1}
                    {j.low ? ` · ${j.low}` : ''}
                  </span>
                  <b>{j.t}</b>
                  <small>{j.tool}</small>
                </li>
              ))}
            </ol>
            <p className={s.small}>
              The two low points became the two biggest design targets: find the devices instantly, and make proof
              automatic.
            </p>

            <h3 className={s.h3}>Four people, four questions</h3>
            <ul className={s.personas}>
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
                    <dt>Goal</dt>
                    <dd>{p.goal}</dd>
                    <dt>Pain</dt>
                    <dd>{p.pain}</dd>
                    <dt>Needs</dt>
                    <dd>{p.need}</dd>
                  </dl>
                </li>
              ))}
            </ul>

            <div className={s.question}>
              <p>How might we</p>
              <blockquote>
                turn hundreds of advisories into <em>one decision</em> people <em>trust</em>?
              </blockquote>
              <ul className={s.qChips}>
                <li>Show why</li>
                <li>Answer in place</li>
                <li>Ask before acting</li>
                <li>Make proof the default</li>
              </ul>
            </div>

            <h3 className={s.h3}>What I heard became the rules, and the rules became the product</h3>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>What I heard</th>
                    <th>The rule</th>
                    <th>Where it lives</th>
                  </tr>
                </thead>
                <tbody>
                  {rules.map((r) => (
                    <tr key={r.part}>
                      <td>{r.heard}</td>
                      <td>
                        <b>{r.rule}</b>
                      </td>
                      <td>
                        <span className={s.partChip}>{r.part}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={s.h3}>Information architecture</h3>
            <p>Five modules, each with its own views, and Verra on every screen, so every persona knows where their answer lives.</p>
            <Artifact
              src={`${P}/ia.webp`}
              alt="FigJam information architecture: VERRDICT branching into five modules with four views each, and Verra on every screen"
              w={2400}
              h={1070}
              from="My FigJam board · VERRDICT · Research & IA"
            />
            <h3 className={s.h3}>Key flows, one per kind of user</h3>
            <p>
              An advisory arrives and the engineer sees the devices, picks the first fix and the manager assigns it. Compliance
              checks a change ticket before it’s approved. And the business owner gets a quick daily check-in.
            </p>
            <Artifact
              src={`${P}/flows.webp`}
              alt="FigJam user flows: advisory to remediation with a confirm decision, change ticket audit, and executive check-in"
              w={2400}
              h={1161}
              from="My FigJam board · VERRDICT · Key user flows"
            />
          </section>

          {/* ===== Ideate ===== */}
          <section className={s.sec} id="ideate">
            <p className={s.kick}>04 · Ideate</p>
            <h2 className={s.h2}>Three ideas for every big question</h2>
            <p>This is where I made myself slow down. Before picking an answer, I wanted options, then checked every one against the rules.</p>
            <div className={s.tableWrap}>
              <table className={`${s.table} ${s.ideas}`}>
                <thead>
                  <tr>
                    <th>The question</th>
                    <th>Idea 1</th>
                    <th>Idea 2</th>
                    <th>Idea 3 · chosen</th>
                  </tr>
                </thead>
                <tbody>
                  {ideas.map((r) => (
                    <tr key={r.q}>
                      <td>
                        <b>{r.q}</b>
                      </td>
                      <td>{r.a}</td>
                      <td>{r.b}</td>
                      <td className={s.won}>{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={s.h3}>The winners fit one framework</h3>
            <ol className={s.framework}>
              {framework.map((f) => (
                <li key={f.t}>
                  <span>
                    {f.n} · {f.t}
                  </span>
                  <b>{f.h}</b>
                  <p>{f.d}</p>
                </li>
              ))}
            </ol>
            <p className={s.promise}>
              The product promise: <b>See it. Prove it. Fix it.</b>
            </p>

            <h3 className={s.h3}>Whiteboard first, to argue without pixels</h3>
            <p>
              The red notes were the decisions: verdict first, show why an alert ranks first, and never let the AI act
              silently. The sticky notes at the bottom became my design rules.
            </p>
            <div className={s.sketchWrap}>
              <p className={`hand ${s.handNote}`}>a whiteboard is the cheapest prototype :)</p>
              <Artifact
                src={`${P}/sketches.webp`}
                alt="Whiteboard sketches: the overview with the verdict first, ranked alerts with devices, and Verra asking first, with four sticky-note rules"
                w={2160}
                h={1520}
                from="My first sketches · VERRDICT"
              />
            </div>
          </section>

          {/* ===== Design ===== */}
          <section className={s.sec} id="design">
            <p className={s.kick}>05 · Design</p>
            <h2 className={s.h2}>From grey boxes to the system that holds it together</h2>
            <p>Mid-fidelity wireframes in Figma: grey boxes, but real content, so I could test the structure before colour got in the way.</p>
            <Artifact
              src={`${P}/wireframes.webp`}
              alt="Figma page with six greyscale wireframes: two overview versions, asset map, alert center, change assurance and the Verra panel"
              w={2400}
              h={1150}
              from="My Figma file · VERRDICT · Wireframes page"
            />
            <div className={s.compare}>
              <div className={s.v1}>
                <span>Version 1</span>
                <p>Eight numbers on the home screen, and no answer. Alerts and chat fought for attention.</p>
              </div>
              <div className={s.v2}>
                <span>Version 2</span>
                <p>The verdict first. Then three key numbers, the business groups, and what needs attention.</p>
              </div>
            </div>

            <h3 className={s.h3}>High fidelity, built only from the library</h3>
            <Artifact
              src={`${P}/hifi.webp`}
              alt="Figma hi-fi screens: Executive Overview and the Verra assistant with its confirm-before-acting card"
              w={2400}
              h={934}
              from="My Figma file · VERRDICT · Product design"
            />

            <h3 className={s.h3} id="system">The design system</h3>
            <p>
              Navy and blue for the brand, a canvas that stays quiet, and a severity scale from critical down to pass. One
              rule I never broke: severity never depends on colour alone. Every chip also says its word, so it works for
              colour-blind users too.
            </p>
            <div className={s.ds}>
              <div className={s.dsCol}>
                <p className={s.dsHead}>Brand &amp; surfaces</p>
                <ul className={s.swatches}>
                  {tokens.map((t) => (
                    <li key={t.n}>
                      <i style={{ background: t.bg }} />
                      <b>{t.n}</b>
                      <small>{t.u}</small>
                    </li>
                  ))}
                </ul>
                <p className={s.dsHead}>Severity &amp; status</p>
                <ul className={`${s.swatches} ${s.swatches5}`}>
                  {severity.map((t) => (
                    <li key={t.n}>
                      <i style={{ background: t.bg }} />
                      <b>{t.n}</b>
                    </li>
                  ))}
                </ul>
                <p className={s.dsHead}>Chips carry the word, not just the colour</p>
                <div className={s.chips}>
                  <span className={s.cCrit}>● Critical</span>
                  <span className={s.cHigh}>● High</span>
                  <span className={s.cMed}>● Medium</span>
                  <span className={s.cLow}>● Low</span>
                  <span className={s.cOk}>✓ Compliant</span>
                  <span className={s.cCrit}>✕ Gap</span>
                </div>
              </div>
              <div className={s.typeCard}>
                <p className={s.dsHead}>Type scale · Plus Jakarta Sans</p>
                <p className={s.t1}>Page title</p>
                <p className={s.t2}>Section title</p>
                <p className={s.t3}>455</p>
                <p className={s.t4}>Label · caps</p>
                <p className={s.t5}>Body and table text</p>
              </div>
            </div>
            <div className={s.libRow}>
              <Artifact
                src={`${P}/components.webp`}
                alt="Figma component library: colour tokens, type, severity chips, status pills, KPI cards, nav items, buttons, verdict pill and group card"
                w={1588}
                h={1523}
                from="My Figma file · VERRDICT · Design system page"
              />
              <ul className={s.library}>
                {library.map((l) => (
                  <li key={l.t}>
                    <b>{l.t}</b>
                    <p>{l.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className={s.h3}>Bringing the team along</h3>
            <ul className={s.cards}>
              {team.map((t) => (
                <li key={t.t}>
                  <b>{t.t}</b>
                  <p>{t.d}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* ===== Decisions ===== */}
          <section className={s.sec} id="decisions">
            <p className={s.kick}>06 · Decisions → shipped</p>
            <h2 className={s.h2}>Six decisions, all shipped</h2>
            <p>For each one: the person it was for, what I chose, and the real screen. Watch it work, or switch to the annotated screen and hover a number.</p>

            {decisions.map((d) => (
              <div key={d.id} className={s.decision} id={d.id}>
                <div className={s.dHead}>
                  <span className={s.dNum}>{d.n}</span>
                  <h3>{d.t}</h3>
                  <span className={s.tag}>For {d.who}</span>
                </div>
                <div className={s.dText}>
                  <div>
                    <em>The problem</em>
                    <p>{d.problem}</p>
                  </div>
                  <div>
                    <em>What I chose</em>
                    <p>{d.chose}</p>
                  </div>
                </div>
                {d.img ? (
                  <Screen
                    src={d.img}
                    alt={d.alt}
                    marks={d.marks}
                    clip={{ src: `${V}/${d.clip}.mp4`, poster: `${V}/${d.clip}-poster.webp` }}
                    start={d.start ?? 'clip'}
                  />
                ) : (
                  <div className={s.stage}>
                    <div className={s.glass}>
                      <Clip src={`${V}/${d.clip}.mp4`} poster={`${V}/${d.clip}-poster.webp`} label={d.alt} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className={s.band}>
              <h3 className={s.h3}>What I left behind, and why</h3>
              <ul className={s.tradeoffs}>
                {tradeoffs.map((t) => (
                  <li key={t.cut}>
                    <s>{t.cut}</s>
                    <p>{t.why}</p>
                  </li>
                ))}
              </ul>
              <p className={s.price}>
                <b>The price I accepted.</b> A confirm click adds one second to every AI action. For a bank, that second is
                worth it.
              </p>
            </div>
          </section>

          {/* ===== Validate ===== */}
          <section className={s.sec} id="validate">
            <p className={s.kick}>07 · Validate</p>
            <h2 className={s.h2}>Two rounds. Five tasks. One task per decision.</h2>
            <div className={s.rounds}>
              <div>
                <span>Round 1 · week 8</span>
                <b>Mid-fi prototype</b>
                <p>5 real users from the client’s teams, moderated, 45 minutes each. Then I fixed what broke.</p>
              </div>
              <i aria-hidden>→</i>
              <div className={s.roundOn}>
                <span>Round 2 · week 11</span>
                <b>Hi-fi prototype</b>
                <p>5 new users, the same 5 tasks, the same rules. That is what makes the comparison fair.</p>
              </div>
            </div>
            <ul className={s.cards}>
              {howMeasured.map((m) => (
                <li key={m.t}>
                  <b>{m.t}</b>
                  <p>{m.d}</p>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Four tasks improved. One showed me what’s next.</h3>
            <p>Same five tasks, same rules, both rounds: how many of the 5 users finished each one without help.</p>
            <div className={s.bars}>
              <p className={s.barsKey}>
                <i className={s.k1} /> Round 1 <i className={s.k2} /> Round 2 <span>· users who completed the task, out of 5</span>
              </p>
              {tasks.map((t) => (
                <div key={t.t} className={s.bar}>
                  <b>{t.t}</b>
                  <div className={s.barTrack}>
                    <i className={s.b1} style={{ width: `${t.a * 20}%` }} />
                    <i className={s.b2} style={{ width: `${t.b * 20}%` }} />
                  </div>
                  <span>
                    {t.a} → {t.b}
                  </span>
                </div>
              ))}
            </div>
            <p className={s.small}>
              Checking status stayed at 4 of 5. That is useful too: it told me exactly what to work on next.
            </p>

            <h3 className={s.h3}>What the feedback changed</h3>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>What I heard</th>
                    <th>What I changed</th>
                  </tr>
                </thead>
                <tbody>
                  {changed.map((c) => (
                    <tr key={c.heard}>
                      <td>{c.heard}</td>
                      <td>
                        <b>{c.did}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={s.fine}>Five people per round is small, but it is the standard size for finding usability problems.</p>
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>08 · Outcome</p>
            <h2 className={s.h2}>Delivered in about three months</h2>
            <p>Five modules plus Verra, built to the client’s requirements and handed over in week 12.</p>

            <h3 className={s.h3}>Impact, measured in usability testing</h3>
            <ul className={s.glance}>
              {glance.map((g) => (
                <li key={g.k}>
                  <span>{g.k}</span>
                  <p className={s.glanceNum}>
                    <s>{g.from}</s>
                    <b>{g.to}</b>
                  </p>
                  <small>{g.d}</small>
                </li>
              ))}
            </ul>
            <p className={s.fine}>Round 1 → round 2. Moderated sessions, 5 real users per round, same 5 tasks. Usability results, not production metrics.</p>

            <h3 className={s.h3}>What shipped, and who it helps</h3>
            <ul className={s.cards}>
              {shipped.map((x) => (
                <li key={x.t}>
                  <b>{x.t}</b>
                  <p>{x.d}</p>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>The same advisory, a different morning</h3>
            <div className={s.ba}>
              <div className={s.baBefore}>
                <span>Before</span>
                <b>Six tools, one question</b>
                <ol>
                  {before.map((x) => (
                    <li key={x.t}>
                      {x.t}
                      <small>{x.tool}</small>
                    </li>
                  ))}
                </ol>
                <p>Most of the day</p>
              </div>
              <div className={s.baAfter}>
                <span>After · VERRDICT</span>
                <b>One screen, one answer</b>
                <ol>
                  {after.map((x) => (
                    <li key={x.t}>
                      {x.t}
                      <small>{x.tool}</small>
                    </li>
                  ))}
                </ol>
                <p>About 2½ minutes in testing</p>
              </div>
            </div>

            <div className={s.ai}>
              <div>
                <p className={s.kick}>How I used AI</p>
                <h3>AI built faster. I made the calls.</h3>
              </div>
              <div className={s.aiCols}>
                <div>
                  <em>What AI did</em>
                  <ul>
                    <li>Turned my designs into working front-end code, with Claude Code</li>
                    <li>Voiced the demo video</li>
                    <li>Inside the product, Verra uses it to answer plain questions</li>
                  </ul>
                </div>
                <div>
                  <em>What stayed mine</em>
                  <ul>
                    <li>What every screen shows, and in what order</li>
                    <li>That the AI never acts on its own</li>
                    <li>One set of words across the whole product</li>
                  </ul>
                </div>
              </div>
              <p className={s.aiLine}>Prompting is easy. Deciding is the job.</p>
            </div>

            <h3 className={s.h3}>Three things I’m taking with me</h3>
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

            <div className={s.twoCol}>
              <div>
                <h3 className={s.h3}>What’s next for VERRDICT</h3>
                <ul className={s.reflect}>
                  <li>Fix the status view, the one task that didn’t improve.</li>
                  <li>What-if planning for when a vendor moves an end-of-support date.</li>
                  <li>Compliance trends that look ahead, not just back.</li>
                  <li>Measure it in production: time to triage and hours spent on audit prep.</li>
                </ul>
              </div>
              <div>
                <h3 className={s.h3}>What I’d change</h3>
                <ul className={s.reflect}>
                  <li>Set baseline metrics on day one, so the impact is easy to prove.</li>
                  <li>Test the status view in round one, not only round two.</li>
                </ul>
              </div>
            </div>
            <p className={`hand ${s.hand}`}>if it can’t prove it, it isn’t governed :)</p>
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
            <div className={s.talk}>
              <LiquidButton href={`mailto:${site.email}?subject=VERRDICT%20case%20study`} variant="emerald">
                Let&apos;s talk about it
              </LiquidButton>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
