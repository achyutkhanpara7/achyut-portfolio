import CaseShell from '@/components/case/CaseShell';

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return <CaseShell>{children}</CaseShell>;
}
