import { pageMeta } from '@/lib/meta';
import Reveal from '@/components/Reveal';
import LiquidButton from '@/components/LiquidButton';
import Reel from '@/components/brand/Reel';
import BookScroll, { type Slide } from '@/components/brand/BookScroll';
import s from './brand.module.css';

export const metadata = pageMeta(
  '/brand/',
  'Brand & Visual Design',
  'Brand guidelines, social campaigns, motion and decks Achyut Khanpara designs for WorldLink: one visual system from the logo to a LinkedIn post.',
);

const IMG = '/brand/worldlink';

const make = [
  { n: '01', t: 'Brand guidelines', d: 'A 30-slide brand book: story, values, pillars, logo system, colour, type, iconography and how it all gets used.' },
  { n: '02', t: 'Social campaigns', d: 'LinkedIn carousels, static posts and GIFs for product launches, thought leadership and hiring.' },
  { n: '03', t: 'Motion & video', d: 'Teaser and demo videos for WorldLink products, from script and storyboard to the final cut.' },
  { n: '04', t: 'Decks & everyday brand', d: 'Executive and sales decks, one-pagers, RFP covers, LinkedIn banners and Teams backgrounds.' },
];

const book: Slide[] = [
  { src: `${IMG}/cover.webp`, n: '01', title: 'Cover' },
  { src: `${IMG}/tagline.webp`, n: '02', title: 'Tagline' },
  { src: `${IMG}/contents.webp`, n: '03', title: 'Contents' },
  { src: `${IMG}/overview.webp`, n: '04', title: 'Brand overview' },
  { src: `${IMG}/story.webp`, n: '05', title: 'Brand story' },
  { src: `${IMG}/values.webp`, n: '06', title: 'Brand values' },
  { src: `${IMG}/pillars.webp`, n: '07', title: 'Brand pillars' },
  { src: `${IMG}/marketing.webp`, n: '09', title: 'Marketing content guidelines' },
  { src: `${IMG}/social-strategy.webp`, n: '10', title: 'Social media strategy' },
  { src: `${IMG}/social-creatives.webp`, n: '11', title: 'Selected social creatives' },
  { src: `${IMG}/logo.webp`, n: '12', title: 'Logo' },
  { src: `${IMG}/logo-variation.webp`, n: '13', title: 'Logo variation' },
];

const bento = [
  { src: `${IMG}/logo-variation.webp`, t: 'One mark, every surface', d: 'Light, red and dark versions of the wordmark and the // symbol, ready for print and screen.', wide: true },
  { src: `${IMG}/social-creatives.webp`, t: 'Social that looks like one brand', d: 'Bold headline, one red accent, real product visuals.' },
  { src: `${IMG}/pillars.webp`, t: 'Pillars people remember', d: 'Four ideas every post, deck and page comes back to.' },
  { src: `${IMG}/social-strategy.webp`, t: 'A voice for every channel', d: 'Executive voice, visual storytelling and a clear call to action.', wide: true },
];

export default function BrandPage() {
  return (
    <>
      <section className={`container ${s.hero}`}>
        <Reveal>
          <p className="eyebrow">Brand &amp; visual design · WorldLink</p>
          <h1 className={s.h1}>
            Brand systems <span className="accent">that move.</span>
          </h1>
          <p className={s.sub}>
            Alongside product design, I design WorldLink&apos;s brand: the guidelines, the social campaigns, the motion and the
            decks. One visual system, from the logo to a LinkedIn post.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={s.stage}>
            <Reel src={`${IMG}/reel.mp4`} poster={`${IMG}/reel-poster.webp`} label="Motion reel of the WorldLink brand book" />
          </div>
          <p className={s.caption}>WorldLink brand book in motion · designed in Figma</p>
        </Reveal>
      </section>

      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <p className="eyebrow">What I make</p>
          <h2 className={s.h2}>Four kinds of work, one system.</h2>
        </Reveal>
        <ul className={s.make}>
          {make.map((m, i) => (
            <Reveal as="li" key={m.n} delay={i * 0.06} className={s.makeCard}>
              <span className={s.makeN}>{m.n}</span>
              <h3>{m.t}</h3>
              <p>{m.d}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className={s.bookSection} aria-labelledby="book-h">
        <div className={`container ${s.head}`}>
          <Reveal>
            <p className="eyebrow">Brand guidelines</p>
            <h2 id="book-h" className={s.h2}>
              The brand book, <span className="accent">page by page.</span>
            </h2>
            <p className={s.sub}>Thirteen pages from the 30-slide guide, from the story to the logo.</p>
          </Reveal>
        </div>
        <BookScroll slides={book} />
      </section>

      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <p className="eyebrow">Inside the system</p>
          <h2 className={s.h2}>Small rules, big consistency.</h2>
        </Reveal>
        <div className={s.bento}>
          {bento.map((b, i) => (
            <Reveal key={b.src} delay={i * 0.06} className={`${s.tile} ${b.wide ? s.wide : ''}`}>
              <div className={s.tileImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt="" loading="lazy" width={1600} height={900} />
              </div>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={s.marqueeWrap} aria-hidden>
        <div className={s.marquee}>
          {[...book, ...book].map((sl, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={sl.src} alt="" loading="lazy" width={480} height={270} />
          ))}
        </div>
      </section>

      <section className={`container ${s.section} ${s.cta}`}>
        <Reveal>
          <h2 className={s.h2}>
            Want the full social, motion and deck work? <span className="accent">Just ask.</span>
          </h2>
          <div className={s.ctaRow}>
            <LiquidButton href="/contact/" variant="emerald">
              Let&apos;s talk
            </LiquidButton>
            <LiquidButton href="/work/" variant="black">
              See product work
            </LiquidButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
