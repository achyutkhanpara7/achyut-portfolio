import LiquidButton from '@/components/LiquidButton';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container" style={{ padding: '120px var(--gutter) 40px', maxWidth: 720 }}>
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 'var(--fs-display-l)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
        This page got lost.
        <br />
        <span className="turn">The work didn&apos;t.</span>
      </h1>
      <div style={{ marginTop: 28 }}>
        <LiquidButton href="/work/" variant="emerald">
          See the work
        </LiquidButton>
      </div>
    </section>
  );
}
