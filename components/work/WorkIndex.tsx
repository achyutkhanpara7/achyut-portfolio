import Link from 'next/link';
import { projects, projectCounts, type Discipline } from '@/content/work';
import Reveal from '../Reveal';
import WorkTile from './WorkTile';
import s from './work.module.css';

type Filter = 'all' | Discipline;

const tabs: { key: Filter; label: string; href: string }[] = [
  { key: 'all', label: 'All work', href: '/work/' },
  { key: 'ux', label: 'Product & UX design', href: '/work/ux/' },
  { key: 'brand', label: 'Brand design', href: '/work/brand/' },
];

// Case studies get big tiles. Brand work gets medium tiles.
// Projects still being written up go in a quiet list underneath — so nothing looks empty.
export default function WorkIndex({ filter }: { filter: Filter }) {
  const inFilter = filter === 'all' ? projects : projects.filter((p) => p.discipline === filter);
  const ux = inFilter.filter((p) => p.discipline === 'ux' && p.link !== 'soon');
  const brand = inFilter.filter((p) => p.discipline === 'brand');
  const archive = inFilter.filter((p) => p.discipline === 'ux' && p.link === 'soon');

  return (
    <>
      <nav className={s.tabs} aria-label="Filter work">
        {tabs.map((t) => (
          <Link key={t.key} href={t.href} className={`${s.tab} ${t.key === filter ? s.tabOn : ''}`} scroll={false}>
            {t.label} <em>{projectCounts[t.key]}</em>
          </Link>
        ))}
      </nav>

      {ux.length > 0 && (
        <ul className={s.grid2}>
          {ux.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 0.06}>
              <WorkTile p={p} />
            </Reveal>
          ))}
        </ul>
      )}

      {brand.length > 0 && (
        <>
          {filter === 'all' && <h2 className={s.groupTitle}>Brand &amp; visual</h2>}
          <ul className={s.grid3}>
            {brand.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.05}>
                <WorkTile p={p} size="md" />
              </Reveal>
            ))}
          </ul>
        </>
      )}

      {archive.length > 0 && (
        <>
          <h2 className={s.groupTitle}>
            More UX work <span>Write-ups in progress</span>
          </h2>
          <ul className={s.list}>
            {archive.map((p) => (
              <li key={p.slug} className={s.row}>
                <span className={s.rowTitle}>{p.title}</span>
                <span className={s.rowCtx}>{p.context}</span>
                <span className={s.rowTag}>Soon</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
