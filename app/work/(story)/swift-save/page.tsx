import Image from 'next/image';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';
import { site, caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen from '@/components/story/Screen';
import FlowGallery from '@/components/story/FlowGallery';
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
            <h3 className={s.h3}>User persona</h3>
            <Screen
              src={`${IMG}/screens/persona.webp`}
              alt="Persona: John Anderson, with his bio, goals and needs, pain points, frustrations and motivation"
              w={1600}
              h={2408}
            />
          </section>

          {/* ===== Ideate ===== */}
          <section className={s.sec} id="ideate">
            <p className={s.kick}>Phase 3 · Ideate</p>
            <h2 className={s.h2}>Mapping the flows before drawing a screen</h2>
            <h3 className={s.h3}>User flow</h3>
            <Screen
              src={`${IMG}/screens/flow.webp`}
              alt="User flow from sign-in to the dashboard and out to accounts, transfers, bills, recharge, exchange and withdraw"
              w={2400}
              h={1273}
            />
            <h3 className={s.h3}>Empathy map</h3>
            <Screen
              src={`${IMG}/screens/empathy.webp`}
              alt="Empathy map for David, 27, account manager: what he thinks and feels, hears, sees, says and does, with pains and gains"
              w={1800}
              h={2038}
            />
          </section>

          {/* ===== Design ===== */}
          <section className={s.sec} id="design">
            <p className={s.kick}>Phase 4 · Design</p>
            <h2 className={s.h2}>A small design system, then the wireframes</h2>
            <div className={w.duo}>
              <figure className={`${w.panel} ${w.tall}`}>
                <figcaption>Style guide</figcaption>
                <Image src={`${IMG}/screens/style.webp`} alt="Style guide: Poppins type scale and the purple, neutral and semantic colour styles" width={1400} height={2808} sizes="(max-width: 900px) 100vw, 40vw" />
              </figure>
              <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
                <figure className={w.panel}>
                  <figcaption>Components</figcaption>
                  <Image src={`${IMG}/screens/components.webp`} alt="Component sheet with buttons, inputs, toggles, cards and lists" width={2000} height={1573} sizes="(max-width: 900px) 100vw, 40vw" />
                </figure>
                <figure className={w.panel}>
                  <figcaption>Icons</figcaption>
                  <Image src={`${IMG}/screens/icons.webp`} alt="Icon set with navigation, flags and category icons" width={981} height={1012} sizes="(max-width: 900px) 100vw, 40vw" />
                </figure>
                <figure className={w.panel}>
                  <figcaption>Illustrations</figcaption>
                  <Image src={`${IMG}/screens/illustrations.webp`} alt="Spot illustrations of payments, cards and transfers" width={1200} height={704} sizes="(max-width: 900px) 100vw, 40vw" />
                </figure>
              </div>
            </div>
            <h3 className={s.h3}>Mid-fidelity wireframes</h3>
            <p>
              The wireframes set the layout, structure and flow without final visuals: account overview, money transfer, bill
              payments and navigation, checked for clarity before moving to high fidelity.
            </p>
            <Screen src={`${IMG}/screens/wireframes.webp`} alt="Grid of mid-fidelity wireframes for the main SwiftSave flows" w={1144} h={864} />
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
