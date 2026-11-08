import Link from 'next/link';
import type { Project } from '@/content/work';
import WorkTile from '../work/WorkTile';
import s from './home.module.css';

// Selected work on the home page: the case studies, then a quiet list of write-ups in progress.
export default function WorkTabs({ cases, moreUx }: { cases: Project[]; moreUx: Project[] }) {
  return (
    <div className={s.panel}>
      <ul className={s.grid2}>
        {cases.map((p) => (
          <li key={p.slug}>
            <WorkTile p={p} />
          </li>
        ))}
      </ul>
      {moreUx.length > 0 && (
        <div className={s.more}>
          <p className={s.moreHead}>More work</p>
          <ul>
            {moreUx.map((p) =>
              p.link === 'case' ? (
                <li key={p.slug} className={s.moreLink}>
                  <Link href={`/work/${p.slug}/`}>
                    <b>{p.title}</b>
                    <span>{p.context}</span>
                    <em>Case study →</em>
                  </Link>
                </li>
              ) : (
                <li key={p.slug}>
                  <b>{p.title}</b>
                  <span>{p.context}</span>
                  <em className={s.moreSoon}>Soon</em>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
