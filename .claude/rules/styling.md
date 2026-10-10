---
paths:
  - "src/**/*.{ts,tsx,css}"
  - "index.html"
  - "design-system/**"
---

# Styling: Tailwind built on the design system

All UI styling comes from `design-system/`, expressed as Tailwind v4 utilities. Do not invent colors, font sizes, spacing, radii or shadows. Before building or restyling UI, read `design-system/README.md` and the README of the matching component in `design-system/components/<Name>/`.

## How it is wired

- `src/core/styles/global.css` is the only global stylesheet, and `main.tsx` imports it. It loads Google Fonts, `tailwindcss`, `design-system/tokens.css` (into the `base` layer) and `design-system/tailwind-theme.css`. It also defines the `dark` variant and the base body styles.
- `tokens.css` and `tailwind-theme.css` are both generated from `design-system/tokens.json` by `node design-system/build-tokens.mjs`. Never edit either one by hand.
- The theme resets Tailwind's defaults (`--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--shadow-*`, `--breakpoint-*`), so `bg-red-500`, `text-sm` and `shadow-xl` don't exist. If a utility doesn't resolve, the value isn't in the design system.
- `design-system/components/bundle.css` (the `rj-` classes) is the reference implementation used by the `preview.html` files. The app does not load it, so don't use `rj-` classes in `src/`.
- Dark mode is `data-theme="dark"` on `<html>`. Semantic colors switch by themselves, so `dark:` should rarely be needed.

## Utility vocabulary

| Need | Utilities |
| --- | --- |
| Surfaces | `bg-canvas`, `bg-surface`, `bg-subtle`, `bg-muted`, `bg-inverse` |
| Text color | `text-ink`, `text-ink-secondary`, `text-ink-muted` (captions only), `text-ink-disabled`, `text-ink-inverse` |
| Accent | `bg-accent`, `hover:bg-accent-hover`, `text-on-accent`, `text-accent-text`, `bg-accent-subtle` |
| Lines | `border-line` (decorative), `border-line-strong` (controls) |
| Status | `bg-{success,warning,error,info}-bg`, `text-…-text`, `border-…-border` |
| Topic tags | `bg-tag-bg`, `text-tag-text` |
| Type | `text-display`, `text-h1`…`text-h4`, `text-body-lg`, `text-body`, `text-body-sm`, `text-label`, `text-caption`, `text-overline`, `text-code`; family `font-display` / `font-body` / `font-mono` |
| Spacing | The normal scale on a 4px grid (`p-4` = `space-4` = 16px), plus `gap-gutter`, `px-page`, `h-nav` |
| Width | `max-w-content` (1200px), `max-w-reading` (680px) |
| Shape | `rounded-sm`/`md`/`lg`/`xl`/`full`, `shadow-sm`/`md`/`lg`, `shadow-focus`, `shadow-focus-error` |
| Layers | `z-(--z-sticky)`, `z-(--z-dropdown)`, `z-(--z-overlay)`, `z-(--z-modal)`, `z-(--z-toast)` |
| Breakpoints | `sm` 640, `md` 768, `lg` 1024, `xl` 1280 (mobile-first) |

Raw scales (`neutral-*`, `primary-*`, `secondary-*`, `success-50`…) exist only for illustrations and data. Don't use them for UI chrome.

## Components first

- Build UI from `src/shared/ui` (`Button`, `ButtonLink`, `Card`, `CardLink`, `Tag`, `Alert`, `Toast`, `Modal`, `TextField`, `TextArea`, `Select`, `Checkbox`, `Radio`, `RadioGroup`, `Toggle`, `Table`/`Th`/`Td`, `Timeline`/`TimelineItem`, `ProgressBar`, `ProgressSteps`, `ReflectionQuote`, `Avatar`, `NavLink`, `TableOfContents`, `Container`, `Eyebrow`, `Lead`, `Meta`, `TextLink`, `RavnLogo`). Use icons from `src/shared/icons`. Add utilities only for layout around them.
- If a design-system pattern is missing, add it to `src/shared/ui` and model it on `bundle.css` and the component README. Don't style it ad hoc inside a feature. Domain-specific compositions, such as a project card that knows about repos, belong in their feature and are built from shared components.
- Put shared class strings and non-component helpers in `src/shared/ui/styles.ts`, so component files only export components (Fast Refresh).
- Classes are joined with `cx` from `src/shared/utils`. There is no `tailwind-merge`, so a `className` passed to a component should add to its classes, not fight them. For example, `border-accent` on a `Card` loses to its built-in `border-line` because of CSS order. Add a prop (such as `orientation` or `tone`) when a real variant is needed, or drive a state through a variant (`data-active:border-accent` with `data-active`). Variant classes are emitted after plain utilities, so they win.
- Build pages to match the example screens (`OverviewScreen`, `JournalEntryScreen`, `ProjectsScreen`).

## Rules the design system insists on

- Use one `primary` Button per screen. `danger` appears only inside a confirming Modal.
- Use borders for structure. Shadows are only for floating UI (menus, modals, toasts) and card hover.
- Never remove focus. Interactive elements use `focus-visible:outline-none focus-visible:shadow-focus` (or `shadow-focus-error` when the element is invalid). Every interactive element needs default, hover, focus and disabled states, and inputs also need an error state.
- Text on `bg-accent` is `text-on-accent`, never `text-white`.
- Status always shows an icon and a word, never color alone.
- Use 150ms ease-out (`duration-150 ease-out`) for color changes and 200ms for toggles and menus. Reduced motion is handled globally.
- Avoid arbitrary values. When one is unavoidable, build it from token variables (`scroll-mt-[calc(var(--nav-height)+var(--space-6))]`), never from raw hex or one-off pixel values.

## Logo, icons and copy

- For the RAVN logo, use `RavnLogo`, which is the official wordmark in `currentColor`, sized with a height utility such as `h-5 w-auto`. This replaces the design-system README's "until the official mark is supplied" fallback.
- Use Lucide icons from `src/shared/icons` (1.75px stroke, `size="md"` 20px inline or `size="sm"` 16px in tags). Add new ones from `design-system/assets/Icons` or Lucide using the same `Icon` wrapper. Icon-only buttons need an `aria-label`.
- Use sentence case, start buttons with a verb, and don't use emoji or exclamation marks.
