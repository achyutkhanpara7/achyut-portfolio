import type { Project } from '@/content/work';
import WorkTile from '../work/WorkTile';
import s from './home.module.css';

// Selected work on the home page: the case study tiles.
export default function WorkTabs({ cases }: { cases: Project[] }) {
  return (
    <div className={s.panel}>
      <ul className={s.grid2}>
        {cases.map((p) => (
          <li key={p.slug}>
            <WorkTile p={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
