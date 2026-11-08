import Reveal from '@/components/Reveal';
import LiquidButton from '@/components/LiquidButton';
import Stickers from '@/components/about/Stickers';
import Travel, { type Trip } from '@/components/about/Travel';
import Playlist, { songs } from '@/components/about/Playlist';
import s from './about.module.css';

export const metadata = { title: 'About' };

// How a messy problem becomes a product — each step paired with where it really happened.
const steps = [
  {
    t: 'Listen',
    d: 'Sit with the people who use it. Write down what actually hurts.',
    eg: 'Network governance: a UX audit came before any redesign.',
    tone: 'paper',
  },
  {
    t: 'Untangle',
    d: 'Sort the mess into jobs, flows and priorities.',
    eg: 'GRC platform: six modules, one place to start.',
    tone: 'mint',
    note: 'my favourite part :)',
  },
  {
    t: 'Shape',
    d: 'Sketch, test, repeat. On the design system, with real data.',
    eg: 'WorldKit tokens and components under every screen.',
    tone: 'paper',
  },
  {
    t: 'Build',
    d: 'A React prototype the team can click, not just look at.',
    eg: 'This site: designed and built by me, in Next.js.',
    tone: 'night',
  },
  {
    t: 'Prove',
    d: 'A screen is good when it moves a number the business tracks.',
    eg: 'WorldKit: about 50% less design-to-dev rework.',
    tone: 'emerald',
  },
];

const stamps = [
  { big: '20+', small: '0→1 products', ring: 'ZERO TO ONE · ACROSS MY WHOLE CAREER · ' },
  { big: '4', small: 'Fortune 100 programs', ring: 'ENTERPRISE AND AGENTIC AI PROGRAMS · ' },
  { big: '~50%', small: 'less design-to-dev rework', ring: 'WORLDKIT · ONE SYSTEM, ANY BRAND · ' },
  { big: '4.0', small: 'GPA, M.S. UX Design', ring: 'ARIZONA STATE UNIVERSITY · 2025 · ' },
  { big: '2024', small: 'ASU Sun Award', ring: 'FOR A FUNDRAISER BANNER DESIGN · ' },
];

const trips: Trip[] = [
  {
    key: 'wy',
    title: 'Grand Teton',
    state: 'Wyoming',
    abbr: 'WY',
    cover: '/img/about/jenny-peak.webp',
    coverAlt: 'Snow-capped peaks above Jenny Lake',
    coverPos: '50% 30%',
    note: 'Wish you were here. The lake really was this blue, I promise :)',
    photos: [
      { src: '/img/about/teton-me.webp', alt: 'Achyut in front of the Teton range', cap: 'Me and the Tetons' },
      { src: '/img/about/jenny-peak.webp', alt: 'Snow-capped peaks above Jenny Lake', cap: 'Jenny Lake' },
      { src: '/img/about/jenny-trail.webp', alt: 'A trail fence above the lake', cap: 'Lakeshore trail' },
      { src: '/img/about/teton-reflection.webp', alt: 'The Tetons reflected in a still river', cap: 'Teton reflections' },
      { src: '/img/about/jenny-lake.webp', alt: 'Jenny Lake framed by pines', cap: 'Between the pines' },
    ],
  },
  {
    key: 'ys',
    title: 'Yellowstone',
    state: 'Wyoming',
    abbr: 'WY',
    cover: '/img/about/yellowstone-me.webp',
    coverAlt: 'Achyut at the terraces of Mammoth Hot Springs',
    coverPos: '50% 35%',
    note: 'The ground steams here. Nature is a better designer than all of us :)',
    photos: [{ src: '/img/about/yellowstone-me.webp', alt: 'Achyut at Mammoth Hot Springs', cap: 'Mammoth Hot Springs' }],
  },
  {
    key: 'wa',
    title: 'Seattle',
    state: 'Washington',
    abbr: 'WA',
    cover: '/img/about/seattle-day.webp',
    coverAlt: 'The Seattle skyline across the water',
    coverPos: '50% 60%',
    note: 'Cherry blossoms, a skyline and a sunset in one trip. I did not stop shooting :)',
    photos: [
      { src: '/img/about/space-needle.webp', alt: 'Looking up at the Space Needle', cap: 'Space Needle' },
      { src: '/img/about/uw-quad.webp', alt: 'Cherry trees in bloom on the UW quad', cap: 'Cherry blossoms, UW' },
      { src: '/img/about/uw-blossom.webp', alt: 'Blossoms in front of a gothic brick building', cap: 'Spring on campus' },
      { src: '/img/about/seattle-day.webp', alt: 'The skyline across the water', cap: 'Skyline by day' },
      { src: '/img/about/seattle-night.webp', alt: 'The skyline lit up at dusk', cap: 'Skyline at dusk' },
      { src: '/img/about/sound-sunset.webp', alt: 'Sun setting behind mountains over the water', cap: 'Sunset over the Sound' },
    ],
  },
];

const timeline = [
  { when: 'Oct 2025 — now', what: 'UX Designer & Researcher', where: 'WorldLink', now: true },
  { when: 'Jun — Oct 2025', what: 'UX Designer & Researcher', where: 'Sayaam For All' },
  { when: 'Jul 2024 — May 2025', what: 'Digital Assistant, Business & Finance', where: 'Arizona State University' },
  { when: 'Sep — Dec 2024', what: 'UX Researcher', where: 'StreamerStakes' },
  { when: '2023 — 2025', what: 'M.S. User Experience Design', where: 'Arizona State University' },
  { when: 'Sep 2022 — Jun 2023', what: 'UX Designer & Researcher', where: 'Infotop Solutions' },
  { when: 'May — Aug 2022', what: 'UX Designer & Researcher', where: 'Thinkwik Technologies' },
  { when: 'Jan — Feb 2022', what: 'UX Design Intern', where: 'Simform Solutions' },
  { when: '2018 — 2022', what: 'B.E. Computer Engineering', where: 'Gujarat Technological University' },
];

