# achyutkhanpara.com

Portfolio built on Brand Guidelines v1.1 (+ web extension v1.2, see BRAND.md) — Next.js 15 + MDX + Motion, hosted on Vercel.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build on http://localhost:3000
```

## Where things live

| What | File |
|---|---|
| Brand tokens (colors, type, radius, motion) | `app/globals.css` (top `:root` block) |
| Project list (UX + Brand), locked flag, links | `content/work.ts` |
| Password gate | `middleware.ts`, `app/unlock/`, `app/api/unlock/` |
| Case study copy | `app/work/(cases)/<slug>/page.mdx` |
| Home / About | `app/page.tsx`, `app/about/page.tsx` |
| Images & videos | `public/work/<slug>/...` |

## Project cover images (one format for every card)

Every card and case-study header shows its image inside the same mockup:
brand gradient → browser window → your image (always fully visible).

| Spec | Value |
|---|---|
| Size | **1600 × 1000 px** (16:10) |
| Format | WebP (preferred) or PNG |
| Path | `public/work/<slug>/cover.webp` |
| Content | The key screen only — no device frame, no background (the mockup adds both) |
| NDA | Blur or replace client names/data; cover images are public even for locked case studies |

Slugs: `grc`, `worldkit`, `network-governance`, `seven-eleven`, `personal-brand`, `attune`, `asu-sun-award`.
Replace the file with the same name and the site picks it up — no code change needed.

## Writing a case study (MDX building blocks)

```mdx
// The header (title, summary, Role/Timeline/Team/Industry, hero image) comes from content/work.ts automatically.
## Section title                                    // numbered 01, 02… and listed in "On this page"
<Callout>One sentence a skimmer remembers.</Callout>
<Figure src="/work/grc/dashboard.png" caption="..." />
<Figure src="/work/grc/flow.mp4" video caption="..." />   // autoplay, muted, loops
<Quotes>
  <Quote who="Compliance analyst">I had to open four modules to answer one question.</Quote>
</Quotes>
<Change title="One place to start" before="..." after="...">Why it changed.</Change>
<Decision n={1} problem="..." decision="...">Why.</Decision>
<Stats><Stat value="~50%" label="..." source="how it was measured" /></Stats>
<Note>one handwritten aside per view :)</Note>
<Todo>Draft placeholder — remove before launch</Todo>

// interactive
<BeforeAfter before="/a.png" after="/b.png" />
<Stepper steps={[{ label, title, body, image }]} />
<PersonaSwitcher personas={[{ name, needs, sees: [] }]} />
<TokenPlayground />
```

Every `## Heading` shows up automatically in the side rail.

## Before launch checklist

- [ ] No `TODO` left: `grep -rn "TODO" app content`
- [ ] Real screenshots in every `<Figure>` (client data blurred / anonymized)
- [ ] Numbers only where there's a source; none on POCs
- [ ] `site.resume` set in `content/work.ts` (put `resume.pdf` in `/public`)
- [ ] `projects` in `content/work.ts`: set `link: 'external'` + `href` for older case studies

## Password-protected case studies

Projects with `locked: true` in `content/work.ts` open only after the visitor enters the password.

- **Local:** put `PORTFOLIO_PASSWORD=your-password` in `.env.local` (not committed), restart `npm run dev`.
- **Vercel:** Project → Settings → Environment Variables → add `PORTFOLIO_PASSWORD` (Production + Preview) → redeploy.
- If the variable is missing, locked pages stay locked for everyone (fail closed).
- Change the password any time: update the variable and redeploy. Old access cookies stop working.

## Deploy (Vercel)

Connected to GitHub: every push to `main` deploys automatically.
