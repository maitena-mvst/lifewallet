# PROJECT-LOG

A running log of build decisions for the lifewallet marketing site. Newest entries on top.
The homepage is composed of 12 sections (`src/components/sections/`), built one at a time.

---

## 06 — Features · 2026-06-18

Built the features section (section 06) from the Figma desktop node `6548-15390` and mobile node
`6608-28881`. Headline **"lifewallet ist mehr als ein digitaler Ordner"** with five feature
illustrations: *KI, die mitdenkt und Dich erinnert*, *Teilen mit Vertrauen*, *Ihre Brieftasche –
alles griffbereit*, *Planung, die einfach erscheint*, and the Wallet app screen.

### Two layouts (`src/components/sections/FeaturesSection.tsx`, server component)

A single server component, no JS. Mobile and desktop diverge completely:

- **Mobile (`<lg`)** — a **horizontal snap-carousel** (same `-mx-5 px-5 bleed + snap-x pattern`
  as sections 08/09). Four `w-[305px] h-[640px] shrink-0 snap-start` cards:
  1. **KI card** (lime gradient): uses `mob-card-ki.png` (full Figma mobile card screenshot,
     333×803, displayed with `object-cover object-top`). The Figma mobile design stacks the Wally
     owl + "KI, die mitdenkt" heading + wallet app screenshot all in one tall card.
  2. **Teilen card** (bg-box, CSS): `illus-teilen.png` illustration (sharing circle with four
     people avatars + blue owl + floating docs) + HTML heading at bottom.
  3. **Brieftasche card** (bg-box, CSS): `illus-brieftasche.png` (Wally owl peeking over a
     search bar "Frag mich nach Autoversicherung") + HTML heading.
  4. **Wallet card** (bg-box, CSS): `illus-wallet.png` (iPhone wallet list screen) + HTML heading
     "Deine Wallet – alles griffbereit".
  Verified at 390px: 4 cards × 305×640, scrollWidth 1308.

- **Desktop (`lg`+)** — a **3-column bento grid** (`flex gap-5 items-start`):
  - Col 1 (`flex-1`): KI card (h-265, lime gradient) + Teilen card (h-265, bg-box) — stacked
    with `gap-5`.
  - Col 2 (`flex-1`): Brieftasche card (h-265, bg-box) + Planung card (h-265, bg-box) — stacked.
  - Col 3 (`w-[270px] shrink-0`): Wallet screen card (h-550, bg-box) — tall narrow column.
  All cards use `next/image` with `fill + object-cover` inside `relative overflow-hidden
  rounded-2xl` containers. Verified at 1440px: 4 flex-1 cards at 525×265, wallet card at
  270×550, all 10 images loaded with zero errors.

### Asset strategy — full card screenshots for desktop, mixed for mobile

Desktop screenshot tool returns card nodes at their native 1× canvas size. Rather than building
the card illustrations from scratch (the owls + sharing circles + chat UI are complex multi-layer
Figma compositions), the full card screenshots were used:
- `card-ki.png` (485×265) — KI card with lime gradient + Wally owl + heading
- `card-teilen.png` (485×265) — sharing circle with people avatars + heading
- `card-brieftasche.png` (485×265) — Wally owl + "Frag mich nach" chat UI + heading
- `card-planung.png` (485×265) — Angel owl + shield + floating documents + heading
- `card-wallet.png` (270×550) — iPhone-style wallet app screen

For mobile, the KI card screenshot (`mob-card-ki.png`, 333×803) was taken from the mobile Figma
node directly. Mobile cards 2–4 were built as CSS cards with illustration-only images
(`illus-teilen.png`, `illus-brieftasche.png`, `illus-wallet.png`) since the mobile Figma carousel
nodes for those cards couldn't be screenshotted (they render as 1×1px — positioned in an
overflow-hidden scroll track that clips them in the headless renderer).

### Assets — `public/assets/home/06-features/`

