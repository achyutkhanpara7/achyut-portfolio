'use client';

import { useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { track } from '@vercel/analytics';
import { site } from '@/content/work';
import LiquidButton from '@/components/LiquidButton';
import s from '@/app/unlock/unlock.module.css';

/* "Request access" opens a short form right on the unlock card. The request goes to Achyut's inbox
   through FormSubmit (same endpoint as the contact form) with the case study name in the subject, and
   each open / send is also logged as a Vercel Analytics custom event. */
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;
type State = 'closed' | 'open' | 'sending' | 'sent';

export default function RequestAccess({ study }: { study: string }) {
  const [state, setState] = useState<State>('closed');
  const [error, setError] = useState('');
  const [bad, setBad] = useState<string[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);

  function open() {
    setState('open');
    track('Request access opened', { study });
    setTimeout(() => nameRef.current?.focus(), 250);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_honey')) return;
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const company = String(data.get('company') || '').trim();
    const message = String(data.get('message') || '').trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const fields = [!name && 'name', !emailOk && 'email'].filter(Boolean) as string[];
    if (fields.length) {
      setBad(fields);
      setError(!name ? 'Add your name and work email.' : 'That email looks off. Check it so I can send the password.');
      form.querySelector<HTMLElement>(`[name="${fields[0]}"]`)?.focus();
      return;
    }
    setBad([]);
    setError('');
    setState('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'case study': study,
          name,
          email,
          company: company || '—',
          message: message || '—',
          page: window.location.href,
          _replyto: email,
          _subject: `Access request: ${study} — ${name}${company ? ` (${company})` : ''}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== 'true') throw new Error();
      track('Access request sent', { study, company: company || 'not given' });
      setState('sent');
    } catch {
      setError(`That didn't go through. You can also email me at ${site.email}.`);
      setState('open');
    }
  }

  if (state === 'closed')
    return (
      <button type="button" className={s.ask} onClick={open} aria-expanded={false} aria-controls="request-access">
        Request access →
      </button>
    );

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={state === 'sent' ? 'sent' : 'form'}
        id="request-access"
        className={s.req}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {state === 'sent' ? (
          <p className={s.reqDone} role="status">
            <b>Request sent.</b> I&apos;ll email you the password shortly.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className={s.reqForm}>
            <p className={s.reqTitle}>Request access to {study}</p>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className={s.honey} aria-hidden />
            <label className={s.reqField}>
              <span>Name</span>
              <input ref={nameRef} name="name" autoComplete="name" aria-invalid={bad.includes('name')} className={bad.includes('name') ? s.inputErr : ''} />
            </label>
            <label className={s.reqField}>
              <span>Work email</span>
              <input name="email" type="email" autoComplete="email" aria-invalid={bad.includes('email')} className={bad.includes('email') ? s.inputErr : ''} />
            </label>
            <label className={s.reqField}>
              <span>
                Company <em>optional</em>
              </span>
              <input name="company" autoComplete="organization" />
            </label>
            <label className={s.reqField}>
              <span>
                Message <em>optional</em>
              </span>
              <textarea name="message" rows={3} placeholder="A line about the role or why you'd like to see it" />
            </label>
            {error && (
              <p className={s.err} role="alert">
                {error}
              </p>
            )}
            <div className={s.reqActions}>
              <LiquidButton type="submit" variant="emerald" icon={false}>
                {state === 'sending' ? 'Sending…' : 'Send request'}
              </LiquidButton>
              <button type="button" className={s.back} onClick={() => setState('closed')}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
