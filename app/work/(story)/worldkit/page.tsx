import Image from 'next/image';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';
import { site } from '@/content/work';
import Rail from '@/components/story/Rail';
import Artifact from '@/components/story/Artifact';
import ThemePlayground from '@/components/story/ThemePlayground';
import ContrastSweep from '@/components/story/ContrastSweep';
import s from '@/components/story/story.module.css';

export const metadata = {
  title: 'WorldKit Design System · Components that never name a colour',
  description:
    'WorldLink’s design system, built twice: a Figma-to-code token pipeline, then a 93-component React library where four inputs re-theme everything at runtime and the system checks itself.',
  robots: { index: false, follow: false },
};

const IMG = '/work/worldkit';

/* ---------------- content ----------------
   v1: the published WorldKit case study (Figma site) — foundations, components, process.
   v2: the ds-ui repository and its context brief (Sept 2026) — every number below is a count from
   the repo. The Figma site's adoption percentages are left out: they weren't measured. */

const owned = [
  { t: 'Foundations', d: 'Colour, type, spacing, radius, elevation and motion, as tokens.' },
  { t: 'Colour science', d: 'The OKLCH ramps, the contrast rules and the dark-mode curve.' },
  { t: 'Components & API', d: '93 React components and the prop model they share.' },
  { t: 'Docs & governance', d: 'Storybook, the contribution guide and the checks that keep it honest.' },
];

const symptoms = [
  { t: 'Every product picks its own blue', d: 'And nobody can say which one is right, because there is no rule, only taste.' },
  { t: 'A rebrand touches every file', d: 'So does dark mode. Colour lives inside components, so changing it means editing all of them.' },
  { t: 'The button isn’t the button', d: 'The one in one app doesn’t match the one in the next. Same name, different padding, different states.' },
  { t: 'Accessibility is checked once', d: 'Before launch, by whoever remembers. Then the next change quietly undoes it.' },
];

const pipeline = [
  { n: 'Step 1', t: 'Design in Figma', d: 'Components built with variables and auto-layout, so every value is a token.' },
  { n: 'Step 2', t: 'Map to Tailwind', d: 'Tokens synced to the Tailwind config and CSS variables.' },
  { n: 'Step 3', t: 'Document in Storybook', d: 'Components published with live examples and usage guidance.' },
  { n: 'Step 4', t: 'Hand off', d: 'Engineers build from ready components, not from redlines.' },
];

const palette = [
  { n: 'Brand', v: '#EF2D3E' },
  { n: 'Destructive', v: '#E7000B' },
  { n: 'Secondary', v: '#71717B' },
  { n: 'Surface', v: '#FAFAFA' },
  { n: 'Border', v: '#E5E7EB' },
  { n: 'Contrast', v: '#000000' },
];

const typeScale = [
  { k: '5xl', px: 48, w: 600 },
  { k: '3xl', px: 30, w: 500 },
  { k: '2xl', px: 24, w: 500 },
  { k: 'xl', px: 20, w: 500 },
  { k: 'base', px: 16, w: 400 },
  { k: 'xs', px: 12, w: 400 },
];

const phases = [
  { n: 'Weeks 1–3', t: 'Discovery', d: 'Audited the inconsistencies across products, talked to designers and engineers, set principles.' },
  { n: 'Weeks 4–6', t: 'Foundations', d: 'Palette, type, the token architecture and the Figma variables workspace.' },
  { n: 'Weeks 7–10', t: 'Build & document', d: 'Components in React, tokens synced to Tailwind, Storybook docs, accessibility checks.' },
  { n: 'Weeks 11–13', t: 'Pilot', d: 'Put into product teams’ hands, then refined from how they actually used it.' },
  { n: 'Weeks 14–16', t: 'Roll out', d: 'Launch, walkthroughs for teams and migration guides.' },
];