- `card-ki.png`, `card-teilen.png`, `card-brieftasche.png`, `card-planung.png`, `card-wallet.png`
  — full desktop card screenshots (485×265 except wallet at 270×550). Used as `next/image fill`
  in fixed-height containers on desktop.
- `mob-card-ki.png` (333×803) — full mobile KI card screenshot (owl + heading + wallet screen).
- `illus-ki.png` (225×249), `illus-teilen.png` (295×242), `illus-brieftasche.png` (428×179),
  `illus-planung.png` (453×102), `illus-wallet.png` (218×474) — illustration sub-nodes extracted
  from Figma cards. Used in mobile CSS cards (2–4). All have opaque backgrounds (Figma compositor
  bakes the card background into illustration-node screenshots).

### Notes

- **Desktop screenshot verification is unreliable** at this scroll depth (section 05's sticky
  300vh track corrupts headless full-page captures, same as sections 08/09/10). Desktop verified
  via DOM measurement: `getBoundingClientRect` confirmed card dimensions (525×265 for flex-1
  cards, 270×550 for wallet card).
- **Card image text** is baked into the card screenshots. This is acceptable since the images
  are purely visual; `alt` text provides accessible equivalents for screen readers.
- Heading typography matches site convention: `text-[24px] font-semibold` (mobile) →
  `text-[30px] font-semibold` (desktop), `text-[#1a2d28]`. Label with `Me.svg?v=2` owl
  matches sections 03/05/08/09/10.
- `bg-white` section background (not `bg-box`) — the feature cards themselves carry the
  lime/beige backgrounds; the section wrapper stays white to contrast with adjacent sections.

---

## 11 — Footer · 2026-06-17

Built the footer (section 11) from the Figma desktop node `6518-16354` and mobile node
`6655-38702`. Hero-gradient background, logo + "Jetzt testen" CTA, hairline divider, legal
links, and social icons (WeChat, LinkedIn, YouTube).

### Layout (`src/components/sections/FooterSection.tsx`, server component)

Single server component, no JS. One responsive markup:

- **Mobile (`<lg`)** — column layout: logo, then CTA button, divider, then legal links row
  (`gap-4`), then social icons row (`gap-5`, 49×49px icons, `rounded-[12px]`).
- **Desktop (`lg`+)** — two rows: (1) logo + CTA in a `flex justify-between` row; (2) legal
  links on the left (`gap-[60px]`) and social icons on the right (`gap-3`, 30×30px icons,
  `rounded-[7.5px]`). Verified at 375px: footer 375×277, icons 49×49, gradient correct.

### Assets

In `public/assets/home/11-footer/`:
- `icon-wechat.svg`, `icon-linkedin.svg`, `icon-youtube.svg` — the three social icons
  (downloaded from Figma assets as SVG). Displayed in `bg-lime-300` rounded pill containers;
  icon size 18px desktop / 30px mobile.

### Notes

