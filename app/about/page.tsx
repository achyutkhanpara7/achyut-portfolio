import Reveal from '@/components/Reveal';
import LiquidButton from '@/components/LiquidButton';
import Stickers from '@/components/about/Stickers';
import RoleRotator from '@/components/about/RoleRotator';
import InfoTabs from '@/components/about/InfoTabs';
import Travel, { type Trip } from '@/components/about/Travel';
import Playlist, { songs } from '@/components/about/Playlist';
import { site } from '@/content/work';
import s from './about.module.css';

export const metadata = { title: 'About' };

const experience = [
  { role: 'UX Designer & Researcher', at: 'WorldLink', when: 'Oct 2025 – Present', now: true },
  { role: 'UX Designer & Researcher', at: 'Sayaam For All', when: 'Jun 2025 – Oct 2025' },
  { role: 'Digital Assistant, Business & Finance', at: 'Arizona State University', when: 'Jul 2024 – May 2025' },
  { role: 'UX Researcher', at: 'StreamerStakes', when: 'Sep 2024 – Dec 2024' },
  { role: 'UX Designer & Researcher', at: 'Infotop Solutions Pvt. Ltd.', when: 'Sep 2022 – Jun 2023' },
  { role: 'UX Designer & Researcher', at: 'Thinkwik Technologies Pvt. Ltd.', when: 'May 2022 – Aug 2022' },
  { role: 'UX Design Intern', at: 'Simform Solutions Pvt. Ltd.', when: 'Jan 2022 – Feb 2022' },
];

const education = [
  { role: 'Master of Science in User Experience', at: 'Arizona State University · 4.0 GPA', when: '2023 – 2025' },
  { role: 'B.E. in Computer Engineering', at: 'Gujarat Technological University', when: '2018 – 2022' },
];

const tools = [
  { n: 'Figma', d: 'Design tool', img: '/img/tools/figma.webp' },
  { n: 'Claude', d: 'AI partner', img: '/img/tools/claude.webp' },
  { n: 'Framer', d: 'No-code development', img: '/img/tools/framer.webp' },
  { n: 'Illustrator', d: 'Illustration', img: '/img/tools/illustrator.webp' },
  { n: 'Photoshop', d: 'Photo editing', img: '/img/tools/photoshop.webp' },
  { n: 'Notion', d: 'Notes & docs', img: '/img/tools/notion.webp' },
  { n: 'ChatGPT', d: 'AI chatbot', img: '/img/tools/chatgpt.webp' },
];

const skills = [
  'User research',
  'Usability testing',
  'Mixed-methods research',
  'Qualitative research',
  'Quantitative research',
  'A/B testing',
  'Journey mapping',
  'Information architecture',
  'Interaction design',
  'Prototyping',
  'Design systems',
  'Visual design',
  'Typography',
  'Accessibility',
  'Data visualization',
  'Agentic AI UX',
  'Front-end (React)',
];

// How a messy problem becomes a product.
const steps = [
  { t: 'Listen', d: 'Sit with the people who use it. Write down what actually hurts.', tone: 'paper' },
  { t: 'Untangle', d: 'Sort the mess into jobs, flows and priorities.', tone: 'mint', note: 'my favourite part :)' },
  { t: 'Shape', d: 'Sketch, test, repeat. On a design system, with real data.', tone: 'paper' },
  { t: 'Build', d: 'A React prototype the team can click, not just look at.', tone: 'night' },
  { t: 'Prove', d: 'A screen is good when it moves a number the business tracks.', tone: 'emerald' },
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
      { src: '/img/about/teton-reflection.webp', alt: 'The Tetons reflected in a still river', cap: 'Teton reflections' },
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
    key: 'il',
    title: 'Chicago',
    state: 'Illinois',
    abbr: 'IL',
    cover: '/img/about/chi-river-dusk.webp',
    coverAlt: 'The Chicago River between glass towers at dusk',
    coverPos: '50% 55%',
    note: 'A city that is basically a design system made of steel and glass :)',
    photos: [
      { src: '/img/about/chi-river-dusk.webp', alt: 'The Chicago River between towers at dusk', cap: 'River at dusk' },
      { src: '/img/about/chi-bean.webp', alt: 'Cloud Gate reflecting the skyline in Millennium Park', cap: 'The Bean' },
      { src: '/img/about/chi-tower-night.webp', alt: 'A lit skyscraper against the blue evening sky', cap: 'Lights on' },
    ],
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
      { src: '/img/about/sound-sunset.webp', alt: 'Sun setting behind mountains over the water', cap: 'Sunset over the Sound' },
    ],
  },
];

