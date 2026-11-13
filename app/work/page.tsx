import WorkPage from '@/components/work/WorkPage';

import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/work/', 'Work', 'Case studies in enterprise and agentic AI: network governance for a Fortune 100 bank, a design system, compliance, tariffs, pharma simulation tools and more, from research to coded prototype.');

export default function Page() {
  return <WorkPage filter="all" />;
}
