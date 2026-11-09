import Image from 'next/image';
import Link from 'next/link';
import LiquidButton from '@/components/LiquidButton';
import { site, caseKeywords } from '@/content/work';
import Rail from '@/components/story/Rail';
import Artifact from '@/components/story/Artifact';
import ThemePlayground from '@/components/story/ThemePlayground';
import ContrastSweep from '@/components/story/ContrastSweep';
import { ComponentSheet, DataTable, Themed } from '@/components/story/Specimens';
import s from '@/components/story/story.module.css';

export const metadata = {
  keywords: caseKeywords('worldkit'),
  title: 'WorldKit Design System · Components that never name a colour',
  description:
    'WorldLink’s design system: 93 token-driven components, four runtime theme axes, colour rules derived and measured at every hue, and a library that tests itself.',
  robots: { index: false, follow: false },
};

const IMG = '/work/worldkit';

/* ---------------- content ----------------
   From the WorldKit repository (README, context brief, token files, Sept 2026) and the published
   WorldKit case study (foundations, Figma specs, process). Every number is a count from the repo
   or a measurement made with the shipped token values. The published site's adoption percentages
   are left out: they weren't measured. */

const owned = [
  { t: 'Foundations', d: 'Colour, type, shape, elevation, spacing, motion and density, as tokens.' },
  { t: 'Colour science', d: 'The OKLCH ramps, the contrast rules and the dark-mode curve.' },
  { t: 'Components & API', d: '93 React components and the prop model they share.' },
  { t: 'Docs & governance', d: 'Storybook, the contribution rules and the checks that keep it honest.' },
];

const glance = [
  { n: '93', t: 'components' },
  { n: '22', t: 'chart components' },
  { n: '127', t: 'documentation pages' },
  { n: '4', t: 'runtime theme axes' },
];

const symptoms = [
  { t: 'Every product picks its own red', d: 'And nobody can say which one is right, because there is no rule, only taste.' },
  { t: 'A rebrand touches every file', d: 'So does dark mode. Colour lives inside components, so changing it means editing all of them.' },
  { t: 'The button isn’t the button', d: 'The one in one app doesn’t match the one in the next. Same name, different padding, different states.' },
  { t: 'Accessibility is checked once', d: 'Before launch, by whoever remembers. Then the next change quietly undoes it.' },
];

const phases = [
  { n: 'Weeks 1–3', t: 'Audit', d: 'Collected the inconsistencies across WorldLink products and talked to designers and engineers.' },
  { n: 'Weeks 4–6', t: 'Foundations', d: 'Palette, type, the token architecture and the Figma variables workspace.' },
  { n: 'Weeks 7–10', t: 'Build & document', d: 'Components, tokens synced to code, Storybook docs and accessibility checks.' },
  { n: 'Weeks 11–13', t: 'Pilot', d: 'Into product teams’ hands, then refined from how they actually used it.' },
  { n: 'Weeks 14–16', t: 'Roll out', d: 'Launch, walkthroughs for teams and migration guides.' },
  { n: 'Since', t: 'Make it themeable', d: 'Rebuilt the tokens so hue, mode and density are inputs, and grew the library to 93 components.' },
];

const typeScale = [
  { k: 'Display', px: 32, lh: 1.1, w: 700, ls: '-0.035em', t: 'Compliance, in hours' },
  { k: 'Heading 1', px: 24, lh: 1.2, w: 600, ls: '-0.025em', t: 'Gap analysis' },
  { k: 'Heading 2', px: 20, lh: 1.25, w: 600, ls: '-0.02em', t: 'Controls by framework' },
  { k: 'Heading 3', px: 16, lh: 1.3, w: 600, ls: '-0.015em', t: 'Evidence due this week' },
  { k: 'Body', px: 14, lh: 1.45, w: 400, ls: '-0.006em', t: 'Third-party providers must meet the same standard of control.' },
  { k: 'Body small', px: 13, lh: 1.45, w: 400, ls: '-0.004em', t: 'Dense tables and secondary panels' },
  { k: 'Caption', px: 12, lh: 1.4, w: 500, ls: '0', t: 'Updated 4 minutes ago' },
  { k: 'Micro', px: 11, lh: 1.35, w: 600, ls: '0.01em', t: 'FRAMEWORK · REGION · STATUS' },
];