const axes = [
  { c: '--h1: 285', t: 'Primary hue', d: 'Any number from 0 to 360. It drives the action colour and tints every grey.' },
  { c: '--h2: 62', t: 'Secondary hue', d: 'Gradients and the rare second accent. Never a primary action.' },
  { c: 'data-mode', t: 'Mode', d: 'Light or dark. The ramp curve re-anchors; nothing is overridden per colour.' },
  { c: 'data-density', t: 'Density', d: 'Roomy or compact. Control heights and padding only, never colour or shape.' },
];

const cascade = [
  { f: 'palette.css', d: 'A fixed categorical palette for charts, outside the theme', k: 'literals' },
  { f: 'primitives.css', d: 'The two hue inputs, the ramps built from them, spacing, motion', k: 'literals' },
  { f: 'modes.css', d: 'Re-anchors the ramp curve and inverts the neutrals', k: 'aliases' },
  { f: 'surface.css', d: 'Radius, elevation, border treatment, typeface', k: 'literals' },
  { f: 'typography.css', d: 'Eight type steps, four tokens each', k: 'literals' },
  { f: 'icon.css', d: 'Glyph sizing and stroke', k: 'literals' },
  { f: 'density.css', d: 'Control heights and card padding', k: 'literals' },
  { f: 'semantic.css', d: 'The only names a component is allowed to use', k: 'aliases' },
];

/* the 12-step ramp at the default hue, from the shipped curve */
const curve: [number, number][] = [
  [0.988, 0.01], [0.972, 0.02], [0.948, 0.038], [0.915, 0.055], [0.875, 0.075], [0.825, 0.095],
  [0.76, 0.12], [0.675, 0.16], [0.495, 0.195], [0.445, 0.185], [0.4, 0.15], [0.29, 0.08],
];

const api = [
  { t: 'Migrate, don’t break', d: 'The old single variant type still exists, marked deprecated, with a map to the two new axes. Existing code keeps rendering while it moves.' },
  { t: 'Name the thing, not the picture', d: 'A local icon registry over Lucide. People write name="delete", not trash-2, so a drawing can be swapped in one map.' },
  { t: 'Tokens ship as CSS', d: 'Not a JS import, because the cascade has to load first and a JS import gives no say over when a stylesheet lands.' },
  { t: 'No styling runtime', d: 'Plain CSS custom properties, no CSS-in-JS and no Tailwind. Re-theming is the browser’s own cascade, so it costs nothing.' },
];

const checks = [
  { c: 'check:tokens', d: 'Every painted surface declares its own foreground.', s: 'pass' },
  { c: 'check:surfaces', d: 'Any component with an opaque background declares it, and has an “On surfaces” story.', s: 'pass' },
  { c: 'check:props', d: 'Every public prop has a JSDoc comment. That comment is the Description column in the docs.', s: 'pass' },
  { c: 'check:mdx', d: 'Every doc page compiles, because a broken one stops Storybook with no line number.', s: 'pass' },
  { c: 'check:exports', d: 'Resolves every entry point the way a consuming app would.', s: 'after' },
  { c: 'check:docs', d: 'Opens all 127 doc pages in a browser. It caught a brace in plain prose, “Select {rowLabel}”, that compiled and then broke the Table page at render.', s: 'after' },
];

const scale = [
  { n: '93', t: 'components' },
  { n: '98', t: 'stories, which are the test suite' },
  { n: '127', t: 'documentation pages' },
  { n: '22', t: 'chart components' },
  { n: '68', t: 'icons, behind a name registry' },
  { n: '~55k', t: 'lines of TypeScript and CSS' },
];

const asks = [
  { t: 'A first adopter', d: 'One app, one screen, one owner. v2 hasn’t shipped in a product yet; foundations and guardrails came first, on purpose.' },
  { t: 'Checks on every change', d: 'Its own repository and pipeline, so the nine checks run on every pull request instead of by hand.' },
  { t: 'An owner for chart colour', d: 'Someone to make the check:viz call: reorder the series and recolour the charts already shipped.' },
  { t: 'A registry release', d: 'Agreement on when it’s published, so teams install a version instead of a folder.' },
];