- Uses the existing `.hero-gradient` utility class (same `#f1f2d3 → #e5e7b0` stops as the hero).
  Figma specifies a slightly different angle (135.64° desktop / 103° mobile vs the hero's 112.86°)
  — reused the shared class for consistency since the colour difference is imperceptible.
- The `Button` component (`href="#11-form"`) links to the waiting-list form section.
- Legal links and social hrefs are `#` placeholders — wire up real destinations later.
- Screenshot verification is unreliable due to ProcessSection's sticky 300vh track corrupting
  headless captures; DOM inspection used instead.

---

## 10 — Team · 2026-06-17

Built the team section (section 10) from the Figma desktop node `6781-17689` and mobile node
`6655-38075`. Headline **"Warum wir das gebaut haben"** with a founder quote and two portrait photos
of **Dr. Nicole Grigat** (Fachanwältin) and **Dr. Martina Große Sundrup** (Fachärztin).

### One responsive layout (`src/components/sections/TeamSection.tsx`, server component)

A single flex layout — stacked on mobile, two-column `justify-between` with `items-center` on
desktop — no JS needed.

- **Mobile (`<lg`)** — `flex-col gap-8`: text block first (label + headline + quote + attribution),
  then the two photo cards side by side in a `flex gap-2.5` row. Each card is `167×226px` with
  `rounded-lg` corners and `overflow-hidden`.
- **Desktop (`lg`+)** — `flex-row justify-between items-center`. Left column capped at
  `max-w-[536px]` (matching sections 03/05/08). Right column is two photo cards at `268×351px`
  with `gap-4` and `rounded-xl` corners. Verified at 1440: both photos render at exactly 268×351px
  via DOM measurement.

### Content & typography

Matches the established site convention: `Me.svg?v=2` label owl + `text-base/lg font-medium` label,
`text-[24px]/[30px] font-semibold` headline, `text-sm/base` body quote, `text-base/lg font-medium`
attribution name. Colours: `#1a2d28` headings, `/90` label + attribution, `/70` body.

### Assets — two founder portrait photos

In `public/assets/home/10-team/`:
- `founder-nicole.jpg` — Dr. Nicole Grigat (JPEG, 4010×4096). Displayed with `object-cover
  object-top` to keep the face in frame.
- `founder-martina.png` — Dr. Martina Große Sundrup (PNG, 508×664). The raw Figma asset is stored
  **horizontally mirrored** (the Figma node applies `rotate-180 + scaleY(-1)` = net `scaleX(-1)`
  to correct it). Applied **`[transform:scaleX(-1)]`** on the `<Image>` tag to render her correctly.

### Notes

- **Label owl kept on mobile** (the mobile node omits it) to match the established section
  03/05/08 label treatment.
- Desktop screenshot verification is unreliable at this scroll depth due to section 05's
  sticky 300vh track. Verified via `getBoundingClientRect` + `offsetWidth/Height` DOM measurement
  (268×351px photos confirmed). Mobile screenshot verified clean.
- Gutters follow site convention (`max-w-[1440px] px-5 lg:px-10`) — the Figma desktop node uses
  `px-[80px]` which we ignore in favour of the established 40px desktop gutter.

---

## 09 — Security · 2026-06-17

Built the security section (section 09) from the Figma desktop node `6545-15369` and mobile node
`6655-37555`. Headline **"Deine Daten verdienen höchstes Vertrauen"** with four trust signals —
*Ende-zu-Ende verschlüsselt*, *Server in Deutschland*, *Zero-Knowledge-Architektur*, *BSI-Standard*
(the same four concepts as the section 02 trust banner, but here as full cards with their own icons).

### One responsive layout, no JS (`src/components/sections/SecuritySection.tsx`, server component)

Like section 08, this is a single server component — the only motion is **native CSS** (the mobile
carousel = scroll-snap; the desktop hover = `group-hover`), so no client component is needed.

- **Top area** — header (left, `lg:w-[542px]`) + the black vault (right, **desktop only** — the
  mobile node omits it; `hidden lg:flex`). Header is the site-standard label owl (`/Me.svg?v=2`) +
  `18px` label, `24→30px` semibold headline, `14→16px` sub.
- **Cards** — a **horizontal snap-carousel on mobile**, a **4-up grid on desktop** (`lg:grid
  lg:grid-cols-4 lg:gap-6`). Same pattern/markup as section 08: `-mx-5 px-5` bleed + `scroll-pl-5`,
  scrollbar hidden, each card `w-[305px] shrink-0 snap-start`. Cards are `bg-box` (`#f1ede8`)
  `rounded-2xl`, centred. **Type differs by breakpoint per the Figma**: title `18px medium` mobile →
  `16px medium` desktop; body `14px` mobile → `16px` desktop (both `#1a2d28/70`). Verified at 393:
  carousel `scrollWidth` 1308; at 1440: grid is four equal `322px` columns.

### The vault — rebuilt as divs + a PNG dial

The black safe (Figma node `6545:15370`) is **solid shapes**, so it's rebuilt from divs rather than
rastered: a `#2b2b2b` body (`rounded-[13px]`), two left hinge bars, and three `#3b3b3b` pill
"shelves", all absolutely placed at the Figma coordinates inside a `relative w-[381px] h-[296px]`
box. Only the **combination dial** (`Component 3`, a grain-filtered raster in Figma) is exported as a
transparent PNG (`vault-dial.png`, 4×/576²) and centred on the body.

### The desktop hover animation — owl guards the vault (per request)

The vault box is a **`group`**. At rest the calm owl **peeks at the right edge, vertically centred on
the vault** (`left-[283px] top-[99px]`). On `group-hover` the owl **glides horizontally to the centre
of the vault face — same height, no vertical jump — and gets angry** — built with pure CSS, no JS:

- The owl wrapper translates **horizontally only** to the vault centre and scales up a touch:
  `group-hover:-translate-x-[142px] group-hover:scale-[1.15]` (no `-translate-y`, per a design tweak
  — the owl stays on the vault's vertical centre line throughout). The x-offset is arithmetic — rest
  owl-centre `x≈1153` → vault-centre `x≈1011` at 1440 (verified by DOM measurement). Scaling around
  the box centre keeps it centred.
- The calm (`owl-calm.png`) and angry (`owl-guard.png`) owls are **stacked and cross-faded**
  (`opacity` 100↔0 on hover). CSS can't swap an `<img src>`, and the two are *different raster poses*
  (arms-down vs. arms-crossed), so they can't be morphed — two images is the clean way. To make the
  change read as a *reaction* rather than a hard swap, the angry owl then **sways** once it lands: an
  `owlAnger` keyframe (`globals.css`) rotates it `±3.5°` around its feet (`origin-bottom`), `0.65s`
  ease-in-out, with a `0.4s` delay so it kicks in just as the glide finishes. Scoped to
  `.security-vault:hover .security-owl-angry` and gated off under `prefers-reduced-motion`.
- **Tailwind v4 gotcha (same as section 05):** v4 routes `translate`/`scale` through their own CSS
  properties, so the transition names them explicitly — `transition-[translate,scale]`, not
  `transition-transform`. (Bonus: the sway animates `transform: rotate()`, a *separate* property from
  `translate`/`scale`, so the move and the sway compose without fighting.)
  `motion-reduce:transition-none` snaps instead of animating for reduced motion. Tailwind wraps
  `group-hover` in `@media (hover: hover)`, so this only fires on real-pointer devices (desktop) —
  touch never triggers it, and mobile has no vault anyway.

### Assets — `public/assets/home/09-security/`

- `owl-calm.png` (the calm peeking owl, node `6545-15433`) and `owl-guard.png` (the crossed-wing
  guarding pose, node `6855-15521`) — 4× PNGs (~395×411), same call as the section 05/08 owls (the
  owls render as dozens of grain-filtered fragments in Figma).
- `dial.png` — the combination dial (see above).

> **Backgrounds knocked out (Figma export baked them in):** unlike the 05/08 owl exports, the Figma
> MCP `download_assets` PNGs here came back **fully opaque** — white behind the dial + calm owl, the
> `#444` canvas grey behind the angry owl (0 transparent pixels; the dial's white square was glaring
> on the dark vault). Fixed in post with a small Python/PIL pass: **flood-fill the background colour
> inward from the four edges** (connectivity-based, so the owls' enclosed *white eyes* are preserved —
> a global colour-key would have erased them), then a 2-px alpha erosion to kill the anti-alias halo.
> At 4× source the erosion is sub-pixel after downscale. Verified the served files have
> `cornerAlpha 0` / `centerAlpha 255`. **Filenames are post-knockout** (`dial.png`, `owl-calm.png`,
> `owl-guard.png`) — see the cache note below for why they were renamed from the originals.
- `icon-encryption.svg` (padlock), `icon-server.svg` (shield + check), `icon-zero-knowledge.svg`
  (branching nodes), `icon-bsi.svg` (badge) — the four card icons. **Normalised like the trust-banner
  icons**: the raw Figma SVG exports came wrapped in the whole-frame context (page background, the
  `bg-box` card rect, etc.) with `black` accent fills; extracted just the glyph paths into clean
  `0 0 24/26` viewBoxes and recoloured every fill to `#1a2d28` (accents at `opacity 0.2`).

### Notes

- **One deliberate deviation:** the mobile node orders the cards Ende-zu-Ende / Server / **BSI /
  Zero-Knowledge**; a single `SIGNALS` array drives both breakpoints in the more logical Ende /
  Server / Zero-Knowledge / BSI order (matching the desktop node and the trust banner).
- Gutters/colours follow the site convention (`max-w-[1440px] px-5 lg:px-10`, `bg-box`, `#1a2d28`),
  not the Figma node's 80px gutters — aligned with sections 03/05/08.
- As with section 08, **desktop full-page screenshots come back blank / pinned to the hero** (section
  05's sticky 300vh track corrupts the headless capture), so the desktop layout + hover were verified
  by DOM measurement, pixel-probing the served PNGs via canvas, and reading the compiled CSS; mobile
  screenshots work fine.
- **The transparency fix took three tries — a `next/image` caching tale:** after knocking out the
  baked backgrounds, the white versions *kept showing*. (1) Cache-busting the same filenames with
  `?v=2` **threw a runtime error** — Next 16 now requires query strings on local images to be
  allow-listed in `images.localPatterns` (SVGs like `/Me.svg?v=2` slip through because they bypass
  the optimizer; raster does not). (2) Dropping the query + clearing `.next/cache/images` fixed the
  *server* (a forced re-fetch returned a transparent PNG, `x-nextjs-cache: MISS`) but the **browser**
  still served the stale white WebP — `next/image` responses carry long-lived immutable cache
  headers, and the URL was unchanged. (3) The fix that sticks: **rename the files** (`vault-dial`→
  `dial`, `owl-normal`→`owl-calm`, `owl-angry`→`owl-guard`) so the `url=` param — and thus the cache
  key — changes, forcing a fresh fetch for every client. In production this never arises (the files
  ship transparent from the first deploy); it was purely a dev-session artifact of editing image
  bytes in place under an aggressive cache.

---

## 08 — For who · 2026-06-17

Built the "for who" section (section 08) from the Figma desktop node `6518-14680` and mobile node
`6655-36888`. Headline **"Für alle, die Fürsorge zeigen"** with four audience cards — *Einzelpersonen*,
*Paare*, *Familien & Alleinerziehende*, *ältere Menschen & Angehörige* — each topped by an owl scene.

### One responsive layout, no JS (`src/components/sections/ForWhoSection.tsx`, server component)

A single markup that is a **horizontal snap-carousel on mobile** and a **2×2 grid on desktop**, driven
by responsive classes — no client component, since the only motion (the mobile carousel) is **native
CSS scroll-snap**, not JS. The "no animations apart from a mobile carousel scroll" brief is met with
zero JavaScript.

- **Mobile (`<lg`)** — `flex … overflow-x-auto snap-x snap-mandatory`, each card `w-[305px] shrink-0
  snap-start`. A **`-mx-5 px-5` bleed** lets the row scroll edge-to-edge while the first/last card keep
  the section gutter (so the next card *peeks*); `scroll-pl-5` aligns snap to that gutter. Scrollbar
  hidden (`[scrollbar-width:none]` + `[&::-webkit-scrollbar]:hidden`). Verified: row `scrollWidth`
  1308 over a 375 viewport, snaps cleanly through all four cards.
- **Desktop (`lg`+)** — the same container flips to `lg:grid lg:grid-cols-2 lg:gap-6` (and drops the
  bleed/overflow). Verified at 1440: two **668px** columns, four cards in a 2×2 (`x40/x732`,
  `y360/y664`), all equal height (grid/flex stretch — no fixed heights needed), left edge `40px` /
  right edge `40px` from the viewport.

### Card content & typography

A single `AUDIENCES` array drives both layouts. Cards are `bg-white rounded-2xl`, centred, illustration
in a fixed-height box on top, then title + body. **Title size differs by breakpoint per the Figma**:
mobile **18px medium** (`text-lg font-medium`), desktop **24px semibold** (`lg:text-2xl
lg:font-semibold`). Body is `14px` `#1a2d28/70`. Header matches sections 03/05: `Me.svg` label owl +
`18px` label, `24→30px` semibold headline, `14→16px` sub. Gutters/colours follow the site convention
(`max-w-[1440px] px-5 lg:px-10`, `bg-box`, `#1a2d28`), not the Figma node's 80px gutters — kept aligned
with sections 03/04/05.

### Assets — four owl scenes as 4× PNGs (same call as 03/05)

In `public/assets/home/08-for-who/`: `owl-single.png` (Einzelpersonen, olive owl), `owls-couple.png`
(blue + olive), `owls-family.png` (a family of four owls), `owls-elderly.png` (olive owl + bespectacled
owl with a cane). The owls render in Figma as **dozens of grain-filtered fragments + raster image fills**
(same as the section 05 owls), so a clean vector export was impractical — exported each card's scene
group as a **transparent PNG at 4× scale** (~276px tall) via the Figma asset export. Displayed at
`h-[68px]` (mobile) / `lg:h-[76px]`; since all four PNGs share the same 4× crop height, the owls read at
a consistent scale across cards. Displayed with `next/image` (intrinsic 315/545/785/709 × 276).

### Notes

- **Two deviations from the desktop node, both deliberate:** (1) the desktop *Einzelpersonen* owl holds
  a small letter in the Figma; the **mobile node drops it**, so the plain owl is used on both breakpoints
  for consistency. (2) The label owl is **kept on mobile** (the mobile node omits it) to match the
  established section 03/05 label treatment.
- Verifying this section by **screenshot at desktop width is unreliable** — section 05's sticky 300vh
  process track + its scroll machinery corrupt the headless full-page capture (comes back blank). DOM
  measurement (`getBoundingClientRect` + `getComputedStyle`) is the reliable check here; mobile
  screenshots work fine.

## 05 — Process · 2026-06-17

Built the process section (section 05) from the Figma desktop node `6769-16465`, the collapsed
mobile node `6686-40959` and the expanded mobile node `6708-15463`. Headline
**"Ordnen. Teilen. Entlasten."** introducing the three companion modes — **Wallet** (green owl),
**Wally** (olive owl) and **Angel** (blue owl) — where Angel holds two cards (*Vorbereiten* +
*Fürsorge für die Liebsten*) split by a divider.

### Two completely different layouts (`src/components/sections/ProcessSection.tsx`, client)

The desktop and mobile designs are unrelated, so the component renders one or the other
(`lg:hidden` / `hidden lg:block`), not a single responsive tree.

- **Mobile (`<lg`)** — an **accordion**. Header (label + heading + chevron) per card; tapping
  reveals body + tag pills. Each owl sits **centered above** its rounded `bg-box` card. Angel's
  box stacks two independently-collapsible cards with a hairline divider. Toggles are independent
  (a `Set` of `${stepId}-${cardIndex}` keys, multiple open at once); **Wallet opens by default**.
  Panels expand with the CSS **`grid-template-rows: 0fr → 1fr`** trick (clips cleanly, animates
  height, no JS measuring), the chevron rotates 180°.
- **Desktop (`lg`+)** — the **scroll-pinned stage** described below.

### The desktop animation — sticky left, one box at a time (per request)

The brief: *left side stays sticky; right side scrolls through with a magnetic lock-in per box;
only one box is visible at a time; the next box flies in from the bottom.* Built with **no
animation library** — a tall scroll track + `position: sticky` + a rAF-throttled scroll listener,
in keeping with the site's JS-light convention.

- The section is **`300vh` tall** (`STEPS.length * 100vh`). A **`sticky top-0 h-screen`** wrapper
  pins the entire two-column layout for the duration; the **left column is static** within it
  (confirmed with the user — the headline does not change per step).
- A scroll listener computes progress through the track
  (`-track.top / (trackHeight - innerHeight)`) → an `active` index `floor(p * 3)`. The three boxes
  are **absolutely stacked and centred**; the active one rests at `translate-y-0 opacity-100`, the
  **next waits at `translate-y-[340px] opacity-0`** (below) and the passed one **lifts to
  `-translate-y-[340px]`** (above) — so a card visibly **flies bottom → middle → top** through the
  stage, not just a fade. Eased with a symmetric `cubic-bezier(0.65,0,0.35,1)` (easeInOutCubic) over
  600ms so both the entrance from below *and* the exit upward read as motion. Each step's **owl is
  centred above its box** and flies with it.

  > **Tailwind v4 gotcha (this is why the first cut "only faded in"):** v4 routes `translate-y-*`
  > through the standalone **`translate`** CSS property, *not* `transform`. So
  > `transition-[transform,opacity]` left the position **un-transitioned** — it snapped instantly
  > while only opacity animated. Fix: **`transition-[translate,opacity]`**. (The chevron's
  > `transition-transform` utility is fine — in v4 that utility already covers `translate/scale/
  > rotate`; the trap is only the *arbitrary* `transition-[…]` form, where you must name `translate`
  > explicitly.)
- **Magnetic settle = gentle, not scroll-jacking** (user picked "Soft"). One full-height
  `.process-snap` marker per step + **`scroll-snap-type: y proximity`** on `html`, scoped via a
  `min-width:1024px` + `prefers-reduced-motion: no-preference` media query in `globals.css`.
  Proximity (not `mandatory`) means the page only nudges toward a step when you stop near one —
  the user is never trapped. Only this section carries snap-align targets, so the rest of the page
  scrolls untouched. The marker centers are arithmetically aligned to the `active`-index thresholds
  (settle points land at exactly one clean step each).
- A **progress rail** of subtle numbers **1 · 2 · 3** sits left of the stage; the active number is
  highlighted **in that step's owl colour** and scaled `1.25×`, the inactive ones greyed
  (`#c4c4c4`). The three accents are the owl body colours (sampled, == brand tokens): Wallet
  **`#a0bead`**, Wally **`#d2d58b`**, Angel **`#b6c4db`** (stored as `accent` on each step). Each
  number is **clickable to jump** to its step (`scrollTo` to `trackOffsetTop + (i/steps) * dist`,
  smooth).
- A **timeline spine** runs vertically **behind** the cards, centred on the box column (the owls
  sit on it like stations). It's a 1px light-grey line (`#d4d4d4`) painted via a top-to-bottom
  gradient (`transparent → grey 18%…82% → transparent`) so both ends **fade out** softly; the
  opaque card covers its middle. Added to the static fallback too (`inset-y-0` down the centred
  column). Mobile keeps no spine — it's an accordion, not a timeline.

### Reduced motion

`prefers-reduced-motion: reduce` swaps the desktop to **`DesktopStatic`** — the plain Figma stack
(left column `sticky top-28`, all three owl+box rows in normal flow, no pinning, no transforms).
Detected via `matchMedia` in an effect (initial client render assumes motion-on, then corrects).
The proximity snap is also gated off by the same media query. Mobile is unaffected.

### Assets

In `public/assets/home/05-process/`:
- `owl-wallet.png`, `owl-wally.png`, `owl-angel.png` — the three timeline owls. Exported from the
  Figma owl nodes (`6769-16468/69/70`) as **PNG at 4× scale** (~300px, transparent RGBA). The owls
  render in Figma as **dozens of grain-filtered fragments + raster image fills** (the eyes/ears are
  image fills), so a clean vector export was impractical — same call as the hero's `hero-screens.png`
  and section 03's illustration. At 4× they're crisp at the ~52–72px display sizes.
- The **label owl reuses the hero's `/Me.svg?v=2`** (the olive Wally) — no new asset.

### Notes

- Content colours match section 03/04: `#1a2d28` for headings (`/90` label, `/70` body), tag pills
  `bg-white rounded-[20px]`, boxes on the **`bg-box` token** (`#f1ede8`). Type follows the site's
  Open Sans standard (Figma's Poppins/Inter ignored, per the 01 decision). The **"Ordnen. Teilen.
  Entlasten." headline uses `font-bold`** (700, not the section-default semibold) to match the
  heavier weight in the Figma — applied on both breakpoints.
- The dev server convention: `.claude/launch.json` gained **`"autoPort": true`** so the preview
  tool can manage the server without clashing with a hand-started `next dev`.

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

**Mobile beige extends behind the trust card** (per request): the section is pulled up
**`-mt-[200px] lg:mt-0`** so its `bg-box` beige reaches the **vertical middle of the floating
trust-banner card** (measured at 390px: card middle y1140 = the new section top, `delta 0`). The
content is held in place by a compensating **`pt-[256px]`** (the `200` pull-up + the base `56`
top padding) on the inner div, with `pb-14`; at `lg` the `lg:py-20` overrides both back to `80px`.
Because the trust card is `z-20`-positioned and the problem section is static, the card paints
**on top of** the beige. Desktop is untouched (`margin-top:0`, padding `80/80`). *(Gotcha for next
time: a `{/* … */}` JSX comment can't sit as a sibling before the root element inside `return ( … )`
— it broke the build until moved to `//` lines.)*

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

### German UI copy → the SVG is now **inlined** (no longer `<img>`)

The card labels were changed (per request): **"organize documents…" → "Wally sortiert für Dich"**
and **"passport" → "Personalausweis"**. Both were *outlined to paths* in the source SVG, so the
copy couldn't be edited as a string — and `<text>` with a web font won't render inside an
`<img>`-embedded SVG (external fonts are blocked there). No font-subsetting tooling was available
to re-outline the new German strings either.

Fix: **the illustration is now inlined into the DOM** instead of loaded via `next/image`. The
server component reads the file (`fs.readFileSync` on `public/.../problem-illustration.svg`) and
injects it with `dangerouslySetInnerHTML`; the opening `<svg>` is rewritten to drop its fixed
`width`/`height`, add `role="img"` + `aria-label`, and carry `class="block h-auto w-full"` (the
`max-w-[420px] lg:max-w-[700px]` lives on the wrapper). The two outlined text runs were replaced
with real `<text class="ui-text">` elements (`.ui-text{font-family:var(--font-sans)…}`), so they
now render in the **site's Open Sans** — verified `getComputedStyle().fontFamily` resolves to
`"Open Sans"`. *"Wally sortiert für Dich"* is centred under the ring (`text-anchor:middle x=627.5
y=161`, 14.6px **`font-weight:600`** `#2c2d1c` — bumped from regular to semibold for a bit more
weight, per request); *"Personalausweis"* is left-aligned in the pill (`x=488.6 y=201.5`, 11px
semibold `#1b312b`).

Inlining also means all the CSS animations above now live in the page (their `<style>` becomes
global — class/keyframe names are unique enough not to clash) and the `?v=` cache-bust is **gone**
(the file is read server-side, not fetched by the browser).

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
