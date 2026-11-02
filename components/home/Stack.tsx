import Image from 'next/image';
import Reveal from '../Reveal';
import s from './stack.module.css';

// "How I work" — the real tool stack, grouped by stage, next to real code from this site.
// Edit the notes freely; add `logo: '/tools/<name>.svg'` to show an official icon.
type Tool = { name: string; note: string; logo?: string };

const groups: { stage: string; tools: Tool[] }[] = [
  {
    stage: 'Plan & research',
    tools: [
      { name: 'FigJam', note: 'Interview notes, task maps, first flows' },
      { name: 'Claude', note: 'Research synthesis, copy drafts, prompts' },
      { name: 'Jira', note: 'User stories the dev team builds from' },
    ],
  },
  {
    stage: 'Design',
    tools: [
      { name: 'Figma', note: 'Every screen, built from WorldKit components' },
      { name: 'Figma Variables', note: 'Tokens for colour, type, spacing, radius' },
      { name: 'Figma MCP', note: 'Takes a Figma frame straight into code' },
    ],
  },
  {
    stage: 'Build & ship',
    tools: [
      { name: 'Claude Code', note: 'Coded prototypes, and this whole site' },
      { name: 'React · Next.js', note: 'Prototypes that behave like the product' },
      { name: 'Tailwind · Storybook', note: 'Where WorldKit tokens land in code' },
      { name: 'GitHub · Vercel', note: 'Every push to this site goes live' },
    ],
  },
];

export default function Stack() {
  return (
    <div className={s.wrap}>
      <div className={s.list}>
        {groups.map((g, gi) => (
          <Reveal key={g.stage} className={s.group} delay={gi * 0.06}>
            <p className={s.stage}>
              <span>{String(gi + 1).padStart(2, '0')}</span>
              {g.stage}
            </p>
            <ul>
              {g.tools.map((t) => (
                <li key={t.name} className={s.row}>
                  <span className={s.name}>
                    {t.logo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={t.logo} alt="" width={22} height={22} />
                    )}
                    {t.name}
                  </span>
                  <span className={s.note}>{t.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className={s.shot} delay={0.1}>
        <figure>
          <span className={s.hand} aria-hidden>
            the button you just clicked? this is it ↓
          </span>
          <div className={s.frame}>
            <Image
              src="/img/process/code.webp"
              alt="Code editor showing the LiquidButton component from this portfolio"
              width={1600}
              height={1000}
              sizes="(max-width: 900px) 100vw, 56vw"
            />
          </div>
          <figcaption>
            <b>Real code from this site.</b> The liquid metal button: a WebGL shader in React, written with Claude Code,
            shipped on Vercel.
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
