import Reveal from '@/components/Reveal';
import Principles from '@/components/home/think/Principles';
import LiquidButton from '@/components/LiquidButton';
import Gallery, { type Photo } from '@/components/about/Gallery';
import s from './about.module.css';

export const metadata = { title: 'About' };

const facts = [
  { k: 'Based in', v: 'Dallas–Fort Worth, TX' },
  { k: 'From', v: 'Junagadh, Gujarat' },
  { k: 'Studied', v: 'M.S. UX Design, ASU' },
  { k: 'Before that', v: 'B.E. Computer Engineering' },
];

const chapters = [
  {
    n: '01',
    place: 'Gujarat, India',
    title: 'Learned to build',
    body: 'I grew up in Junagadh and studied computer engineering at GTU. My first product design work came at Thinkwik, where I found out I cared more about the people using the software than the software itself.',
    art: 'origin' as const,
  },
  {
    n: '02',
    place: 'Tempe, Arizona',
    title: 'Learned to design',
    body: 'I moved to the US for an M.S. in User Experience Design at Arizona State and finished with a 4.0. Alongside classes I designed for ASU Business & Finance, and a fundraiser banner I made won the 2024 ASU Sun Award.',
    img: '/img/about/asu-diploma.webp',
    alt: 'Achyut in his ASU cap and gown holding his diploma',
    cap: 'Class of 2025 · ASU',
  },
  {
    n: '03',
    place: 'Dallas–Fort Worth, Texas',
    title: 'Now I do both',
    body: 'At WorldLink I take enterprise and agentic AI products from the first interview to a coded prototype, for Fortune 100 teams. Same habit as day one: understand the people, then build the thing.',
    art: 'now' as const,
  },
];

const wyoming: Photo[] = [
  { src: '/img/about/jenny-peak.webp', alt: 'Snow-capped peaks above Jenny Lake under heavy clouds', cap: 'Jenny Lake', shape: 'tall' },
  { src: '/img/about/jenny-trail.webp', alt: 'A trail fence above the lake with mountains behind', cap: 'Lakeshore trail', shape: 'tall' },
  { src: '/img/about/teton-reflection.webp', alt: 'The Teton range reflected in a still river at dusk', cap: 'Teton reflections' },
  { src: '/img/about/jenny-lake.webp', alt: 'Jenny Lake framed by pine trees and peaks', cap: 'Between the pines' },
];

const seattle: Photo[] = [
  { src: '/img/about/space-needle.webp', alt: 'Looking up at the Space Needle against a blue sky', cap: 'Space Needle', shape: 'tall' },
  { src: '/img/about/uw-quad.webp', alt: 'Cherry trees in full bloom on a university quad', cap: 'Cherry blossoms, UW', shape: 'tall' },
  { src: '/img/about/seattle-day.webp', alt: 'The Seattle skyline across the water on a clear day', cap: 'Skyline by day' },
  { src: '/img/about/seattle-night.webp', alt: 'The Seattle skyline lit up at dusk', cap: 'Skyline at dusk' },
  { src: '/img/about/sound-sunset.webp', alt: 'The sun setting behind mountains across the water', cap: 'Sunset over the Sound', shape: 'big' },
  { src: '/img/about/uw-blossom.webp', alt: 'Cherry blossom branches in front of a brick gothic building', cap: 'Spring on campus', shape: 'big' },
];

const timeline = [
  {
    when: 'Oct 2025 — now',
    what: 'UX Designer & Researcher',
    where: 'WorldLink · Dallas–Fort Worth',
    body: 'End-to-end 0-to-1 UX for accelerator initiatives: enterprise design systems, AI-powered SaaS and agentic AI for Fortune 100 clients.',
  },
  { when: 'Jun — Oct 2025', what: 'UX Designer & Researcher', where: 'Sayaam For All' },
  {
    when: 'Jul 2024 — May 2025',
    what: 'Digital Assistant, Business & Finance',
    where: 'Arizona State University',
    body: 'Design and digital work for ASU Business & Finance, including the ASU CFO site. Won the 2024 ASU Sun Award.',
  },
  { when: 'Sep — Dec 2024', what: 'UX Researcher', where: 'StreamerStakes' },
  { when: '2023 — 2025', what: 'M.S. User Experience Design', where: 'Arizona State University', body: '4.0 GPA.' },
  { when: 'Sep 2022 — Jun 2023', what: 'UX Designer & Researcher', where: 'Infotop Solutions' },
  { when: 'May — Aug 2022', what: 'UX Designer & Researcher', where: 'Thinkwik Technologies' },
  { when: 'Jan — Feb 2022', what: 'UX Design Intern', where: 'Simform Solutions' },
  { when: '2018 — 2022', what: 'B.E. Computer Engineering', where: 'Gujarat Technological University' },
];

const tools = ['Figma', 'Claude', 'Framer', 'Illustrator', 'Photoshop', 'Notion', 'React & Next.js'];

