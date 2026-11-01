import CaseShell from '@/components/case/CaseShell';

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="aura aura-mist" style={{ height: 560, bottom: 'auto', zIndex: -1 }} aria-hidden>
        <span /><span />
      </div>
      <CaseShell>{children}</CaseShell>
    </div>
  );
}
