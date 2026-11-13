import type { MetadataRoute } from 'next';
import { site } from '@/content/work';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/unlock/', '/lab/', '/api/'] },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
