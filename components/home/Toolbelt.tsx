import s from './toolbelt.module.css';

// The tools I open every day, as a floating glass dock under the skills.
const tools = [
  { n: 'Figma', d: 'Design', img: '/img/tools/figma.webp' },
  { n: 'Claude', d: 'AI partner', img: '/img/tools/claude.webp' },
  { n: 'Framer', d: 'Sites', img: '/img/tools/framer.webp' },
  { n: 'Illustrator', d: 'Illustration', img: '/img/tools/illustrator.webp' },
  { n: 'Photoshop', d: 'Photo editing', img: '/img/tools/photoshop.webp' },
  { n: 'Notion', d: 'Notes & docs', img: '/img/tools/notion.webp' },
  { n: 'ChatGPT', d: 'AI chatbot', img: '/img/tools/chatgpt.webp' },
];

export default function Toolbelt() {
  return (
    <div className={s.wrap}>
      <p className={s.label}>
        <span className="hand">my daily drivers</span>
      </p>
      <ul className={s.dock}>
        {tools.map((t, i) => (
          <li key={t.n} style={{ ['--i' as string]: i }} tabIndex={0}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.img} alt="" width={52} height={52} loading="lazy" />
            <span className={s.tip} aria-hidden>
              <b>{t.n}</b> {t.d}
            </span>
            <span className={s.sr}>
              {t.n}, {t.d}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