const offClock = [
  { k: 'Travel', t: 'National parks and big cities', d: 'Tetons, Yellowstone, Chicago, Seattle so far. The postcards are below.' },
  { k: 'Coffee', t: 'Coffee first, then Figma', d: 'A latte and a quiet café table is a good start to any design problem.' },
  { k: 'Music', t: 'Front row energy', d: 'Big stages, lasers and a crowd singing along. Good shows are good experience design.' },
  { k: 'Cooking', t: 'Recipes are prototypes you can eat', d: 'Taste, adjust, repeat. The same loop I use at work, with better snacks.' },
];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function About() {
  return (
    <>
      {/* ---------- Intro: glass profile card + rotating role + info tabs, over a drifting aura ---------- */}
      <section className={s.introBand}>
        <div className={s.drift} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className={`container ${s.intro}`}>
          <aside className={s.profileWrap}>
            <Reveal className={s.profile}>
              <figure className={s.photo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/about/profile-studio.webp" alt="Portrait of Achyut Khanpara" width={400} height={400} />
              </figure>
              <span className={s.based}>
                <i aria-hidden /> {site.location}
              </span>
              <h2 className={s.pName}>Achyut Khanpara</h2>
              <p className={s.pRole}>Product &amp; UX Designer · Design Engineer</p>
              <div className={s.socials}>
                <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Icon d="M4 9h3v11H4zM5.5 4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10 9h3v1.6c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.6V20h-3v-5.8c0-1.4 0-3-1.9-3s-2.1 1.4-2.1 2.9V20h-3z" />
                </a>
                <a href={`mailto:${site.email}`} aria-label="Email">
                  <Icon d="M4 6h16v12H4zM4 7l8 6 8-6" />
                </a>
              </div>
              <div className={s.pCtas}>
                <LiquidButton href={`mailto:${site.email}?subject=Hello%20Achyut`} variant="emerald" size="sm">
                  Contact me
                </LiquidButton>
                <LiquidButton href="/work/" variant="cream" size="sm" icon={false}>
                  See my work
                </LiquidButton>
              </div>
            </Reveal>
          </aside>

          <div className={s.main}>
            <Reveal>
              <p className={`hand ${s.hey}`}>hey there,</p>
              <h1 className={s.h1}>
                I&apos;m Achyut Khanpara, a <RoleRotator /> based in the United States.
              </h1>
              <p className={s.lede}>
                I make complex enterprise and AI products clear enough to use on the first try. Research tells me what
                hurts, design shapes the fix, and I build the front-end so what ships is what we designed. Engineer by
                degree, designer by choice.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <InfoTabs experience={experience} education={education} tools={tools} skills={skills} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Off the clock: the photo desk ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Off the clock</span>
          <h2 className={s.h2}>
            Same curiosity, <span className="turn">different screen.</span>
          </h2>
        </Reveal>
        <div className={s.offGrid}>
          <Reveal>
            <Stickers />
          </Reveal>
          <ul className={s.offList}>
            {offClock.map((o, i) => (
              <Reveal as="li" key={o.k} delay={i * 0.06}>
                <span className={`hand ${s.offK}`}>{o.k}</span>
                <b>{o.t}</b>
                <span>{o.d}</span>
              </Reveal>
            ))}
          </ul>
        </div>
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
      </section>

      {/* ---------- Travel: postcards + film strip ---------- */}
      <section className={`container ${s.section} ${s.clipX}`}>
        <Reveal className={s.head}>
          <span className="kicker">Postcards</span>
          <h2 className={s.h2}>
            Where I go <span className="turn">to reset.</span>
          </h2>
          <p className={s.sub}>Turn a postcard over for the note on the back and a few favourite shots from the trip.</p>
        </Reveal>
        <Travel trips={trips} />
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
    </>
  );
}
