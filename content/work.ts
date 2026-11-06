// Single source of truth for every project on the site.
// Home grid, /work list, case-study headers and "next project" links all read from here.

export type CoverKind = 'grc' | 'worldkit' | 'network' | 'retail' | 'coffee';

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
      'An AI-powered GRC platform that takes compliance work from days to hours: six modules on one design system, for compliance, risk and security teams.',
    client: 'WorldLink · GRC platform',
    year: '2025–26',
    role: 'Lead UX / Product Designer',
    team: 'WorldLink product and engineering',
    timeline: '6 months',
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
      'WorldLink’s design system, built twice: a Figma-to-code token pipeline, then 93 React components that re-theme from four inputs and check themselves.',
    client: 'WorldLink · Design system',
    year: '2025–26',
    role: 'Design system lead',
    team: 'With WorldLink product designers and engineers',
    timeline: 'v1 in 16 weeks, v2 through 2026',
    tools: ['Figma Variables', 'React', 'OKLCH tokens', 'Storybook', 'WCAG 2.2'],
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
      'An AI-powered network governance platform for a Fortune 100 bank, designed so every decision can be explained. 12 weeks, 8 users, 2 rounds of testing.',
    client: 'Fortune 100 bank · AI network governance',
    year: '2026',
    role: 'UX designer, end to end',
    team: 'Product lead, engineering, sales and client experts',
    timeline: '12 weeks',
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
      'An AI operations platform that shows every retail role, from the store floor to corporate and IT, what to act on first. Six portals on one design system.',
    client: 'Fortune 100 retail · AI operations',
    year: '2026',
    role: 'UX Designer',
    team: 'WorldLink product, engineering and client stakeholders',
    timeline: 'TODO',
    tools: ['Figma', 'Figma Make', 'Figma MCP', 'HTML prototypes'],
    tags: ['Multi-persona', 'AI dashboards', 'Retail ops'],
    cover: 'retail',
    hook: ['Six roles.', 'One thing to act on first.'],
    image: '/work/retail-ops/cover.webp',
    tone: 'paper',
    industry: 'Retail operations · AI',
    locked: true,
  },
  {
    slug: 'coffee-bean-twin',
    title: 'Coffee Bean Digital Twin',
    summary:
      'A digital twin that shows how coffee loses quality from farm to roast: three connected twins, scenario runs, A/B comparison, Monte Carlo risk and AI prediction.',
    client: 'WorldLink Labs · Simulation & decision support',
    year: '2026',
    role: 'UX / Product Designer',
    team: 'WorldLink design, data science and client stakeholders',
    timeline: 'TODO',
    tools: ['Figma', 'Figma Make', 'FigJam'],
    tags: ['Digital twin', 'Simulation', 'Data-heavy UI'],
    cover: 'coffee',
    hook: ['Every bean,', 'with a heartbeat.'],
    image: '/work/coffee-bean-twin/cover.webp',
    tone: 'night',
    industry: 'Simulation · Food science',
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
