# PROJECT-LOG

A running log of build decisions for the lifewallet marketing site. Newest entries on top.
The homepage is composed of 12 sections (`src/components/sections/`), built one at a time.

---

## 03 — The problem · 2026-06-11

Built the problem section (section 03) from the Figma desktop node `6532-16832` and mobile node
`6608-26139`. Headline **"Wann hast Du zuletzt den Kopf frei gehabt?"** with four pain-point cards
and a Wally-on-a-paper-pile illustration.

### Layout (`src/components/sections/TheProblemSection.tsx`)

A single responsive flex layout (server component, no JS — the design is static):
- **Mobile (`<lg`)** — one column, left-aligned: label + headline, then the four cards stacked,
  then the illustration centred at the bottom (`max-w-[420px]`). Headline `24px`.
- **Desktop (`lg`+)** — two columns, vertically centred (`lg:items-center`): a fixed
  `lg:w-[536px]` left column (header + cards) and the illustration filling the rest
  (`lg:flex-1`, `max-w-[700px]`, **`lg:justify-end`** so its right edge sits on the margin).
  Headline `30px`.

**Gutters match the hero** (per request): `max-w-[1440px]` with `px-5` (mobile) / `lg:px-10`
(desktop), so the content's left edge and the illustration's right edge land on the hero's exact
margins — verified at 1440px: text/cards left edge `40px`, illustration right edge `40px` from the
viewport. (Earlier this used the trust banner's `max-w-[1296px]`/`px-6`; the hero is the reference.)

A single `PROBLEMS` array drives the four cards (icon box `57px` `bg-[#f1f2d3]`, `32px` line icon;
`14px` medium title + `14px` regular body). Cards are `bg-white rounded-[17px]` with a whisper-soft
shadow so they lift off the `bg-box` (`#f1ede8`) section.

### The illustration — designer SVG, grain stripped

The right-side artwork (owl + paper pile + the two floating UI cards) was delivered as a single
vector file, `the problem.svg` (742×478), already sitting in the asset folder. It rendered as
**dozens of loose, ungrouped paper shapes** in the Figma node — impractical to hand-build — so the
provided SVG is the right source, and far crisper than a raster crop would be (the card text
*"organize documents…"* / *"passport"* is **outlined to paths**, no font dependency).

> **Grain stripped (same call as the hero's Logo/Me):** the file shipped with **373** Figma grain
> filters (`feTurbulence` + `feDisplacementMap`), one per paper shape. SVG filters rasterize at ~1×
> (blurry on retina) and 373 instances would tank render perf. Removed every `filter="url(#…)"`
> reference and all `<filter>` defs → pure vector fills. Size dropped **360 KB → 95 KB**; verified
> it still renders (owl, pile, both cards). Saved as `problem-illustration.svg`; the original
> `the problem.svg` was deleted.

The illustration has a **transparent background** (papers paint directly on the section's `bg-box`),
so it drops cleanly into both the desktop and mobile layouts with no edge halo.

### The wand wave — self-animating SVG (no JS)

Wally now **waves the wand up and down** (per request). The animation lives **inside the SVG file**,
not the React component — a CSS animation embedded in an `<img>`-loaded SVG still plays, so no
client component / JS is needed and it works through `next/image` (which serves SVGs unrasterized).

How: the three artwork pieces that make up the raised arm — the **wand stick** (`<line>` `#746B5E`),
the **gold star** (gradient path) and the **right wing/hand** (the `#2C2D1C` `<g>`) — were pulled out
of their scattered positions and wrapped in a single `<g class="wand-arm">`. An inline `<style>`
rotates that group **±7° around the shoulder pivot** (`transform-origin: 301px 116px` with
`transform-box: view-box`, the point where the wing meets the body), `wandWave 3s ease-in-out
infinite`. The **left arm, body, eyes and the whole paper pile stay static**. Honours
`prefers-reduced-motion: reduce` (animation off), matching the hero's motion guards.

### The upload sequence — one synced 4.8s loop (still all in-SVG, no JS)

The card now tells a story on a single shared **4.8s** timeline (three CSS animations, same
duration, synced purely by keyframe percentages — no JS, no `animation-delay`):

1. **Document flies in** (`.flying-doc` / `docFly`) — the paper + its three `#C0B7AC` motion
   stripes start near Wally's wand (`translate(-100 20)`, faded in) and travel up to the card
   (`translate(34 -6)`) by 33%, then fade out as if absorbed. (The static `translate(34 -6)`
   attribute remains as the reduced-motion / no-anim resting position.)
2. **Progress ring loads** (`.progress-arc` / `progFill`) — the baked `#4F5125` progress wedge was
   **replaced by a stroked `<circle>`** (centre `627.5,69.4`, r `41.085`, width `10.085` to overlay
   the `#C7CA79` track donut exactly) using `pathLength="100"` + `stroke-dasharray="100"`, rotated
   `-90°` to start at 12 o'clock. It fills `stroke-dashoffset 100→0` from 33%→55% — i.e. **right as
   the document arrives**. The upload icon stays static on top.
3. **Confirmation pill pops up** (`.upload-card` / `cardPop`) — the "passport" item (file icon +
   green check = *uploaded*) was wrapped in `<g class="upload-card">` and scales `0.6→1.06→1` with
   a fade at ~58–72%, **shortly after the ring completes**. `transform-origin: 570px 197px`
   (`transform-box: view-box`).

At 90–100% the ring + pill fade out and everything resets (the offscreen jumps happen while
`opacity:0`, so the loop is seamless). All three honour `prefers-reduced-motion: reduce` (→
animation off, resting state = document at card, ring full, pill visible). The wand wave
(`wandWave 3s`) runs on its own independent period.

The illustration `src` is bumped on each SVG edit to bust caches (same convention as the hero's
`Logo.svg`/`Me.svg`) — currently **`?v=4`** (`v2` = wand animation, `v3` = slower wand + moved doc,
`v4` = fly-in + progress-load + pill-pop sequence).

### Assets

In `public/assets/home/03-the-problem/`:
- `problem-illustration.svg` — the Wally-on-paper-pile artwork (see above).
- `icon-documents.svg`, `icon-deadlines.svg`, `icon-share.svg`, `icon-care.svg` — the four card
  line icons (32px viewbox, except `care` at 34px). Normalised on export like the trust-banner
  icons: dropped Figma's `preserveAspectRatio="none"` + `100%` sizing for an explicit viewbox size,
  and inlined the `var(--fill-0, …)` colours to literals (`#2c2d1c` stroke, `#4f5125` 0.2-opacity
  accent). **`icon-care` shipped with a `black` fill fallback** — corrected to `#2c2d1c` to match
  the other three.
- The **"Das Problem" label owl reuses the hero's `/Me.svg?v=2`** (full Wally figure) — no new asset.

### Notes

- Content colour is the Figma `content/hl-on-light` value `#1a2d28` (used via arbitrary
  `text-[#1a2d28]`, with `/90` for the label and `/70` for card body), intentionally kept distinct
  from the `--color-forest` token (`#1b312b`).
- No entrance/scroll animation (the Figma is static); a staggered card / illustration fade-in
  would be a reasonable later polish.

---

## 02 — Trust banner · 2026-06-10

Built the trust banner (section 02) from the Figma desktop node `6518-12497` and mobile node
`6608-24773`. Four trust signals: end-to-end encryption, GDPR/DSGVO, zero-knowledge, BSI standard.

### Two distinct layouts (`src/components/sections/TrustBannerSection.tsx`)

- **Desktop (`lg`+)** — a **full-width bar** overlapping the bottom of the hero (see below):
  `bg-lime-300` (`#d2d58b`), 1px `border-b border-black/10`, `min-h-[70px]` (Figma 70px).
  Content capped at `max-w-[1296px]` centred → the Figma 72px side gutters fall out naturally on
  a 1440 frame (`px-6 xl:px-0`). Four items in a row with `justify-between`; 32px icon boxes,
  14px medium text, `whitespace-nowrap`. Item 2 shows the full
  **"DSGVO-konform – Server in Deutschland"**.
- **Mobile (`<lg`)** — a **rounded card** (`rounded-2xl`, `bg-lime-300`, `p-6`, `gap-6`,
  24px side gutters via `px-6`) with the four items **stacked and centred**; 34px icon boxes,
  16px text. Item 2 is shortened to just **"DSGVO-konform"** (per the mobile node). Carries a
  soft shadow so it reads as a floating card.

### The hero overlap (mobile)

Per the design, the card **overlaps the bottom of the hero phones**. The hero on mobile is
flow-height (only `lg:min-h-screen`), so the card is pulled up with **`-mt-24`** and sits in
front via `relative z-20`. This reproduces the Figma relationship: the front phone bottom is at
~y969 and the card top at y917, i.e. the card covers the bottom ~52px of the phones. (The hero's
`overflow-hidden` only clips its own children, so a later sibling with negative margin still
paints on top.)

### Assets

In `public/assets/home/02-trust-banner/` (folder renamed from the scaffold's `02 trust banner`
to a hyphenated name, matching `01-hero` and avoiding spaces in URLs):
- `icon-encryption.svg`, `icon-gdpr.svg`, `icon-zero-knowledge.svg`, `icon-bsi.svg` — the four
  line icons, exported from Figma at a 25.6px viewbox. Normalised on export: stripped Figma's
  `preserveAspectRatio="none"` + `100%` sizing (gave them an explicit `25.6×25.6`) and inlined
  the fill (`#2C2D1C`) so they render solid through `next/image` with no var dependency.

### The hero overlap (desktop)

The bar is **pinned to the bottom of the first screen** so it's always fully visible without
scrolling, while **overlapping the bottom of the phone mockups**. The hero is a full `100vh`
(`h-screen` + `lg:min-h-screen`) and the bar naturally falls just after it, so a negative margin
of the bar's own height — **`lg:-mt-[71px]`** (70px `min-h` + 1px `border-b`) — lifts its bottom
edge onto the viewport bottom. `relative z-10` keeps the opaque bar in front of the phones.

For the overlap to hold at every viewport height, the phones are **bottom-anchored**
(`absolute right-0 bottom-0` — the documented 01-chat position; the file had drifted to
`top-[117px]`, restored here). Bottom-anchored phones always reach the viewport bottom, so the
bar overlaps their lower **71px** regardless of screen height. Verified at 1440×900: bar
`829→900`, phones reach `900`, overlap `71px`, hero ≤ viewport (the first screen fits with no
scroll; the page only scrolls once section 03+ content follows).

> Earlier attempts: (1) shrinking the hero to `h-[calc(100vh-71px)]` — moved the hero, rejected;
> (2) anchoring the bar 75.67px below the text via `lg:mt-[calc(249.67px_-_50vh)]` — matched the
> Figma text↔bar gap but, with centred text, the bar could fall below the fold on short
> viewports. Bottom-pinning supersedes both: guaranteed in-view + a clean phone overlap.

Mobile is unaffected — its hero is taller than a phone screen by nature, so it still scrolls,
with the banner as the overlapping floating card.

> **Update (per later design requests):** the desktop phones are now **top-anchored**
> (`absolute right-10 top-[185px] bottom-0`, equal 40px L/R margins) rather than `bottom-0` — this
> supersedes the bottom-anchored note above. The container is stretched to `bottom-0` and made a
> `group`. The **notification badge was extracted to `NotificationBadge.tsx`** and, on desktop, is
> rendered in that container anchored **40px above the banner** (`bottom-[111px]` = 71px bar + 40px
> gap), independent of the phone position. `PhoneShowcase` takes a `badge` prop (`false` on desktop,
> default `true` for the mobile in-flow badge). The badge lifts on `group-hover` (hovering the
> screens). Verified at 1440×900: badge↔banner gap = 40px.

### Notes

- `#d2d58b` = the `lime-300`/`lime-200` token; the icon-box cream `#f1f2d3` is the hero's
  `--hero-from` value, used here as the literal `bg-[#f1f2d3]`.
- A single `ITEMS` array drives both layouts; a `desktopSuffix` field carries the
  desktop-only "– Server in Deutschland" so the two text variants stay in one place.

---

## 01 — Hero section · 2026-06-09

Built the hero (section 01) from the Figma desktop node `6518-12115` and mobile node
`6608-24841`, plus the mobile burger menu node `6655-39745`.

### What was added

- **Fonts & tokens** — Switched the app font from Geist to **Open Sans** (`src/app/layout.tsx`)
  and added the brand palette + hero gradient as theme tokens in `src/app/globals.css`
  (`@theme`). Hero background gradient is the exact Figma value
  `linear-gradient(112.86deg, #f1f2d3 28.6%, #e5e7b0 72.29%)`, exposed as the `.hero-gradient`
  class.
- **Reusable Button** — `src/components/ui/Button.tsx`. Variants `primary` (olive `#4f5125`,
  white text) and `secondary` (outline). **Hover = darker fill only** (`transition-colors`,
  no shadow, no movement) — primary darkens to `#34351a`, secondary fills with forest.
  Renders as a `<button>` or, when given `href`, as a Next `<Link>`.
  **Intended for reuse across the whole project.**
- **Navbar** — `src/components/Navbar.tsx` (client). Logo anchors to `#01-hero`; desktop links
  go to existing section ids. Mobile shows a burger that opens a full-screen dark overlay menu
  (matches the burger Figma node) with nav links, the CTA, footer links and social buttons.
  Body scroll is locked and `Esc` closes it.
- **HeroSection** — `src/components/sections/HeroSection.tsx`. Two-column on desktop, centred
  single-column on mobile (secondary button hidden on mobile, matching the mobile design).
- **PhoneShowcase** — `src/components/hero/PhoneShowcase.tsx` (client). Two phone mockups
  (front Wally chat + back wallet grid) exported from Figma as PNGs. They **follow the cursor
  with a subtle 3D tilt** (perspective + `rotateX/rotateY` on mousemove, reset on leave,
  disabled for reduced-motion). The **notification badge fades in and moves up** on load
  (`@keyframes badge-rise`) and is kept outside the 3D stage so it always paints in front.

### Nav link → section map

| Label | Anchor |
|---|---|
| Warum lifewallet | `#03-the-problem` |
| Wie funktioniert's | `#05-process` |
| Sicherheit | `#09-security` |
| Über uns | `#10-team` |
| Frühen Zugang sichern (CTA) | `#11-form` |

The **logo is a static image** (not a link) — per request, it no longer anchors to the top.

### Assets

In `public/assets/home/01-hero/`:
- `hero-screens.png` — the **composed two-phone cluster** (Wally chat + Wallet grid,
  bottom-aligned), a 2× retina export (1121×1387, displayed at 561×694). Used as a single
  image; the 3D cursor tilt applies to the whole cluster. (A `hero screens.svg` was also
  provided but was 20 MB of embedded raster — unusable on the web, so it was removed in favour
  of the retina PNG.)
- `notification-home.svg` — the notification badge, fully self-contained (background, bell and
  text are all outlined to vector paths, no font dependency).
- `Me.svg` — the small Wally illustration next to the hero label (29×25). Served from the
  **public root (`/Me.svg`)**, full Wally figure.
- `Logo.svg` — wordmark, served from the **public root (`/Logo.svg`)**. Vector (text outlined
  to paths), replacing the earlier soft `logo.png`. In the dark burger menu it's recoloured to
  light via a CSS `filter`.

> **Grain filters stripped:** `Logo.svg` (3) and `Me.svg` (7) shipped with Figma grain
> filters (`feTurbulence` + `feDisplacementMap`). SVG filter effects are rasterized at ~1× of
> the tiny intrinsic size, so the pill mark and the owl looked blurry on retina while the
> filter-less text stayed crisp. Removed all `filter="url(#…)"` references → pure vector fills,
> sharp at any DPI. The SVGs are referenced with a `?v=2` query (`/Logo.svg?v=2`, `/Me.svg?v=2`)
> to bust stale browser caches of the earlier grain versions (the same URL was being served from
> cache, so the logo still looked blurry until busted). Bump the version when the SVG changes.

### Logo

The wordmark (nav + burger menu) is a **static image** — not a link, no click handler, no
animation (per request). (`scroll-behavior: smooth` on `html` is kept for the nav anchor links.)

> Earlier iterations used separate `phone-front.png` / `phone-back.png` exports and a
> CSS-built badge with `badge-icon.svg`; these were replaced by the crisper composed assets
> above and removed.

### Layout correction (after design review)

The Figma hero *node* reported a 36px headline and a 597px-tall artboard, but the intended
live design (per a reference screenshot from the team) is a **full-viewport immersive hero**
with a much larger headline (~48–52px desktop) and bigger phones. Adjusted to match:

- **Headline** keeps the Figma frame size — `26 → 32 → 36px` (desktop 36px / 40px line-height,
  `max-w-[476px]` so it wraps like the artboard). Colour: **static lime-700** (no hover change —
  the headline isn't a link; the lime-700→lime-900 hover lives on the nav links instead).
- Desktop uses a dedicated layout: text vertically centred on the left, the phone cluster
  pinned bottom-right and **clipping at the viewport bottom** (`lg:min-h-screen` + bottom-pinned).
  Mobile keeps the simpler stacked flow with the phones centred.
- Phone arrangement: **Wally chat phone upright in front-left**, **Wallet-grid phone angled
  behind it to the right** (overflowing the edge on desktop). **Both phones are bottom-aligned**
  (same baseline). Positions are responsive so the grid isn't over-cropped on mobile.

### Decisions & notes

- **Font conflict in Figma:** desktop variables resolve `Headlines`/`Paragraph` to **Open Sans**,
  the mobile/burger node resolves them to **Poppins**. Standardised on Open Sans for the whole
  site for consistency (visually near-identical).
- The **trust banner (section 02)** is designed to overlap the hero on mobile. It's built next
  and is intentionally **not** part of the hero.

### Follow-ups / known gaps

- `logo.png` and `label-icon.png` are **1× PNG exports** — slightly soft on retina. Replace with
  SVG exports when available.
- The burger-menu logo is **recoloured via a CSS filter** to read on the dark background; a
  dedicated light logo asset would be more exact.
- Footer links (Impressum / AGB / Datenschutz) and the three social buttons in the burger menu
  point to placeholder `#` — wire up real destinations later.
