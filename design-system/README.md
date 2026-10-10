RAVN Learning Journal is a portfolio of a Nerdery program at RAVN: weekly entries, projects and mentor feedback, read by mentors and fellow students in a single sitting. The system should feel like **a well-kept engineering notebook**: calm, focused on learning, modern. Never playful, corporate or cluttered.

## Principles

1. **Reading first.** Long-form reflections are the product. Body copy is 16–18px, capped at `reading-max` (680px), on `bg-canvas` with `text-primary`.
2. **One accent.** Deep teal (`accent`) is the only hue for action, links, focus and progress. Slate indigo (`tag-*`) labels topics. Everything else is ink on paper.
3. **Borders over shadows.** Structure comes from `border-default` hairlines. Shadows (`shadow-md`, `shadow-lg`) are only for things that float: menus, modals, toasts.
4. **Quiet density.** Comfortable spacing on a 4px grid: `space-6` inside cards, `space-16` between page sections. Leave white space instead of adding dividers.

## Voice & content

- First person, plain and specific: "DataLoader cut queries from 41 to 6", not "Leveraged cutting-edge batching".
- Sentence case for headings, buttons and labels. Technology names as they brand themselves (Node.js, PostgreSQL, GraphQL).
- Buttons lead with a verb ("Read the journal", "Publish entry"). Errors say how to fix it.
- No emoji, no exclamation marks, no filler stats. Dates are ISO in mono (`2026-09-22 · Week 06`) on the timeline and readable elsewhere ("Sep 22, 2026").

## Color

Tokens come in two layers. **Raw scales** are `neutral-0…950`, `primary-50…950` (teal), `secondary-50…950` (slate indigo) and `success|warning|error|info-50…900`. **Semantic aliases** are what components use, and each one has a light and a dark value:

