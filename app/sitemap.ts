import type { MetadataRoute } from 'next';
import { caseStudies, site } from '@/content/work';

// Public pages only: password-protected case studies are left out.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['/', '/work/', '/about/', '/contact/'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    priority: p === '/' ? 1 : 0.8,
  }));
  const cases = caseStudies
    .filter((c) => !c.locked)
    .map((c) => ({ url: `${site.url}/work/${c.slug}/`, lastModified: now, priority: 0.7 }));
  return [...pages, ...cases];
}
