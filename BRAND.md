# Brand v1.2 — web extension

Everything in Brand Guidelines v1.1 still applies (cream / ink / emerald 60-30-10, Plus Jakarta Sans,
one handwritten Caveat note per view, rings or hanging tags, glass only on floating surfaces).
v1.2 adds a few things the portfolio needs. Tokens live at the top of `app/globals.css`.

## 1. Accent serif (new)
- **Instrument Serif Italic**, emerald gradient (`.accent`, `--font-accent`, `--grad-accent`).
- Use for **one highlight word per headline** — the "turn" word. Never for body copy or whole lines.
- Caveat stays the handwritten aside. They never sit next to each other in the same line.

## 2. Highlight marker (new)
- Mint → ring-faint stroke behind 1–3 words, sweeps in left→right on load. Max one per view.

## 3. Patterns (new)
| Class | Use |
|---|---|
| `.pattern-dots` / `.pattern-dots-light` | Bands, empty states, footer |
| `.pattern-grid` | Technical / design-system contexts |
| `.pattern-rings` | Behind lock screens and loaders (echoes the rings motif) |

## 4. Motion (additions)
- `--ease-spring: cubic-bezier(.19,1,.22,1)` for text reveals (lines rise from a mask, 1s).
- Splash: first visit per browser session only, ~1.6s, skipped for reduced-motion users.

## 5. Components (new)
- **Lock chip** (`.lock`) — ink pill marking NDA / password-protected work.
- **Section kicker** (`.kicker`) — mono label with emerald dot above section titles.
- **Discipline lens** — two large cards that split the portfolio into UX case studies and Brand & visual.

## Rules that did not change
- Numbers only when real, source next to them.
- No "hire me" / "open to work" phrasing.
- Glass never stacked; never behind long copy.
