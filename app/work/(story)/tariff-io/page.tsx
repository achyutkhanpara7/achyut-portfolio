import Image from 'next/image';
import CaseFacts from '@/components/story/CaseFacts';
import { pageMeta, caseImage } from '@/lib/meta';
import Link from 'next/link';
import { caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import { Clip } from '@/components/story/Screen';
import Tabs from '@/components/story/Tabs';
import Reveal from '@/components/Reveal';
import s from '@/components/story/story.module.css';
import t from './tariff.module.css';

export const metadata = {
  ...pageMeta('/work/tariff-io/', 'TARIFF.IO · Every tariff decision, defensible', 'An agentic AI platform for U.S. import compliance: classify a product, calculate every duty, file the CBP 7501 and audit past entries, with a customs broker in the loop.', caseImage('tariff-io')),
  keywords: caseKeywords('tariff-io'),
};

const IMG = '/work/tariff-io';
const LIVE = 'https://tariffio.worldlink-ai.xyz/';

/* ---------------- content ----------------
   From Achyut's work on TARIFF.IO at WorldLink and the product itself. Screens and clips come from the
   product demo; no outcome figures are claimed here. */

const risks = [
  { k: 'Before filing', t: 'Is the HTS code right?', d: 'A container lands and the 10-digit code on the entry was never verified.' },
  { k: 'Overnight', t: 'A tariff action nobody saw', d: 'A Federal Register notice changes the rate on your top product while everyone is asleep.' },
  { k: 'Months later', t: 'The protest window closes', d: 'An audit finally finds the overpayment, after the window to get it back has passed.' },
];

const chain = [
  { t: 'Wrong HTS code', d: 'An incorrect classification is filed with CBP at entry.' },
  { t: 'Duty underpaid', d: 'What is owed grows past what was declared, quietly.' },
  { t: 'CBP audit', d: 'Customs can look back across five years of entries.' },
  { t: 'Penalties escalate', d: 'From a multiple of the lost duty up to the value of the goods.' },
];

const people = [
  { i: 'TC', t: 'Trade compliance teams', d: 'Own the classification and need a reason they can show an auditor, not just a code.' },
  { i: 'CB', t: 'Customs brokers', d: 'Make the final call on uncertain codes and want the evidence in front of them, not in an email thread.' },
  { i: 'PF', t: 'Procurement and finance', d: 'Need the true landed cost before they commit to a supplier or a country of origin.' },
];

const sources = [
  ['USITC Harmonized Tariff Schedule', 'every heading, rate and note'],
  ['Federal Register', 'tariff actions and notices'],
  ['CBP rulings', 'the customs rulings corpus'],
  ['Commerce AD/CVD cases', 'antidumping and countervailing'],
  ['UFLPA Entity List', 'forced-labor entity screening'],
];

const principles = [
  { t: 'Real tariff logic', d: 'Every answer comes from the official schedule and the rates in force on the entry date, never a guess.' },
  { t: 'Visible reasoning', d: 'The code arrives with its GRI rule, confidence and sources, so anyone can check how it got there.' },
  { t: 'A human in the loop', d: 'When confidence is low, the AI routes the decision to a broker instead of filing it quietly.' },
];

const before = [
  { t: 'Classify', d: '10-digit HTS code with GRI reasoning' },
  { t: 'Calculate', d: 'Every overlay, the true landed cost' },
  { t: 'Export summary', d: 'A pre-filled CBP Form 7501' },
  { t: 'Watchlist', d: 'Monitor the code for rate changes' },
];
const after = [
  { t: 'Upload the 7501', d: 'Every field extracted automatically' },
  { t: 'Run the audit', d: 'Against the rates in force on the entry date' },
  { t: 'Review findings', d: 'Recovery, exposure and fee errors' },
  { t: 'Export or send to broker', d: 'Hand off with one click' },
];

const shipped = [
  { n: '4', d: 'tools: classify, calculate, audit, monitor' },
  { n: '2', d: 'guided workflows, before and after filing' },
  { n: '1', d: 'agent, PORTUS, on top of every module' },
  { n: 'API', d: 'and MCP tools for your systems and agents' },
  { n: '✓', d: 'broker review built into the flow' },
];

const learnings = [
  { t: 'In compliance, the reason is the product', d: 'A code without its reasoning is a liability. Designing the evidence trail mattered as much as designing the answer.' },
  { t: 'Confidence needs a next step', d: 'Showing 76% is not enough. Every confidence level had to lead somewhere: continue, check, or send to a broker.' },
  { t: 'Agents need the same guardrails as people', d: 'PORTUS uses the same tools, rules and review steps as the guided workflow, so the fast path is never the risky path.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'prefile', label: 'Before you file' },
  { id: 'audit', label: 'After you file' },
  { id: 'portus', label: 'PORTUS agent' },
  { id: 'connect', label: 'API & MCP' },
  { id: 'review', label: 'Review & monitor' },
  { id: 'outcome', label: 'Outcome' },
];

function Shot({ src, alt, w = 2400, h = 1180 }: { src: string; alt: string; w?: number; h?: number }) {
  return (
    <figure className={t.shot}>
      <Image src={src} alt={alt} width={w} height={h} sizes="(max-width: 900px) 100vw, 860px" />
    </figure>
  );
}

function Video({ name, label }: { name: string; label: string }) {
  return (
    <div className={t.shot}>
      <Clip src={`${IMG}/clips/${name}.mp4`} poster={`${IMG}/clips/${name}.webp`} label={label} />
    </div>
  );
}

const icon = {
  doc: <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6" />,
  lock: <path d="M6 11h12v10H6zM9 11V8a3 3 0 0 1 6 0v3" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  log: <path d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h4" />,
};
function Ico({ d }: { d: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {d}
    </svg>
  );
}

export default function TariffIO() {
  return (
    <article className={`${s.page} ${s.red} ${t.page}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>TARIFF.IO · WorldLink · Supply chain and trade compliance</p>
        <h1 className={s.h1}>Designing TARIFF.IO, an agentic AI platform that makes every U.S. tariff decision defensible</h1>
        <ul className={s.heroMeta}>
          <li>UX designer & researcher</li>
          <li>Agentic AI</li>
          <li>Web app · API · MCP</li>
          <li>Broker in the loop</li>
        </ul>
        <CaseFacts slug="tariff-io" />
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/screens/landing.webp`}
            alt="The TARIFF.IO home page: Classification you can defend. Duty you can trust. With the engine's four tools around it."
            width={2400}
            height={1500}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="TARIFF.IO" logo="T" meta="Supply chain" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>One platform for every tariff decision</h2>
            <p>
              Every product that crosses into the U.S. needs a 10-digit HTS code, a duty calculation and a customs entry, and
              tariffs now change faster than most teams can track. TARIFF.IO brings it into one place: classify a product,
              calculate every duty that applies, generate the CBP Form 7501 and audit entries already filed, with an AI agent
              that can run the whole path and a broker who signs off when it matters.
            </p>
            <ul className={t.facts}>
              <li>
                <p className={t.label}>My role</p>
                <span>UX Designer & Researcher: research, flows and product design, end to end</span>
              </li>
              <li>
                <p className={t.label}>Built for</p>
                <span>Import and compliance teams shipping into the U.S., and their customs brokers</span>
              </li>
              <li>
                <p className={t.label}>Surfaces</p>
                <span>Web app, PORTUS AI agent, REST API and MCP tools</span>
              </li>
            </ul>
            <div className={t.live}>
              <p>TARIFF.IO is live</p>
              <a href={LIVE} target="_blank" rel="noreferrer">
                Visit TARIFF.IO ↗
              </a>
            </div>
          </section>

          {/* ===== Problem ===== */}
          <section className={s.sec} id="problem">
            <p className={s.kick}>01 · The problem</p>
            <h2 className={s.h2}>One entry. Three risks.</h2>
            <p>
              Trade compliance runs on spreadsheets, broker emails and memory. Any single entry can go wrong in three
              different ways, at three different times.
            </p>
            <ul className={t.risks}>
              {risks.map((r, i) => (
                <Reveal as="li" key={r.t} delay={i * 0.06}>
                  <em>{r.k}</em>
                  <b>{r.t}</b>
                  <p>{r.d}</p>
                </Reveal>
              ))}
            </ul>
            <h3 className={s.h3}>One wrong digit compounds</h3>
            <ol className={t.chain}>
              {chain.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <ul className={t.penalty}>
              <li>
                <b>2×</b>
                <span>the lost duty, for negligence</span>
              </li>
              <li>
                <b>4×</b>
                <span>the lost duty, for gross negligence</span>
              </li>
              <li>
                <b>Full value</b>
                <span>of the goods, for fraud</span>
              </li>
            </ul>
            <p className={s.fine}>Maximum civil penalties for customs violations under 19 U.S.C. § 1592.</p>
            <div className={s.question}>
              <p>The question I designed for</p>
              <blockquote>
                How might a compliance team get a code, a duty and a filing they can <em>defend</em>, in minutes, without
                giving up the human judgment the rules still require?
              </blockquote>
            </div>
          </section>

          {/* ===== Research ===== */}
          <section className={s.sec} id="research">
            <p className={s.kick}>02 · Research</p>
            <h2 className={s.h2}>Three people, one entry, very different worries</h2>
            <p>
              I mapped how a single import moves from a product description to a filed entry, who touches it along the way,
              and where trust breaks. Three groups kept coming up.
            </p>
            <ul className={t.people}>
              {people.map((p) => (
                <li key={p.t}>
                  <i>{p.i}</i>
                  <b>{p.t}</b>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
            <h3 className={s.h3}>Answers have to come from official data</h3>
            <p>A tariff answer is only as good as its source, so the product reads straight from the sources CBP itself uses.</p>
            <ul className={t.sources}>
              {sources.map(([b, d]) => (
                <li key={b}>
                  <Ico d={icon.doc} />
                  <b>{b}</b>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <h3 className={s.h3}>Three principles the research left me with</h3>
            <ul className={t.principles}>
              {principles.map((p, i) => (
                <Reveal as="li" key={p.t} delay={i * 0.06}>
                  <em>0{i + 1}</em>
                  <b>{p.t}</b>
                  <p>{p.d}</p>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* ===== Workflows ===== */}
          <section className={s.sec} id="workflows">
            <p className={s.kick}>03 · Workflows</p>
            <h2 className={s.h2}>Before you file. After you file.</h2>
            <p>
              Instead of a dashboard of disconnected tools, the product splits into two guided workflows that match the two
              moments compliance work actually happens.
            </p>
            <div className={t.flows}>
              {(
                [
                  ['Pre-file entry', 'Before you file', before],
                  ['Post-file audit', 'After you file', after],
                ] as [string, string, { t: string; d: string }[]][]
              ).map(([tag, title, steps]) => (
                <div key={tag} className={t.flow}>
                  <div className={t.flowHead}>
                    <span>{tag}</span>
                    <b>{title}</b>
                  </div>
                  <ol>
                    {steps.map((x, i) => (
                      <li key={x.t}>
                        <i>{i + 1}</i>
                        <div>
                          <b>{x.t}</b>
                          <small>{x.d}</small>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <div className={t.record}>
              <Ico d={icon.log} />
              <p>
                <b>One record per workflow, carried step by step.</b> Each step reads what the step before it produced, so
                nothing is re-keyed.
              </p>
            </div>
          </section>

          {/* ===== Pre-file ===== */}
          <section className={s.sec} id="prefile">
            <p className={s.kick}>04 · Before you file</p>
            <h2 className={s.h2}>From a product description to a filing-ready 7501</h2>
            <p>A step rail on the right always shows where you are, what is done, and what comes next.</p>
            <Tabs
              label="Pre-file steps"
              tabs={[
                {
                  id: 'classify',
                  label: '1 · Classify',
                  panel: (
                    <>
                      <Video name="classify" label="Classification pipeline running, then routing to broker review" />
                      <p className={t.cap}>
                        A six-stage pipeline runs in view. The result shows the <b>recommended HTS code, confidence and GRI
                        rule</b>, and at 76% it is routed to a broker instead of auto-releasing.
                      </p>
                    </>
                  ),
                },
                {
                  id: 'duty',
                  label: '2 · Calculate',
                  panel: (
                    <>
                      <Video name="duty" label="Duty calculation with every overlay" />
                      <p className={t.cap}>
                        Base rate, Section 301, MPF and HMF stack into <b>one landed cost</b>, with every line traceable.
                      </p>
                    </>
                  ),
                },
                {
                  id: '7501',
                  label: '3 · CBP 7501',
                  panel: (
                    <>
                      <Shot src={`${IMG}/screens/form7501.webp`} alt="CBP Form 7501 entry summary generated from the classification and duty steps" w={2400} h={1350} />
                      <p className={t.cap}>
                        The entry summary <b>writes itself</b> from the record: HTS code, origin, entered value, tariffs and
                        fees, ready to file or hand to a broker.
                      </p>
                    </>
                  ),
                },
                {
                  id: 'ready',
                  label: '4 · Watchlist',
                  panel: (
                    <>
                      <Shot src={`${IMG}/screens/export.webp`} alt="Export summary ready to file, with options to send to a broker and add to the watchlist" />
                      <p className={t.cap}>
                        Once the summary is ready, one click adds the code and country to the <b>watchlist</b>, so the next
                        rate change is caught before the next shipment.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </section>

          {/* ===== Audit ===== */}
          <section className={s.sec} id="audit">
            <p className={s.kick}>05 · After you file</p>
            <h2 className={s.h2}>Audit any entry. Find what was over or underpaid.</h2>
            <p>
              Upload a filed 7501 and every field is extracted. The audit checks each line against the rates in force on the
              entry date and lays the findings out by type, so recovery and exposure are clear at a glance.
            </p>
            <Video name="audit" label="Post-file audit results by finding type" />
            <p className={t.cap}>
              Findings are colour-coded <b>compliant, mismatch or error</b>, each with the declared value, the correct value
              and the difference, and an export or broker hand-off at the end.
            </p>
          </section>

          {/* ===== PORTUS ===== */}
          <section className={s.sec} id="portus">
            <p className={s.kick}>06 · PORTUS agent</p>
            <h2 className={s.h2}>PORTUS: it plans, it acts</h2>
            <p>
              PORTUS is an agent that sits on top of every module. Give it a goal in plain English and it plans the steps,
              calls the same tools as the guided workflow, and stops for review where the workflow would.
            </p>
            <div className={t.agent}>
              <div className={t.goal}>
                <em>Goal</em>
                <q>Import 200 kitchen knives from China, and get them ready to file.</q>
              </div>
              <div className={t.step}>
                <b>Plan</b>
                <small>Works out the steps</small>
              </div>
              <span className={t.arrow} aria-hidden>
                →
              </span>
              <div className={t.step}>
                <b>Use tools</b>
                <small>Classify, calculate, audit</small>
              </div>
              <span className={t.arrow} aria-hidden>
                →
              </span>
              <div className={`${t.step} ${t.stepHuman}`}>
                <b>Broker review</b>
                <small>A person signs off when confidence is low</small>
              </div>
              <span className={t.arrow} aria-hidden>
                →
              </span>
              <div className={t.step}>
                <b>CBP 7501</b>
                <small>Ready to file</small>
              </div>
            </div>
            <Video name="portus" label="PORTUS classifying a product and preparing the entry in chat" />
            <p className={t.cap}>
              The agent shows its work in the chat: the code, confidence tier, GRI rule and session ID, with buttons to
              <b> calculate duty</b> or <b>send to broker review</b> right there.
            </p>
          </section>

          {/* ===== Connect ===== */}
          <section className={s.sec} id="connect">
            <p className={s.kick}>07 · API &amp; MCP</p>
            <h2 className={s.h2}>Bulk in, answers back. Your agents, our tools.</h2>
            <p>The same engine is open to the systems and AI agents a company already runs.</p>
            <div className={t.connect}>
              <div>
                <h3>REST API · your systems</h3>
                <p>Send whole files from ERP and logistics systems; get structured answers back.</p>
                <div className={t.pipe}>
                  <ul>
                    <li>Bills of materials</li>
                    <li>Commercial invoices</li>
                    <li>Packing lists</li>
                    <li>Product master</li>
                  </ul>
                  <span className={t.engine}>TARIFF.IO engine</span>
                  <ul className={t.tools}>
                    <li>classify</li>
                    <li>calculate</li>
                    <li>audit</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3>MCP server · your AI agents</h3>
                <p>Approved agents call the tools; every call is authenticated and logged.</p>
                <div className={t.pipe}>
                  <ul>
                    <li>Procurement agent</li>
                    <li>Compliance copilot</li>
                    <li>Finance assistant</li>
                  </ul>
                  <span className={t.engine}>MCP tools</span>
                  <ul className={t.tools}>
                    <li>classify()</li>
                    <li>calculate()</li>
                    <li>audit()</li>
                    <li>monitor()</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Review & monitor ===== */}
          <section className={s.sec} id="review">
            <p className={s.kick}>08 · Review &amp; monitor</p>
            <h2 className={s.h2}>AI does the heavy lifting. A broker makes the call.</h2>
            <p>
              Low-confidence classifications land in a broker queue with everything needed to decide. After filing, the
              watchlist keeps every code in view.
            </p>
            <Tabs
              label="Review and monitor"
              tabs={[
                {
                  id: 'broker',
                  label: 'Broker review',
                  panel: (
                    <>
                      <Video name="broker" label="Broker review queue with candidate codes and evidence" />
                      <p className={t.cap}>
                        A queue with status counts up top; each item opens to the <b>candidate codes, scores and reasoning</b>
                        , with approve or override in one place.
                      </p>
                    </>
                  ),
                },
                {
                  id: 'watch',
                  label: 'Watchlist',
                  panel: (
                    <>
                      <Video name="watch" label="Watchlist: rate monitor, country compare and news feed" />
                      <p className={t.cap}>
                        <b>Rate monitor, country compare and a news feed</b> of Federal Register actions, filtered to the
                        codes you care about.
                      </p>
                    </>
                  ),
                },
              ]}
            />
            <h3 className={s.h3}>Enterprise-ready from day one</h3>
            <ul className={t.trust}>
              <li>
                <Ico d={icon.shield} />
                <div>
                  <b>Tenant isolation</b>
                  <small>Each customer’s data walled off</small>
                </div>
              </li>
              <li>
                <Ico d={icon.lock} />
                <div>
                  <b>Row-level security</b>
                  <small>Enforced in the database</small>
                </div>
              </li>
              <li>
                <Ico d={icon.log} />
                <div>
                  <b>Immutable audit log</b>
                  <small>Every calculation and decision recorded</small>
                </div>
              </li>
            </ul>
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>09 · Outcome</p>
            <h2 className={s.h2}>Every tariff decision, defensible</h2>
            <p>
              TARIFF.IO is live: one connected platform where a product description becomes a code, a duty, a filing and an
              audit trail, with reasoning you can show and a person who can sign off.
            </p>
            <ul className={t.shipped}>
              {shipped.map((x) => (
                <li key={x.d}>
                  <b>{x.n}</b>
                  <span>{x.d}</span>
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
            <p className={`hand ${s.hand}`}>show your work, even at the border :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/geo-sentiments/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextIndigo}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/geo-sentiments/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>Global biopharma · Generative engine optimisation</em>
                <b>Designing how a pharma brand sees, and changes, what AI says about its medicines</b>
                <span>Four AI models, one connected loop and Medical Affairs in it.</span>
                <i>View case study →</i>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
