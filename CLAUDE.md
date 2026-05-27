@AGENTS.md

# IYKE Chris Computers — Project Rules & Preferences

## Project Overview
Business website for **IYKE Chris Computers**, a Nigerian end-to-end technology company (IoT, enterprise hardware, security, networking, custom digital platforms). Based in Akure, Ondo State.

Figma source: `https://www.figma.com/design/zJKaVbaObmCfhTij2SOc4M/Iyke-chris-computer?node-id=0-1`

---

## Tech Stack
- **Framework**: Next.js (App Router) — check `node_modules/next/dist/docs/` before writing Next.js code
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 — uses `@import "tailwindcss"` (NOT `@tailwind base/components/utilities`)
- **Font**: Geist (via `next/font/google`), CSS variable `--font-geist-sans`
- **Images**: `next/image` with explicit `width`/`height` props always

---

## Color System
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#111113` | Page backgrounds, dark sections |
| `--bg-secondary` | `#1a1a1e` | Cards, stats bars, secondary dark |
| `--accent` | `#2563eb` | Blue CTAs, highlights |
| White footer bg | `#ffffff` | Footer, light sections |

**Rule**: Do NOT use heavy navy blue (`#070c18`, `#0d1528`, `#040810`). The client prefers neutral charcoal over deep blue-tinted darks. Keep glow blob opacity at `/8` or lower; grid line tints at `0.03` or lower.

---

## File Structure
```
app/
  layout.tsx          ← wraps ALL pages with <Navbar> + <Footer>
  page.tsx            ← homepage
  globals.css         ← Tailwind import + CSS vars + animations
  icon.png            ← favicon (copy of public/logo.png)
  about/page.tsx
  solutions/page.tsx
  products/page.tsx   ← "use client" (filter tabs)
  projects/page.tsx
  insights/page.tsx
  contact/page.tsx    ← "use client" (form + FAQ accordion)
components/
  layout/
    Navbar.tsx        ← "use client" (scroll detection)
    Footer.tsx        ← light theme footer
  sections/
    Hero.tsx
    CTASection.tsx
    (other home sections)
  ui/
    PageHero.tsx      ← shared hero for inner pages
    NewsletterForm.tsx ← "use client" (extracted form)
constants/
  index.ts            ← ALL static content (nav links, products, etc.)
public/
  logo.png            ← white-on-transparent PNG logo
```

---

## Coding Conventions

### `"use client"` Rule
Only add `"use client"` when the component uses browser APIs: `useState`, `useEffect`, `useRef`, event handlers, or browser-only APIs. Server Components are the default — do not add `"use client"` unnecessarily.

If a page is a Server Component but needs interactive elements (forms with `onSubmit`, accordions), **extract** the interactive part into a separate client component file and import it.

### Logo Usage
- **Navbar** (dark bg): `<Image src="/logo.png" ... />` — no filter, white logo shows fine
- **Footer** (light bg): `<Image src="/logo.png" ... className="invert" />` — CSS `filter: invert(1)` makes it dark/black

### Constants
All static copy (nav links, product data, case studies, footer columns, etc.) lives in `constants/index.ts`. Pages import from there — no hardcoded arrays inside page files.

### No Comments
Do not add code comments unless the WHY is completely non-obvious. No docstrings, no `// renders X` style comments.

---

## Design System
Use max width of "max-w-[1400px]" for section components

### Section Headers (inner pages)
```tsx
<div className="flex items-center justify-center gap-3 mb-4">
  <div className="w-7 h-0.5 bg-slate-700" />  {/* use slate-200 on light bg */}
  <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">
    Eyebrow text
  </span>
  <div className="w-7 h-0.5 bg-slate-700" />
</div>
```

### Gradient Text
Use `className="gradient-text"` (defined in `globals.css`) for highlighted headline words. Gradient: white → `#93c5fd`.

### Inner Page Hero
Use `<PageHero eyebrow="..." title="..." titleHighlight="..." description="..." />` for all pages except home. This keeps consistent dark hero with grid bg and blue glow.

### Cards (dark bg)
```
bg-white/[0.04] border border-white/8 hover:border-blue-500/30 hover:bg-white/[0.07] rounded-2xl
```

### CTA Buttons
- **Primary**: `bg-blue-600 hover:bg-blue-500 text-white rounded-full`
- **Outline / ghost**: `border border-white/15 bg-white/10 backdrop-blur-sm text-white rounded-full`

---

## Footer Rules
The footer has two zones:

1. **CTA card** — dark gradient (`#07090f → #0d1a3a`), inline SVG background (12 perspective lines + 8 Bézier arcs + blue ellipse glow), 5 avatar images with centre one larger (`w-16 h-16 -translate-y-3`), single frosted-glass pill CTA.

2. **Main footer** — white background, 12-col grid. Logo on left with `className="invert"`. Contact details with SVG icons. Solutions / Company / Resources link columns. Bottom bar: copyright left, 4 social icon buttons right.

Do not put the footer background back to dark. It must stay light/white.

---

## Preferences & Rules Observed
- **Tone**: Professional, enterprise-grade. Nigerian market context (mention NDPR, local infrastructure realities where relevant).
- **No heavy navy**: Charcoal (`#111113`) preferred over blue-tinted darks.
- **PineConnector-style CTA**: The footer CTA card aesthetic (SVG wave lines, frosted glass button, raised centre avatar) should be preserved and extended if similar sections are added.
- **Keep pages consistent**: All inner pages use `PageHero` + alternating light/dark sections + a blue CTA strip at the bottom.
- **Responsive first**: Mobile layouts are important. Use `sm:`, `md:`, `lg:` breakpoints consistently. The navbar collapses to a hamburger below `lg`.
- **No placeholder `href="#"`** on nav links — always use the actual route (`/about`, `/solutions`, etc.). Footer column links can remain `href="#"` until pages are defined.
