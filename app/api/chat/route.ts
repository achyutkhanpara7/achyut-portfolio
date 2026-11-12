import { NextResponse, type NextRequest } from 'next/server';
import { offlineReply, systemPrompt } from '@/lib/chat/knowledge';

// Portfolio chatbot. Streams plain text back to components/chat/ChatWidget.tsx.
// Needs ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables. Without it, a friendly fallback is returned.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MODEL = process.env.CHAT_MODEL || 'claude-haiku-5-5';
const MAX_TURNS = 12; // messages of history sent to the model
const MAX_CHARS = 600; // per visitor message
const LIMIT = 20; // messages per visitor…
const WINDOW = 10 * 60 * 1000; // …per 10 minutes (best effort, per server instance)

type Msg = { role: 'user' | 'assistant'; content: string };

const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > LIMIT;
}

const text = (body: string, status = 200) =>
  new Response(body, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });

export async function POST(req: NextRequest) {
  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = (Array.isArray(body?.messages) ? body.messages : [])
      .filter((m: Msg) => (m?.role === 'user' || m?.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
      .map((m: Msg) => ({ role: m.role, content: m.content.slice(0, m.role === 'user' ? MAX_CHARS : 2000) }))
      .slice(-MAX_TURNS);
  } catch {
    return NextResponse.json({ error: 'bad request' }, { status: 400 });
  }
  while (messages.length && messages[0].role !== 'user') messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== 'user') return NextResponse.json({ error: 'bad request' }, { status: 400 });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return text(offlineReply);

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'local';
  if (limited(ip)) return text('That’s a lot of questions in a short time. Give it a few minutes, or email Achyut directly at achyutkhanpara7@gmail.com.', 429);

  let upstream: Response;
  try {
    upstream = await fetch(`${process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com'}/v1/messages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 500,
        stream: true,
        system: [{ type: 'text', text: systemPrompt(), cache_control: { type: 'ephemeral' } }],
        messages,
      }),
    });
  } catch {
    return text(offlineReply, 502);
  }
  if (!upstream.ok || !upstream.body) {
    console.error('chat upstream', upstream.status, await upstream.text().catch(() => ''));
    return text(offlineReply, 502);
  }

  // Server-sent events from Anthropic → a plain stream of text for the widget.
  const reader = upstream.body.getReader();
  const dec = new TextDecoder();
  const enc = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let buf = '';
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let i: number;
          while ((i = buf.indexOf('\n')) >= 0) {
            const line = buf.slice(0, i).trim();
            buf = buf.slice(i + 1);
            if (!line.startsWith('data:')) continue;
            try {
              const ev = JSON.parse(line.slice(5));
              if (ev.type === 'content_block_delta' && ev.delta?.type === 'text_delta') controller.enqueue(enc.encode(ev.delta.text));
            } catch {
              /* partial or non-JSON line */
            }
          }
        }
      } catch {
        controller.enqueue(enc.encode('\n\n(Connection dropped. Try again, or email achyutkhanpara7@gmail.com.)'));
      }
      controller.close();
    },
    cancel() {
      reader.cancel().catch(() => {});
    },
  });
  return new Response(stream, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });
}
