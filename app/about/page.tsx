import Reveal from '@/components/Reveal';
import Principles from '@/components/home/think/Principles';
import LiquidButton from '@/components/LiquidButton';
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
    img: '/img/about/hike.webp',
    alt: 'Achyut on a monsoon hike in the hills of Gujarat',
    cap: 'Monsoon hike, Gujarat · 2021',
  },
  {
    n: '02',
    place: 'Tempe, Arizona',
    title: 'Learned to design',
    body: 'I moved to the US for an M.S. in User Experience Design at Arizona State and finished with a 4.0. Alongside classes I designed for ASU Business & Finance, and a fundraiser banner I made won the 2024 ASU Sun Award.',
    img: '/img/about/asu-2025.webp',
    alt: 'Achyut in his graduation gown in front of the 2025 sign at Arizona State University',
    cap: 'Class of 2025 · ASU',
  },
  {
    n: '03',
    place: 'Dallas–Fort Worth, Texas',
    title: 'Now I do both',
    body: 'At WorldLink I take enterprise and agentic AI products from the first interview to a coded prototype, for Fortune 100 teams. Same habit as day one: understand the people, then build the thing.',
    now: true,
  },
];

const trips = [
  { img: '/img/about/manali.webp', cap: 'Manali, Himachal', yr: '2018', alt: 'Achyut on a balcony above the Kullu valley in Manali' },
  { img: '/img/about/manali-river.webp', cap: 'Beas river, Manali', yr: '2018', alt: 'Achyut standing on a rock in the Beas river' },
  { img: '/img/about/sasan.webp', cap: 'Sasan Gir, Gujarat', yr: '2020', alt: 'Achyut sitting on a chair in a green field at Sasan Gir', wide: true },
  { img: '/img/about/hike-dog.webp', cap: 'Trail company', yr: '2021', alt: 'Achyut kneeling next to a Labrador on a hilltop' },
  { img: '/img/about/asu-bridge.webp', cap: 'Tempe, Arizona', yr: '2025', alt: 'Achyut on the ASU pedestrian bridge' },
  { img: '/img/about/asu-seal.webp', cap: 'Graduation week', yr: '2025', alt: 'Achyut in his graduation gown next to the Arizona State University seal' },
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
            <img src="/img/about/portrait.webp" alt="Portrait of Achyut Khanpara" width={1200} height={1600} />
          </figure>
          <figure className={s.polaroid}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/about/asu-gown.webp"
              alt="Achyut in his ASU graduation gown under the palms"
              width={1200}
              height={1600}
            />
            <figcaption>Tempe · May 2025</figcaption>
          </figure>
          <p className={`hand ${s.note}`}>evidence first, taste second :)</p>
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
            <Reveal as="li" key={c.n} delay={i * 0.05} className={`${s.chapter} ${c.now ? s.chapterNow : ''}`}>
              {c.img ? (
                <figure className={s.chapterImg}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.alt} loading="lazy" width={1200} height={1600} />
                  <figcaption>{c.cap}</figcaption>
                </figure>
              ) : (
                <div className={s.nowArt} aria-hidden>
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

      {/* ---------- Off the clock ---------- */}
      <section className={`container ${s.section}`}>
        <Reveal className={s.head}>
          <span className="kicker">Off the clock</span>
          <h2 className={s.h2}>
            Away from the screen, <span className="turn">still paying attention.</span>
          </h2>
        </Reveal>

        <div className={s.bento}>
          <Reveal className={`${s.tile} ${s.travel}`}>
            <div className={s.tileHead}>
              <span className={s.tileK}>Travel</span>
              <h3>New places, new patterns.</h3>
              <p>
                Mountains, forests, campuses, new cities. Watching how people find their way around a place they
                don&apos;t know is half the reason I go.
              </p>
            </div>
            <ul className={s.strip} aria-label="Travel photos">
              {trips.map((t) => (
                <li key={t.img} className={t.wide ? s.wide : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.alt} loading="lazy" />
                  <span>
                    {t.cap} <em>{t.yr}</em>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={`${s.tile} ${s.coffee}`} delay={0.05}>
            <div className={s.cup} aria-hidden>
              <span className={s.steam}>
                <i />
                <i />
                <i />
              </span>
              <span className={s.mug} />
              <span className={s.saucer} />
            </div>
            <span className={s.tileK}>Coffee</span>
            <h3>Coffee first, then Figma.</h3>
            <p>A good café is my favourite place to think. Most of my first sketches start next to a cup.</p>
          </Reveal>

          <Reveal className={`${s.tile} ${s.make}`} delay={0.1}>
            <span className={s.tileK}>Design for fun</span>
            <h3>I make things outside work too.</h3>
            <p>
              Brand identities, posters and social graphics, including the
              banner that won ASU&apos;s 2024 Sun Award.
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
