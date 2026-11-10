// SwiftSave user flow, drawn as one SVG: two ways in, one dashboard, every task two steps from it.
const rows: [string, string][] = [
  ['Account & card', 'Management'],
  ['Credit card', 'Bill payment'],
  ['Transfer', 'Transaction type'],
  ['Withdraw', 'Choose amount'],
  ['Mobile prepaid', 'Phone number'],
  ['Pay the bill', 'Type of bill'],
  ['Transaction report', 'Report overview'],
  ['Beneficiary', 'Add or update'],
  ['Save online', 'Save card / account'],
];

const H = 36; // node height
const C = { ink: '#2a0f3d', plum: '#6b2c91', soft: '#f4ecfb', line: '#c9a0e5', gold: '#fff2c9', goldLine: '#f2c94c' };

function Node({ x, y, w, label, fill, stroke, color = C.ink, bold = false }: { x: number; y: number; w: number; label: string; fill: string; stroke?: string; color?: string; bold?: boolean }) {
  return (
    <g>
      <rect x={x} y={y - H / 2} width={w} height={H} rx={9} fill={fill} stroke={stroke ?? 'none'} strokeWidth={1.5} />
      <text x={x + w / 2} y={y + 4.5} textAnchor="middle" fontSize={12.5} fontWeight={bold ? 800 : 700} fill={color}>
        {label}
      </text>
    </g>
  );
}

export default function SwiftFlow() {
  const top = 34;
  const step = 58;
  const ys = rows.map((_, i) => top + i * step);
  const mid = ys[4];
  const dashX = 600;
  const trunk = 740;
  const fx = 764;
  const fw = 128;
  const ox = 912;
  const ow = 128;

  return (
    <svg viewBox="0 0 1050 532" role="img" aria-label="User flow: open the app; new users create an account, verify email and finish registration, existing users sign in; both reach the dashboard, which leads to nine tasks, each with its next step.">
      <defs>
        <marker id="sfArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill={C.plum} />
        </marker>
      </defs>
      <g fill="none" stroke={C.plum} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {/* open app -> decision */}
        <path d="M112 266 H126" markerEnd="url(#sfArrow)" />
        {/* yes branch */}
        <path d={`M172 224 V130 H196`} markerEnd="url(#sfArrow)" />
        <path d="M316 130 H334" markerEnd="url(#sfArrow)" />
        <path d="M440 130 H458" markerEnd="url(#sfArrow)" />
        <path d={`M582 130 H650 V${mid - H / 2 - 2}`} markerEnd="url(#sfArrow)" />
        {/* no branch */}
        <path d={`M172 308 V402 H196`} markerEnd="url(#sfArrow)" />
        <path d={`M290 402 H650 V${mid + H / 2 + 2}`} markerEnd="url(#sfArrow)" />
        {/* dashboard -> trunk -> tasks -> next step */}
        <path d={`M${dashX + 100} ${mid} H${trunk}`} />
        <path d={`M${trunk} ${ys[0]} V${ys[ys.length - 1]}`} />
        {ys.map((y) => (
          <g key={y}>
            <path d={`M${trunk} ${y} H${fx - 2}`} markerEnd="url(#sfArrow)" />
            <path d={`M${fx + fw} ${y} H${ox - 2}`} markerEnd="url(#sfArrow)" strokeDasharray="3 4" />
          </g>
        ))}
      </g>

      <Node x={8} y={266} w={104} label="Open app" fill={C.ink} color="#fff" bold />
      {/* decision diamond */}
      <g>
        <path d="M172 224 L214 266 L172 308 L130 266 Z" fill="#fff" stroke={C.ink} strokeWidth={1.8} />
        <text x={172} y={262} textAnchor="middle" fontSize={11.5} fontWeight={800} fill={C.ink}>
          New
        </text>
        <text x={172} y={276} textAnchor="middle" fontSize={11.5} fontWeight={800} fill={C.ink}>
          user?
        </text>
      </g>
      <text x={182} y={186} fontSize={11} fontWeight={800} fill={C.plum}>
        YES
      </text>
      <text x={182} y={356} fontSize={11} fontWeight={800} fill={C.plum}>
        NO
      </text>
      <Node x={198} y={130} w={118} label="Create account" fill={C.soft} stroke={C.line} />
      <Node x={336} y={130} w={104} label="Verify email" fill={C.soft} stroke={C.line} />
      <Node x={460} y={130} w={122} label="Registration done" fill={C.soft} stroke={C.line} />
      <Node x={198} y={402} w={92} label="Sign in" fill={C.soft} stroke={C.line} />
      <Node x={dashX} y={mid} w={100} label="Dashboard" fill={C.plum} color="#fff" bold />

      {rows.map(([a, b], i) => (
        <g key={a}>
          <Node x={fx} y={ys[i]} w={fw} label={a} fill={C.soft} stroke={C.line} />
          <Node x={ox} y={ys[i]} w={ow} label={b} fill={C.gold} stroke={C.goldLine} />
        </g>
      ))}
    </svg>
  );
}
