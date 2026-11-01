'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import s from './clarity.module.css';

// "Pixels are cheap. Confusion is expensive." — made tangible.
// Same fictional compliance screen twice: the typical enterprise version, and the clear one.
// Drag the handle to move from confusion to clarity.
export function ClaritySection() {
  return (
    <section className="container" style={{ paddingTop: 'clamp(80px, 10vw, 136px)' }}>
      <div className={s.head}>
        <div>
          <span className="kicker">What I actually do</span>
          <h2 className={s.h2}>
            Drag from confusion <span className="accent">to clarity.</span>
          </h2>
        </div>
        <ul className={s.rules}>
          <li>
            <span>1</span>
            <p style={{ margin: 0 }}>
              <b>Lead with the decision.</b> Say what needs attention before showing the data behind it.
            </p>
          </li>
          <li>
            <span>2</span>
            <p style={{ margin: 0 }}>
              <b>Fewer, ranked choices.</b> Three things to act on beat 1,284 rows to scan.
            </p>
          </li>
          <li>
            <span>3</span>
            <p style={{ margin: 0 }}>
              <b>One obvious next step.</b> Every item ends in a clear action.
            </p>
          </li>
        </ul>
      </div>
      <ClaritySlider />
      <p className={s.caption}>Illustrative screens, not client work.</p>
    </section>
  );
}

export default function ClaritySlider() {
  const [pos, setPos] = useState(94);
  const box = useRef<HTMLDivElement>(null);
  const inView = useInView(box, { once: true, margin: '-120px' });
  const reduce = useReducedMotion();
  const touched = useRef(false);

  // first time it scrolls into view: sweep from confusion to clarity
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(94, 16, {
      duration: 1.8,
      ease: [0.2, 0.8, 0.2, 1],
      delay: 0.3,
      onUpdate: (v) => !touched.current && setPos(v),
    });
    return () => c.stop();
  }, [inView, reduce]);

  return (
    <div ref={box} className={s.wrap}>
      <div className={s.stage}>
        {/* BEFORE — confusion */}
        <div className={s.before} aria-hidden>
          <Cluttered />
        </div>
        {/* AFTER — clarity (revealed from the right) */}
        <div className={s.after} style={{ clipPath: `inset(0 0 0 ${pos}%)` }} aria-hidden>
          <Clear />
        </div>

        <span className={`${s.tag} ${s.tagL}`}>Confusion</span>
        <span className={`${s.tag} ${s.tagR}`}>Clarity</span>

        <div className={s.handle} style={{ left: `${pos}%` }} aria-hidden>
          <span className={s.knob}>
            <svg viewBox="0 0 24 24"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
          </span>
        </div>
        <input
          className={s.range}
          type="range"
          min={2}
          max={98}
          value={pos}
          onChange={(e) => {
            touched.current = true;
            setPos(Number(e.target.value));
          }}
          aria-label="Drag from confusion to clarity"
        />
      </div>
    </div>
  );
}

/* ---------------- the typical enterprise screen ---------------- */
function Cluttered() {
  const nav = ['Dashboard', 'Controls', 'Policies', 'Evidence', 'Exceptions', 'Vendors', 'Assets', 'Risks', 'Audits', 'Reports', 'Tasks', 'Admin', 'Settings', 'Help'];
  const rows = Array.from({ length: 22 });
  const status = ['OPEN', 'PENDING', 'OVERDUE', 'IN REVIEW', 'OPEN', 'FAILED', 'OPEN', 'N/A', 'PENDING', 'OVERDUE', 'OPEN'];
  const st = (i: number) => status[i % status.length];
  return (
    <div className={s.mess}>
      <div className={s.mTop}>
        <b>GRC Console v4.2</b>
        <span>Env: PROD-EAST-02</span>
        <span className={s.mWarn}>⚠ 14 sync errors</span>
        <span className={s.mWarn}>⚠ License expires in 9 days</span>
        <span>Last refresh 02:14:55</span>
      </div>
      <div className={s.mBody}>
        <ul className={s.mNav}>
          {nav.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <div className={s.mMain}>
          <div className={s.mTabs}>
            {['Overview', 'Matrix', 'Heatmap', 'Raw data', 'Exports', 'Logs', 'Mappings'].map((t, i) => (
              <span key={t} className={i === 0 ? s.mTabOn : ''}>{t}</span>
            ))}
          </div>
          <div className={s.mKpis}>
            {['Controls 1,284', 'Gaps 312', 'Exceptions 87', 'Evidence 4,102', 'Overdue 46', 'Score 61.3'].map((k) => (
              <span key={k}>{k}</span>
            ))}
          </div>
          <div className={s.mFilters}>
            {['Region ▾', 'Framework ▾', 'Owner ▾', 'Status ▾', 'Severity ▾', 'Date ▾', 'More ▾'].map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
          <table className={s.mTable}>
            <thead>
              <tr>
                {['ID', 'Control', 'Owner', 'Fw', 'Sev', 'Status', 'Due', 'Ev', '⋯'].map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((_, i) => (
                <tr key={i}>
                  <td>CTL-{1040 + i * 7}</td>
                  <td>Access review – Q{(i % 4) + 1}</td>
                  <td>team-{(i * 3) % 9}</td>
                  <td>{['SOC2', 'ISO', 'NIST', 'PCI'][i % 4]}</td>
                  <td>{['H', 'M', 'L', 'C'][i % 4]}</td>
                  <td className={s[`st${i % 4}`]}>{st(i)}</td>
                  <td>0{(i % 9) + 1}/1{i % 3}</td>
                  <td>{(i * 7) % 13}</td>
                  <td>⋯</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ---------------- the clear version ---------------- */
function Clear() {
  const items = [
    { t: 'Quarterly access review is 3 days overdue', d: 'Finance · 12 accounts still need a decision', a: 'Review now', hot: true },
    { t: 'Vendor evidence expires Friday', d: 'Cloud hosting · SOC 2 report', a: 'Request update' },
    { t: 'Two policy exceptions need sign-off', d: 'Both low risk · recommended: approve', a: 'Approve both' },
  ];
  return (
    <div className={s.clean}>
      <aside className={s.cNav}>
        <span className={s.cLogo}>◎</span>
        {['Today', 'Controls', 'Evidence', 'Reports'].map((n, i) => (
          <span key={n} className={i === 0 ? s.cNavOn : ''}>{n}</span>
        ))}
      </aside>
      <div className={s.cMain}>
        <p className={s.cHi}>Good morning, Priya</p>
        <h4 className={s.cTitle}>
          3 things need you today. <span>Everything else is on track.</span>
        </h4>
        <div className={s.cScore}>
          <div>
            <b>94%</b>
            <span>controls healthy</span>
          </div>
          <i>
            <em style={{ width: '94%' }} />
          </i>
        </div>
        <ul className={s.cList}>
          {items.map((it) => (
            <li key={it.t} className={it.hot ? s.cHot : ''}>
              <div>
                <p className={s.cT}>{it.t}</p>
                <p className={s.cD}>{it.d}</p>
              </div>
              <span className={s.cBtn}>{it.a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