export default function About() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={`container ${s.hero}`}>
        <div>
          <Reveal>
            <span className="kicker">About</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className={s.h1}>
              I design it.
              <br />
              <span className="turn">Then I build it.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className={s.lede}>
              I&apos;m Achyut Khanpara. I design the products most people find intimidating, like compliance platforms,
              network governance and AI operations dashboards, and make them clear enough to use on the first try.
            </p>
            <p className={s.lede}>
              Engineering background, design training. I&apos;m happiest where the two meet: a research finding turns
              into a component, and the component turns into something a team can ship.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <dl className={s.facts}>
              {facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className={s.collage}>
          <div className={s.rings} aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <figure className={s.main}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/about/teton-me.webp"
              alt="Achyut smiling in front of the snow-capped Teton range"
              width={665}
              height={1182}
            />
            <figcaption>Grand Teton, Wyoming</figcaption>
          </figure>
          <figure className={s.polaroid}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/about/yellowstone-me.webp"
              alt="Achyut at the travertine terraces of Mammoth Hot Springs"
              width={1086}
              height={724}
            />
            <figcaption>Yellowstone</figcaption>
          </figure>
          <p className={`hand ${s.note}`}>say hi :)</p>
        </div>
      </section>

      {/* ---------- Story ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">My story</span>
          <h2 className={s.h2}>
            From Gujarat to Texas, <span className="turn">one habit the whole way.</span>
          </h2>
        </Reveal>
        <ol className={s.chapters}>
          {chapters.map((c, i) => (
            <Reveal as="li" key={c.n} delay={i * 0.05} className={s.chapter}>
              {c.img ? (
                <figure className={s.chapterImg}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.alt} loading="lazy" />
                  <figcaption>{c.cap}</figcaption>
                </figure>
              ) : c.art === 'origin' ? (
                <div className={`${s.art} ${s.artOrigin}`} aria-hidden>
                  <span className={s.pin} />
                  <b>Junagadh</b>
                  <span>Where it started</span>
                </div>
              ) : (
                <div className={`${s.art} ${s.artNow}`} aria-hidden>
                  <span className={s.live} />
                  <b>Today</b>
                  <span>Enterprise &amp; agentic AI</span>
                </div>
              )}
              <div className={s.chapterText}>
                <span className={s.chapterN}>
                  {c.n} · {c.place}
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- Mindset ---------- */}
      <section className="container">
        <Principles />
      </section>

      {/* ---------- Places ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Off the clock</span>
          <h2 className={s.h2}>
            I recharge outside, <span className="turn">camera in hand.</span>
          </h2>
          <p className={s.sub}>National parks, new cities and long walks. Tap any photo to see it bigger.</p>
        </Reveal>

        <div className={s.trip}>
          <Reveal className={s.tripHead}>
            <span className={s.tripN}>01</span>
            <div>
              <h3>Grand Teton &amp; Yellowstone</h3>
              <p>Wyoming</p>
            </div>
          </Reveal>
          <Gallery photos={wyoming} label="Photos from Grand Teton and Yellowstone" />
        </div>

        <div className={s.trip}>
          <Reveal className={s.tripHead}>
            <span className={s.tripN}>02</span>
            <div>
              <h3>Seattle</h3>
              <p>Washington</p>
            </div>
          </Reveal>
          <Gallery photos={seattle} label="Photos from Seattle" />
        </div>
      </section>

      {/* ---------- Life ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Also me</span>
          <h2 className={s.h2}>
            Coffee, concerts <span className="turn">and side projects.</span>
          </h2>
        </Reveal>

        <div className={s.bento}>
          <Reveal className={`${s.tile} ${s.photoTile}`}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/about/coffee.webp" alt="Two lattes with a croissant on a café tray" loading="lazy" />
            </figure>
            <div className={s.tileBody}>
              <span className={s.tileK}>Coffee</span>
              <h3>Coffee first, then Figma.</h3>
              <p>A latte, a croissant and a quiet café table is a good start to any design problem.</p>
            </div>
          </Reveal>

          <Reveal className={`${s.tile} ${s.photoTile}`} delay={0.05}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/about/concert.webp"
                alt="Achyut at a concert with blue lasers over the arena"
                loading="lazy"
                style={{ objectPosition: '30% 50%' }}
              />
            </figure>
            <div className={s.tileBody}>
              <span className={s.tileK}>Live music</span>
              <h3>Front row energy.</h3>
              <p>Big stages, lasers and a crowd singing along. Good shows are good experience design.</p>
            </div>
          </Reveal>

          <Reveal className={`${s.tile} ${s.make}`} delay={0.1}>
            <span className={s.tileK}>Design for fun</span>
            <h3>I make things outside work too.</h3>
            <p>
              Brand identities, posters and social graphics, including the banner that won ASU&apos;s 2024 Sun Award.
            </p>
            <div className={s.makeCta}>
              <LiquidButton href="/work/brand/" variant="cream">
                See brand work
              </LiquidButton>
            </div>
          </Reveal>

          <Reveal className={`${s.tile} ${s.build}`} delay={0.15}>
            <span className={s.tileK}>Building</span>
            <h3>This site included.</h3>
            <p>Designed in Figma, built in Next.js. If I design it, I like to be the one who ships it.</p>
            <ul className={s.tools}>
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Path ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Path so far</span>
          <h2 className={s.h2}>
            Every role, <span className="turn">in order.</span>
          </h2>
        </Reveal>
        <ol className={s.timeline}>
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.when + t.where} delay={Math.min(i, 4) * 0.04}>
              <span className={s.when}>{t.when}</span>
              <div>
                <h3>{t.what}</h3>
                <p className={s.where}>{t.where}</p>
                {t.body && <p>{t.body}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
