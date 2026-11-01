import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Caveat, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Splash from '@/components/Splash';
import { site } from '@/content/work';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
});
const caveat = Caveat({ subsets: ['latin'], weight: ['700'], variable: '--font-caveat' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s · ${site.name}` },
  description:
    'I make complex enterprise and AI products clear enough to use on the first try. UX research, design systems and front-end, in Dallas–Fort Worth.',
  icons: { icon: '/favicon.svg' },
  // Draft: keep search engines out until launch. Delete this line when the site goes live on achyutkhanpara.com.
  robots: { index: false, follow: false },
  openGraph: {
    title: `${site.name} — ${site.role}`,
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
      className={`${jakarta.variable} ${caveat.variable} ${mono.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <noscript>
          <style>{`.splash{display:none}#main{transform:none!important;opacity:1!important}[data-line]>span{transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Splash />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
