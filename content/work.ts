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
  image?: string; // real screenshot for the home feature card
  tone: 'night' | 'emerald' | 'mint' | 'paper';
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
    image: '/img/grc-cover.webp',
    tone: 'night',
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
    tone: 'emerald',
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
    image: '/img/network-overview.webp',
    tone: 'mint',
  },
  {
    slug: 'seven-eleven',
    title: 'AI Operations Platform for Retail',
    summary:
      'Six personas, one ecosystem — from the store floor to corporate and IT — designed to feel like one product.',
    client: '7-Eleven · Enterprise retail',
    year: '2026',
    role: 'UX Designer',
    team: 'TODO',
    timeline: 'TODO',
    tools: ['Figma', 'Figma MCP', 'HTML prototypes'],
    tags: ['Multi-persona', 'AI dashboards', 'Retail ops'],
    cover: 'retail',
    hook: ['Six roles.', 'One operating picture.'],
    image: '/img/retail-store.webp',
    tone: 'paper',
  },
];

// Older / secondary work: links out to existing case studies until rebuilt in this theme.
// Paste the real URL into `href` (Figma Make, Framer, Figma prototype, etc.).
export type MoreWork = { title: string; context: string; href: string | null };

export const moreWork: MoreWork[] = [
  { title: 'GEO Sentiments', context: 'Pharma · AI insights', href: null },
  { title: 'Coffee Bean Digital Twin', context: 'Pharma · Simulation', href: null },
  { title: 'GTN Contracting Twin', context: 'Pharma · Sales simulator', href: null },
  { title: 'ASU CFO Office', context: 'Higher ed · Finance', href: null },
  { title: 'Swift Save', context: 'Fintech · Mobile', href: null },
];

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