export default function About() {
  return (
    <>
      {/* ---------- Hero: words left, a desk of photos right ---------- */}
      <section className={`container ${s.hero}`}>
        <div className={s.heroText}>
          <Reveal>
            <span className="kicker">About</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className={s.h1}>
              Hi, I&apos;m <span className={s.name}>Achyut</span>.
              <br />I design it.
              <br />
              <span className="turn">Then I build it.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className={s.lede}>
              Designer who codes, researcher who ships. I take the products people find intimidating, like compliance,
              governance and AI operations, and make them clear enough to use on the first try.
            </p>
            <p className={s.lede}>
              Off the clock I&apos;m chasing mountains, good coffee and loud concerts. Same curiosity, different screen.
            </p>
          </Reveal>
          <Reveal delay={0.18} className={s.chips}>
            <span>coffee first</span>
            <span>national parks</span>
            <span>live music</span>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Stickers />
        </Reveal>
      </section>

      {/* ---------- Thinking: a notebook page ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Inside my head</span>
          <h2 className={s.h2}>
            How a messy problem <span className="turn">becomes a product.</span>
          </h2>
        </Reveal>
        <Reveal className={s.notebook}>
          <div className={s.rings} aria-hidden>
            {Array.from({ length: 14 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <p className={`hand ${s.nbTitle}`}>my process, roughly — in pencil, never in pen</p>
          <ol className={s.notes}>
            {steps.map((st, i) => (
              <li key={st.t} className={`${s.note} ${s[st.tone]}`} style={{ ['--r' as string]: `${[-3, 2, -1.5, 2.5, -2][i]}deg` }}>
                <span className={s.pin} aria-hidden />
                <span className={s.noteN}>{String(i + 1).padStart(2, '0')}</span>
                <b className={s.noteT}>{st.t}</b>
                <span className={s.noteD}>{st.d}</span>
                <span className={s.noteEg}>
                  <em>e.g.</em> {st.eg}
                </span>
                {st.note && <span className={`hand ${s.scribble}`}>{st.note}</span>}
                {i < steps.length - 1 && (
                  <svg className={s.arrow} viewBox="0 0 60 30" aria-hidden>
                    <path d="M2 18 C 16 4, 34 30, 52 12" />
                    <path d="M44 9 L 53 11 L 49 20" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className={s.stamps}>
          {stamps.map((st, i) => (
            <Reveal key={st.big} delay={i * 0.06} className={s.stamp}>
              <svg viewBox="0 0 200 200" className={s.stampRing} aria-hidden>
                <defs>
                  <path id={`ring-${i}`} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text>
                  <textPath href={`#ring-${i}`} textLength="486" lengthAdjust="spacing">
                    {st.ring}
                  </textPath>
                </text>
              </svg>
              <div className={s.stampCore}>
                <b>{st.big}</b>
                <span>{st.small}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Travel: postcards + film strip ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Postcards</span>
          <h2 className={s.h2}>
            Where I go <span className="turn">to reset.</span>
          </h2>
          <p className={s.sub}>Flip a postcard, open the roll, or catch the film strip as it goes by.</p>
        </Reveal>
        <Travel trips={trips} />
      </section>

      {/* ---------- Little things ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Little things</span>
          <h2 className={s.h2}>
            What keeps me <span className="turn">curious.</span>
          </h2>
        </Reveal>
        <div className={s.things}>
          <Reveal className={`${s.thing} ${s.thingPhoto}`} delay={0}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/about/coffee-top.webp" alt="Two lattes and a croissant from above" loading="lazy" />
            <div className={s.thingBody}>
              <span className={s.thingK}>Coffee</span>
              <h3>Coffee first, then Figma.</h3>
              <p>A latte, a croissant and a quiet café table is a good start to any design problem.</p>
            </div>
          </Reveal>
          <Reveal className={`${s.thing} ${s.thingPhoto}`} delay={0.06}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/about/concert.webp" alt="Achyut at a concert under blue lasers" loading="lazy" style={{ objectPosition: '28% 50%' }} />
            <div className={s.thingBody}>
              <span className={s.thingK}>Live music</span>
              <h3>Front row energy.</h3>
              <p>Big stages, lasers and a crowd singing along. Good shows are good experience design.</p>
            </div>
          </Reveal>
          <Reveal className={`${s.thing} ${s.thingMake}`} delay={0.12}>
            <span className={s.thingK}>Design for fun</span>
            <h3>I make things outside work too.</h3>
            <p>Brand identities, posters and social graphics, including the banner that won ASU&apos;s 2024 Sun Award.</p>
            <div className={s.thingCta}>
              <LiquidButton href="/work/brand/" variant="cream">
                See brand work
              </LiquidButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Playlist (shows once songs are added) ---------- */}
      {songs.length > 0 && (
        <section className={`container ${s.section}`}>
          <Reveal className={s.head}>
            <span className="kicker">On repeat</span>
            <h2 className={s.h2}>
              What&apos;s playing <span className="turn">while I design.</span>
            </h2>
          </Reveal>
          <Playlist />
        </section>
      )}

      {/* ---------- Path ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Save points</span>
          <h2 className={s.h2}>
            Every role, <span className="turn">in order.</span>
          </h2>
        </Reveal>
        <ol className={s.path}>
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.when + t.where} delay={Math.min(i, 5) * 0.04} className={t.now ? s.pathNow : ''}>
              <span className={s.pathDot} aria-hidden />
              <span className={s.when}>{t.when}</span>
              <b>{t.what}</b>
              <span className={s.where}>{t.where}</span>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
