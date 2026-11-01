import LiquidButton, { type LiquidVariant } from '@/components/LiquidButton';
import s from './lab.module.css';

// Private playground for UI pieces. Not linked from the nav, not indexed.
export const metadata = { title: 'Lab · Buttons', robots: { index: false, follow: false } };

const variants: { v: LiquidVariant; name: string; note: string }[] = [
  { v: 'ink', name: 'Ink', note: 'Default · primary CTA on cream' },
  { v: 'black', name: 'Black', note: 'Pure black face, white icon' },
  { v: 'emerald', name: 'Emerald', note: 'Brand action colour' },
  { v: 'mint', name: 'Mint', note: 'Soft · works on night' },
  { v: 'cream', name: 'Cream', note: 'Light face · best on night' },
];

export default function Lab() {
  return (
    <section className={`container ${s.wrap}`}>
      <p className="eyebrow">Lab · Brand v1.2</p>
      <h1 className={s.h1}>
        Liquid metal <span className="accent">buttons</span>
      </h1>
      <p className={s.sub}>
        One component, five faces from the brand palette. Usage: <code>&lt;LiquidButton variant=&quot;emerald&quot;&gt;</code>
      </p>

      <div className={s.panel}>
        <span className={s.tag}>On cream</span>
        <div className={s.grid}>
          {variants.map((x) => (
            <div key={x.v} className={s.cell}>
              <LiquidButton variant={x.v} href="#">
                View work
              </LiquidButton>
              <b>{x.name}</b>
              <span className={s.note}>{x.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`${s.panel} ${s.night}`}>
        <span className={s.tag}>On night</span>
        <div className={s.grid}>
          {variants.map((x) => (
            <div key={x.v} className={s.cell}>
              <LiquidButton variant={x.v} href="#">
                Let&apos;s talk
              </LiquidButton>
              <b>{x.name}</b>
            </div>
          ))}
        </div>
      </div>

      <div className={`${s.panel} ${s.mintBg}`}>
        <span className={s.tag}>Small · no icon</span>
        <div className={s.row}>
          {variants.map((x) => (
            <LiquidButton key={x.v} variant={x.v} size="sm" icon={x.v === 'ink' || x.v === 'emerald'}>
              {x.name}
            </LiquidButton>
          ))}
        </div>
      </div>
    </section>
  );
}
