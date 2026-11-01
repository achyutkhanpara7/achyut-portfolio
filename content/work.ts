// Single source of truth for every project on the site.
// Home grid, /work list, case-study headers and "next project" links all read from here.

export type CoverKind = 'grc' | 'worldkit' | 'network' | 'retail';

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client: string; // what is shown publicly — keep NDA-safe
  year: string;
  role: string;
  team: string;
  timeline: string;
  tools: string[];
  tags: string[];
  cover: CoverKind;
  hook: [string, string]; // two-line brand hook: second line is the turn
  image?: string; // cover in the mockup frame: /work/<slug>/cover.webp, 1600×1000
  tone: 'night' | 'emerald' | 'mint' | 'paper';
  industry: string;
  locked: boolean; // NDA work: password-protected (see middleware.ts)
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'grc',
    title: 'Governance, Risk & Compliance Platform',
    summary:
      'Turning six dense compliance modules into one platform people can find their way through on the first try.',
    client: 'WorldLink · Internal platform',
    year: '2025–26',
    role: 'Lead UX Designer & Researcher',
    team: 'TODO: e.g. 1 PM, 4 engineers, 1 designer',
    timeline: 'TODO: e.g. 5 months',
    tools: ['Figma', 'WorldKit', 'FigJam', 'React'],
    tags: ['Enterprise SaaS', 'Research', 'Information architecture'],
    cover: 'grc',
    hook: ['Six modules.', 'One place to start.'],
    image: '/work/grc/cover.webp',
    tone: 'night',
    industry: 'Governance, risk & compliance',
    locked: true,
  },
  {
    slug: 'worldkit',
    title: 'WorldKit Design System',
    summary:
      'One token pipeline from Figma to Tailwind to Storybook, so design and code stop drifting apart.',
    client: 'WorldLink · Design system',
    year: '2025–26',
    role: 'Design system lead',
    team: 'TODO',
    timeline: 'TODO',
    tools: ['Figma Variables', 'Tailwind', 'Storybook', 'WCAG 2.2'],
    tags: ['Design systems', 'Tokens', 'Design engineering'],
    cover: 'worldkit',
    hook: ['Change one token.', 'Every product follows.'],
    image: '/work/worldkit/cover.webp',
    tone: 'emerald',
    industry: 'Design systems',
    locked: true,
  },
  {
    slug: 'network-governance',
    title: 'Network Governance Platform',
    summary:
      'A UX audit and redesign that reorganized a governance tool around three verbs: Monitor, Resolve, Prove.',
    client: 'Fortune 100 financial services · POC',
    year: '2026',
    role: 'UX Designer & front-end prototyper',
    team: 'TODO',
    timeline: 'TODO',
    tools: ['Figma', 'Client design system', 'Claude Code', 'React'],
    tags: ['UX audit', 'Data-heavy UI', 'Prototyping'],
    cover: 'network',
    hook: ['Monitor. Resolve.', 'Then prove it.'],
    image: '/work/network-governance/cover.webp',
    tone: 'mint',
    industry: 'Financial services · Infrastructure',
    locked: true,
  },
  {
    slug: 'retail-ops',
    title: 'AI Operations Platform for Retail',
    summary:
      'Six personas, one ecosystem — from the store floor to corporate and IT — designed to feel like one product.',
    client: 'Fortune 100 retail · AI operations',
    year: '2026',
    role: 'UX Designer',
    team: 'TODO',
    timeline: 'TODO',
    tools: ['Figma', 'Figma MCP', 'HTML prototypes'],
    tags: ['Multi-persona', 'AI dashboards', 'Retail ops'],
    cover: 'retail',
    hook: ['Six roles.', 'One operating picture.'],
    image: '/work/retail-ops/cover.webp',
    tone: 'paper',
    industry: 'Retail operations · AI',
    locked: true,
  },
];

