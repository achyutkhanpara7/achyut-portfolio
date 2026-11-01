import { moreWork } from '@/content/work';
import s from './MoreWork.module.css';

export default function MoreWork() {
  return (
    <ul className={s.list}>
      {moreWork.map((w) => {
        const inner = (
          <>
            <span className={s.title}>{w.title}</span>
            <span className={s.context}>{w.context}</span>
            <span className={s.go}>{w.href ? 'View ↗' : 'Coming soon'}</span>
          </>
        );
        return (
          <li key={w.title}>
            {w.href ? (
              <a className={s.row} href={w.href} target="_blank" rel="noreferrer">{inner}</a>
            ) : (
              <div className={`${s.row} ${s.muted}`}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
