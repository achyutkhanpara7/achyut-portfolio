'use client';

import { useEffect, useState } from 'react';

// Live local time in Plano, Texas (renders after mount to avoid hydration mismatch).
export default function LocalTime() {
  const [t, setT] = useState('');
  useEffect(() => {
    const f = () =>
      setT(
        new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit' }).format(
          new Date(),
        ),
      );
    f();
    const id = setInterval(f, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{t || '—'}</span>;
}
