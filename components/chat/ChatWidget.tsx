'use client';

import Link from 'next/link';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { site } from '@/content/work';
import s from './chat.module.css';

// "Ask about Achyut": a floating chat on every page. Answers come from app/api/chat (Claude, grounded in the site's content).
type Msg = { role: 'user' | 'assistant'; content: string };

const STORE = 'ak-chat';
const starters = ['What is he working on now?', 'Show me his AI work', 'Is he open to relocation?', 'How do I reach him?'];
const hello: Msg = {
  role: 'assistant',
  content: `Hi! I can answer questions about ${site.name.split(' ')[0]}: his work, skills, process and availability. What would you like to know?`,
};

// URLs, emails and site paths become links; internal paths stay in the app so the chat stays open.
const LINK = /(https?:\/\/[^\s)]+[^\s).,!?:;'"]|[\w.+-]+@[\w-]+\.[\w.]+[a-z]|(?<![\w/])\/(?:work|about|contact)\/[\w-]*\/?)/gi;
function Rich({ text }: { text: string }) {
  const parts = text.split(LINK);
  return (
    <>
      {parts.map((p, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{p}</Fragment>;
        if (p.startsWith('/')) {
          const href = p.endsWith('/') ? p : `${p}/`;
          return (
            <Link key={i} href={href}>
              {p}
            </Link>
          );
        }
        let href = p.includes('@') && !p.startsWith('http') ? `mailto:${p}` : p;
        try {
          const u = new URL(href);
          if (u.origin === site.url) href = u.pathname; // own site → client-side link
        } catch {}
        if (href.startsWith('/'))
          return (
            <Link key={i} href={href}>
              {p.replace(/^https?:\/\//, '')}
            </Link>
          );
        return (
          <a key={i} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
            {p.replace(/^https?:\/\//, '')}
          </a>
        );
      })}
    </>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([hello]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // remember the conversation for this visit
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORE);
      if (saved) {
        const list = JSON.parse(saved);
        if (Array.isArray(list) && list.length) setMsgs(list);
      }
    } catch {}
  }, []);
  useEffect(() => {
    if (busy) return;
    try {
      sessionStorage.setItem(STORE, JSON.stringify(msgs.slice(-30)));
    } catch {}
  }, [msgs, busy]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 180);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const send = useCallback(
    async (q: string) => {
      const question = q.trim().slice(0, 600);
      if (!question || busy) return;
      const history: Msg[] = [...msgs.filter((m) => m !== hello), { role: 'user', content: question }];
      setMsgs([...msgs, { role: 'user', content: question }, { role: 'assistant', content: '' }]);
      setDraft('');
      setBusy(true);
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      const write = (fn: (prev: string) => string) =>
        setMsgs((list) => {
          const next = list.slice();
          const last = next[next.length - 1];
          next[next.length - 1] = { ...last, content: fn(last.content) };
          return next;
        });
      try {
        const res = await fetch('/api/chat/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history.filter((m) => m.content).slice(-12) }),
          signal: ctrl.signal,
        });
        if (!res.body) throw new Error('no body');
        const reader = res.body.getReader();
        const dec = new TextDecoder();
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = dec.decode(value, { stream: true });
          write((p) => p + chunk);
        }
      } catch (e) {
        if ((e as Error).name !== 'AbortError')
          write((p) => p || `Something went wrong on my side. You can email Achyut at ${site.email}.`);
      } finally {
        write((p) => p.trim() || `I couldn't answer that just now. You can email Achyut at ${site.email}.`);
        setBusy(false);
        abortRef.current = null;
      }
    },
    [busy, msgs],
  );

  const reset = () => {
    abortRef.current?.abort();
    setMsgs([hello]);
    try {
      sessionStorage.removeItem(STORE);
    } catch {}
  };

  const fresh = msgs.length === 1;

  return (
    <div className={s.root}>
      <section
        id="ak-chat"
        className={`${s.panel} ${open ? s.open : ''}`}
        role="dialog"
        aria-label={`Ask about ${site.name}`}
        aria-hidden={!open}
        inert={!open}
      >
        <header className={s.head}>
          <img src={site.photo} alt="" width={40} height={40} className={s.avatar} />
          <div className={s.who}>
            <strong>Ask about Achyut</strong>
            <span>
              <i aria-hidden /> AI assistant · answers from this site
            </span>
          </div>
          {!fresh && (
            <button type="button" className={s.ghost} onClick={reset} aria-label="Start a new chat" title="New chat">
              <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden>
                <path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          <button
            type="button"
            className={s.ghost}
            onClick={() => {
              setOpen(false);
              btnRef.current?.focus();
            }}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className={s.list} ref={listRef} data-lenis-prevent aria-live="polite">
          {msgs.map((m, i) => (
            <p key={i} className={m.role === 'user' ? s.me : s.bot}>
              {m.content ? <Rich text={m.content} /> : <span className={s.dots} aria-label="Typing"><i /><i /><i /></span>}
            </p>
          ))}
          {fresh && (
            <div className={s.starters}>
              {starters.map((q) => (
                <button key={q} type="button" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          className={s.form}
          onSubmit={(e) => {
            e.preventDefault();
            send(draft);
          }}
        >
          <textarea
            ref={inputRef}
            value={draft}
            rows={1}
            maxLength={600}
            placeholder="Ask anything about Achyut…"
            aria-label="Your question"
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault();
                send(draft);
              }
            }}
          />
          <button type="submit" className={s.send} disabled={busy || !draft.trim()} aria-label="Send">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
        <p className={s.note}>
          AI can get things wrong. For anything important, <a href={`mailto:${site.email}`}>email Achyut</a>.
        </p>
      </section>

      <button
        ref={btnRef}
        type="button"
        className={`${s.fab} ${open ? s.fabOpen : ''}`}
        aria-expanded={open}
        aria-controls="ak-chat"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={s.fabFace}>
          <img src={site.photo} alt="" width={36} height={36} />
          <i aria-hidden />
        </span>
        <span className={s.fabText}>{open ? 'Close' : 'Ask about me'}</span>
      </button>
    </div>
  );
}
