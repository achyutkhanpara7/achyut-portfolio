import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Caveat, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import CursorPill from '@/components/CursorPill';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';
import Splash from '@/components/Splash';
import { Analytics } from '@vercel/analytics/next';
import { site } from '@/content/work';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
});
const caveat = Caveat({ subsets: ['latin'], weight: ['700'], variable: '--font-caveat' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.role}`, template: `%s · ${site.name}` },
  description:
    'Product designer and UX researcher in Plano, Texas, designing B2B SaaS and agentic AI products for Fortune 100 teams in fintech, pharma and retail: dashboards, data visualization, complex workflows and design systems.',
  keywords: [
    'Product Designer',
    'UX Designer',
    'UX Researcher',
    'Design Engineer',
    'B2B SaaS',
    'Enterprise SaaS',
    'Agentic AI',
    'Generative AI',
    'Fintech',
    'Financial services',
    'GRC',
    'Pharma',
    'Life sciences',
    'Retail',
    'Data visualization',
    'Dashboards',
    'Complex workflows',
    'Design systems',
    'Information architecture',
    'Accessibility',
    'WCAG 2.2',
    'Plano, Texas',
    'Dallas',
  ],
  // Draft: keep search engines out until launch. Delete this line when the site goes live on achyutkhanpara.com.
  robots: { index: false, follow: false },
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: 'Pixels are cheap. Confusion is expensive.',
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
};

// Runs before paint: decide whether the splash plays, so there's never a flash.
const bootScript = `(function(){var d=document.documentElement;var skip=false;try{skip=sessionStorage.getItem('ak-splash')==='1'}catch(e){skip=true}
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)skip=true;
if(skip){d.classList.add('no-splash');d.setAttribute('data-ready','1')}else{d.classList.add('splashing')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <noscript>
          <style>{`.splash{display:none}#main{transform:none!important;opacity:1!important}[data-line]>span{transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: site.name,
              jobTitle: 'Product Designer & UX Researcher',
              url: site.url,
              email: `mailto:${site.email}`,
              sameAs: [site.linkedin],
              address: { '@type': 'PostalAddress', addressLocality: 'Plano', addressRegion: 'TX', addressCountry: 'US' },
              alumniOf: [
                { '@type': 'CollegeOrUniversity', name: 'Arizona State University' },
                { '@type': 'CollegeOrUniversity', name: 'Gujarat Technological University' },
              ],
              knowsAbout: [
                'Product design',
                'UX research',
                'B2B SaaS',
                'Enterprise AI',
                'Agentic AI',
                'Fintech',
                'Pharma',
                'Retail operations',
                'Data visualization',
                'Dashboards',
                'Design systems',
                'Information architecture',
                'Accessibility (WCAG 2.2)',
              ],
            }),
          }}
        />
        <a href="#main" className="skip">Skip to content</a>
        <Splash />
        <ScrollProgress />
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CursorPill />
        <Analytics />
      </body>
    </html>
  );
}
