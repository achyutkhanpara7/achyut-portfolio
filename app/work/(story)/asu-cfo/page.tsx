import Image from 'next/image';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';
import { site } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen from '@/components/story/Screen';
import BeforeAfter from '@/components/story/BeforeAfter';
import s from '@/components/story/story.module.css';

export const metadata = {
  title: 'ASU CFO Site Redesign · Less hunting, more finding',
  description:
    'A redesign of Arizona State University’s Business and Finance site, so students, faculty and staff find payroll, travel and policy answers without calling support.',
};

const IMG = '/work/asu-cfo';
const V = `${IMG}/video`;

/* ---------------- content ----------------
   From Achyut's own case study of the project. Research and result figures are as he reported them;
   screens of the live site are from cfo.asu.edu. */

const owned = [
  { t: 'Research', d: 'Interviews and task walkthroughs with 12 students, faculty and staff, then the synthesis.' },
  { t: 'Information architecture', d: 'Regrouping pages around what people come to do, not how the department is organised.' },
  { t: 'Wireframes & testing', d: 'Mid-fidelity redesigns of key pages, tested with users and refined with the content writers.' },
  { t: 'Design patterns', d: 'Sidebar, breadcrumb, grid-link and card components, built to the ASU brand and WCAG 2.2.' },
];

const challenges = [
  { t: 'Too much complexity', d: 'Payroll, travel, procurement, safety and policy all lived on one site, each with its own depth.' },
  { t: 'One site, many needs', d: 'A student checking a refund and an administrator filing a reimbursement arrived at the same front door.' },
  { t: 'Content overload', d: 'Long pages of text, repeated links and outdated pages buried the answer people came for.' },
  { t: 'Rules & restrictions', d: 'University brand standards, accessibility law and policy wording shaped what could change.' },
];

const research = [
  { n: '6 of 12', d: 'struggled to find basic financial or HR information' },
  { n: '65%', d: 'said the site felt overwhelming' },
  { n: '2.1 min', d: 'average time to reach the Payroll or Travel pages' },
  { n: '1 in 3', d: 'described the site as cluttered or outdated' },
];

const heard = [
  { n: '10 of 12', d: 'wanted quicker access to pay schedules and reimbursements' },
  { n: '8 of 12', d: 'clicked through pages that had nothing to do with their task' },
  { n: '7 of 12', d: 'weren’t confident the content was current' },
  { n: '3 of 12', d: 'gave up on site search and used Google instead' },
];

const insights = [
  { t: 'Is this the latest?', d: 'No dates or owners on pages, so people doubted what they read and called to check.' },
  { t: 'Getting lost', d: 'Deep menus with no sense of where you are, so one wrong click meant starting over.' },
  { t: 'Relying on Google', d: 'People searched the web for ASU pages because it was faster than the site’s own navigation.' },
  { t: 'Search that misses', d: 'Internal search returned long, unranked lists that rarely put the right page first.' },
  { t: 'Clutter', d: 'Every page tried to say everything, so nothing stood out.' },
  { t: 'Flat hierarchy', d: 'Headings, links and body text looked alike, so pages were hard to scan.' },
];

const goals = [
  { e: 'Find', t: 'Findability first', d: 'Navigation and IA built around tasks people actually come to do.' },
  { e: 'Read', t: 'A clearer interface', d: 'Modern, responsive pages with a hierarchy you can scan.' },
  { e: 'Do', t: 'Shorter journeys', d: 'Fewer steps between landing and the form, schedule or policy.' },
  { e: 'Include', t: 'Brand & access', d: 'ASU brand standards and WCAG 2.2 from the start, not as a final pass.' },
];

const solutions = [
  { t: 'Nested sidebar navigation', d: 'The section’s pages always on the left, with the current page marked, so people can move sideways without going back to the menu.' },
  { t: 'Breadcrumb navigation', d: 'A trail at the top of every page that says where you are and gets you one level up in a click.' },
  { t: 'Grid links', d: 'The most-used destinations as a scannable grid, replacing long runs of inline links.' },
  { t: 'Card with button', d: 'Each task as a card with one clear action, so the next step is never buried in a paragraph.' },
];