const weightName: Record<number, string> = { 400: 'Regular', 500: 'Medium', 600: 'Semibold', 700: 'Bold' };

const axes = [
  { c: '--h1: 23', t: 'Primary hue', d: 'Any number from 0 to 360. It drives the action colour and tints every grey.' },
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

/* the 12-step ramp at WorldLink red, from the shipped curve */
const curve: [number, number][] = [
  [0.988, 0.01], [0.972, 0.02], [0.948, 0.038], [0.915, 0.055], [0.875, 0.075], [0.825, 0.095],
  [0.76, 0.12], [0.675, 0.16], [0.495, 0.195], [0.445, 0.185], [0.4, 0.15], [0.29, 0.08],
];

const inventory = [
  { t: 'Layout', items: ['AppShell', 'Grid', 'Stack', 'Inline', 'Section', 'SplitPanel', 'ScrollArea', 'Divider', 'Card', 'GlassPanel', 'GradientCard', 'PageHeader'] },
  { t: 'Actions & inputs', items: ['Button', 'IconButton', 'LiquidButton', 'Input', 'Textarea', 'NumberInput', 'Select', 'MultiSelect', 'Combobox', 'Checkbox', 'Radio', 'RadioGroup', 'Switch', 'Slider', 'SegmentedControl', 'ToggleGroup', 'FormField', 'Fieldset', 'InlineEdit', 'FileDropzone', 'Calendar', 'DatePicker', 'DateRangePicker', 'TimePicker'] },
  { t: 'Navigation & overlay', items: ['Tabs', 'Breadcrumb', 'Menu', 'Modal', 'Drawer', 'Popover', 'Tooltip', 'CommandPalette', 'Pagination', 'Steps', 'Link'] },
  { t: 'Data display', items: ['Table', 'TreeTable', 'DataList', 'DescriptionList', 'StatCard', 'Delta', 'Badge', 'IconBadge', 'IconTile', 'Avatar', 'Timeline', 'EmptyState', 'Skeleton', 'Spinner', 'ProgressBar', 'ProgressRing', 'StatusIndicator', 'Alert', 'Toast', 'Accordion', 'Icon'] },
  { t: 'Table tooling', items: ['ColumnManager', 'FilterBar', 'SavedViews', 'BulkActionBar'] },
  { t: 'Charts', items: ['AreaChart', 'BarChart', 'HorizontalBar', 'StackedBar', 'LineChart', 'ComboChart', 'ScatterPlot', 'BubbleChart', 'DonutChart', 'Gauge', 'BulletChart', 'BoxPlot', 'Heatmap', 'Treemap', 'Sankey', 'Funnel', 'Waterfall', 'Sparkline', 'SmallMultiples', 'ChartFrame', 'ChartChrome'] },
];

const componentRules = [
  { t: 'Inputs are filled, not bordered', d: 'A tinted well that lifts to white with a coloured halo on focus. The 1.5px border is there at rest, transparent, so focus and errors never change the field’s size.' },
  { t: 'Badges are tinted, not outlined', d: 'So a column of them sits quietly in a dense table row. The outline tone is kept for badges on a surface that’s already tinted.' },
  { t: 'Alerts let the icon carry the colour', d: 'Borderless and tinted, with neutral text. A block of coloured text reads as decoration and gets skimmed.' },
  { t: 'Radius is named for what it wraps', d: 'Control 11, tile 13, card 18. A control inside a card takes the smaller radius so the corners stay concentric.' },
];

const stories = [
  { t: 'Playground', d: 'Every prop, live, with its documentation.' },
  { t: 'Matrix', d: 'Every variant against every other, on one screen.' },
  { t: 'States', d: 'Hover, focus, pressed, disabled, loading, error.' },
  { t: 'BothModes', d: 'Light and dark side by side, so neither is an afterthought.' },
];

const api = [
  { t: 'Migrate, don’t break', d: 'The old single variant type still exists, marked deprecated, with a map to the two new axes. Existing code keeps rendering while it moves.' },
  { t: 'Name the thing, not the picture', d: 'A local icon registry over Lucide. People write name="delete", not trash-2, so a drawing can be swapped in one map.' },
  { t: 'No literal values', d: 'Component CSS contains no hex codes. If one is needed, the token is missing, and that’s a finding about the system.' },
  { t: 'No styling runtime', d: 'Plain CSS custom properties: no CSS-in-JS, no Tailwind. Re-theming is the browser’s own cascade, so it costs nothing.' },
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
  { t: 'Move a product onto the library', d: 'One app, one screen, one owner, so the runtime theming is proven in production and not only in Storybook.' },
  { t: 'Checks on every change', d: 'A repository and pipeline of its own, so the nine checks run on every pull request instead of by hand.' },
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
  { id: 'foundations', label: 'Foundations' },
  { id: 'idea', label: 'The one idea' },
  { id: 'colour', label: 'Colour science' },
  { id: 'components', label: 'Components' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'quality', label: 'Self-checking' },
  { id: 'outcome', label: 'Outcome' },
];

export default function WorldKit() {
  return (
    <article className={`${s.page} ${s.red}`}>
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
            alt="WorldKit in WorldLink red: a compliance dashboard in light mode, the same dashboard in dark mode, and a compact data table"
            width={2400}
            height={1136}
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
            <h2 className={s.h2}>WorldLink’s design system, from Figma variables to a themeable React library</h2>
            <p>
              WorldKit is the design system behind WorldLink’s enterprise products: compliance and GRC tools, AI
              assistants and data-heavy dashboards. It started as one source of truth in Figma and grew into 93 React
              components where four inputs decide how everything looks, at runtime, with no rebuild.
            </p>
            <div className={s.tldr}>
              <div>
                <em>Why it was done</em>
                <p>Products had drifted into different reds, different buttons and different accessibility. Every fix had to be made again in every product.</p>
              </div>
              <div>
                <em>What I did</em>
                <ul>
                  <li>Led it from audit to rollout: tokens, components, documentation</li>
                  <li>Designed the token cascade and colour rules, and built the library and its checks</li>
                </ul>
              </div>
              <div>
                <em>What I learned</em>
                <p>A design system lasts when its rules are derived and enforced, not just written down.</p>
              </div>
            </div>
            <ul className={`${s.stats}`}>
              {glance.map((x) => (
                <li key={x.t}>
                  <b>{x.n}</b>
                  <p>{x.t}</p>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>My role</h3>
            <ul className={s.owned}>
              {owned.map((o) => (
                <li key={o.t}>
                  <b>{o.t}</b>
                  <span>{o.d}</span>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>How it came together</h3>
            <ol className={`${s.timeline} ${s.timeline3}`}>
              {phases.map((t) => (
                <li key={t.t}>
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

          {/* ===== Foundations ===== */}
          <section className={s.sec} id="foundations">
            <p className={s.kick}>02 · Foundations</p>
            <h2 className={s.h2}>Every visual decision, as a token</h2>
            <p>
              Foundations were set in Figma variables first, so design and code started from the same values, and then
              rebuilt as layered CSS tokens that components read by name.
            </p>
            <div className={s.artSmall}>
              <Artifact src={`${IMG}/v1/variables.webp`} alt="Figma variables panel: the TailwindCSS collection with 391 variables, including the brand red, white and slate colours" w={400} h={438} from="Figma variables · 391 in the main collection" />
            </div>

            <h3 className={s.h3}>From the brand red to a ramp that passes</h3>
            <p>
              WorldLink red is #EF2D3E. As a button fill it gives white text 4.11:1, under the 4.5:1 that AA asks for. So
              the brand becomes a hue, 23° in OKLCH, and the system builds a twelve-step ramp from it. Step 9, the solid
              fill, is the same red at a lightness that clears AA.
            </p>
            <div className={s.brandRamp}>
              <div>
                <i style={{ background: '#EF2D3E' }}>Aa Label</i>
                <b>Brand red</b>
                <code>#EF2D3E · oklch(0.618 0.226 23)</code>
                <span className={s.ratioBad}>4.11:1 · below AA</span>
              </div>
              <span aria-hidden>→</span>
              <div>
                <i style={{ background: 'oklch(0.495 0.195 23)' }}>Aa Label</i>
                <b>Step 9, the solid fill</b>
                <code>oklch(0.495 0.195 23)</code>
                <span className={s.ratioOk}>6.60:1 · passes AA</span>
              </div>
            </div>
            <div className={s.jobs} aria-hidden>
              {curve.map(([l, c], i) => (
                <i key={i} style={{ background: `oklch(${l} ${c} 23)`, color: i < 8 ? '#3a1016' : '#fffafa' }}>
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
              Success, warning, danger and info are built on the same curve with fixed hues, so step 9 is the fill and step
              11 the text in every ramp.
            </p>

            <h3 className={s.h3}>Eight type steps, four tokens each</h3>
            <p>
              Plus Jakarta Sans. Every step carries size, line height, tracking and weight together, because size alone
              leaves the rest to guesswork. Figures are tabular everywhere, so numbers in tables never reflow.
            </p>
            <ul className={s.typeScale}>
              {typeScale.map((t) => (
                <li key={t.k}>
                  <code>{t.k}</code>
                  <small>
                    {t.px}px · {weightName[t.w]}
                  </small>
                  <span style={{ fontSize: t.px, lineHeight: t.lh, fontWeight: t.w, letterSpacing: t.ls }}>{t.t}</span>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Shape, elevation, space and motion</h3>
            <div className={s.tokenCards}>
              <div>
                <em>Radius & elevation</em>
                <div className={s.radii}>
                  <span>
                    <i style={{ borderRadius: 11 }} />
                    control 11
                  </span>
                  <span>
                    <i style={{ borderRadius: 13 }} />
                    tile 13
                  </span>
                  <span>
                    <i style={{ borderRadius: 18 }} />
                    card 18
                  </span>
                </div>
                <div className={s.shadows}>
                  <span style={{ boxShadow: '0 1px 2px oklch(0.4 0.03 23 / 0.05), 0 2px 6px -3px oklch(0.4 0.03 23 / 0.1)' }}>sm</span>
                  <span style={{ boxShadow: '0 1px 2px oklch(0.4 0.03 23 / 0.05), 0 6px 18px -8px oklch(0.4 0.03 23 / 0.14)' }}>card</span>
                  <span style={{ boxShadow: '0 2px 4px oklch(0.4 0.03 23 / 0.06), 0 24px 56px -16px oklch(0.4 0.03 23 / 0.2)' }}>lg</span>
                </div>
                <p>Shadows carry the brand hue, so they read as part of the palette instead of grey on top of it.</p>
              </div>
              <div>
                <em>Space & density</em>
                <div className={s.spaceBars} aria-hidden>
                  {[2, 4, 8, 12, 16, 24, 32, 48, 64].map((v) => (
                    <i key={v} style={{ height: v }} title={`${v}px`} />
                  ))}
                </div>
                <div className={s.densityPair}>
                  <span>
                    <i style={{ height: 40 }}>Roomy 40</i>
                  </span>
                  <span>
                    <i style={{ height: 32 }}>Compact 32</i>
                  </span>
                </div>
                <p>A 4px-based scale from 2 to 64. Density changes control heights and padding, never the gaps between things.</p>
              </div>
              <div>
                <em>Motion</em>
                <div className={s.motion}>
                  <span>
                    120ms <i style={{ width: '37%' }} />
                  </span>
                  <span>
                    200ms <i style={{ width: '62%' }} />
                  </span>
                  <span>
                    320ms <i style={{ width: '100%' }} />
                  </span>
                </div>
                <p>Short on purpose: motion confirms a change, it doesn’t perform. One spring curve, for the switch thumb. Reduced-motion collapses every duration to zero.</p>
              </div>
            </div>
          </section>

          {/* ===== The one idea ===== */}
          <section className={s.sec} id="idea">
            <p className={s.kick}>03 · The one idea</p>
            <h2 className={s.h2}>Four inputs, and every component follows</h2>
            <p>
              Components read semantic tokens only. Four independent inputs on the page decide what those tokens resolve
              to. Because the axes are independent, there is no grid of variants to maintain.
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
              The real token maths, running in your browser. Drag the hue, switch to dark, go compact, and flip between the
              dashboard, the components and the table. Nothing on the screen names a colour.
            </p>
            <ThemePlayground />
            <p className={s.fine}>
              Hue is a number, not a list of approved brands, so a product can pick a hue nobody has tried and every
              component still resolves correctly. The number on the left is the contrast of the button label, measured live.
            </p>

            <h3 className={s.h3}>Eight layers, and components may only touch the last</h3>
            <p>
              Each layer can override the one above it. Nothing below the primitives resolves until mode and density are
              set on the page: a deliberate fail-loud choice, so a missing setup breaks visibly instead of half-working.
            </p>
            <ol className={s.cascade}>
              {cascade.map((c) => (
                <li key={c.f}>
                  <code>{c.f}</code>
                  <span>{c.d}</span>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>Every background brings its own text colour</h3>
            <p>
              Semantic tokens come in pairs, declared on adjacent lines, so no component can paint a surface and leave the
              text colour to chance. A surface also tells its children what it is painted on, so a muted label inside a
              gradient card still reads.
            </p>
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
            <p className={s.fine}>
              Between L 0.515 and 0.585, no text colour reaches 4.5:1 at the worst hues. A twelve-step ramp has to cross
              that band somewhere, so the decision was which steps land in it: the borders, which nothing sits on.
            </p>

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
                <span>Gradients</span>
                <b>Never straddle the crossover</b>
                <p>
                  Every gradient keeps all its stops on one side of L 0.564, because no text colour can read across both
                  ends. That’s why the accent gradients start at step 9, not 8: from 8, white text scored 2.99:1.
                </p>
              </li>
            </ol>
          </section>

          {/* ===== Components ===== */}
          <section className={s.sec} id="components">
            <p className={s.kick}>05 · Components</p>
            <h2 className={s.h2}>93 components, one set of rules</h2>
            <p>
              The library covers what an enterprise product actually needs, from layout and forms to a data table with
              saved views and 22 chart types tuned to WorldLink’s data.
            </p>
            <div className={s.inventory}>
              {inventory.map((g) => (
                <div key={g.t}>
                  <b>
                    {g.t} <span>{g.items.length}</span>
                  </b>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className={s.h3}>The components, in WorldLink red</h3>
            <p>Drawn with the system’s own tokens and component rules.</p>
            <Themed>
              <ComponentSheet />
            </Themed>

            <h3 className={s.h3}>Built for dense, real data</h3>
            <p>
              Tables are where enterprise screens live, so the table is built entirely from tokens: the row rule is the
              faintest border, the selected row is the subtlest accent tint, the header recedes on a subtle surface, and
              row actions fade in with opacity so the row never jumps under the pointer.
            </p>
            <Themed density="compact">
              <DataTable />
            </Themed>

            <h3 className={s.h3}>Details that make it feel designed</h3>
            <ol className={s.cards}>
              {componentRules.map((c, i) => (
                <li key={c.t}>
                  <span>0{i + 1}</span>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>

            <h3 className={s.h3}>Two props, twelve intents</h3>
            <p>
              Props sit on independent axes instead of one long variant list. Emphasis says how loud a button is, tone says
              what it’s about. Four by three gives twelve intents, including one a single variant prop can’t express.
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

            <h3 className={s.h3}>Specified state by state in Figma</h3>
            <p>
              Before a component was built, it was drawn across every size and state, so engineering built from a spec and
              not from a guess.
            </p>
            <div className={s.artPair}>
              <Artifact src={`${IMG}/v1/buttons.webp`} alt="Button specification: four sizes by default, hover, pressed and disabled, in four styles" w={1220} h={1230} from="Button · sizes × states × styles" />
              <Artifact src={`${IMG}/v1/inputs.webp`} alt="Input field specification: default, focus, filled, disabled and error states, with and without icons" w={1604} h={1229} from="Input · every state" />
            </div>
          </section>

          {/* ===== Implementation ===== */}
          <section className={s.sec} id="implementation">
            <p className={s.kick}>06 · Implementation</p>
            <h2 className={s.h2}>From Figma to a four-line install</h2>
            <p>
              Tokens ship as CSS, not a JS import, because the cascade has to load first and a JS import gives no say over
              when a stylesheet lands. An app opts in with two imports and four attributes.
            </p>
            <div className={s.install}>
              <div className={s.code}>
                <p>
                  <i>import</i> <b>&apos;ds-ui/tokens&apos;</b>
                </p>
                <p>
                  <i>import</i> <b>&apos;ds-ui/styles.css&apos;</b>
                </p>
                <p>
                  <i>import</i> {'{ Button }'} <i>from</i> <b>&apos;ds-ui&apos;</b>
                </p>
                <p>&nbsp;</p>
                <p>
                  {'<'}
                  <b>html</b> data-mode=<i>&quot;light&quot;</i> data-density=<i>&quot;roomy&quot;</i>
                </p>
                <p>
                  {'      '}style=<i>&quot;--h1: 23; --h2: 62&quot;</i>
                  {'>'}
                </p>
                <small>{'// the eight-layer cascade must come first'}</small>
              </div>
              <ul className={s.entries}>
                <li>
                  <code>ds-ui</code>
                  Every component, plus the icon registry
                </li>
                <li>
                  <code>ds-ui/tokens</code>
                  The cascade, flattened into one file
                </li>
                <li>
                  <code>ds-ui/styles.css</code>
                  Every component’s rules
                </li>
                <li>
                  <code>ds-ui/icons</code>
                  Single glyphs, for code that imports one directly
                </li>
              </ul>
            </div>

            <h3 className={s.h3}>Every component ships the same four stories</h3>
            <p>Plus named behaviour stories with their interactions, so every page of the docs reads the same way.</p>
            <ul className={s.stories4}>
              {stories.map((x) => (
                <li key={x.t}>
                  <b>{x.t}</b>
                  <p>{x.d}</p>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}>Rules for everyone who contributes</h3>
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
            <p className={s.kick}>07 · Self-checking</p>
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
                  the check reports instead of blocking, and charts carry a second cue, dashes, markers or labels, meanwhile.
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
            <p className={s.kick}>08 · Outcome</p>
            <h2 className={s.h2}>One system behind WorldLink’s products</h2>
            <ul className={`${s.glance} ${s.glance3}`}>
              <li>
                <span>Design to development</span>
                <p className={s.glanceNum}>
                  <b>~50%</b>
                </p>
                <small>less rework between design and engineering on products built with WorldKit</small>
              </li>
              <li>
                <span>Theming</span>
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

            <h3 className={s.h3}>In production: the GRC platform</h3>
            <p>
              WorldLink’s AI-powered GRC platform is built on WorldKit: the same red, the same stat cards, tinted status
              badges and dense tables, across six modules.
            </p>
            <Artifact src="/work/grc/screens/gap-analysis.webp" alt="GRC platform gap analysis: stat cards, filters, tinted match badges and confidence scores" w={2400} h={1368} from="GRC platform · Gap Analysis" />
            <Artifact src="/work/grc/screens/extraction.webp" alt="GRC platform regulatory extraction: a framework table with version and region badges and a primary action" w={2400} h={1368} from="GRC platform · Regulatory Extraction" />

            <h3 className={s.h3}>By the numbers</h3>
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
