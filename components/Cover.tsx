import type { CoverKind } from '@/content/work';
import s from './Cover.module.css';

// Abstract, brand-coloured covers for each project. They animate when the parent card is hovered.
// Swap any of these for a real screenshot later: <img src="/work/grc/cover.png" alt="" />
export default function Cover({ kind }: { kind: CoverKind }) {
  return (
    <div className={`${s.cover} ${s[kind]}`} aria-hidden>
      {kind === 'grc' && <Grc />}
      {kind === 'worldkit' && <WorldKit />}
      {kind === 'network' && <Network />}
      {kind === 'retail' && <Retail />}
    </div>
  );
}

function Grc() {
  const tiles = Array.from({ length: 6 });
  return (
    <div className={s.grcGrid}>
      {tiles.map((_, i) => (
        <span key={i} className={`${s.tile} ${i === 4 ? s.tileOn : ''}`} style={{ ['--i' as string]: i }}>
          <i /><i /><i />
        </span>
      ))}
    </div>
  );
}

function WorldKit() {
  return (
    <div className={s.layers}>
      {['Figma tokens', 'Tailwind', 'Storybook'].map((l, i) => (
        <span key={l} className={s.layer} style={{ ['--i' as string]: i }}>
          <b>{l}</b>
          <em>
            <i /><i /><i /><i />
          </em>
        </span>
      ))}
    </div>
  );
}

function Network() {
  const nodes = [
    [60, 70], [150, 40], [240, 90], [110, 150], [210, 170], [300, 140], [40, 180], [330, 60],
  ];
  const links = [[0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [4, 5], [3, 6], [2, 7], [5, 7]];
  const path = [0, 3, 4, 5];
  return (
    <svg viewBox="0 0 370 220" className={s.net}>
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className={s.edge} />
      ))}
      <polyline points={path.map((p) => nodes[p].join(',')).join(' ')} className={s.route} />
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={path.includes(i) ? 8 : 6} className={path.includes(i) ? s.nodeOn : s.node} />
      ))}
    </svg>
  );
}

function Retail() {
  const personas = ['Store', 'Area', 'Corp', 'Dist', 'Auth', 'IT'];
  return (
    <div className={s.orbit}>
      <span className={s.hub}>AI</span>
      <div className={s.spin}>
        {personas.map((p, i) => {
          const a = ((i * 60 - 90) * Math.PI) / 180;
          return (
            <span
              key={p}
              className={s.persona}
              style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
}
