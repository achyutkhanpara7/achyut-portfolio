import Image from 'next/image';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';
import { site, caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import FlowGallery from '@/components/story/FlowGallery';
import Tabs from '@/components/story/Tabs';
import SwiftFlow from '@/components/story/SwiftFlow';
import Reveal from '@/components/Reveal';
import s from '@/components/story/story.module.css';
import w from './swift.module.css';

export const metadata = {
  keywords: caseKeywords('swift-save'),
  title: 'SwiftSave · Mobile banking in a few taps',
  description:
    'A mobile banking app that puts accounts, money transfers, bill payments and recharges in one place, so everyday banking takes seconds instead of a branch visit.',
};

const IMG = '/work/swift-save';

/* ---------------- content ----------------
   From Achyut's own SwiftSave case study. Research and testing figures are as he reported them from his
   interviews and usability tests of the prototype. */

const features = [
  { img: 'f-account', t: 'Account and card', d: 'Every bank account in one place, with balance, account number and branch at a glance.' },
  { img: 'f-electric', t: 'Electricity bill', d: 'One tap on “Pay the bill” settles it, with the full breakdown right above the button.' },
  { img: 'f-internet', t: 'Internet bill', d: 'Charges, billing period and provider laid out clearly, so reviewing and paying takes seconds.' },
  { img: 'f-transfer', t: 'Money transfer', d: 'A step-by-step flow: pick the recipient, enter the amount, confirm. Done in seconds.' },
];

const pains = [
  {
    t: 'Slow transactions and payments',
    d: 'Transfers, withdrawals and bill payments meant delays, branch visits or repeated verification.',
    icon: <path d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  },
  {
    t: 'No single place for accounts',
    d: 'Updating account details, managing cards and tracking transactions was cumbersome without one platform.',
    icon: <path d="M3 7h18v12H3zM3 11h18M7 15h4" />,
  },
  {
    t: 'Manual beneficiary management',
    d: 'Organising people you pay often was slow, which made every transfer slower and less convenient.',
    icon: <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a7 7 0 0 1 14 0v1M17 8h5M19.5 5.5v5" />,
  },
];

const stats = [
  { m: 'm1', n: '7 out of 10', d: <>found <b>account management confusing</b> and time-consuming.</> },
  { m: 'm2', n: '10 users', d: <>faced difficulties <b>transferring funds or paying bills</b> quickly.</> },
  { m: 'm3', n: '4 out of 10', d: <><b>abandoned financial tasks</b> because the features they needed were hard to reach.</> },
  { m: 'm4', n: '95 seconds', d: <>average time spent <b>navigating banking apps</b>, with some taking up to 2.5 minutes to find basic functions.</> },
  { m: 'm5', n: 'Every 4th user', d: <>rated their banking experience <b>poor</b> because of delays and inefficiencies.</> },
];

const crucial = [
  { n: '8 out of 10 users', d: <>wanted an <b>all-in-one banking app</b> for transfers and payments.</> },
  { n: '6 out of 10 users', d: <>found traditional bank apps <b>overwhelming</b> and not user-friendly.</> },
  { n: '3 out of 10 users', d: <><b>didn’t trust</b> existing platforms because of poor UX and security concerns.</> },
  { n: '7 out of 10 users', d: <>felt managing <b>beneficiaries and recurring payments</b> was too complicated.</> },
];

const persona = {
  goals: ['Pay bills and credit cards quickly', 'A secure, easy banking experience', 'Track transactions and get timely reports'],
  pains: ['Banking apps that aren’t intuitive', 'Slow transaction processing', 'Adding beneficiaries by hand for frequent payments'],
  frustrations: ['Poor UI makes navigation hard', 'No instant transaction notifications', 'Switching apps for different banking needs'],
  motivations: ['A fast, intuitive, secure place to manage money', 'Real-time tracking to stay organised'],
};

const empathy = [
  { k: 'think', t: 'Thinks & feels', items: ['“I need full control over my finances, anytime.”', 'Worried about delayed transactions', 'Wants one app that saves time', 'Values simplicity, speed and security'] },
  { k: 'hear', t: 'Hears', items: ['Friends use different apps for different tasks', 'Family says be careful with online banking', 'Influencers talk up smart finance apps'] },
  { k: 'see', t: 'Sees', items: ['Cluttered, complicated finance apps', 'Friends switching to simpler fintech apps', 'More people managing money digitally'] },
  { k: 'say', t: 'Says & does', items: ['“I need something that just works quickly.”', 'Complains about delays and too many steps', 'Switches apps to transfer, pay and track', 'Asks peers for better options'] },
];

const typeScale = [
  { n: 'Heading 1', w: 600, size: 24, lh: 28 },
  { n: 'Heading 2', w: 600, size: 20, lh: 28 },
  { n: 'Heading 3', w: 600, size: 16, lh: 24 },
  { n: 'Body 1', w: 500, size: 16, lh: 24 },
  { n: 'Body 2', w: 400, size: 16, lh: 24 },
  { n: 'Body 3', w: 500, size: 14, lh: 24 },
  { n: 'Caption 1', w: 600, size: 12, lh: 16 },
  { n: 'Caption 2', w: 500, size: 14, lh: 16 },
];

const palette: [string, string[]][] = [
  ['Primary', ['#612E78', '#8C47AE', '#C9A0E5', '#F3F2F9']],
  ['Neutral', ['#343434', '#898989', '#989898', '#CACACA', '#E0E0E0', '#FFFFFF']],
  ['Semantic', ['#FF4267', '#0890FE', '#FFAF2A', '#52D5BA', '#FB6B18']],
];

const tasks = [
  { t: 'View account info', r: 100, time: '12 sec', q: 'Very easy to locate everything.' },
  { t: 'Money transfer', r: 87, time: '28 sec', q: 'Would love auto-fill for frequent users.' },
  { t: 'Pay electricity bill', r: 100, time: '22 sec', q: 'Felt smooth and clear.' },
  { t: 'Add beneficiary', r: 75, time: '35 sec', q: 'Slight confusion on where to start.' },
  { t: 'View transactions', r: 100, time: '18 sec', q: 'Quick and helpful overview.' },
];

const flowList: [string, string][] = [
  ['onboarding', 'Onboarding'],
  ['credit-card', 'Credit card bill'],
  ['electric', 'Electricity bill'],
  ['internet', 'Internet bill'],
  ['recharge', 'Mobile recharge'],
  ['exchange', 'Exchange money'],
  ['transfer', 'Money transfer'],
  ['withdraw', 'Withdraw money'],
];
const flows = flowList.map(([id, label]) => ({
  id,
  label,
  slides: [1, 2].map((k) => ({ src: `${IMG}/hifi/${id}-${k}.webp`, alt: `${label} screens, part ${k} of 2` })),
}));

const impact = [
  { n: '−85%', t: 'time to complete a money transfer', d: 'Now done in under 20 seconds.' },
  { n: '−70%', t: 'time to pay a bill', d: 'Down to about 15 seconds.' },
  { n: '−75%', t: 'transaction drop-offs', d: 'Abandonment fell to almost zero.' },
  { n: '+60%', t: 'user satisfaction', d: 'Rated 9 out of 10 for ease of use and speed.' },
  { n: '+35%', t: 'task success rate', d: 'Up to 95% task completion without help.' },
];

const learnings = [
  { t: 'Designing for clarity builds confidence', d: 'People feel more in control when information is clearly structured. Simple UI choices did more for trust than any badge.' },
  { t: 'Test early, test often', d: 'Frequent usability tests caught small issues before they became blockers, which kept both speed and quality up.' },
  { t: 'User behaviour is insight gold', d: 'Watching people use the product showed patterns and needs that surveys alone never would have.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Empathize' },
  { id: 'research', label: 'Define' },
  { id: 'ideate', label: 'Ideate' },
  { id: 'design', label: 'Design' },
  { id: 'testing', label: 'Testing' },
  { id: 'screens', label: 'Final screens' },
  { id: 'impact', label: 'Impact' },
];

export default function SwiftSave() {
  return (
    <article className={`${s.page} ${s.plum} ${w.page}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>SwiftSave · Mobile banking app · Fintech</p>
        <h1 className={s.h1}>Designing SwiftSave, a banking app that turns transfers, bills and recharges into a few taps</h1>
        <ul className={s.heroMeta}>
          <li>UX designer & researcher</li>
          <li>4 months</li>
          <li>10 research participants</li>
          <li>8 usability tests</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="SwiftSave: smarter, faster and seamless digital banking, shown on several phone screens"
            width={2400}
            height={1465}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="SwiftSave" logo="S" meta="Fintech" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>All your everyday banking, in one calm app</h2>
            <p>
              SwiftSave is an all-in-one financial app for account management, money transfers, withdrawals, bill payments and
              mobile recharges. People can update card details, send money, pay bills and manage beneficiaries from one place,
              in a secure, easy interface.
            </p>
            <ul className={w.facts}>
              <li>
                <p className={w.label}>My role</p>
                <span>UX Designer & Researcher</span>
              </li>
              <li>
                <p className={w.label}>Tools</p>
                <span>Figma, Zoom, Google Docs, Google Sheets, ChatGPT</span>
              </li>
              <li>
                <p className={w.label}>Duration</p>
                <span>4 months</span>
              </li>
            </ul>

            <h3 className={s.h3}>How it works: key features</h3>
            <ul className={w.features}>
              {features.map((f, i) => (
                <Reveal as="li" key={f.t} delay={i * 0.06}>
                  <div className={w.phone}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/screens/${f.img}.webp`} alt={`${f.t} screen`} loading="lazy" />
                  </div>
                  <b>{f.t}</b>
                  <p>{f.d}</p>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* ===== Empathize ===== */}
          <section className={s.sec} id="problem">
            <p className={s.kick}>Phase 1 · Empathize</p>
            <h2 className={s.h2}>Traditional banking is complex and time-consuming</h2>
            <p>
              Basic tasks took too many steps. Moving money, withdrawing it or paying a bill often meant waiting, a branch visit
              or another round of verification.
            </p>
            <ul className={w.pains}>
              {pains.map((p) => (
                <li key={p.t}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {p.icon}
                  </svg>
                  <b>{p.t}</b>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
            <div className={w.cs}>
              <div className={w.challenge}>
                <p className={w.label}>Where is the challenge?</p>
                <p>
                  Simplify banking, speed up transactions, automate beneficiary management and keep it secure, while making the
                  whole experience better to use.
                </p>
              </div>
              <div className={w.solution}>
                <p className={w.label}>Solution</p>
                <p>
                  A secure, responsive fintech app that centralises accounts, automates transactions and streamlines payments:
                  fast transfers, easy bill pay, real-time tracking and organised beneficiaries.
                </p>
              </div>
            </div>
            <div className={w.audience}>
              <p>
                End users: <em>people aged 18 to 60</em>
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/screens/audience.webp`} alt="" />
            </div>
          </section>

          {/* ===== Define ===== */}
          <section className={s.sec} id="research">
            <p className={s.kick}>Phase 2 · Define</p>
            <h2 className={s.h2}>Understanding financial needs and pain points</h2>
            <p>Research with 10 people showed where everyday banking slowed them down, and what they wanted instead.</p>
            <ul className={w.stats}>
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
            <ol className={w.crucial}>
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
            <h3 className={s.h3}>Who we designed for</h3>
            <Tabs
              label="Persona and empathy map"
              tabs={[
                {
                  id: 'persona',
                  label: 'Persona',
                  panel: (
                    <div className={w.persona}>
                      <div className={w.pLeft}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`${IMG}/illo/persona.webp`} alt="" className={w.pAvatar} />
                        <b>John Anderson</b>
                        <span>38 · Director, financial services</span>
                        <ul className={w.traits}>
                          {['Talkative', 'Optimistic', 'Friendly', 'Goal-oriented'].map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                        <blockquote>“Managing multiple payments and tracking my expenses shouldn’t be this complicated.”</blockquote>
                      </div>
                      <div className={w.pGrid}>
                        {(
                          [
                            ['Goals', persona.goals],
                            ['Pain points', persona.pains],
                            ['Frustrations', persona.frustrations],
                            ['Motivations', persona.motivations],
                          ] as [string, string[]][]
                        ).map(([h, items]) => (
                          <div key={h}>
                            <p className={w.label}>{h}</p>
                            <ul>
                              {items.map((x) => (
                                <li key={x}>{x}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                },
                {
                  id: 'empathy',
                  label: 'Empathy map',
                  panel: (
                    <div className={w.empathy}>
                      <p className={w.eWho}>David, 27 · Account manager</p>
                      <div className={w.eGrid}>
                        {empathy.map((q) => (
                          <div key={q.k} className={w[q.k]}>
                            <b>{q.t}</b>
                            <ul>
                              {q.items.map((x) => (
                                <li key={x}>{x}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className={w.eRow}>
                        <div className={w.pains2}>
                          <b>Pains</b>
                          <p>Delays and slow apps · juggling platforms · security worries · time lost in complex screens</p>
                        </div>
                        <div className={w.gains}>
                          <b>Gains</b>
                          <p>One secure app · fast transfers and live balances · easy bills and beneficiaries · peace of mind</p>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </section>

          {/* ===== Ideate ===== */}
          <section className={s.sec} id="ideate">
            <p className={s.kick}>Phase 3 · Ideate</p>
            <h2 className={s.h2}>Mapping the flow before drawing a screen</h2>
            <p>Two ways in, one dashboard, and every task two steps from it.</p>
            <div className={w.flowBox}>
              <div className={w.flowScroll}>
                <SwiftFlow />
              </div>
              <p className={w.flowKey}>
                <span className={w.kTask} /> Task <span className={w.kNext} /> Next step
              </p>
            </div>
          </section>

          {/* ===== Design ===== */}
          <section className={s.sec} id="design">
            <p className={s.kick}>Phase 4 · Design</p>
            <h2 className={s.h2}>A small design system, then the wireframes</h2>
            <p>
              Poppins, a purple-led palette and a shared component set came first. The mid-fidelity wireframes then set layout,
              structure and flow for every main task before any final visuals.
            </p>
            <Tabs
              label="Design system"
              tabs={[
                {
                  id: 'type',
                  label: 'Type',
                  panel: (
                    <div className={w.type}>
                      <p className={w.aa}>
                        Aa <span>Poppins</span>
                      </p>
                      <ul>
                        {typeScale.map((x) => (
                          <li key={x.n}>
                            <span style={{ fontWeight: x.w, fontSize: Math.max(x.size, 13) }}>{x.n}</span>
                            <small>
                              {x.w === 600 ? 'Semi Bold' : x.w === 500 ? 'Medium' : 'Regular'} · {x.size}/{x.lh}
                            </small>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                },
                {
                  id: 'colour',
                  label: 'Colour',
                  panel: (
                    <div className={w.colours}>
                      {palette.map(([name, list]) => (
                        <div key={name}>
                          <p className={w.label}>{name}</p>
                          <ul>
                            {list.map((c) => (
                              <li key={c}>
                                <i style={{ background: c }} />
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  id: 'components',
                  label: 'Components',
                  panel: (
                    <figure className={w.panel}>
                      <Image src={`${IMG}/screens/components.webp`} alt="Component sheet with buttons, inputs, toggles, cards and lists" width={2000} height={1573} sizes="(max-width: 900px) 100vw, 860px" />
                    </figure>
                  ),
                },
                {
                  id: 'icons',
                  label: 'Icons & illustrations',
                  panel: (
                    <div className={w.duo}>
                      <figure className={w.panel}>
                        <Image src={`${IMG}/screens/icons.webp`} alt="Icon set with navigation, flags and category icons" width={981} height={1012} sizes="(max-width: 900px) 100vw, 420px" />
                      </figure>
                      <figure className={`${w.panel} ${w.center}`}>
                        <Image src={`${IMG}/screens/illustrations.webp`} alt="Spot illustrations of payments, cards and transfers" width={1200} height={704} sizes="(max-width: 900px) 100vw, 420px" />
                      </figure>
                    </div>
                  ),
                },
                {
                  id: 'wireframes',
                  label: 'Wireframes',
                  panel: (
                    <figure className={w.panel}>
                      <Image src={`${IMG}/screens/wireframes.webp`} alt="Grid of mid-fidelity wireframes for sign-in, sign-up, password reset, home and transfer flows" width={1144} height={864} sizes="(max-width: 900px) 100vw, 860px" />
                    </figure>
                  ),
                },
              ]}
            />
          </section>

          {/* ===== Testing ===== */}
          <section className={s.sec} id="testing">
            <p className={s.kick}>Usability testing</p>
            <h2 className={s.h2}>Can people bank without thinking about it?</h2>
            <p>
              I tested how easily people could move around the app and finish core tasks: account management, money transfers
              and bill payments.
            </p>
            <div className={w.test}>
              <figure className={w.testImg}>
                <Image src={`${IMG}/screens/testing.webp`} alt="SwiftSave prototype screens used in the usability test" width={1800} height={1350} sizes="(max-width: 900px) 100vw, 40vw" />
              </figure>
              <div className={w.testInfo}>
                <div>
                  <p className={w.label}>Participants</p>
                  <dl>
                    <dt>Users</dt>
                    <dd>8</dd>
                    <dt>Who</dt>
                    <dd>Freelancers, small business owners, working professionals</dd>
                    <dt>Device</dt>
                    <dd>Mobile (iOS and Android)</dd>
                  </dl>
                </div>
                <div>
                  <p className={w.label}>Tasks tested</p>
                  <ul>
                    <li>View account balance and details</li>
                    <li>Transfer money to a beneficiary</li>
                    <li>Pay an electricity bill</li>
                    <li>Add a new beneficiary</li>
                    <li>View transaction history</li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className={s.h3}>Key metrics and results</h3>
            <div className={w.tableWrap}>
              <table className={w.table}>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Success rate</th>
                    <th>Avg. time</th>
                    <th>What they said</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((t) => (
                    <tr key={t.t}>
                      <td>{t.t}</td>
                      <td>
                        <span className={`${w.rate} ${t.r < 90 ? w.rateMid : ''}`}>{t.r}%</span>
                      </td>
                      <td>{t.time}</td>
                      <td>“{t.q}”</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== Final screens ===== */}
          <section className={s.sec} id="screens">
            <p className={s.kick}>Final hi-fi designs</p>
            <h2 className={s.h2}>Eight flows, one consistent feel</h2>
            <p>Pick a flow, then step through its screens.</p>
            <FlowGallery flows={flows} />
          </section>

          {/* ===== Impact ===== */}
          <section className={s.sec} id="impact">
            <p className={s.kick}>Impact</p>
            <h2 className={s.h2}>Fewer taps. Faster money.</h2>
            <p>
              After redesigning SwiftSave from the research and testing, I ran another usability test with real users on the
              improved prototype. Here’s what changed.
            </p>
            <ul className={w.impact}>
              {impact.map((x, i) => (
                <Reveal as="li" key={x.t} delay={i * 0.05}>
                  <b>{x.n}</b>
                  <strong>{x.t}</strong>
                  <span>{x.d}</span>
                </Reveal>
              ))}
            </ul>
            <p className={s.fine}>Measured in usability tests of the redesigned prototype, compared with the first round.</p>

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
            <p className={`hand ${s.hand}`}>banking, minus the waiting :)</p>
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
              <LiquidButton href={`mailto:${site.email}?subject=SwiftSave%20case%20study`} variant="emerald">
                Let&apos;s talk about it
              </LiquidButton>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
