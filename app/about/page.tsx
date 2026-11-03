import Reveal from '@/components/Reveal';
import HangingTags from '@/components/HangingTags';
import Different from '@/components/home/think/Different';
import Principles from '@/components/home/think/Principles';
import s from './about.module.css';

export const metadata = { title: 'About' };

const bring = [
  { title: 'UX research', body: 'Interviews, audits and usability tests that turn opinions into evidence.' },
  { title: 'AI products', body: 'AI output people can understand, review and trust before they act on it.' },
  { title: 'Design systems', body: 'Tokens, components and documentation that keep design and code in sync.' },
  { title: 'Front-end', body: 'React prototypes and production-ready UI, so the build matches the design.' },
];

const timeline = [
  {
    when: 'Oct 2025 — now',
    what: 'UX Designer & Researcher',
    where: 'WorldLink · Dallas–Fort Worth',
    body: 'End-to-end 0-to-1 UX for accelerator initiatives: enterprise design systems, AI-powered SaaS and agentic AI for Fortune 100 clients.',
  },
  {
    when: 'Jul 2024 — May 2025',
    what: 'Digital Assistant, Business & Finance',
    where: 'Arizona State University',
    body: 'Design and digital work for ASU Business & Finance. Won the 2024 ASU Sun Award for the Harkins Ultimate Fundraiser banner.',
  },
  {
    when: 'May 2025',
    what: 'M.S. User Experience Design',
    where: 'Arizona State University',
    body: '4.0 GPA.',
  },
  {
    when: 'Earlier',
    what: 'B.E. Computer Engineering',
    where: 'Gujarat Technological University',
    body: 'Where the "build what I design" habit started.',
  },
];

export default function About() {
  return (
    <>
      <section className={`container ${s.hero}`}>
        <div>
          <Reveal>
            <p className="eyebrow">About</p>
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
              I&apos;m Achyut Khanpara, a designer in Dallas–Fort Worth who works on the products most people find
              intimidating: compliance platforms, network governance, AI operations dashboards. My job is to make them
              clear enough to use on the first try.
            </p>
            <p className={s.lede}>
              Engineering background, design training. I&apos;m happiest in the space between the two — where a
              research finding becomes a component, and a component becomes something a team can ship.
            </p>
          </Reveal>
          <p className={`hand ${s.note}`}>evidence first, taste second :)</p>
        </div>
        <Reveal delay={0.1}>
          <HangingTags />
        </Reveal>
      </section>

      <section className={`container ${s.section}`}>
        <Reveal>
          <p className="eyebrow">What I bring</p>
        </Reveal>
        <div className={s.bring}>
          {bring.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05} className={s.bringItem}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container">
        <Different />
        <Principles />
      </section>

      <section className={`container ${s.section}`}>
        <Reveal>
          <p className="eyebrow">Path so far</p>
        </Reveal>
        <ol className={s.timeline}>
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.what} delay={i * 0.05}>
              <span className={s.when}>{t.when}</span>
              <div>
                <h3>{t.what}</h3>
                <p className={s.where}>{t.where}</p>
                <p>{t.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
