import s from './playground.module.css';

/* WorldKit components, drawn with the library's own token names and component rules.
   Pure markup: rendered inside a .pg root that supplies the cascade (see playground.module.css). */

const emphases = ['solid', 'tint', 'outline', 'ghost'] as const;
const tones = [
  { k: 'accent', n: 'Save' },
  { k: 'danger', n: 'Delete' },
  { k: 'warm', n: 'Upgrade' },
] as const;
const bars = [38, 52, 44, 66, 58, 74, 63, 88];

export function Dashboard() {
  return (
    <>
      <div className={s.bar}>
        <div>
          <b>Compliance overview</b>
          <small>Last 30 days · 4 frameworks</small>
        </div>
        <div className={s.barActions}>
          <span className={`${s.btn} ${s.outline} ${s.accent}`}>Export</span>
          <span className={`${s.btn} ${s.solid} ${s.accent}`}>Run analysis</span>
        </div>
      </div>

      <div className={s.stats}>
        <div className={s.stat}>
          <span className={s.statKey}>Open gaps</span>
          <b className={s.statValue}>14</b>
          <span className={`${s.badge} ${s.bBad}`}>▲ 3 this week</span>
        </div>
        <div className={s.stat}>
          <span className={s.statKey}>Controls passing</span>
          <b className={s.statValue}>94%</b>
          <span className={`${s.badge} ${s.bOk}`}>▲ 3 pts</span>
        </div>
        <div className={s.stat}>
          <span className={s.statKey}>Reviews due</span>
          <b className={s.statValue}>7</b>
          <span className={`${s.badge} ${s.bWarn}`}>2 this week</span>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.card}>
          <div className={s.cardHead}>
            <span className={s.cardTitle}>Findings closed per week</span>
            <span className={`${s.badge} ${s.bAccent}`}>Live</span>
          </div>
          <div className={s.chart} aria-hidden>
            {bars.map((v, i) => (
              <i key={i} style={{ height: `${v}%`, background: `var(--a${i === bars.length - 1 ? 9 : 5 + Math.floor(i / 2)})` }} />
            ))}
          </div>
        </div>
        <div className={s.feature} data-surface="gradient">
          <span className={s.pill}>New</span>
          <b>Change one hue.</b>
          <span>Every component follows.</span>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.card}>
          <span className={s.cardTitle}>One Button · emphasis × tone</span>
          <div className={s.matrix}>
            {tones.map((t) =>
              emphases.map((e) => (
                <span key={t.k + e} className={`${s.btn} ${s[e]} ${s[t.k]}`}>
                  {t.n}
                </span>
              )),
            )}
          </div>
        </div>
        <div className={s.card}>
          <div className={s.field}>
            <span className={s.fLabel}>Work email</span>
            <span className={`${s.input} ${s.focus}`}>alex@worldlink.com</span>
            <span className={s.hint}>We&apos;ll send the report here.</span>
          </div>
          <div className={s.switchRow} style={{ marginTop: 'auto' }}>
            <span className={`${s.switch} ${s.on}`} aria-hidden>
              <i />
            </span>
            Weekly digest
          </div>
        </div>
      </div>
    </>
  );
}

