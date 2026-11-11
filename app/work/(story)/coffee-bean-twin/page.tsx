import Image from 'next/image';
import Link from 'next/link';
import { caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen from '@/components/story/Screen';
import s from '@/components/story/story.module.css';

export const metadata = {
  keywords: caseKeywords('coffee-bean-twin'),
  title: 'Coffee Bean Digital Twin · Turning a quality model into decisions',
  description:
    'A digital twin that simulates how coffee beans lose quality from farm to roast. Designed so a quality analyst can test conditions, see the uncertainty and know what to do next.',
  robots: { index: false, follow: false },
};

const IMG = '/work/coffee-bean-twin';
const V = `${IMG}/video`;

/* ---------------- content: from the working prototype (digital-twin.figma.site) ----------------
   No research numbers or user quotes here: none were collected for this project, so the page
   shows the design reasoning, labels assumptions as assumptions, and says how they'd be tested. */

const twins = [
  { n: 'Twin 1', t: 'Green bean', d: 'Storage from farm to warehouse: how temperature, humidity and packaging age the beans before roasting.' },
  { n: 'Twin 2', t: 'Roasting', d: 'The roast itself: machine, roast level and profile, and what quality the beans carry into it.' },
  { n: 'Twin 3', t: 'Brown bean', d: 'Roasted coffee on the shelf: degassing, the peak brewing window and when freshness falls away.' },
];

const owned = [
  { t: 'Structure', d: 'How three twins and five analysis modes fit into one journey.' },
  { t: 'Translation', d: 'Model outputs turned into scores, grades and next steps.' },
  { t: 'Interaction', d: 'Presets, scenario runs, comparisons and uncertainty views.' },
  { t: 'Prototype', d: 'A working prototype in Figma Make, reviewed with technical and business stakeholders.' },
];

const model = ['Moisture content', 'Water activity', 'Sucrose', 'Chlorogenic acid', 'Free fatty acids', 'Mold risk', 'VOC level', 'Density index'];

const challenges = [
  { t: 'A model that speaks chemistry', d: 'The twin reports water activity in aw, CGA and FFA in percent. Accurate, and unreadable to most of the people deciding what to do with a lot of beans.' },
  { t: 'Results that are ranges, not answers', d: 'Weather and transit vary, so the honest output is a distribution. A single number would look more confident than the science is.' },
  { t: 'Time is the main variable', d: 'Quality moves over 180 days, across warehouses, ships and roasteries. A snapshot hides the moment it breaks.' },
  { t: 'Three stages, one bean', d: 'Damage done in storage shows up at the roaster. The stages had to connect, or the cause and the effect would sit on different screens.' },
];

const personas = [
  {
    i: 'QA',
    n: 'Quality analyst',
    r: 'Runs the simulations',
    q: 'Which conditions keep this lot above specialty grade, and for how long?',
    need: 'Fast scenario setup, side-by-side results, the uncertainty in view',
  },
  {
    i: 'SC',
    n: 'Supply chain planner',
    r: 'Chooses routes, warehouses and packaging',
    q: 'Is the cheaper warehouse or packaging going to cost us quality?',
    need: 'A clear comparison of two options under the same conditions',
  },
  {
    i: 'RL',
    n: 'Roastery lead',
    r: 'Receives the beans',
    q: 'What state is this lot in when it reaches me, and what should I check?',
    need: 'Arrival quality, the risk flags and one recommended action',
  },
];

const principles = [
  { p: 'Start from a preset', d: 'Every scenario loads suggested starting conditions. People adjust from something sensible instead of facing a blank form.' },
  { p: 'Say what to look for', d: 'Each scenario explains what the result should reveal before it runs, so people know what “good” looks like.' },
  { p: 'One score, many causes', d: 'Eight chemistry values roll up into a 0–100 quality score with grades, and the drivers sit one level below.' },
  { p: 'Show the uncertainty', d: 'Where the model is uncertain, the interface shows a band, not a line.' },
  { p: 'End on an action', d: 'Results finish with “What should you do?”, written as an instruction rather than a reading.' },
];

const grades = [
  { v: '90', t: 'Excellent', d: 'Fresh green bean', c: '#22c55e' },
  { v: '82', t: 'Fresh', d: 'Freshness grade line', c: '#4ade80' },
  { v: '80', t: 'Specialty', d: 'Shelf life is measured above this', c: '#a3e635' },
  { v: '70', t: 'Commercial', d: 'Where stress tests look for failure', c: '#facc15' },
  { v: '50', t: 'Poor', d: 'Dark, stale or damaged', c: '#f97316' },
];

const modes = [
  {
    id: 'f-scenario',
    n: '01',
    t: 'Scenarios: start from a sensible preset',
    problem: 'A blank form of eight chemistry inputs is where a simulation tool loses people.',
    did: 'Scenario categories (Baseline, Stress tests, What-if, Risk) each hold ready-made plays such as Ideal Storage or Tropical Warehouse. One click loads the conditions, an insight explains the expected behaviour, and “What to look for” sets up the result. The run returns one quality score with the physical state, risk and chemistry beneath it.',
    img: 'scenario',
    alt: 'A completed 180-day run for Ideal Storage: quality score 89, physical state, risk assessment and chemistry.',
  },
  {
    id: 'f-ab',
    n: '02',
    t: 'A/B compare: change one thing only',
    problem: 'Packaging decisions were argued from intuition. Comparing two separate runs meant comparing two different sets of conditions.',
    did: 'Both sides run under identical cyclical humidity; the only difference is the packaging. The result overlays both trajectories for quality, moisture, water activity and mold risk, so the moisture oscillating in exposed packaging sits right against the flat line of the hermetic bag, with the change in each value listed above.',
    img: 'ab',
    alt: 'A/B result: trajectory overlay of hermetic and exposed packaging for quality, moisture, water activity and mold risk.',
  },
  {
    id: 'f-mc',
    n: '03',
    t: 'Monte Carlo: show the range, not a guess',
    problem: 'Real temperature and humidity vary. One run gives one answer, and it looks more certain than it is.',
    did: 'People set a mean and spread for temperature and humidity and run 200 simulations. The result is a quality trajectory with p5–p95 and interquartile bands, plus a sensitivity insight in plain words, such as “temperature variation is the dominant source of uncertainty; controlling warehouse temperature is the highest-leverage intervention.”',
    img: 'montecarlo',
    alt: 'Monte Carlo result: quality score uncertainty bands over 90 days and a sensitivity insight.',
  },
  {
    id: 'f-ai',
    n: '04',
    t: 'AI prediction: a forecast with its confidence',
    problem: 'The question people actually had was the reverse one: what conditions should we use?',
    did: 'An ML forecast of quality, freshness and mold risk, each with a confidence range and its low and high. “Find optimal storage” evaluates thousands of conditions and shows its steps as it works, then returns settings that can be applied in one click.',
    img: 'ai',
    alt: 'The AI storage optimizer evaluating storage conditions step by step.',
  },
  {
    id: 'f-pipeline',
    n: '05',
    t: 'Farm to roast: connect cause and effect',
    problem: 'Damage done in a warehouse only became visible at the roaster, on a different screen, to a different person.',
    did: 'The three twins form one pipeline. Condition presets (Ideal Storage, Vacuum Sealed, Tropical Warehouse, Extreme Heat) and packaging choices feed a 180-day green-bean run, then “What’s affecting your coffee?” ranks the drivers (temperature, lipid oxidation, humidity, natural aging) and “What should you do?” names the two to fix first. “Send to Roaster” carries the final state into the roasting twin.',
    img: 'pipeline',
    alt: 'Pipeline result: degradation drivers ranked, a recommended action, the final state at day 180 and Send to Roaster.',
  },
  {
    id: 'f-tester',
    n: '06',
    t: 'Quality tester: make a score visible',
    problem: '74.8 means nothing on its own.',
    did: 'A live preview where the bean itself changes colour and state as the score moves, from a fresh green bean at 90 to a stale, very dark bean at 35, so the number and the coffee line up in people’s heads.',
    img: 'tester',
    alt: 'The bean quality tester: a quality ring at 74.8 with a medium-roast bean and a slider.',
  },
];

const decisions = [
  { t: 'Presets over empty forms', chose: 'Every scenario starts from named, suggested conditions.', instead: 'A configuration screen of eight blank inputs.' },
  { t: 'Bands over single lines', chose: 'Uncertainty is drawn as p5–p95 bands with the worst case called out.', instead: 'One confident trajectory that hides the spread.' },
  { t: 'One variable at a time', chose: 'A/B comparisons share every condition except the one being tested.', instead: 'Two independent runs compared by eye.' },
  { t: 'Instructions over readings', chose: 'Results end with what to do next, in plain words.', instead: 'A table of chemistry values left for the reader to interpret.' },
];

const validate = [
  { t: 'Can people read the score?', d: 'Show a result and ask what state the beans are in and whether to ship them. Compare answers with and without the grades.' },
  { t: 'Do presets speed things up?', d: 'Time to a first meaningful run, starting from a preset against a blank configuration.' },
  { t: 'Is the uncertainty understood?', d: 'Ask people to explain the Monte Carlo band in their own words and pick the riskier of two options.' },
  { t: 'Does the action land?', d: 'Check whether the roastery lead acts on the arrival flag without opening the detail view.' },
];

const learnings = [
  { t: 'Design the translation, not the chart', d: 'The model was the easy part to trust. The work was turning water activity and FFA into a grade and an instruction.' },
  { t: 'Uncertainty is a feature', d: 'Showing the range made the tool more credible, not less. A single line would have been the bigger risk.' },
  { t: 'Connect the stages', d: 'Linking storage to roasting is what turned three simulators into one product.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'define', label: 'Define' },
  { id: 'principles', label: 'Principles' },
  { id: 'features', label: 'Six ways to ask' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'next', label: 'Validation plan' },
  { id: 'outcome', label: 'Outcome' },
];

export default function CoffeeTwin() {
  return (
    <article className={`${s.page} ${s.coffee}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>Digital twin · Simulation &amp; decision support · WorldLink Labs</p>
        <h1 className={s.h1}>Designing a digital twin that shows how coffee loses quality, from farm to roast</h1>
        <ul className={s.heroMeta}>
          <li>UX / product designer</li>
          <li>3 twins · 1 journey</li>
          <li>180-day simulations</li>
          <li>Working prototype in Figma Make</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="The digital twin system overview: active scenarios, average quality score, critical alerts, quality trends and risk distribution"
            width={2400}
            height={1500}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="Coffee Twin" logo="C" meta="3 twins" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>Every cup of coffee, with a heartbeat</h2>
            <div className={s.twoCol}>
              <div>
                <h3 className={s.h3}>What it is</h3>
                <p>
                  A digital twin of the coffee bean. It simulates how beans age and lose quality under real conditions,
                  across storage, roasting and the shelf, so a team can test a decision before the beans pay for it.
                </p>
                <p className={s.small}>The product’s own line: “In the future, every cup of coffee will have a heartbeat. We are the ones monitoring it.”</p>
              </div>
              <div>
                <h3 className={s.h3}>My role</h3>
                <p>
                  UX / product designer at WorldLink. I turned simulation and model outputs into journeys people could
                  navigate, working with technical and business stakeholders.
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

            <h3 className={s.h3}>Three twins, one bean</h3>
            <ol className={`${s.timeline} ${s.timeline3}`}>
              {twins.map((t) => (
                <li key={t.n}>
                  <span>{t.n}</span>
                  <b>{t.t}</b>
                  <p>{t.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Challenge ===== */}
          <section className={s.sec} id="challenge">
            <p className={s.kick}>01 · The challenge</p>
            <h2 className={s.h2}>A powerful model nobody could read</h2>
            <p>The simulation tracks the bean the way a lab would. This is what it returns:</p>
            <ul className={`${s.qChips} ${s.chipsSoft}`}>
              {model.map((m) => (
                <li key={m}>{m}</li>
              ))}
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
                Can someone who isn’t a food chemist decide <em>what to do</em> with a lot of beans, and <em>trust</em> the
                answer?
              </blockquote>
            </div>
          </section>

          {/* ===== Define ===== */}
          <section className={s.sec} id="define">
            <p className={s.kick}>02 · Define</p>
            <h2 className={s.h2}>Three people, one lot of beans</h2>
            <p>
              Design personas built from the stakeholder conversations and the decisions the twin had to support. They are
              working assumptions, and the validation plan below is how I’d test them.
            </p>
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
                    <dt>Needs</dt>
                    <dd>{p.need}</dd>
                  </dl>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>A shared language for quality</h3>
            <p>Before any screen, I fixed the scale everything else would speak: one 0–100 score with named grades.</p>
            <ul className={s.grades}>
              {grades.map((g) => (
                <li key={g.v}>
                  <i style={{ background: g.c }} />
                  <b>{g.v}</b>
                  <span>{g.t}</span>
                  <small>{g.d}</small>
                </li>
              ))}
            </ul>
          </section>

          {/* ===== Principles ===== */}
          <section className={s.sec} id="principles">
            <p className={s.kick}>03 · Principles</p>
            <h2 className={s.h2}>Five rules for a simulation people can use</h2>
            <ol className={s.cards}>
              {principles.map((p, i) => (
                <li key={p.p}>
                  <span>P{i + 1}</span>
                  <b>{p.p}</b>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Features ===== */}
          <section className={s.sec} id="features">
            <p className={s.kick}>04 · The product</p>
            <h2 className={s.h2}>Six ways to ask the twin a question</h2>
            <p>Each one is a working part of the prototype. Watch it run, or switch to the still screen.</p>

            {modes.map((m) => (
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
                <Screen
                  src={`${IMG}/screens/${m.img}.webp`}
                  alt={m.alt}
                  w={2400}
                  h={1500}
                  clip={{ src: `${V}/${m.img}.mp4`, poster: `${V}/${m.img}-poster.webp` }}
                />
              </div>
            ))}
          </section>

          {/* ===== Decisions ===== */}
          <section className={s.sec} id="decisions">
            <p className={s.kick}>05 · Decisions</p>
            <h2 className={s.h2}>Four calls that shaped the twin</h2>
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
              <h3 className={s.h3}>The visual language</h3>
              <p>
                A dark lab console, so charts and the bean itself carry the colour. Green means healthy; amber and red are
                kept for risk and degradation; blue marks humidity and moisture. Every grade also carries its word.
              </p>
              <div className={s.chips}>
                <span className={s.cOk}>✓ Excellent</span>
                <span className={s.cOk}>✓ Low risk</span>
                <span className={s.cMed}>● Moderate</span>
                <span className={s.cHigh}>● High risk</span>
                <span className={s.cCrit}>● Critical</span>
              </div>
            </div>
          </section>

          {/* ===== Validation plan ===== */}
          <section className={s.sec} id="next">
            <p className={s.kick}>06 · Validation plan</p>
            <h2 className={s.h2}>How I’d test it with real analysts</h2>
            <p>
              This is a prototype, and it hasn’t been through a formal usability study yet. These are the questions I’d put
              to it first, each tied to one of the principles.
            </p>
            <ol className={s.cards}>
              {validate.map((v, i) => (
                <li key={v.t}>
                  <span>Q{i + 1}</span>
                  <b>{v.t}</b>
                  <p>{v.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>07 · Outcome</p>
            <h2 className={s.h2}>Three twins and five analysis modes, working end to end</h2>
            <p>
              A working prototype in Figma Make: three connected twins, scenario libraries, A/B comparison, Monte Carlo
              risk, AI prediction and a farm-to-roast pipeline, reviewed with technical and business stakeholders.
            </p>
            <p className={s.fine}>A prototype: there are no production or usability numbers yet, and this page doesn’t invent any. Figures in the screens are model and design data.</p>

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
            <p className={`hand ${s.hand}`}>a number only matters once someone knows what to do with it :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/asu-cfo/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextMaroon}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/asu-cfo/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>Arizona State University · Business and Finance</em>
                <b>Redesigning ASU’s Business and Finance site, so payroll, travel and policy answers are found, not hunted for</b>
                <span>Research with 12 users, a task-first IA and four navigation patterns.</span>
                <i>View case study →</i>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