// ------------------------------------------------------------------
// Every project on the site — UX and Brand. The /work pages and the
// home "lens" cards read from here.
//   link 'case'     → has a full case study at /work/<slug>/
//   link 'external' → opens an existing case study (Figma, Framer…) — set href
//   link 'soon'     → listed, not clickable yet
// ------------------------------------------------------------------
export type Discipline = 'ux' | 'brand';

export type Project = {
  slug: string;
  title: string;
  context: string; // industry · type — keep NDA-safe
  year: string; // '' = unknown, hidden in UI
  discipline: Discipline;
  locked: boolean;
  link: 'case' | 'external' | 'soon';
  href?: string;
  cover?: CoverKind;
  image?: string;
  pattern?: 'dots' | 'grid' | 'rings';
  tone?: CaseStudy['tone'];
  summary?: string;
};

const fromCase = (c: CaseStudy): Project => ({
  slug: c.slug,
  title: c.title,
  context: c.client,
  year: c.year,
  discipline: 'ux',
  locked: c.locked,
  link: 'case',
  cover: c.cover,
  image: c.image,
  tone: c.tone,
  summary: c.summary,
});

export const projects: Project[] = [
  ...caseStudies.map(fromCase),
  // ---- more UX (WorldLink work stays locked) ----
  { slug: 'geo-sentiments', title: 'GEO Sentiments', context: 'Pharma · AI insights', year: '', discipline: 'ux', locked: true, link: 'soon', pattern: 'dots' },
  { slug: 'coffee-bean-twin', title: 'Coffee Bean Digital Twin', context: 'Pharma · Simulation', year: '', discipline: 'ux', locked: true, link: 'soon', pattern: 'rings' },
  { slug: 'gtn-twin', title: 'GTN Contracting Twin', context: 'Pharma · Sales simulator', year: '', discipline: 'ux', locked: true, link: 'soon', pattern: 'grid' },
  { slug: 'asu-cfo', title: 'ASU CFO Office', context: 'Higher ed · Finance', year: '', discipline: 'ux', locked: false, link: 'soon', pattern: 'dots' },
  { slug: 'swift-save', title: 'Swift Save', context: 'Fintech · Mobile', year: '', discipline: 'ux', locked: false, link: 'soon', pattern: 'grid' },
  // ---- brand & visual ----
  { slug: 'personal-brand', title: 'Personal Brand System', context: 'Identity · Wordmark, palette, social system', year: '2026', discipline: 'brand', locked: false, link: 'soon', pattern: 'rings', image: '/work/personal-brand/cover.webp' },
  { slug: 'attune', title: 'Attune', context: 'Identity · Enterprise coaching platform', year: '', discipline: 'brand', locked: false, link: 'soon', pattern: 'dots', image: '/work/attune/cover.webp' },
  { slug: 'asu-sun-award', title: 'Harkins Ultimate Fundraiser', context: 'Campaign banner · ASU Sun Award', year: '2024', discipline: 'brand', locked: false, link: 'soon', pattern: 'grid', image: '/work/asu-sun-award/cover.webp' },
];

export const projectCounts = {
  all: projects.length,
  ux: projects.filter((p) => p.discipline === 'ux').length,
  brand: projects.filter((p) => p.discipline === 'brand').length,
};

// Paths the middleware protects (case study pages of locked projects)
export const lockedSlugs = caseStudies.filter((c) => c.locked).map((c) => c.slug);

export const site = {
  name: 'Achyut Khanpara',
  role: 'UX Designer & Design Engineer',
  location: 'Dallas–Fort Worth, TX',
  email: 'achyutkhanpara7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/achyut-khanpara/',
  resume: null as string | null, // TODO: put resume.pdf in /public and set '/resume.pdf'
  url: 'https://achyutkhanpara.com',
  photo: '/img/profile.webp',
};

export function getCase(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return { item: caseStudies[i], next: caseStudies[(i + 1) % caseStudies.length] };
}
