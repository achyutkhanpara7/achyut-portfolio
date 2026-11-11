import Image from 'next/image';
import Link from 'next/link';
import { caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen from '@/components/story/Screen';
import s from '@/components/story/story.module.css';

export const metadata = {
  keywords: caseKeywords('gtn-twin'),
  title: 'GTN Contracting Twin · A flight simulator for pharma contracts',
  description:
    'A gross-to-net simulation studio for a global biopharma company: change contract terms, watch every deduction move, and check the model against filed results before a deal is signed.',
  robots: { index: false, follow: false },
};

const IMG = '/work/gtn-twin';
const V = `${IMG}/video`;

/* ---------------- content ----------------
   From the working prototype (Figma Make, published as a light-theme site). Figures in the screens
   are the prototype's own sample data. No research numbers or business results are claimed. */

const owned = [
  { t: 'Concept & structure', d: 'The flight-simulator idea, the three-column studio and how a scenario moves from assumption to decision.' },
  { t: 'Interaction design', d: 'Progressive controls, the playback timeline, the waterfall reveal and comparison mode.' },
  { t: 'Data visualisation', d: 'The gross-to-net waterfall, layer leakage and the model-versus-actuals check.' },
  { t: 'Prototype', d: 'A working prototype in Figma Make that stakeholders could drive themselves.' },
];

const deductions = [
  { t: 'Returns', d: 'Product sent back and the reserve held against it.' },
  { t: 'Chargebacks', d: 'Wholesalers claiming back the gap between list price and a contracted price.' },
  { t: 'Rebates', d: 'Payments to payers and plans for formulary position, usually the largest layer.' },
  { t: 'Government & fees', d: 'Statutory discounts and programmes such as Medicaid and 340B, plus distribution and service fees.' },
];

const problems = [
  { t: 'Buried in spreadsheets', d: 'Gross-to-net lived in analyst workbooks. Decision makers saw the answer, never the mechanics behind it.' },
  { t: 'Levers that interact', d: 'Formulary tier, channel mix and payer mix each move several deductions at once, so intuition about one change is often wrong.' },
  { t: 'Hard to trust', d: 'A forecast is only useful if people believe it, and nothing showed how well the model had predicted past years.' },
  { t: 'Compared from memory', d: 'Weighing one deal against another meant flipping between files and remembering numbers.' },
];

const flow = [
  { e: 'Assume', t: 'Set the inputs', d: 'List price, volume, and the contract terms on the table.' },
  { e: 'Configure', t: 'Shape the deal', d: 'Formulary tier, channel mix, payer mix and risk parameters.' },
  { e: 'Review', t: 'Watch it play', d: 'Gross walks down to net, deduction by deduction.' },
  { e: 'Decide', t: 'Check and compare', d: 'Against actuals, and against the baseline scenario.' },
];

const studio = [
  { t: 'Controls on the left', d: 'Everything you can change, grouped and collapsed, with an impact preview that updates as you go.' },
  { t: 'The instrument in the middle', d: 'One capsule: gross sales on top, net revenue below, and the waterfall behind it.' },
  { t: 'Trust on the right', d: 'How well the model matched filed results, by year, before you rely on what it says.' },
  { t: 'The verdict on top', d: 'Gross, deductions, net and net-to-gross, always visible, whatever you’re adjusting.' },
];

const controls = [
  { t: 'Progressive disclosure', d: 'Five groups, primary controls open and the rest collapsed, so the first screen isn’t a wall of sliders.' },
  { t: 'Impact labels', d: 'Each control is tagged with how strongly it tends to move the result, so people start with the levers that matter.' },
  { t: 'Mixes that add up', d: 'Channel and payer mixes are shown as shares of a whole, so the split always reads as one decision, not three numbers.' },
  { t: 'A safe way back', d: 'Save as baseline before experimenting, and reset to it in one click.' },
];

const learnings = [
  { t: 'A metaphor can carry a whole product', d: 'Calling it a flight simulator gave everyone the same picture: controls, instruments, a playback, and a check that the instruments are right.' },
  { t: 'Show the path, not just the answer', d: 'A net number on its own invites argument. Watching gross walk down to net, layer by layer, explains it.' },
  { t: 'Earn trust before asking for it', d: 'Putting the model-versus-actuals check beside the forecast made the forecast worth discussing.' },
];

const next = [
  { t: 'Side-by-side deals', d: 'Comparison today is predicted against backtested. The next step is two or more contract scenarios against each other.' },
  { t: 'Explain the variance', d: 'Key insights list what drove the gap from actuals; linking each one to the control that caused it would close the loop.' },
  { t: 'Test with the contracting team', d: 'Watch analysts and decision makers run a real negotiation through it, and see which controls they reach for first.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'approach', label: 'Approach' },
  { id: 'studio', label: 'The studio' },
  { id: 'controls', label: 'Flight controls' },
  { id: 'playback', label: 'Playback' },
  { id: 'waterfall', label: 'Waterfall' },
  { id: 'truth', label: 'Truth check' },
  { id: 'compare', label: 'Comparison' },
  { id: 'outcome', label: 'Outcome' },
];

export default function GtnTwin() {
  return (
    <article className={`${s.page} ${s.navy}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>GTN Contracting Twin · Global biopharma · Market access</p>
        <h1 className={s.h1}>Designing a flight simulator for pharma contracts, so a deal’s net revenue is clear before it’s signed</h1>
        <ul className={s.heroMeta}>
          <li>UX / Product designer</li>
          <li>Gross-to-net simulation</li>
          <li>Backtested against filed results</li>
          <li>Figma Make prototype</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/screens/studio.webp`}
            alt="The Contracting Twin simulation studio: gross sales, total deductions, net sales and net-to-gross on top, flight controls on the left, the revenue capsule in the middle and the truth check on the right"
            width={2400}
            height={1500}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="Contracting Twin" logo="C" meta="Biopharma" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>The list price of a medicine isn’t what the company keeps</h2>
            <p>
              Between gross sales and net revenue sit returns, chargebacks, rebates, government programmes and fees. In
              pharma that gap, gross-to-net, is decided largely by contracts: which formulary tier a plan gives, how the
              product moves through channels, which payers cover it. The Contracting Twin is a simulation studio that lets a
              contracting team change those terms and see what reaches net revenue, before anything is signed.
            </p>
            <div className={s.tldr}>
              <div>
                <em>Why it was done</em>
                <p>Contract decisions moved millions in deductions, but the effect was locked in spreadsheets few people could read.</p>
              </div>
              <div>
                <em>What I did</em>
                <ul>
                  <li>Shaped the studio around a flight-simulator metaphor</li>
                  <li>Designed the controls, waterfall, truth check and comparison, and prototyped it in Figma Make</li>
                </ul>
              </div>
              <div>
                <em>What I learned</em>
                <p>People trust a forecast when they can see both how it’s built and how right it has been.</p>
              </div>
            </div>

            <h3 className={s.h3}>The layers between gross and net</h3>
            <ol className={s.cards}>
              {deductions.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>

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
            <h2 className={s.h2}>Big decisions, made on numbers nobody in the room could see move</h2>
            <p>A contracting decision is a negotiation, and the people at the table needed answers in the room, not after a model run.</p>
            <ol className={s.cards}>
              {problems.map((c, i) => (
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
                How might a contracting team <em>feel</em> what a change in terms does to net revenue, and trust the answer
                enough to act on it?
              </blockquote>
            </div>
          </section>

          {/* ===== Approach ===== */}
          <section className={s.sec} id="approach">
            <p className={s.kick}>02 · Approach</p>
            <h2 className={s.h2}>Treat it like a flight simulator</h2>
            <p>
              Pilots practise in a simulator because it’s safe to try things there. That became the idea: a place to fly a
              deal before committing to it. The flow follows the way a scenario is actually built.
            </p>
            <ol className={`${s.loop} ${s.loopDark}`}>
              {flow.map((l, i) => [
                i > 0 && (
                  <li key={`a${i}`} className={s.stepArrow} aria-hidden>
                    →
                  </li>
                ),
                <li key={l.e}>
                  <em>{l.e}</em>
                  <b>{l.t}</b>
                  <p>{l.d}</p>
                </li>,
              ])}
            </ol>
            <div className={s.band}>
              <h3 className={s.h3}>Two rules I held to</h3>
              <p>
                The result is always on screen, so no change happens out of sight. And complexity is opened on purpose,
                never shown all at once: the studio starts with the two inputs that matter most and lets people go deeper as
                they need to.
              </p>
            </div>
          </section>

          {/* ===== Studio ===== */}
          <section className={s.sec} id="studio">
            <p className={s.kick}>03 · The studio</p>
            <h2 className={s.h2}>One screen, read left to right: what you change, what happens, whether to believe it</h2>
            <Screen
              src={`${IMG}/screens/studio.webp`}
              alt="The studio: headline figures across the top, a playback timeline, flight controls on the left, the gross-and-net capsule in the middle and the truth check on the right"
              w={2400}
              h={1500}
            />
            <ol className={s.cards}>
              {studio.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Controls ===== */}
          <section className={s.sec} id="controls">
            <p className={s.kick}>04 · Flight controls</p>
            <h2 className={s.h2}>Every lever in the deal, opened only when it’s needed</h2>
            <p>
              List price and volume first. Then contract terms such as formulary tier, the channel mix across retail, mail and
              specialty, the payer mix across commercial, Medicare and Medicaid, and the risk parameters. Change any of them
              and the headline figures move with it.
            </p>
            <Screen
              src={`${IMG}/screens/controls.webp`}
              alt="Flight controls with primary controls and the channel mix open, retail, mail and specialty shares, and the annual view"
              w={2400}
              h={1500}
              clip={{ src: `${V}/controls.mp4`, poster: `${V}/controls-poster.webp` }}
            />
            <ol className={s.cards}>
              {controls.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <h3 className={s.h3}>Mixes, months and years</h3>
            <p>
              Shifting volume between channels or payers changes which deductions apply. The same scenario can be read month
              by month or as an annual projection.
            </p>
            <Screen
              src={`${IMG}/screens/controls.webp`}
              alt="Channel and payer mix controls with the annual projection"
              w={2400}
              h={1500}
              clip={{ src: `${V}/mix.mp4`, poster: `${V}/mix-poster.webp` }}
            />
          </section>

          {/* ===== Playback ===== */}
          <section className={s.sec} id="playback">
            <p className={s.kick}>05 · Playback</p>
            <h2 className={s.h2}>Press play and watch gross sales walk down to net</h2>
            <p>
              The timeline steps through each layer, gross, returns, chargebacks, rebates, government, other, while the
              headline figures update at every stop. It plays at 2×, 5× or 10×, and can be paused on any layer. It turns a
              finance table into something a room can watch together.
            </p>
            <Screen
              src={`${IMG}/screens/playback.webp`}
              alt="Playback paused on returns, with the timeline part-filled and the headline figures reflecting deductions so far"
              w={2400}
              h={1500}
              clip={{ src: `${V}/playback.mp4`, poster: `${V}/playback-poster.webp` }}
            />
          </section>

          {/* ===== Waterfall ===== */}
          <section className={s.sec} id="waterfall">
            <p className={s.kick}>06 · Waterfall</p>
            <h2 className={s.h2}>The capsule opens into the waterfall behind the number</h2>
            <p>
              At rest, the capsule shows just two numbers: gross sales and the net revenue that remains, with the share
              retained. Tap it and it becomes the full waterfall, each layer with what it took and what was left, so nobody
              has to ask where the money went.
            </p>
            <Screen
              src={`${IMG}/screens/waterfall.webp`}
              alt="The revenue waterfall: gross sales, then discounts, chargebacks, rebates, government and fees and others, each with the amount left and the retention percentage"
              w={2400}
              h={1500}
              clip={{ src: `${V}/waterfall.mp4`, poster: `${V}/waterfall-poster.webp` }}
            />
          </section>

          {/* ===== Truth check ===== */}
          <section className={s.sec} id="truth">
            <p className={s.kick}>07 · Truth check</p>
            <h2 className={s.h2}>Before trusting the forecast, see how right the model has been</h2>
            <p>
              The truth check runs the model against past years and compares it with the results the company actually filed.
              It says plainly whether the variance is within tolerance, shows predicted against actual, breaks deductions into
              layer leakage as a share of gross, and lists the drivers of the variance.
            </p>
            <Screen
              src={`${IMG}/screens/truth.webp`}
              alt="Truth check: within tolerance against a ±5% threshold, the variance between actual and predicted, the financial comparison, layer leakage, and key insights listing the variance drivers"
              w={2400}
              h={1500}
              clip={{ src: `${V}/truth.mp4`, poster: `${V}/truth-poster.webp` }}
            />
          </section>

          {/* ===== Comparison ===== */}
          <section className={s.sec} id="compare">
            <p className={s.kick}>08 · Comparison</p>
            <h2 className={s.h2}>Predicted next to backtested, with the difference called out</h2>
            <p>
              Comparison mode puts the forecast beside the same model run on history: gross, deductions and net for each,
              the change from one to the other, and the delta in the middle where the eye lands.
            </p>
            <Screen
              src={`${IMG}/screens/compare.webp`}
              alt="Comparison mode: predicted future and backtested historical gross sales, total deductions and net sales side by side, with the delta between them"
              w={2400}
              h={1500}
              clip={{ src: `${V}/compare.mp4`, poster: `${V}/compare-poster.webp` }}
            />
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>09 · Outcome</p>
            <h2 className={s.h2}>A deal you can fly before you sign it</h2>
            <ul className={`${s.glance} ${s.glance3}`}>
              <li>
                <span>Visible</span>
                <p className={s.glanceNum}>
                  <b>1 view</b>
                </p>
                <small>from list price to net revenue, with every deduction in between</small>
              </li>
              <li>
                <span>Explained</span>
                <p className={s.glanceNum}>
                  <b>6 layers</b>
                </p>
                <small>played back one at a time, so the result is understood, not just reported</small>
              </li>
              <li>
                <span>Checked</span>
                <p className={s.glanceNum}>
                  <b>±5%</b>
                </p>
                <small>tolerance the model is held to against filed results, shown beside the forecast</small>
              </li>
            </ul>
            <p className={s.fine}>Figures in the screens are the prototype’s sample data.</p>

            <h3 className={s.h3}>What’s next</h3>
            <ol className={s.cards}>
              {next.map((a, i) => (
                <li key={a.t}>
                  <span>0{i + 1}</span>
                  <b>{a.t}</b>
                  <p>{a.d}</p>
                </li>
              ))}
            </ol>

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
            <p className={`hand ${s.hand}`}>finance gets easier when you can watch it happen :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/coffee-bean-twin/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextCoffee}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/coffee-bean-twin/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>WorldLink Labs · Digital twin</em>
                <b>Designing a digital twin that shows how coffee loses quality, from farm to roast</b>
                <span>Three connected twins and five ways to ask them a question.</span>
                <i>View case study →</i>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
