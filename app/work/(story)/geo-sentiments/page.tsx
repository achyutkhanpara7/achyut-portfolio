import Image from 'next/image';
import { pageMeta, caseImage } from '@/lib/meta';
import Link from 'next/link';
import { caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Screen from '@/components/story/Screen';
import s from '@/components/story/story.module.css';

export const metadata = {
  ...pageMeta('/work/geo-sentiments/', 'GEO Sentimates · What AI says about your medicines', 'A generative engine optimisation platform for a global biopharma company: see how AI models describe its medicines, trace the sources they trust, fix gaps with Medical Affairs in the loop, and prove the fix worked.', caseImage('geo-sentiments')),
  keywords: caseKeywords('geo-sentiments'),
  robots: { index: false, follow: false },
};

const IMG = '/work/geo-sentiments';
const V = `${IMG}/video`;

/* ---------------- content ----------------
   From the working prototype (Figma Make, React) and its product notes. Brand and drug names in
   the screens are replaced with invented ones so the client stays private. No research numbers
   or business results are claimed: the figures on screen are the prototype's own seeded data. */

const owned = [
  { t: 'Product structure', d: 'The end-to-end loop, the information architecture and every hand-off between screens.' },
  { t: 'Flows & interaction', d: 'Triage, approval, runs, interventions and the provenance slide-over.' },
  { t: 'Data visualisation', d: 'Share of Model, rank, citations and the before-and-after verdicts, statistics included.' },
  { t: 'Prototype & handoff', d: 'A working prototype in Figma Make, with the product notes engineering built from.' },
];

const problems = [
  { t: 'Invisible', d: 'Patients and clinicians ask ChatGPT, Gemini, Claude and Perplexity about medicines. The brand team couldn’t see what the models answered.' },
  { t: 'Untraceable', d: 'When a model got something wrong or left the brand out, nobody could say which websites it had learned it from.' },
  { t: 'Unprovable', d: 'After content was changed, there was no way to tell a real improvement from the models simply answering differently that day.' },
  { t: 'Regulated', d: 'In pharma, nothing can be asked or published without Medical Affairs. A tool that skipped that step couldn’t be used at all.' },
];

const findings = [
  { t: 'One ten-thousand-pixel scroll', d: 'Social Listening split its query across three blocks, stacked nine unordered charts, stranded an alert banner mid-page and ended in sixty raw posts.' },
  { t: 'Two screens nobody could tell apart', d: 'Both question screens opened on their own private row of four numbers, so nobody could say what either table was for.' },
  { t: 'A shortcut around the table', d: 'Finding new questions sent them straight to Medical Affairs, which bypassed the review table and left it looking like decoration.' },
  { t: 'Numbers and charts that misled', d: 'A hard-coded “9 questions received today” sat beside live figures, an unscaled axis could print 30,000%, a donut hid a ranking, and red meant everything at once.' },
];

const loop = [
  { e: 'Detect', t: 'Run the questions', d: 'Every approved question goes to a council of four AI models, several times each, and the answers are scored for brand presence, rank and claims.' },
  { e: 'Trace', t: 'Follow the citations', d: 'The exact websites each model drew on, classified by who owns them and how much they are trusted.' },
  { e: 'Fix', t: 'Ship an intervention', d: 'A targeted content change, such as a structured Q&A on the brand site, re-indexing, or an updated registry entry.' },
  { e: 'Measure', t: 'Prove it, or don’t', d: 'The same questions run again after the content is re-crawled, and a statistical test decides whether the answers really moved.' },
];

const social = [
  { t: 'One control surface', d: 'The saved query, view presets and every filter live in one sticky bar that drives the whole page. Active filters are always listed, never silent.' },
  { t: 'Five tabs, five jobs', d: 'Overview for what is happening, Mentions as the work queue, Themes and Voices to drill in, and Alerts as the triage list that used to be a banner.' },
  { t: 'Every number ties', d: 'Figures, charts and table are computed from the same filtered set, so they can’t disagree. Period comparisons are hidden once a filter makes them unfair.' },
  { t: 'Compliance is visible', d: 'Adverse events, product complaints, off-label talk and misinformation tint the row and open on the triage actions, not the post.' },
];

const questionRules = [
  { t: 'Discovery is intake, not submission', d: 'Finding new questions only adds them to the review queue, marked new and pre-selected. Nothing reaches Medical Affairs by accident.' },
  { t: 'One door out', d: 'Submitting works the same way per row, from the detail drawer or in bulk. All three run the same action.' },
  { t: 'A dismissal isn’t a rejection', d: 'A candidate the team throws out never appears in the bank wearing a rejection Medical Affairs never made.' },
  { t: 'Bulk actions say what they’ll touch', d: '“Approve 3”, “Archive 12”: each action counts only the rows it applies to, so nothing is approved out of turn.' },
];

const tests = [
  { v: 'Share of Model', t: 'Two-proportion Z-test, one-sided', h: 'Post ≤ pre', th: 'p < 0.05 · Z > 1.645' },
  { v: 'Rank of the brand', t: 'Wilcoxon signed-rank', h: 'MRR post ≤ pre', th: 'p < 0.05' },
  { v: 'Which sources are cited', t: 'Pearson chi-square', h: 'No change in source mix', th: 'p < 0.05' },
];

const facts = [
  { n: '11', t: 'connected screens in one loop' },
  { n: '4', t: 'AI models answering every question' },
  { n: '10', t: 'social channels listened to' },
  { n: '3', t: 'statistical tests behind every verdict' },
];

const next = [
  { t: 'An overview for leadership', d: 'Insights & Trends is still a placeholder: the themes, movers and narrative shifts across the whole portfolio.' },
  { t: 'Brand setup and reporting', d: 'Configuring a brand and exporting results were kept out of this build on purpose, so the core loop could be proven first.' },
  { t: 'Validate with the real teams', d: 'Put the loop in front of brand strategy and Medical Affairs with their own questions, and watch where the hand-offs slow down.' },
];

const learnings = [
  { t: 'Design the loop, not the screens', d: 'The value was in what happens between screens: a theme becomes a question, a question becomes a run, a run becomes a fix. Every hand-off carries its context.' },
  { t: 'Let the statistics decide the colour', d: 'A change stays grey until it’s significant. A green arrow on noise would have been the most persuasive lie on the page.' },
  { t: 'Build compliance into the flow', d: 'Medical Affairs isn’t a step to route around. Making their gate the only door out made the tool usable in a regulated company.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'findings', label: 'What I found' },
  { id: 'loop', label: 'The loop' },
  { id: 'listen', label: 'Listen' },
  { id: 'questions', label: 'Questions' },
  { id: 'run', label: 'Run & diagnose' },
  { id: 'sources', label: 'Sources' },
  { id: 'prove', label: 'Fix & prove' },
  { id: 'outcome', label: 'Outcome' },
];

export default function GeoSentiments() {
  return (
    <article className={`${s.page} ${s.indigo}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>GEO Sentimates · Global biopharma · Neuroscience</p>
        <h1 className={s.h1}>Designing how a pharma brand sees, and changes, what AI says about its medicines</h1>
        <ul className={s.heroMeta}>
          <li>Lead UX designer</li>
          <li>11 connected screens</li>
          <li>4 AI models compared</li>
          <li>Medical Affairs in the loop</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/screens/activation.webp`}
            alt="Activation & Impact: interventions live, validated wins, those still awaiting their window, and the net change in Share of Model"
            width={2400}
            height={1500}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="GEO Sentimates" logo="G" meta="Biopharma" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>Search is turning into answers. This shows a pharma brand what those answers say.</h2>
            <p>
              People increasingly ask AI chatbots about medicines instead of searching. GEO Sentimates, a
              generative engine optimisation (GEO) platform, is what I designed for a global biopharma company’s brand team. It
              asks the AI models the questions patients and clinicians really ask, shows how each brand comes up and which
              sources the models trust, and closes the loop: fix a gap, then prove the fix worked.
            </p>
            <div className={s.tldr}>
              <div>
                <em>Why it mattered</em>
                <p>The brand team couldn’t see what AI said about their medicines, where it came from, or whether anything they changed made a difference.</p>
              </div>
              <div>
                <em>What I did</em>
                <ul>
                  <li>Reworked a first build into one connected loop, from listening to proof</li>
                  <li>Designed eleven screens and a working prototype in Figma Make</li>
                </ul>
              </div>
              <div>
                <em>What I learned</em>
                <p>In a regulated product, the approval step and the statistics are the design, not obstacles to it.</p>
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
            <h2 className={s.h2}>A new place where patients learn about medicines, and nobody watching it</h2>
            <p>
              When a patient asks an AI model which migraine treatment to try, the answer may name a brand, rank it, leave it
              out, or repeat something outdated. For the brand team that was a blind spot with four sides.
            </p>
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
                How might a brand team see what AI says about its medicines, <em>change it responsibly</em>, and prove the
                change worked?
              </blockquote>
            </div>
          </section>

          {/* ===== Findings ===== */}
          <section className={s.sec} id="findings">
            <p className={s.kick}>02 · What I found</p>
            <h2 className={s.h2}>A first build with the right parts and the wrong connections</h2>
            <p>
              The platform began as a fork of an earlier AI brand-intelligence tool, so it already had screens for most of the
              jobs. Walking through it end to end, the problems were less about any one screen and more about how they failed
              to connect.
            </p>
            <ol className={s.cards}>
              {findings.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <div className={s.band}>
              <h3 className={s.h3}>The principle that came out of it</h3>
              <p>
                Every screen should hand its work to the next one, and every number should come from the same source. If a
                figure on one screen can disagree with a figure on another, people stop trusting both.
              </p>
            </div>
          </section>

          {/* ===== The loop ===== */}
          <section className={s.sec} id="loop">
            <p className={s.kick}>03 · The loop</p>
            <h2 className={s.h2}>Detect, trace, fix, measure: one cycle the whole product follows</h2>
            <p>
              I organised the product around a single four-step cycle, named the way the measurement specification names
              it, so the screens and the documents read the same.
            </p>
            <ol className={`${s.loop} ${s.loopDark}`}>
              {loop.map((l, i) => [
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

            <h3 className={s.h3}>And the path a question takes to get there</h3>
            <p>Questions don’t come from a text box. They come from real conversations, and they pass Medical Affairs before any model sees them.</p>
            <ol className={s.pipeline}>
              <li>
                <span>
                  Social Listening<small>themes from patients and clinicians</small>
                </span>
              </li>
              <li className={s.pipeArrow} aria-hidden>
                →
              </li>
              <li>
                <span>
                  Discover<small>the team triages candidates</small>
                </span>
              </li>
              <li className={s.pipeArrow} aria-hidden>
                →
              </li>
              <li className={s.gate}>
                <span>
                  Question Bank<small>Medical Affairs approves</small>
                </span>
              </li>
              <li className={s.pipeArrow} aria-hidden>
                →
              </li>
              <li>
                <span>
                  Run<small>four models answer</small>
                </span>
              </li>
              <li className={s.pipeArrow} aria-hidden>
                →
              </li>
              <li>
                <span>
                  Interventions<small>fix what’s missing</small>
                </span>
              </li>
              <li className={s.pipeArrow} aria-hidden>
                →
              </li>
              <li>
                <span>
                  Activation & Impact<small>did it work?</small>
                </span>
              </li>
            </ol>
            <p className={s.fine}>
              Data really flows in the prototype: promote a theme and it appears in Discover; approve it and the next run
              includes it; ship an intervention and a new run produces a real before-and-after.
            </p>
          </section>

          {/* ===== Listen ===== */}
          <section className={s.sec} id="listen">
            <p className={s.kick}>04 · Listen</p>
            <h2 className={s.h2}>Social Listening: from one endless scroll to five focused tabs</h2>
            <p>
              Patient, clinician and media conversation across ten channels, scored, themed and triaged. Each theme carries the
              question it’s really about, and one action sends it into question discovery.
            </p>
            <Screen
              src={`${IMG}/screens/social.webp`}
              alt="Social Listening: a sticky query and filter bar, figures for mentions, reach, net sentiment, negative posts and posts needing triage, and the volume over time"
              w={2400}
              h={1500}
              clip={{ src: `${V}/social.mp4`, poster: `${V}/social-poster.webp` }}
            />
            <ol className={s.cards}>
              {social.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <p className={s.fine}>
              Small things that keep it honest: the window is 28 days so weekly buckets divide evenly, and an author with a
              single post shows a sentiment label instead of a score of ±100 that measures nothing.
            </p>
          </section>

          {/* ===== Questions ===== */}
          <section className={s.sec} id="questions">
            <p className={s.kick}>05 · Questions</p>
            <h2 className={s.h2}>Two screens that became one pipeline, with Medical Affairs as the only door</h2>
            <p>
              Discover Questions is where the team triages candidates. The Question Bank is where Medical Affairs decides. Both
              now open on the same four-stage rail, discovered, in review, approved, in runs, with the stage you’re on
              highlighted and every stage clickable.
            </p>
            <Screen
              src={`${IMG}/screens/discover.webp`}
              alt="Discover Questions: the four-stage pipeline rail and the review queue with persona, brand, domain, risk and a Submit or Dismiss decision per row"
              w={2400}
              h={1500}
              clip={{ src: `${V}/discover.mp4`, poster: `${V}/discover-poster.webp` }}
            />
            <ol className={s.cards}>
              {questionRules.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <h3 className={s.h3}>The bank is named for what’s in it</h3>
            <p>
              It holds pending, approved and rejected questions, so it’s the Question Bank, not “Approved Questions”. Its
              filters say what they decide, Pending, Approved, Rejected, All, each with a count, and submitting lands you here
              already filtered to what you just sent.
            </p>
            <Screen
              src={`${IMG}/screens/bank.webp`}
              alt="Question Bank: the same pipeline rail with In review highlighted, a strip of questions waiting on Medical Affairs, and Approve or Reject on each pending row"
              w={2400}
              h={1500}
              clip={{ src: `${V}/bank.mp4`, poster: `${V}/bank-poster.webp` }}
            />
          </section>

          {/* ===== Run & diagnose ===== */}
          <section className={s.sec} id="run">
            <p className={s.kick}>06 · Run & diagnose</p>
            <h2 className={s.h2}>Ask four models, many times, and read the answers question by question</h2>
            <p>
              The GEO Sentinel Bot runs the whole approved bank against a council of models. More iterations per question
              narrow the uncertainty, at a cost, so the screen says exactly how many answers a run will produce before it
              starts. Runs are reproducible, and a run freezes the interventions live when it began.
            </p>
            <Screen
              src={`${IMG}/screens/bot.webp`}
              alt="GEO Sentinel Bot: approved questions, models selected, answers this run and answers stored, then the run configuration with models, iterations per prompt and temperature"
              w={2400}
              h={1500}
              clip={{ src: `${V}/run.mp4`, poster: `${V}/run-poster.webp` }}
            />
            <h3 className={s.h3}>GEO Sentinel: the cycle, for one question</h3>
            <p>
              Pick any approved question and the four steps play out for it: how often the brand appeared and where it
              ranked, which domains the models cited, the targeted fix with a trigger to ship it, and the measured change, or
              an honest “nothing measured yet”. Typing searches the bank instead of answering free text, because a question
              outside the bank has no run behind it.
            </p>
            <Screen
              src={`${IMG}/screens/sentinel.webp`}
              alt="GEO Sentinel: the approved question bank grouped by brand on the left, and the four-step cycle for the selected question"
              w={2400}
              h={1500}
              clip={{ src: `${V}/sentinel.mp4`, poster: `${V}/sentinel-poster.webp` }}
            />
            <h3 className={s.h3}>Every captured answer, reviewable</h3>
            <p>What each model said, where the brand landed, how the models agreed, and which answers raised an intervention.</p>
            <Screen
              src={`${IMG}/screens/review.webp`}
              alt="AI Response Review: responses reviewed, model answers, average sentiment and interventions raised, then a table of captured responses"
              w={2400}
              h={1500}
            />
          </section>

          {/* ===== Sources ===== */}
          <section className={s.sec} id="sources">
            <p className={s.kick}>07 · Sources</p>
            <h2 className={s.h2}>Which websites the models trust, and where any claim came from</h2>
            <p>
              Source Authority classifies every citation by publisher type and ownership, and shows where the biggest
              opportunity is: a trusted domain the models cite often that mentions the brand weakly. Competitor-controlled
              pages are called out on their own.
            </p>
            <Screen
              src={`${IMG}/screens/source.webp`}
              alt="Source Authority: classified citations, trusted source share, citation coverage and competitor-controlled share, with a ranked bar list of publisher types"
              w={2400}
              h={1500}
              clip={{ src: `${V}/source.mp4`, poster: `${V}/source-poster.webp` }}
            />
            <ol className={s.cards}>
              <li>
                <span>01</span>
                <b>A ranking, not a donut</b>
                <p>Publisher types as a ranked bar list, which reads faster and matches the tables elsewhere.</p>
              </li>
              <li>
                <span>02</span>
                <b>Red means one thing</b>
                <p>Red is kept for competitor-controlled rows and regressions. The risk band is a muted amber.</p>
              </li>
              <li>
                <span>03</span>
                <b>Provenance from anywhere</b>
                <p>Any citation number in the product opens the same slide-over with the model’s answer and its evidence.</p>
              </li>
              <li>
                <span>04</span>
                <b>Loading keeps its shape</b>
                <p>Skeletons hold the figures and tabs in place instead of a spinner on an empty page.</p>
              </li>
            </ol>
          </section>

          {/* ===== Fix & prove ===== */}
          <section className={s.sec} id="prove">
            <p className={s.kick}>08 · Fix & prove</p>
            <h2 className={s.h2}>Ship a fix, then let the statistics say whether it worked</h2>
            <p>
              GEO Interventions turns the gaps into recommendation cards: the question it’s for, why models answer the way
              they do, the content to publish and where, and the search demand behind it. Once shipped, a card shows a
              Measuring state that links straight to the verdict.
            </p>
            <Screen
              src={`${IMG}/screens/interventions.webp`}
              alt="GEO Interventions: content actions, high-priority items, brands affected and search demand, then recommendation cards with the question, the reasoning and the content to publish"
              w={2400}
              h={1500}
              clip={{ src: `${V}/interventions.mp4`, poster: `${V}/interventions-poster.webp` }}
            />

            <h3 className={s.h3}>Activation & Impact: real change, or model variance?</h3>
            <p>
              AI models don’t give the same answer twice, so a before-and-after on its own proves nothing. Every verdict comes
              from a test, chosen for what it measures.
            </p>
            <ul className={s.tests}>
              <li>
                <span>What changed</span>
                <span>Test</span>
                <span>Null hypothesis</span>
                <span>Threshold</span>
              </li>
              {tests.map((t) => (
                <li key={t.v}>
                  <b>{t.v}</b>
                  <span>{t.t}</span>
                  <span>{t.h}</span>
                  <code>{t.th}</code>
                </li>
              ))}
            </ul>
            <Screen
              src={`${IMG}/screens/activation.webp`}
              alt="Activation & Impact: before and after for each intervention, with a change interval that lights up only when it clears zero"
              w={2400}
              h={1500}
              clip={{ src: `${V}/activation.mp4`, poster: `${V}/activation-poster.webp` }}
            />
            <div className={s.band}>
              <h3 className={s.h3}>The decision I changed my mind on</h3>
              <p>
                The first version drew each window’s 95% interval and asked people to judge whether they overlapped. But
                overlap is a stricter bar than the test, so a genuinely significant change could still show overlapping bars,
                with a Validated badge above two bars that seemed to disagree with it. Now the verdict rides on one change
                interval that uses the same standard error as the test: “clears zero” and “significant” are the same
                statement. And a change stays grey until it’s significant; only then does it take colour.
              </p>
            </div>

            <h3 className={s.h3}>Measurements: before versus after, per question</h3>
            <p>
              The detail behind each verdict: the score before and after, whether the AI used the uploaded document, and which
              websites it cited, with uneven windows flagged so nobody over-reads a small sample.
            </p>
            <Screen
              src={`${IMG}/screens/measure.webp`}
              alt="Measurements: previous run and current run Sentinel scores side by side, the change and its p-value, and a note on uneven windows"
              w={2400}
              h={1500}
              clip={{ src: `${V}/measure.mp4`, poster: `${V}/measure-poster.webp` }}
            />
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>09 · Outcome</p>
            <h2 className={s.h2}>One loop a brand team can run, and a Medical Affairs team can trust</h2>
            <ul className={`${s.glance} ${s.glance3}`}>
              <li>
                <span>Connected</span>
                <p className={s.glanceNum}>
                  <b>1 loop</b>
                </p>
                <small>from a patient conversation to a measured change, with every hand-off carrying its context</small>
              </li>
              <li>
                <span>Compliant</span>
                <p className={s.glanceNum}>
                  <b>1 door</b>
                </p>
                <small>no question reaches an AI model without Medical Affairs approving it</small>
              </li>
              <li>
                <span>Honest</span>
                <p className={s.glanceNum}>
                  <b>0</b>
                </p>
                <small>coloured deltas that aren’t statistically significant</small>
              </li>
            </ul>

            <h3 className={s.h3}>The prototype</h3>
            <ul className={s.stats}>
              {facts.map((x) => (
                <li key={x.t}>
                  <b>{x.n}</b>
                  <p>{x.t}</p>
                </li>
              ))}
            </ul>
            <p className={s.fine}>
              Built as a working prototype in Figma Make on React, with a shared engine every screen reads and writes. Figures
              in the screens are the prototype’s seeded data, and brand names are invented.
            </p>

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
            <p className={`hand ${s.hand}`}>a grey arrow is more honest than a green guess :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/gtn-twin/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextNavy}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/gtn-twin/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>Global biopharma · Gross-to-net simulation</em>
                <b>Designing a flight simulator for pharma contracts, so a deal’s net revenue is clear before it’s signed</b>
                <span>Flight controls, a revenue waterfall you can play, and a check against filed results.</span>
                <i>View case study →</i>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
