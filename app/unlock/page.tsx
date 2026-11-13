import Link from 'next/link';
import { caseStudies, site } from '@/content/work';
import { safeNext } from '@/lib/access';
import LiquidButton from '@/components/LiquidButton';
import s from './unlock.module.css';

export const metadata = { title: 'Protected case study', robots: { index: false } };

type Props = { searchParams: Promise<{ next?: string; error?: string }> };

export default async function Unlock({ searchParams }: Props) {
  const { next: rawNext, error } = await searchParams;
  const next = safeNext(rawNext);
  const slug = next.split('/').filter(Boolean)[1];
  const study = caseStudies.find((c) => c.slug === slug);
  const subject = encodeURIComponent(`Portfolio access${study ? ` — ${study.title}` : ''}`);

  return (
    <section className={`container ${s.wrap}`}>
      <div className={`pattern-rings ${s.rings}`} aria-hidden />
      <div className={s.card}>
        <span className={s.lockIcon} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
        </span>
        <p className="eyebrow">{study ? study.client : 'Protected work'}</p>
        <h1 className={s.h1}>
          This one&apos;s <span className="accent" style={{ whiteSpace: 'nowrap' }}>password-protected.</span>
        </h1>
        <p className={s.sub}>
          {study ? (
            <>
              <b>{study.title}</b> is client work.{' '}
            </>
          ) : (
            'This case study is client work. '
          )}
          Use the password I shared with you, or ask me for one.
        </p>

        <form action="/api/unlock/" method="post" className={s.form}>
          <input type="hidden" name="next" value={next} />
          <label className={s.label} htmlFor="pw">
            Password
          </label>
          <div className={s.row}>
            <input
              id="pw"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              autoFocus
              className={`${s.input} ${error === 'wrong' ? s.inputErr : ''}`}
              aria-invalid={error === 'wrong'}
              aria-describedby={error ? 'pw-error' : undefined}
            />
            <LiquidButton type="submit" variant="black" icon={false}>
              Unlock
            </LiquidButton>
          </div>
          {error === 'wrong' && (
            <p id="pw-error" className={s.err} role="alert">
              That password didn&apos;t match. Check for typos, or ask me for a fresh one.
            </p>
          )}
          {error === 'config' && (
            <p id="pw-error" className={s.err} role="alert">
              Access isn&apos;t switched on yet. Email me and I&apos;ll send the case study directly.
            </p>
          )}
        </form>

        <div className={s.foot}>
          <a href={`mailto:${site.email}?subject=${subject}`} className={s.ask}>
            Request access →
          </a>
          <Link href="/work/" className={s.back}>
            ← Back to all work
          </Link>
        </div>
      </div>
    </section>
  );
}
