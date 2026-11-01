# achyutkhanpara.com

Portfolio built on Brand Guidelines v1.1 — Next.js 15 (static export) + MDX + Motion.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
```

## Where things live

| What | File |
|---|---|
| Brand tokens (colors, type, radius, motion) | `app/globals.css` (top `:root` block) |
| Project list, titles, roles, tags, links | `content/work.ts` |
| Case study copy | `app/work/(cases)/<slug>/page.mdx` |
| Home / About | `app/page.tsx`, `app/about/page.tsx` |
| Images & videos | `public/work/<slug>/...` |

## Writing a case study (MDX building blocks)

```mdx
<CaseHeader slug="grc" />                          // title, summary, cover, meta row
<Callout>One sentence a skimmer remembers.</Callout>
<Figure src="/work/grc/dashboard.png" caption="..." />
<Figure src="/work/grc/flow.mp4" video caption="..." />
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
- [ ] `moreWork` hrefs pointed at existing case studies

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → pick the repo → Deploy (framework auto-detected).
3. Project → Settings → Domains → add `achyutkhanpara.com` and `www.achyutkhanpara.com`.
4. Copy the DNS records Vercel shows into your domain registrar's DNS settings.
5. Every `git push` redeploys automatically.

Because it's a static export, `/out` also works on Netlify, Cloudflare Pages or GitHub Pages.
