import Reveal from '../../Reveal';
import s from './think.module.css';

// Why I'm different: a full-width banner with the real path from engineering to UX.
const path = [
  { t: 'B.E. Computer Engineering', d: 'GTU, India', k: 'Learned to build' },
  { t: 'M.S. User Experience Design', d: 'Arizona State · 4.0 GPA', k: 'Learned to design' },
  { t: 'UX Designer & Design Engineer', d: 'WorldLink · Enterprise & agentic AI', k: 'Now I do both' },
];

export default function Different() {
  return (
    <Reveal className={s.diff}>
      <div className={s.diffHead}>
        <span className={s.diffKick}>Why I&apos;m different</span>
        <h3 className={s.diffT}>
          Engineer by degree. <em>Designer by choice.</em>
        </h3>
        <p className={s.diffD}>
          I studied computer engineering before I studied UX. So I talk to engineers in their language, and to users in
          theirs.
        </p>
      </div>
      <ol className={s.path}>
        {path.map((p, i) => (
          <li key={p.t}>
            <span className={s.pathK}>
              {String(i + 1).padStart(2, '0')} · {p.k}
            </span>
            <b>{p.t}</b>
            <span>{p.d}</span>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