export function ComponentSheet() {
  return (
    <div className={s.sheet}>
      <div className={`${s.cell} ${s.cellWide}`}>
        <span className={s.cellName}>Button · four emphases × three tones</span>
        <div className={s.matrix}>
          {tones.map((t) =>
            emphases.map((e) => (
              <span key={t.k + e} className={`${s.btn} ${s[e]} ${s[t.k]}`}>
                {t.n}
              </span>
            )),
          )}
        </div>
        <div className={s.wrapRow}>
          <span className={`${s.btn} ${s.solid} ${s.accent} ${s.sm}`}>Small</span>
          <span className={`${s.btn} ${s.solid} ${s.accent}`}>Medium</span>
          <span className={`${s.btn} ${s.solid} ${s.accent} ${s.lg}`}>Large</span>
        </div>
      </div>

      <div className={s.cell}>
        <span className={s.cellName}>Badge</span>
        <div className={s.wrapRow}>
          <span className={`${s.badge} ${s.bOk}`}>
            <i />
            Compliant
          </span>
          <span className={`${s.badge} ${s.bWarn}`}>
            <i />
            Partial
          </span>
          <span className={`${s.badge} ${s.bBad}`}>
            <i />
            Gap
          </span>
          <span className={`${s.badge} ${s.bInfo}`}>In review</span>
          <span className={`${s.badge} ${s.bAccent}`}>v1.0</span>
          <span className={s.badge}>Draft</span>
          <span className={`${s.badge} ${s.bOutline}`}>Global</span>
        </div>
      </div>

      <div className={s.cell}>
        <span className={s.cellName}>Input · rest, focus, error</span>
        <div className={s.field}>
          <span className={s.input}>
            <em>Search regulations…</em>
          </span>
        </div>
        <div className={s.field}>
          <span className={`${s.input} ${s.focus}`}>EU AI Act</span>
        </div>
        <div className={s.field}>
          <span className={`${s.input} ${s.error}`}>policy@</span>
          <span className={s.errText}>Enter a complete email address</span>
        </div>
      </div>

      <div className={s.cell}>
        <span className={s.cellName}>Selection</span>
        <div className={s.checkRow}>
          <span className={`${s.check} ${s.checked}`}>✓</span>
          Security
        </div>
        <div className={s.checkRow}>
          <span className={s.check}>✓</span>
          Privacy
        </div>
        <div className={s.checkRow}>
          <span className={`${s.radio} ${s.radioOn}`} />
          All frameworks
        </div>
        <div className={s.switchRow}>
          <span className={`${s.switch} ${s.on}`} aria-hidden>
            <i />
          </span>
          Auto-map controls
        </div>
      </div>

      <div className={s.cell}>
        <span className={s.cellName}>Tabs and segmented</span>
        <div className={s.tabs}>
          <span className={s.tabOn}>Overview</span>
          <span>Controls</span>
          <span>Evidence</span>
        </div>
        <div className={s.seg}>
          <span className={s.segOn}>Week</span>
          <span>Month</span>
          <span>Quarter</span>
        </div>
      </div>

      <div className={`${s.cell} ${s.cellWide}`}>
        <span className={s.cellName}>Alert · the icon carries the colour</span>
        <div className={s.grid2}>
          <div className={`${s.alert} ${s.aInfo}`}>
            <i>i</i>
            <div>
              <b>New framework available</b>
              <span>DORA was added to the library.</span>
            </div>
          </div>
          <div className={`${s.alert} ${s.aOk}`}>
            <i>✓</i>
            <div>
              <b>Mapping complete</b>
              <span>212 controls aligned.</span>
            </div>
          </div>
          <div className={`${s.alert} ${s.aWarn}`}>
            <i>!</i>
            <div>
              <b>Evidence expiring</b>
              <span>3 artifacts expire in 7 days.</span>
            </div>
          </div>
          <div className={`${s.alert} ${s.aBad}`}>
            <i>×</i>
            <div>
              <b>Critical gap found</b>
              <span>Access reviews have no owner.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.cell}>
        <span className={s.cellName}>Progress, people, tiles</span>
        <div className={s.stack}>
          <div className={s.progress}>
            <i style={{ width: '68%' }} />
          </div>
          <span className={s.hint}>68% of controls mapped</span>
        </div>
        <div className={s.people}>
          <span className={s.avatar}>AK</span>
          <span className={s.avatar}>JD</span>
          <span className={`${s.avatar} ${s.avatarFlat}`}>+4</span>
        </div>
        <div className={s.tiles}>
          <span className={`${s.tile} ${s.tileGrad}`}>✦</span>
          <span className={s.tile}>⌘</span>
        </div>
      </div>

      <div className={`${s.cell} ${s.cellWide}`}>
        <span className={s.cellName}>Toast · reversed out</span>
        <div className={s.toast}>
          <span>Report exported to PDF</span>
          <b>Undo</b>
        </div>
      </div>

      <div className={s.cell}>
        <span className={s.cellName}>Stat card</span>
        <span className={s.statKey}>Compliance score</span>
        <b className={s.statValue}>59%</b>
        <span className={s.statFoot}>
          <span className={`${s.badge} ${s.bOk}`}>▲ 4.2%</span> vs last quarter
        </span>
      </div>
    </div>
  );
}

const rows = [
  { n: 'Federal Reserve SR 20-24', t: 'Supervisory guidance', v: 'v1.0', r: 'Global', d: 15, s: ['bOk', 'Aligned'] },
  { n: 'EU AI Act', t: 'Regulation', v: 'v1.0', r: 'EU', d: 8, s: ['bWarn', 'Partial'], sel: true },
  { n: 'FATF guidance', t: 'Digital identity', v: 'v1.0', r: 'Global', d: 12, s: ['bOk', 'Aligned'] },
  { n: 'FFIEC Management', t: 'IT handbook', v: 'v2.1', r: 'US', d: 30, s: ['bBad', 'Gap'] },
  { n: 'ISO 27001', t: 'Security standard', v: 'v2022', r: 'Global', d: 21, s: ['bInfo', 'In review'] },
] as const;

export function DataTable() {
  return (
    <div className={s.tblWrap}>
      <div className={s.tblBar}>
        <span className={s.input}>
          <em>Search all frameworks…</em>
        </span>
        <div className={s.seg}>
          <span className={s.segOn}>All</span>
          <span>Gaps</span>
          <span>Review</span>
        </div>
        <span className={`${s.btn} ${s.solid} ${s.accent}`}>+ New framework</span>
      </div>
      <table className={s.tbl}>
        <thead>
          <tr>
            <th>
              <span className={s.check}>✓</span>
            </th>
            <th>Framework</th>
            <th className={s.hideSm}>Version</th>
            <th className={s.hideSm}>Region</th>
            <th className={s.hideSm}>Docs</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.n} className={'sel' in r && r.sel ? s.sel : undefined}>
              <td>
                <span className={`${s.check} ${'sel' in r && r.sel ? s.checked : ''}`}>✓</span>
              </td>
              <td>
                <div className={s.tdMain}>{r.n}</div>
                <div className={s.tdMuted}>{r.t}</div>
              </td>
              <td className={s.hideSm}>
                <span className={`${s.badge} ${s.bAccent}`}>{r.v}</span>
              </td>
              <td className={s.hideSm}>
                <span className={`${s.badge} ${s.bOutline}`}>{r.r}</span>
              </td>
              <td className={`${s.tdMuted} ${s.hideSm}`}>{r.d}</td>
              <td>
                <span className={`${s.badge} ${s[r.s[0]]}`}>
                  <i />
                  {r.s[1]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.tblFoot}>
        <span>1 selected · 12 frameworks</span>
        <div className={s.pages}>
          <span className={s.pageOn}>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

/* A fixed-theme sheet for use outside the playground. */
export function Themed({
  h1 = 23,
  h2 = 62,
  mode = 'light',
  density = 'roomy',
  children,
}: {
  h1?: number;
  h2?: number;
  mode?: 'light' | 'dark';
  density?: 'roomy' | 'compact';
  children: React.ReactNode;
}) {
  return (
    <div className={s.frame}>
      <div className={s.pg} data-mode={mode} data-density={density} style={{ '--h1': h1, '--h2': h2 } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}