| Role | Token | Light → Dark |
| --- | --- | --- |
| Page | `bg-canvas` | neutral-50 → neutral-950 (RAVN ink #0d0d0d) |
| Card / input | `bg-surface` | neutral-0 → neutral-900 |
| Quiet fill | `bg-subtle`, `bg-muted` | neutral-100/200 → neutral-800/700 |
| Text | `text-primary`, `text-secondary` | ≥ 7:1 (AAA) on canvas, surface and subtle |
| Captions only | `text-muted` | ≥ 4.5:1 (AA); never body copy |
| Action | `accent`, `accent-hover`, `on-accent` | primary-700/800 + white → primary-300/200 + ink |
| Links | `accent-text` | ≥ 7:1 on canvas, surface, `accent-subtle` |
| Lines | `border-default` (decorative), `border-strong` (controls, ≥ 3:1) | |
| Status | `{success,warning,error,info}-bg/-text/-border` | text ≥ 7:1 on its bg in both themes |

Rules:
- Use semantic tokens in components. Use raw scale steps only for illustration and data.
- Text on an `accent` fill is always `on-accent`, never a literal white. In dark mode it is ink.
- Every status message carries an icon **and** a word as well as colour. Success (green) and error (red) also differ in lightness, but never rely on hue.
- `text-disabled` is exempt from contrast and appears only on disabled controls.

## Typography

| Family | Stack | Use |
| --- | --- | --- |
| `display` | Space Grotesk 500/600 → Avenir Next, Segoe UI, system-ui | Headings `display`, `h1`–`h4` |
| `body` | Source Sans 3 400/600 → Source Sans Pro, -apple-system, Segoe UI | All reading and UI text |
| `mono` | JetBrains Mono 400/500 → ui-monospace, SF Mono, Menlo | Code, timeline dates, numbers in tables |

Load from Google Fonts: `family=Space+Grotesk:wght@500;600&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap`.

Scale (size/line-height): `display` 56/64 · `h1` 40/48 · `h2` 30/38 · `h3` 22/30 · `h4` 18/26 · `body-lg` 18/30 · `body` 16/26 · `body-sm` 14/22 · `label` 14/20 (600) · `caption` 12/16 · `overline` 12/16 (600, +0.08em, uppercase) · `code` 14/22. Use one `display` per page. Use `h1` for the page title. Don't skip heading levels. Display sizes get negative tracking, as the tokens say.

## Spacing, layout & shape

- **Spacing** is a 4px base, named after Tailwind's scale: `space-1` 4 · `2` 8 · `3` 12 · `4` 16 · `5` 20 · `6` 24 · `8` 32 · `10` 40 · `12` 48 · `16` 64 · `20` 80 · `24` 96.
- **Grid** has 12 columns at `screen-lg`+, 8 at `screen-md`, 4 on mobile. `grid-gutter` is 24px (16px below md). `page-margin` is 24px (16px mobile). The container is `content-max` 1200px. Reading text uses `reading-max` 680px.
- **Breakpoints** are mobile-first: `screen-sm` 640 · `screen-md` 768 · `screen-lg` 1024 · `screen-xl` 1280.
- **Radii:** `radius-sm` 4 (checkbox, code) · `radius-md` 8 (buttons, inputs, alerts) · `radius-lg` 12 (cards, tables) · `radius-xl` 16 (modals) · `radius-full` (tags, toggles, progress).
- **Elevation:** at rest `shadow-none` + border · hover `shadow-sm` · menus `shadow-md` · modal/toast `shadow-lg`. Stack with `z-sticky` < `z-dropdown` < `z-overlay` < `z-modal` < `z-toast`.
- **Motion:** 150ms ease-out for colour and border changes, 200ms for toggles and menus. No bounce or parallax. Respect `prefers-reduced-motion`.

## States & focus

Every interactive component has default, hover, focus, disabled and (for inputs) error states.
- **Focus** is `focus-ring`: a 2px `bg-surface` gap, then a solid 2px `focus` ring (≥ 3:1 on every surface, both themes), applied with `:focus-visible`. It is never removed. Error fields use `focus-ring-error`.
- **Hover** darkens the fill one step (`accent` → `accent-hover`) or adds `bg-subtle`. It never moves the layout.
- **Disabled** is `bg-muted` + `text-disabled` with `cursor: not-allowed`. Keep submit buttons enabled and show errors instead.
- **Error** sets `aria-invalid="true"` with an `error-border` border, plus a `.rj-error-msg` with the circle-x icon, linked by `aria-describedby`.

## Iconography

- Use **Lucide** (ISC licence): 24px grid, outline, round caps and joins. In this system the stroke is **1.75px**. Sizes are 20px (`rj-icon`) inline with 16px text and 16px (`rj-icon-sm`) in tags and small buttons.
- Inline the SVG with `stroke="currentColor"` so icons inherit `text-*` / `accent-text`. The files in the **Icons** asset group are drawn in `neutral-950` ink for `<img>` use on light grounds only.
- Decorative icons get `aria-hidden="true"`. Icon-only buttons need an `aria-label`.
- Use the same icon for the same meaning everywhere: info → `info`, success → `circle-check`, warning → `triangle-alert`, error → `circle-x`, repo → `folder-git-2`, external → `external-link`, date → `calendar`, duration → `clock`.

## Imagery

- **Prefer real artefacts:** screenshots of your own project UI, terminal output, diagrams you drew, whiteboard photos. Crop tight to the interesting part. Show a screenshot in 16:9 inside a `radius-lg` frame with a `border-default` hairline.
- **Photos of people** (mentors, cohort) need permission, natural light and neutral backgrounds. Keep them small, as avatars or in a 1:1 crop.
- **Illustration:** avoid it. If a section needs a visual, use a simple diagram in `border-strong` lines with one `accent` highlight. Don't use stock illustrations, 3D blobs, gradients or emoji.
- **Logo:** no official RAVN logo files are included yet. Set "RAVN" in `display` type as the wordmark, and never redraw the mark. Add the official asset to a **Logos** group when it is available.

## Tokens in code (Tailwind)

Token names map 1:1 to CSS custom properties and Tailwind keys. For example, `color.primary.500` is `--primary-500` and `bg-primary-500`, and `space.4` is `--space-4` and `p-4`. Semantic colours switch per theme through `[data-theme="dark"]` (or `.dark`). Use them in Tailwind as CSS variables:

```js
// tailwind.config.js (v3) — v4: put the same keys under @theme in CSS
const v = (n) => `var(--${n})`;
const scale = (s, steps) => Object.fromEntries(steps.map((k) => [k, v(`${s}-${k}`)]));
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        neutral: scale('neutral', [0,50,100,200,300,400,500,600,700,800,900,950]),
        primary: scale('primary', [50,100,200,300,400,500,600,700,800,900,950]),
        secondary: scale('secondary', [50,100,200,300,400,500,600,700,800,900,950]),
        canvas: v('bg-canvas'), surface: v('bg-surface'), subtle: v('bg-subtle'), muted: v('bg-muted'),
        ink: { DEFAULT: v('text-primary'), secondary: v('text-secondary'), muted: v('text-muted') },
        accent: { DEFAULT: v('accent'), hover: v('accent-hover'), on: v('on-accent'), text: v('accent-text'), subtle: v('accent-subtle') },
        line: { DEFAULT: v('border-default'), strong: v('border-strong') },
        success: { bg: v('success-bg'), text: v('success-text'), border: v('success-border') },
        // warning / error / info: same shape
      },
      fontFamily: { display: v('font-display'), body: v('font-body'), mono: v('font-mono') },
      borderRadius: { sm: '4px', md: '8px', lg: '12px', xl: '16px' },
      boxShadow: { sm: v('shadow-sm'), md: v('shadow-md'), lg: v('shadow-lg'), focus: v('focus-ring') },
      maxWidth: { content: '1200px', reading: '680px' },
    },
  },
};
```

Components ship as plain CSS classes (`rj-` prefix) in `components/bundle.css`, so they work with or without React. In Tailwind, the same rules apply as utilities. The rule of thumb is: semantic colour utilities only (`bg-surface text-ink border-line`), never raw hex.

## Trickiest components: quick rules

- **Button:** one `rj-btn-primary` per screen. A destructive action is `rj-btn-danger` inside a confirming Modal, never a primary.
- **Card:** either the whole card is a link (`rj-card-interactive`) or it contains buttons, never both. Don't add a coloured left border.
- **Modal:** only for confirmations or short tasks. Trap focus, close on Esc and return focus to the trigger.
- **Alert vs Toast:** an Alert persists and explains. A Toast confirms and disappears. Errors that need action are always Alerts.
- **Timeline:** one takeaway sentence per week, linking to the full entry. Status shows as dot plus tag, never as the dot alone.
