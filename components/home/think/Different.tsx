import s from './think.module.css';

// Why I'm different: the real path from engineering to UX.
const path = [
  { t: 'B.E. Computer Engineering', d: 'GTU, India' },
  { t: 'M.S. User Experience Design', d: 'Arizona State University · 4.0 GPA' },
  { t: 'UX Designer & Design Engineer', d: 'WorldLink · 20+ 0→1 initiatives' },
];

export default function Different() {
  return (
    <div className={s.diff}>
      <span className={s.diffKick}>Why I&apos;m different</span>
      <h3 className={s.diffT}>
        Engineer by degree. <em>Designer by choice.</em>
      </h3>
      <p className={s.diffD}>
        I studied computer engineering before I studied UX. So I can talk to engineers in their language, and to users
        in theirs.
      </p>
      <ol className={s.path}>
        {path.map((p) => (
          <li key={p.t}>
            <b>{p.t}</b>
            <span>{p.d}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
