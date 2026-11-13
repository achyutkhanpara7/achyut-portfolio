import type { Metadata } from 'next';
import { site } from '@/content/work';

// Per-page share card + canonical, so a shared link shows that page (title, text, picture), not the home page.
export function pageMeta(path: string, title: string, description: string, image = '/og/home-v3.jpg'): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: path.startsWith('/work/') && path !== '/work/' ? 'article' : 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title: `${title} · ${site.name}`, description, images: [image] },
  };
}

export const caseImage = (slug: string) => `/og/${slug}.jpg`;