const learnings = [
  { t: 'Start from real pain points', d: 'Watching people hunt for a pay schedule told me more than any sitemap review. The redesign followed what they struggled with.' },
  { t: 'Content is half the design', d: 'Working side by side with the content writers mattered as much as the layouts. A cleaner page with the same wall of text doesn’t help.' },
  { t: 'Test early, refine often', d: 'Even two test sessions on mid-fidelity wireframes changed labels and ordering before anything was built.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'research', label: 'Research' },
  { id: 'insights', label: 'Insights' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'outcome', label: 'Outcome' },
];

export default function AsuCfo() {
  return (
    <article className={`${s.page} ${s.maroon}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>ASU CFO Site · Arizona State University · Business and Finance</p>
        <h1 className={s.h1}>Redesigning ASU’s Business and Finance site, so payroll, travel and policy answers are found, not hunted for</h1>
        <ul className={s.heroMeta}>
          <li>UX designer & researcher</li>
          <li>Information architecture</li>
          <li>12 user interviews</li>
          <li>WCAG 2.2</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/screens/home.webp`}
            alt="The ASU Business and Finance home page with the university header, the main navigation and a ‘Welcome to Business and Finance’ banner"
            width={2400}
            height={1500}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="ASU CFO Site" logo="A" meta="Higher ed" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>One site for every money question at a university this size</h2>
            <p>
              The Office of the CFO runs the site where ASU students, faculty and staff go for payroll, travel, purchasing,
              safety training and financial policy. It had grown page by page for years. I worked on its redesign with a UX
              specialist, two content writers and a project manager, from July 2024 to May 2025.
            </p>
            <div className={s.tldr}>
              <div>
                <em>Why it was done</em>
                <p>People couldn’t find what they needed, so they called support, and support time went on questions the site should answer.</p>
              </div>
              <div>
                <em>What I did</em>
                <ul>
                  <li>Ran the research with 12 users and turned it into insights</li>
                  <li>Reworked the IA, wireframed and tested key pages, and defined four navigation patterns</li>
                </ul>
              </div>
              <div>
                <em>What I learned</em>
                <p>On a content-heavy site, structure and words have to be designed together.</p>
              </div>
            </div>

            <h3 className={s.h3}>My role</h3>
            <ul className={s.owned}>
              {owned.map((o) => (
                <li key={o.t}>
                  <b>{o.t}</b>
                  <span>{o.d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ===== Challenge ===== */}
          <section className={s.sec} id="challenge">
            <p className={s.kick}>01 · The challenge</p>
            <h2 className={s.h2}>Most visitors left without the answer they came for</h2>
            <p>
              The business goal was simple: make financial resources easier to reach, so support gets fewer calls and people
              get on with their work. The starting point wasn’t.
            </p>
            <ul className={`${s.glance} ${s.glance3}`}>
              <li>
                <span>Couldn’t find it</span>
                <p className={s.glanceNum}>
                  <b>70%</b>
                </p>
                <small>struggled to find the information they were looking for</small>
              </li>
              <li>
                <span>Didn’t trust it</span>
                <p className={s.glanceNum}>
                  <b>30%</b>
                </p>
                <small>were frustrated by content that was unclear or out of date</small>
              </li>
              <li>
                <span>Called instead</span>
                <p className={s.glanceNum}>
                  <b>1 in 3</b>
                </p>
                <small>had contacted support to get an answer the site already had</small>
              </li>
            </ul>
            <ol className={s.cards}>
              {challenges.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <div className={s.question}>
              <p>The question I designed for</p>
              <blockquote>
                How might a student, a professor and an administrator each get to <em>their</em> answer in a few clicks,
                and trust it once they’re there?
              </blockquote>
            </div>
          </section>

          {/* ===== Research ===== */}
          <section className={s.sec} id="research">
            <p className={s.kick}>02 · Research</p>
            <h2 className={s.h2}>Twelve people, asked to find everyday things</h2>
            <p>
              I talked with students, faculty and staff and watched them look for things they really needed: a pay schedule,
              a travel reimbursement, a safety course. Where they hesitated said more than what they told me.
            </p>
            <ul className={s.glance}>
              {research.map((r, i) => (
                <li key={r.d}>
                  <span>Finding 0{i + 1}</span>
                  <p className={s.glanceNum}>
                    <b>{r.n}</b>
                  </p>
                  <small>{r.d}</small>
                </li>
              ))}
            </ul>
            <h3 className={s.h3}>What they told me</h3>
            <ul className={s.glance}>
              {heard.map((r) => (
                <li key={r.d}>
                  <span>Users</span>
                  <p className={s.glanceNum}>
                    <b>{r.n}</b>
                  </p>
                  <small>{r.d}</small>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Who we designed for</h3>
            <p>
              The persona pulled the patterns together. Sarah, an administrative specialist, uses the site every week for her
              department and has the least patience for hunting.
            </p>
            <Screen
              src={`${IMG}/screens/persona.webp`}
              alt="Persona: Sarah Miller, 32, administrative specialist, with her goals, frustrations and the tasks she does on the site"
              w={2400}
              h={1617}
            />
          </section>

          {/* ===== Insights ===== */}
          <section className={s.sec} id="insights">
            <p className={s.kick}>03 · Insights</p>
            <h2 className={s.h2}>The problem wasn’t missing content. It was getting to it, and believing it.</h2>
            <ol className={s.cards}>
              {insights.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Strategy ===== */}
          <section className={s.sec} id="strategy">
            <p className={s.kick}>04 · Strategy</p>
            <h2 className={s.h2}>Four goals, in order of what hurt most</h2>
            <ol className={`${s.loop} ${s.loopDark}`}>
              {goals.map((l) => (
                <li key={l.e}>
                  <em>{l.e}</em>
                  <b>{l.t}</b>
                  <p>{l.d}</p>
                </li>
              ))}
            </ol>
            <div className={s.band}>
              <h3 className={s.h3}>Organise by task, not by office</h3>
              <p>
                The old structure mirrored the department’s org chart. People don’t think in departments; they think “I need
                to get reimbursed.” Grouping pages by what people come to do was the decision everything else followed from.
              </p>
            </div>
          </section>

          {/* ===== Wireframes ===== */}
          <section className={s.sec} id="wireframes">
            <p className={s.kick}>05 · Wireframes</p>
            <h2 className={s.h2}>Before and after, on two of the hardest pages</h2>
            <p>
              I took the pages people struggled with most to mid-fidelity, worked through the copy with the content writers,
              and tested the redesigns with two users before handing them on. Drag the handle to compare.
            </p>
            <h3 className={s.h3}>EHS safety training</h3>
            <p>
              Tabs hid most of the courses. The redesign lays them out as cards, each with an action button, adds a sidebar for
              the section and calls out how students get access.
            </p>
            <BeforeAfter
              before={`${IMG}/wire/ehs-before-crop.webp`}
              after={`${IMG}/wire/ehs-after-crop.webp`}
              alt={[
                'Before: the EHS training page with courses hidden behind tabs and long text',
                'After: courses as cards with action buttons, a sidebar and student access information',
              ]}
              ratio="4 / 3"
            />
            <h3 className={s.h3}>Office safety</h3>
            <p>
              A long, text-heavy page became a grid of topics, with the writing cut down so each one can be scanned.
            </p>
            <BeforeAfter
              before={`${IMG}/wire/office-before-crop.webp`}
              after={`${IMG}/wire/office-after-crop.webp`}
              alt={[
                'Before: the office safety page as one long block of text',
                'After: office safety topics in a grid layout with short descriptions',
              ]}
              ratio="4 / 3"
            />
          </section>

          {/* ===== Solutions ===== */}
          <section className={s.sec} id="solutions">
            <p className={s.kick}>06 · Design solutions</p>
            <h2 className={s.h2}>Four patterns that tell people where they are and where to go next</h2>
            <ol className={s.cards}>
              {solutions.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <Screen
              src={`${IMG}/screens/ehs-nav.webp`}
              alt="The live EHS page: a breadcrumb trail at the top, safety training courses as a grid of links and the section sidebar"
              w={2400}
              h={909}
            />
            <h3 className={s.h3}>Grid links, live</h3>
            <p>On the live site, training courses are a grid you can scan in a second, under a breadcrumb that shows the way back.</p>
            <Screen
              src={`${IMG}/screens/ehs.webp`}
              alt="The EHS safety training courses page with grid links"
              w={2400}
              h={1500}
              clip={{ src: `${V}/ehs.mp4`, poster: `${V}/ehs-poster.webp` }}
            />
            <h3 className={s.h3}>The sidebar, live</h3>
            <p>Inside a section, the sidebar keeps every sibling page one click away.</p>
            <Screen
              src={`${IMG}/screens/finance.webp`}
              alt="A Business and Finance page with the nested sidebar navigation"
              w={2400}
              h={1500}
              clip={{ src: `${V}/sidebar.mp4`, poster: `${V}/sidebar-poster.webp` }}
            />
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>07 · Outcome</p>
            <h2 className={s.h2}>Less hunting. More finding.</h2>
            <ul className={s.glance}>
              <li>
                <span>Task success</span>
                <p className={s.glanceNum}>
                  <b>+46%</b>
                </p>
                <small>more people completed their task on the site</small>
              </li>
              <li>
                <span>Satisfaction</span>
                <p className={s.glanceNum}>
                  <b>+48%</b>
                </p>
                <small>improvement in how people rated the experience</small>
              </li>
              <li>
                <span>Support load</span>
                <p className={s.glanceNum}>
                  <b>−30%</b>
                </p>
                <small>fewer tickets about navigation and content</small>
              </li>
              <li>
                <span>Time to task</span>
                <p className={s.glanceNum}>
                  <b>−40%</b>
                </p>
                <small>less time to get from landing to the right page</small>
              </li>
            </ul>
            <p className={s.fine}>Figures as measured by the project team after the redesign. The site meets WCAG 2.2.</p>
            <p>
              The redesigned site is live at{' '}
              <a href="https://cfo.asu.edu/" target="_blank" rel="noreferrer">
                cfo.asu.edu
              </a>
              .
            </p>

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
            <p className={`hand ${s.hand}`}>a calmer site, and a quieter support inbox :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/grc/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextRed}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/grc/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>WorldLink · GRC platform</em>
                <b>Designing an AI-powered GRC platform that takes compliance work from days to hours</b>
                <span>Six engines on one design system, for compliance, risk and security teams.</span>
                <i>View case study →</i>
              </span>
            </Link>
            <div className={s.talk}>
              <LiquidButton href={`mailto:${site.email}?subject=ASU%20CFO%20site%20redesign`} variant="emerald">
                Let&apos;s talk about it
              </LiquidButton>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