const learnings = [
  { t: 'Fix the cause, not the four symptoms', d: 'Brand, dark mode, consistency and accessibility looked like four projects. Taking hardcoded values out of components solved all of them at once.' },
  { t: 'A rule has to hold at every input', d: 'Once hue became a slider, “passes at the hue I tested” stopped meaning anything. The contrast rules had to be derived, then measured across all 360 degrees.' },
  { t: 'Name the calls a script can’t make', d: 'check:viz reports instead of blocking. Some fixes are design decisions, and the system should say so out loud.' },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'v1', label: 'WorldKit v1' },
  { id: 'idea', label: 'The one idea' },
  { id: 'colour', label: 'Colour science' },
  { id: 'api', label: 'Component API' },
  { id: 'quality', label: 'Self-checking' },
  { id: 'outcome', label: 'Outcome' },
];

export default function WorldKit() {
  return (
    <article className={`${s.page} ${s.violet}`}>
      {/* ===== Hero ===== */}
      <header className={s.hero}>
        <p className={s.heroKick}>WorldKit · Design system · WorldLink</p>
        <h1 className={s.h1}>Designing a design system where components never name a colour</h1>
        <ul className={s.heroMeta}>
          <li>Design system lead</li>
          <li>93 components</li>
          <li>4 runtime theme axes</li>
          <li>WCAG 2.2 AA, checked on every story</li>
        </ul>
        <div className={s.heroShot}>
          <Image
            src={`${IMG}/hero.webp`}
            alt="The same analytics screen built from WorldKit components, shown in four themes: violet light, cyan dark, green compact and red light"
            width={2400}
            height={1500}
            sizes="(max-width: 1600px) 94vw, 1480px"
            priority
          />
        </div>
      </header>

      <div className={s.layout}>
        <Rail sections={sections} name="WorldKit" logo="W" meta="93 components" />

        <div className={s.main}>
          {/* ===== Overview ===== */}
          <section className={s.sec} id="overview">
            <p className={s.kick}>Overview</p>
            <h2 className={s.h2}>One design system, built twice</h2>
            <p>
              WorldKit is WorldLink’s design system for its enterprise products: compliance and GRC tools, AI assistants
              and data-heavy dashboards. The first version made Figma the single source of truth for design and code. The
              second, ds-ui, is a React library where four inputs decide how every component looks, at runtime, with no
              rebuild.
            </p>
            <div className={s.tldr}>
              <div>
                <em>Why it was done</em>
                <p>Products had drifted into different colours, different buttons and different accessibility. Each fix had to be made again in every product.</p>
              </div>
              <div>
                <em>What I did</em>
                <ul>
                  <li>Led WorldKit from audit to rollout: tokens, components, docs</li>
                  <li>Designed and built v2: the token cascade, 93 components and the checks</li>
                </ul>
              </div>
              <div>
                <em>What I learned</em>
                <p>A design system lasts when its rules are derived and enforced, not just written down.</p>
              </div>
            </div>

            <div className={s.versions}>
              <div>
                <em>v1 · WorldKit</em>
                <b>One source of truth in Figma</b>
                <p>Figma variables mapped to Tailwind and documented in Storybook, built in 16 weeks and used across WorldLink products.</p>
                <ul>
                  <li>Figma Variables</li>
                  <li>Tailwind</li>
                  <li>Storybook</li>
                  <li>WCAG 2.2 AA</li>
                </ul>
              </div>
              <span aria-hidden>→</span>
              <div>
                <em>v2 · ds-ui</em>
                <b>Components that never name a colour</b>
                <p>93 token-driven React components. Hue, mode and density are inputs, and the system tests itself.</p>
                <ul>
                  <li>React 19</li>
                  <li>OKLCH tokens</li>
                  <li>Storybook 10</li>
                  <li>axe in every story</li>
                </ul>
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
            <h2 className={s.h2}>Four problems that turned out to be one</h2>
            <p>As WorldLink added products, the same four complaints kept coming back from design and engineering.</p>
            <ol className={s.cards}>
              {symptoms.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
            <p>
              They look like four projects. They share one cause: <b>components that hardcode values.</b> A component that
              contains a hex code can’t follow a rebrand, can’t go dark and can’t promise contrast it never measured.
            </p>
            <div className={s.question}>
              <p>The question I designed for</p>
              <blockquote>
                What if no component ever named a <em>colour</em>, a radius, a duration or a font size?
              </blockquote>
            </div>
          </section>

          {/* ===== v1 ===== */}
          <section className={s.sec} id="v1">
            <p className={s.kick}>02 · WorldKit v1</p>
            <h2 className={s.h2}>First, one source of truth in Figma</h2>
            <p>
              v1 put every visual decision into Figma variables and carried them into code through Tailwind, so engineers
              built from the same values designers used instead of re-typing them from a spec.
            </p>
            <ol className={s.timeline}>
              {pipeline.map((t) => (
                <li key={t.n}>
                  <span>{t.n}</span>
                  <b>{t.t}</b>
                  <p>{t.d}</p>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>Foundations</h3>
            <p>A brand-aligned palette tested for contrast, and a type scale in Plus Jakarta Sans for dense dashboards.</p>
            <ul className={s.swatches}>
              {palette.map((p) => (
                <li key={p.n}>
                  <i style={{ background: p.v }} />
                  <b>{p.n}</b>
                  <small>{p.v}</small>
                </li>
              ))}
            </ul>
            <div className={s.typeRow} aria-label="Type scale">
              {typeScale.map((t) => (
                <span key={t.k} style={{ fontSize: t.px, fontWeight: t.w }}>
                  Aa
                  <small>
                    {t.k} · {t.px}
                  </small>
                </span>
              ))}
            </div>

            <h3 className={s.h3}>Components, specified state by state</h3>
            <p>
              Every component was drawn across its sizes and states before it was built: four sizes, four states and four
              styles for the button alone, with the hover, pressed and disabled values coming from tokens.
            </p>
            <div className={s.artNarrow}>
              <Artifact src={`${IMG}/v1/buttons.webp`} alt="The v1 button specification: four sizes by default, hover, pressed and disabled, in four styles" w={1220} h={1230} from="Button specification · WorldKit v1 Figma library" />
            </div>
            <div className={s.artPair}>
              <Artifact src={`${IMG}/v1/inputs.webp`} alt="The v1 input field specification: default, focus, filled, disabled and error states, with and without icons" w={1604} h={1229} from="Input states · v1 Figma library" />
              <Artifact src={`${IMG}/v1/variables.webp`} alt="Figma variables panel: the TailwindCSS collection with 391 variables, including brand, white and slate colours" w={400} h={438} from="391 variables in the TailwindCSS collection" />
            </div>

            <h3 className={s.h3}>Sixteen weeks, from audit to rollout</h3>
            <ol className={`${s.timeline} ${s.timeline5}`}>
              {phases.map((t) => (
                <li key={t.n}>
                  <span>{t.n}</span>
                  <b>{t.t}</b>
                  <p>{t.d}</p>
                </li>
              ))}
            </ol>

            <div className={s.band}>
              <h3 className={s.h3}>What v1 couldn’t do</h3>
              <p>
                v1 fixed the drift, but its values were still fixed. The brand was a hex code, #EF2D3E, and there was one
                mode and one density. A product with a different brand, a dark screen or a dense table had to fork the
                tokens, which is exactly where drift starts again. v2 set out to make those things inputs.
              </p>
            </div>
          </section>

          {/* ===== The one idea ===== */}
          <section className={s.sec} id="idea">
            <p className={s.kick}>03 · The one idea</p>
            <h2 className={s.h2}>Four inputs, and every component follows</h2>
            <p>
              In ds-ui, components read semantic tokens only. Four independent inputs on the page decide what those tokens
              resolve to. Because the axes are independent, there is no grid of variants to maintain.
            </p>
            <ul className={s.axes}>
              {axes.map((a) => (
                <li key={a.t}>
                  <code>{a.c}</code>
                  <b>{a.t}</b>
                  <p>{a.d}</p>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Try it</h3>
            <p>
              This is the real token maths from ds-ui, running in your browser. Drag the hue, switch to dark, go compact.
              Nothing in the screen names a colour.
            </p>
            <ThemePlayground />
            <p className={s.fine}>
              Hue is a number, not a list of approved brands, so a team can pick a hue nobody has tried and every component
              still resolves correctly. The number in the corner is the contrast of the button label, measured live.
            </p>

            <h3 className={s.h3}>Eight layers, and components may only touch the last</h3>
            <p>
              Each layer can override the one above it. Nothing below the primitives resolves until the mode and density
              are set on the page: a deliberate fail-loud choice, so a missing setup breaks visibly instead of half-working.
            </p>
            <ol className={s.cascade}>
              {cascade.map((c) => (
                <li key={c.f}>
                  <code>{c.f}</code>
                  <span>{c.d}</span>
                  <small>{c.k}</small>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>Every background brings its own text colour</h3>
            <p>Semantic tokens come in pairs, so no component can paint a surface and leave the text colour to chance.</p>
            <div className={`${s.code} ${s.pairs}`}>
              <p>
                <b>--bg-canvas</b> <i>/</i> --fg-on-canvas
              </p>
              <p>
                <b>--bg-surface</b> <i>/</i> --fg-on-surface
              </p>
              <p>
                <b>--bg-solid</b> <i>/</i> --fg-on-solid
              </p>
              <p>
                <b>--bg-tint</b> <i>/</i> --fg-on-tint
              </p>
              <p>
                <b>--bg-gradient-accent</b> <i>/</i> --fg-on-gradient-accent
              </p>
              <p>
                <b>--bg-status-ok</b> <i>/</i> --fg-on-status-ok
              </p>
            </div>
          </section>

          {/* ===== Colour science ===== */}
          <section className={s.sec} id="colour">
            <p className={s.kick}>04 · Colour science</p>
            <h2 className={s.h2}>Making a hue slider safe for accessibility</h2>
            <p>
              Once hue is something anyone can change, “it passes at the hue I tested” stops being worth anything. Every
              contrast rule had to hold at all 360 degrees.
            </p>

            <h3 className={s.h3}>Twelve steps, five jobs</h3>
            <p>
              Every colour ramp, accent and status alike, is built from one shared lightness curve. So step 9 is always the
              solid fill and step 11 is always the readable text, whatever the hue.
            </p>
            <div className={s.jobs} aria-hidden>
              {curve.map(([l, c], i) => (
                <i key={i} style={{ background: `oklch(${l} ${c} 285)`, color: i < 8 ? '#231a4a' : '#fbfaff' }}>
                  {i + 1}
                </i>
              ))}
            </div>
            <div className={s.jobLabels}>
              <span>
                1–2 Backgrounds<small>page, subtle</small>
              </span>
              <span>
                3–5 Components<small>normal, hover, active</small>
              </span>
              <span className={s.dead}>
                6–8 Borders<small>where the dead zone falls</small>
              </span>
              <span>
                9–10 Solid fills<small>and their hover</small>
              </span>
              <span>
                11–12 Text<small>readable, high contrast</small>
              </span>
            </div>
            <p className={s.fine}>
              Between L 0.515 and 0.585, no text colour reaches 4.5:1 at the worst hues. A twelve-step ramp has to cross
              that band somewhere, so the decision was which steps land in it: the borders, which nothing sits on.
            </p>

            <h3 className={s.h3}>Where white text stops working, derived</h3>
            <div className={s.math}>
              <div>
                <em>The crossover</em>
                <p>OKLCH lightness is close to the cube root of luminance. Set white-text contrast equal to black-text contrast:</p>
                <pre>{'(L³ + 0.05) / 0.05 = 1.05 / (L³ + 0.05)\nL³ = 0.179  →  L = 0.564'}</pre>
                <p>At that point both options score 4.58:1, just over AA. So every step is at least that readable, whichever text colour it takes.</p>
              </div>
              <div>
                <em>The bug it fixed</em>
                <p>
                  An earlier version switched at L 0.62, the crossover for 3:1 non-text contrast. White text there scores
                  3.64:1. Any step between 0.564 and 0.62 would have been given white text and been unreadable.
                </p>
              </div>
            </div>

            <h3 className={s.h3}>Step 9, measured at every hue</h3>
            <p>
              The solid fill used to sit at L 0.560. It passed at the hues I’d checked and failed at the cyans, where white
              text dropped to about 3.7:1. It now sits at 0.495, a little under what the maths allows, because the label is
              an off-white tinted toward the accent, and sitting exactly on a boundary means the next small change breaks it.
            </p>
            <ContrastSweep />

            <h3 className={s.h3}>Two curves that aren’t a mirror</h3>
            <ol className={s.cards}>
              <li>
                <span>Dark mode</span>
                <b>Bright fills, dark labels</b>
                <p>
                  Dark mode needs ten distinguishable steps between the canvas and the fill, and they don’t fit under the
                  white-text limit. Keeping white labels squeezed steps 7–10 into 0.03 of lightness, so a button looked
                  like its own border. So dark-mode fills are bright, with near-black text.
                </p>
              </li>
              <li>
                <span>Secondary hue</span>
                <b>Gold, not mud</b>
                <p>
                  The same lightness doesn’t mean the same thing at every hue: a violet at L 0.56 is violet, a gold at L 0.56
                  is brown. The secondary accent gets its own lighter curve, which is why it’s never used for a primary action.
                </p>
              </li>
              <li>
                <span>Status</span>
                <b>Danger doesn’t follow the brand</b>
                <p>Success, warning, danger and info keep fixed hues on the shared curve. A red brand still gets a red that means “stop”.</p>
              </li>
            </ol>
          </section>

          {/* ===== API ===== */}
          <section className={s.sec} id="api">
            <p className={s.kick}>05 · Component API</p>
            <h2 className={s.h2}>Two props, twelve intents</h2>
            <p>
              Props sit on independent axes instead of one long variant list. Button is the reference: emphasis says how
              loud it is, tone says what it’s about. Four by three gives twelve intents, including one a single variant
              prop can’t express.
            </p>
            <div className={s.code}>
              <p>
                {'<'}
                <b>Button</b> emphasis=<i>&quot;ghost&quot;</i> tone=<i>&quot;danger&quot;</i>
                {'>'}Remove{'</'}
                <b>Button</b>
                {'>'}
              </p>
              <small>{'// a quiet destructive action · emphasis: solid → tint → outline → ghost · tone: accent · danger · warm'}</small>
            </div>
            <p className={s.fine}>One solid per view. You can see all twelve in the playground above.</p>
            <ol className={s.cards}>
              {api.map((a, i) => (
                <li key={a.t}>
                  <span>0{i + 1}</span>
                  <b>{a.t}</b>
                  <p>{a.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== Quality ===== */}
          <section className={s.sec} id="quality">
            <p className={s.kick}>06 · Self-checking</p>
            <h2 className={s.h2}>A design system that checks itself</h2>
            <p>
              Most design systems don’t die at launch. They drift in year two. So the rules are code, and they run against
              everything.
            </p>
            <div className={s.band}>
              <h3 className={s.h3}>The stories are the tests</h3>
              <p>
                There are no separate test files. Every Storybook story is mounted in a real browser, its interaction is
                played, and axe runs at error level, so a new accessibility violation fails the run instead of becoming a
                note nobody opens. What’s demoed, what’s tested and what’s documented are the same file, so the docs
                can’t drift from the code.
              </p>
            </div>

            <h3 className={s.h3}>The checks</h3>
            <p>Alongside types and lint, these are specific to the design system.</p>
            <ul className={s.checks}>
              {checks.map((c) => (
                <li key={c.c}>
                  <div>
                    <code>{c.c}</code>
                    <span className={c.s === 'pass' ? s.pass : s.after}>{c.s === 'pass' ? 'Passing' : 'After build'}</span>
                  </div>
                  <p>{c.d}</p>
                </li>
              ))}
              <li className={s.flag}>
                <div>
                  <code>check:viz</code>
                  <span className={s.fail}>Fails, on purpose</span>
                </div>
                <p>
                  It simulates colour blindness over the twelve chart colours. Blue and violet, series 1 and 4, become the
                  same colour under deuteranopia, and an ordinary four-series chart uses both. The fix means reordering
                  the series and recolouring every chart already shipped. That’s a design decision someone has to own, so
                  the check reports instead of blocking.
                </p>
                <div className={s.cvd} aria-label="Blue and violet, and how they look with deuteranopia">
                  <div>
                    <i style={{ background: '#3b82f6' }} />
                    <i style={{ background: '#8b5cf6' }} />
                    as designed
                  </div>
                  <div>
                    <i style={{ background: '#007df4' }} />
                    <i style={{ background: '#0078f3' }} />
                    with deuteranopia
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* ===== Outcome ===== */}
          <section className={s.sec} id="outcome">
            <p className={s.kick}>07 · Outcome</p>
            <h2 className={s.h2}>From a Figma library to a system that checks itself</h2>
            <ul className={`${s.glance} ${s.glance3}`}>
              <li>
                <span>WorldKit v1</span>
                <p className={s.glanceNum}>
                  <b>~50%</b>
                </p>
                <small>less design-to-development rework on products built with it</small>
              </li>
              <li>
                <span>ds-ui</span>
                <p className={s.glanceNum}>
                  <b>4</b>
                </p>
                <small>inputs re-theme every component, live, with no rebuild</small>
              </li>
              <li>
                <span>Governance</span>
                <p className={s.glanceNum}>
                  <b>9</b>
                </p>
                <small>checks guarding tokens, surfaces, props, docs and accessibility</small>
              </li>
            </ul>

            <h3 className={s.h3}>ds-ui by the numbers</h3>
            <ul className={`${s.stats} ${s.stats6}`}>
              {scale.map((x) => (
                <li key={x.t}>
                  <b>{x.n}</b>
                  <p>{x.t}</p>
                </li>
              ))}
            </ul>
            <p className={s.fine}>Counts from the repository, September 2026.</p>

            <h3 className={s.h3}>What’s next</h3>
            <ol className={s.cards}>
              {asks.map((a, i) => (
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
            <p className={`hand ${s.hand}`}>boring tokens make exciting products possible :)</p>
          </section>

          {/* ===== Next project ===== */}
          <section className={s.next}>
            <p className={s.nextKick}>Next project</p>
            <Link href="/work/network-governance/" className={s.nextCard}>
              <span className={`${s.nextImg} ${s.nextBlue}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/network-governance/cover.webp" alt="" />
              </span>
              <span className={s.nextBody}>
                <em>Fortune 100 bank · AI network governance</em>
                <b>Designing trust into network governance, so every decision can be explained</b>
                <span>Twelve weeks, eight users, two rounds of testing and an assistant that asks before it acts.</span>
                <i>View case study →</i>
              </span>
            </Link>
            <div className={s.talk}>
              <LiquidButton href={`mailto:${site.email}?subject=WorldKit%20design%20system`} variant="emerald">
                Let&apos;s talk about it
              </LiquidButton>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
