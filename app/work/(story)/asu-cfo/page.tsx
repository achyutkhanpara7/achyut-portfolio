import Image from 'next/image';
import CaseFacts from '@/components/story/CaseFacts';
import { pageMeta, caseImage } from '@/lib/meta';
import Link from 'next/link';
import { caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen, { Clip } from '@/components/story/Screen';
import Pie from '@/components/story/Pie';
import Reveal from '@/components/Reveal';
import s from '@/components/story/story.module.css';
import a from './asu.module.css';

export const metadata = {
  ...pageMeta('/work/asu-cfo/', 'ASU CFO Site Redesign · Simplifying access to financial information', 'A redesign of Arizona State University’s Business and Finance site, so students, faculty and staff find payroll, travel and policy answers without calling support.', caseImage('asu-cfo')),
  keywords: caseKeywords('asu-cfo'),
};

const IMG = '/work/asu-cfo';

/* ---------------- content ----------------
   From Achyut's own case study of the project. Research and result figures are as he reported them;
   the solution clips are his recordings of the live site, cfo.asu.edu. */

const challenges = [
  { img: 'ch1', t: 'Too Much Complexity', d: 'Payroll, travel, procurement, safety and policy on one site, each with its own depth.' },
  { img: 'ch2', t: 'One Site, Many Needs', d: 'Students, staff and faculty arrive at the same front door with very different questions.' },
  { img: 'ch3', t: 'Content Overload', d: 'Long pages and repeated links buried the answer people came for.' },
  { img: 'ch4', t: 'Rules & Restrictions', d: 'ASU brand standards and accessibility rules shaped every decision.' },
];

const stats = [
  { m: 'm1', n: '6 out of 12', d: <>struggled to find <b>basic financial or HR-related information</b> due to a confusing site structure.</> },
  { m: 'm2', n: '65% of users', d: <>said the site felt <b>“overwhelming”</b>, with dense text and <b>unclear labelling</b>.</> },
  { m: 'm3', n: '1 in 3 users', d: <>resorted to <b>contacting support</b> because they couldn’t locate what they needed.</> },
  { m: 'm4', n: '2.1 minutes average', d: <>to find commonly searched pages like <b>Payroll or Travel Reimbursement</b>.</> },
  { m: 'm5', n: 'Every 3rd user', d: <>described the site as <b>“cluttered”</b> or <b>“outdated”</b>, which lowered trust in the content.</> },
];

const crucial = [
  { n: '10 out of 12 users', d: <>wanted quicker access to resources like <b>pay schedules and reimbursements</b>.</> },
  { n: '8 out of 12 users', d: <>clicked through <b>multiple irrelevant pages</b> before reaching the right one.</> },
  { n: '3 out of 12 users', d: <>found site search <b>unhelpful</b> and relied on Google instead.</> },
  { n: '7 out of 12 users', d: <>weren’t confident the <b>content was current or accurate</b>, citing date confusion.</> },
];

const themes = [
  {
    c: a.purple,
    t: 'Lack of User Navigation',
    p: [
      <>Users were unsure if they were viewing the <b>latest or correct information</b>.</>,
      <>Users often got <b>lost</b> and weren’t sure where to go next.</>,
    ],
  },
  {
    c: a.mint,
    t: 'Inefficient Search Experience',
    p: [
      <>Users often relied on <b>Google</b> instead of using the site menus.</>,
      <>Internal search returned <b>broad or irrelevant results</b>.</>,
    ],
  },
  {
    c: a.yellow,
    t: 'Outdated Visual Design',
    p: [
      <>The layout felt <b>cluttered and visually inconsistent</b>.</>,
      <>Poor <b>visual hierarchy</b> made important information hard to find quickly.</>,
    ],
  },
];

const goals = [
  <>Improve content <b>findability</b> by restructuring the site’s <b>navigation and information architecture</b>.</>,
  <>Enhance <b>user trust and engagement</b> through a modern, accessible and responsive UI.</>,
  <>Streamline <b>user journeys</b> by reducing time-to-task and unnecessary page visits.</>,
  <>Align with <b>ASU’s brand</b> and fully comply with <b>WCAG 2.2</b> accessibility standards.</>,
];

const wires = [
  {
    t: 'EHS Training',
    before: { src: 'ehs-before', h: 1459 },
    after: { src: 'ehs-after', h: 1725 },
    note: (
      <>
        Redesigned the EHS Training page based on <b>user support feedback</b>. Replaced hard-to-navigate <b>tabbed content
        with a clear card-based layout and action buttons</b>, and added <b>sidebar navigation and student access
        information</b> to improve usability and discoverability.
      </>
    ),
  },
  {
    t: 'Office Safety',
    before: { src: 'office-before', h: 1902 },
    after: { src: 'office-after', h: 1187 },
    note: (
      <>
        Improved <b>page clarity and visual hierarchy</b> by replacing cluttered, text-heavy content with a <b>grid-based
        layout</b>. Worked closely with the content writers to streamline the messaging and <b>improve navigation</b>.
      </>
    ),
  },
];

const solutions = [
  { v: 's1', t: 'Nested Sidebar Navigation', d: <>A hierarchical sidebar shows <b>main sections with nested subpages</b>, so people can explore related content without starting over.</> },
  { v: 's2', t: 'Breadcrumb Navigation', d: <>Keeps people oriented within the <b>site hierarchy</b> and cuts down on backtracking.</> },
  { v: 's3', t: 'Grid Links', d: <>Content options in a <b>visual, evenly spaced layout</b>, so new content is easier to scan and navigate.</> },
  { v: 's4', t: 'Card with Button', d: <>Each topic as a card with a <b>branded call-to-action</b>, for consistent, easy interaction.</> },
];

const results = [
  { n: '46%', d: 'increase in task success rate', c: a.rInk },
  { n: '25%', d: 'increase in time spent on the website', c: a.rMaroon },
  { n: '48%', d: 'improvement in user satisfaction score', c: a.rGold },
  { n: '30%', d: 'drop in support tickets about navigation and content' },
  { n: '40%', d: 'reduction in average time-to-task' },
  { n: '95+', d: 'compliance with WCAG 2.2 accessibility standards' },
];

const learnings = [
  { t: 'Start from real pain points', d: 'Understanding what people actually struggled with led to solutions that worked, not just a cleaner look.' },
  { t: 'Collaboration and communication', d: 'Working side by side with the content writers and the project manager made the outcome possible.' },
  { t: 'Test and refine', d: 'Refining the designs based on feedback, even from a couple of sessions, made the site more intuitive.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem space' },
  { id: 'research', label: 'Research' },
  { id: 'themes', label: 'Themes & insights' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'outcome', label: 'Outcome' },
];

function Arrow() {
  return (
    <svg className={a.arrow} viewBox="0 0 64 84" fill="none" aria-hidden>
      <path
        d="M10 82 C 8 60, 20 44, 34 46 C 44 47, 44 60, 34 60 C 24 60, 26 36, 52 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M38 8 L 53 9 L 51 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 30 30" aria-hidden>
      <circle cx="15" cy="15" r="15" fill="var(--blue)" />
      <path d="M9 15.5 l4 4 l8-9" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AsuCfo() {
  return (
    <article className={`${s.page} ${s.maroon} ${a.page}`}>
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
            <h2 className={s.h2}>Simplifying access to financial information for the whole ASU community</h2>
            <p>
              The Office of the CFO runs the site where ASU students, faculty and staff go for payroll, travel, purchasing,
              safety training and financial policy. It had grown page by page for years, and it showed.
            </p>

            <div className={a.objective}>
              <p className={a.label}>Business objective</p>
              <p>
                Improve access to financial resources on the CFO site to reduce support load, boost user satisfaction and
                support ASU’s operational efficiency.
              </p>
            </div>
            <CaseFacts slug="asu-cfo" />
            <div className={a.live}>
              <p>
                <em>●</em> The redesign is live on the ASU Business and Finance site
              </p>
              <a href="https://cfo.asu.edu/" target="_blank" rel="noreferrer">
                Visit cfo.asu.edu ↗
              </a>
            </div>
          </section>

          {/* ===== Problem space ===== */}
          <section className={s.sec} id="problem">
            <p className={s.kick}>01 · Problem space</p>
            <h2 className={s.h2}>Most visitors left without the answer they came for</h2>
            <div className={a.problem}>
              <p>
                Students, faculty and staff often struggled to find essential financial information on ASU’s CFO site{' '}
                <b>because of confusing navigation and dense content, leading to frustration and more support requests.</b>{' '}
                The experience needed to be simpler and more intuitive to serve the ASU community.
              </p>
              <div className={a.pieCard}>
                <Pie
                  title="Problem space"
                  slices={[
                    { v: 70, label: 'struggled with finding information', color: '#2a0a17' },
                    { v: 30, label: 'frustrated by unclear or outdated content', color: '#ffc627' },
                  ]}
                />
              </div>
            </div>

            <h3 className={s.h3}>Challenges</h3>
            <p className={a.lead}>
              The site had a lot of <b>complicated content</b> that made sense to finance teams but confused everyday users.
              It was hard to organise everything in a way that worked for <b>students, staff and faculty without losing
              important details</b>, and the design had to follow <b>ASU’s brand and accessibility rules</b>, which added a
              layer to every decision.
            </p>
            <ul className={a.challenges}>
              {challenges.map((c, i) => (
                <Reveal as="li" key={c.t} delay={i * 0.06}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/illo/${c.img}.webp`} alt="" loading="lazy" />
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </Reveal>
              ))}
            </ul>
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
            <h2 className={s.h2}>Understanding user needs and pain points</h2>
            <p>
              I talked with 12 students, faculty and staff and watched them look for things they really needed: a pay
              schedule, a travel reimbursement, a safety course.
            </p>
            <ul className={a.stats}>
              {stats.map((x, i) => (
                <Reveal as="li" key={x.n} delay={i * 0.05}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/illo/${x.m}.webp`} alt="" loading="lazy" />
                  <div>
                    <b>{x.n}</b>
                    <p>{x.d}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <h3 className={s.h3}>Crucial insights from research</h3>
            <ol className={a.crucial}>
              {crucial.map((x, i) => (
                <li key={x.n}>
                  <em>{i + 1}</em>
                  <div>
                    <b>{x.n}</b>
                    <p>{x.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>User persona</h3>
            <Screen
              src={`${IMG}/screens/persona.webp`}
              alt="Persona: Sarah Miller, 32, administrative specialist, with her goals, frustrations, behaviours and needs"
              w={2400}
              h={1617}
            />
          </section>

          {/* ===== Themes & insights ===== */}
          <section className={s.sec} id="themes">
            <p className={s.kick}>03 · Themes & insights</p>
            <h2 className={s.h2}>Everything we heard came down to three themes</h2>
            <p>I grouped the findings on an affinity board. Three clusters kept coming back.</p>
            <ol className={a.themes}>
              {themes.map((t, i) => (
                <Reveal as="li" key={t.t} delay={i * 0.1} className={a.theme}>
                  <div className={`${a.note} ${t.c}`}>
                    <span>{i + 1}.</span>
                    {t.t}
                  </div>
                  <ul className={a.panel}>
                    {t.p.map((line, k) => (
                      <li key={k}>{line}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* ===== Strategy ===== */}
          <section className={s.sec} id="strategy">
            <p className={s.kick}>04 · Strategic solution</p>
            <h2 className={s.h2}>A user-centred redesign, guided by four goals</h2>
            <p>
              The approach targeted the usability pain points from research while staying in line with ASU’s wider digital
              standards.
            </p>
            <div className={a.strategy}>
              <ul className={a.checks}>
                {goals.map((g, i) => (
                  <li key={i}>
                    <Check />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
              <figure className={a.browser}>
                <Image
                  src={`${IMG}/screens/finance.webp`}
                  alt="The redesigned Financial Services page with a breadcrumb and the section sidebar"
                  width={2400}
                  height={1500}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </figure>
            </div>
          </section>

          {/* ===== Wireframes ===== */}
          <section className={s.sec} id="wireframes">
            <p className={s.kick}>05 · Medium-fidelity wireframes</p>
            <h2 className={s.h2}>Before and after, on two of the hardest pages</h2>
            <p>
              I tested the medium-fidelity wireframes with <b>2 users</b> to get feedback, then refined them with the content
              writers.
            </p>
            {wires.map((w) => (
              <div key={w.t}>
                <span className={a.pill}>{w.t}</span>
                <div className={a.pair}>
                  <figure>
                    <div className={a.frame}>
                      <Image
                        src={`${IMG}/wire/${w.before.src}.webp`}
                        alt={`${w.t} before the redesign`}
                        width={900}
                        height={w.before.h}
                        sizes="(max-width: 900px) 46vw, 30vw"
                      />
                    </div>
                    <Arrow />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure>
                    <div className={a.frame}>
                      <Image
                        src={`${IMG}/wire/${w.after.src}.webp`}
                        alt={`${w.t} after the redesign`}
                        width={900}
                        height={w.after.h}
                        sizes="(max-width: 900px) 46vw, 30vw"
                      />
                    </div>
                    <Arrow />
                    <figcaption className={a.after}>After</figcaption>
                  </figure>
                </div>
                <p className={a.wireNote}>{w.note}</p>
              </div>
            ))}
          </section>

          {/* ===== Solutions ===== */}
          <section className={s.sec} id="solutions">
            <p className={s.kick}>06 · 4 primary design solutions</p>
            <h2 className={s.h2}>Four patterns that tell people where they are and where to go next</h2>
            <ol className={a.solutions}>
              {solutions.map((x, i) => (
                <Reveal as="li" key={x.t} className={a.solution}>
                  <div className={a.solText}>
                    <span className={a.tag}>
                      <i>0{i + 1}</i>
                      {x.t}
                    </span>
                    <p>{x.d}</p>
                  </div>
                  <div className={a.video}>
                    <Clip src={`${IMG}/solutions/${x.v}.mp4`} poster={`${IMG}/solutions/${x.v}.webp`} label={x.t} />
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>07 · What did we achieve?</p>
            <h2 className={s.h2}>Less hunting. More finding.</h2>
            <p>
              After the redesigned site launched, usability, satisfaction and engagement all moved in the right direction.
            </p>
            <ul className={a.results}>
              {results.map((r, i) => (
                <Reveal as="li" key={r.d} delay={i * 0.05} className={r.c}>
                  <b>{r.n}</b>
                  <span>{r.d}</span>
                </Reveal>
              ))}
            </ul>
            <p className={s.fine}>Figures as measured by the project team after the redesign launched.</p>

            <h3 className={s.h3}>Key learnings</h3>
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
            <Link href="/work/swift-save/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextPlum}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/swift-save/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>SwiftSave · Fintech · Mobile banking</em>
                <b>Designing SwiftSave, a banking app that turns transfers, bills and recharges into a few taps</b>
                <span>Research with 10 people, usability tests with 8, and eight finished flows.</span>
                <i>View case study →</i>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
