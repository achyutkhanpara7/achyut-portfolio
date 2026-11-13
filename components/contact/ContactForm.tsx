'use client';

import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { site } from '@/content/work';
import s from './contact.module.css';

/* Sends the message straight to Achyut's inbox through FormSubmit (no account or server needed).
   The very first submission makes FormSubmit email an activation link to that inbox; after it's
   confirmed once, every message arrives as a normal email with a Reply-To set to the sender. */
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

const topics = ['Full-time role', 'Contract project', 'Freelance', 'Just saying hi'];

type State = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState('');
  const [sentTo, setSentTo] = useState('');
  const [bad, setBad] = useState<string[]>([]); // fields that need fixing

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_honey')) return; // a bot filled the hidden field
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const missing = [!name && 'name', !email && 'email', !message && 'message'].filter(Boolean) as string[];
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (missing.length || !emailOk) {
      const fields = missing.length ? missing : ['email'];
      setBad(fields);
      setError(missing.length ? 'Add your name, email and a short message.' : 'That email looks off. Check it so I can reply.');
      setState('error');
      form.querySelector<HTMLElement>(`[name="${fields[0]}"]`)?.focus();
      return;
    }
    setBad([]);
    setState('sending');
    setError('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company: String(data.get('company') || '').trim() || '—',
          topic,
          message,
          _replyto: email,
          _subject: `Portfolio: ${topic} — ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && String(json.success) === 'true') {
        setSentTo(name.split(' ')[0]);
        setState('sent');
        form.reset();
      } else {
        throw new Error(json.message || 'The message did not go through.');
      }
    } catch {
      setError(`Something went wrong on the way. You can also email me at ${site.email}.`);
      setState('error');
    }
  }

  return (
    <div className={s.card}>
      <AnimatePresence mode="wait" initial={false}>
        {state === 'sent' ? (
          <motion.div
            key="sent"
            className={s.sent}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <svg viewBox="0 0 52 52" className={s.tick} aria-hidden>
              <circle cx="26" cy="26" r="24" />
              <path d="M15 27 l7 7 l15 -16" />
            </svg>
            <h3>Thanks, {sentTo}. It&apos;s in my inbox.</h3>
            <p>I read every message myself and I&apos;ll get back to you soon.</p>
            <p className="hand">talk soon :)</p>
            <button type="button" className={s.again} onClick={() => setState('idle')}>
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <fieldset className={s.topics}>
              <legend>What&apos;s this about?</legend>
              <div>
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={topic === t}
                    className={topic === t ? s.topicOn : ''}
                    onClick={() => setTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className={s.row2}>
              <label className={s.field}>
                <span>Your name</span>
                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Jane Doe"
                  aria-invalid={bad.includes('name') || undefined}
                  aria-describedby={bad.includes('name') ? 'form-error' : undefined}
                />
              </label>
              <label className={s.field}>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="jane@company.com"
                  aria-invalid={bad.includes('email') || undefined}
                  aria-describedby={bad.includes('email') ? 'form-error' : undefined}
                />
              </label>
            </div>
            <label className={s.field}>
              <span>
                Company <em>optional</em>
              </span>
              <input name="company" autoComplete="organization" placeholder="Where you work" />
            </label>
            <label className={s.field}>
              <span>Message</span>
              <textarea
                name="message"
                required
                aria-invalid={bad.includes('message') || undefined}
                aria-describedby={bad.includes('message') ? 'form-error' : undefined}
                rows={5}
                placeholder="Tell me about the product, the role or the problem you're working on."
              />
            </label>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className={s.honey} aria-hidden />

            {state === 'error' && (
              <p id="form-error" className={s.error} role="alert">
                {error}
              </p>
            )}

            <button type="submit" className={s.submit} disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send message'}
              <span aria-hidden>↗</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
