# Button

Triggers an action; one primary per view, everything else secondary or ghost.

**Markup:** `<button class="rj-btn rj-btn-primary">Publish entry</button>`. Variants: `rj-btn-primary`, `rj-btn-secondary`, `rj-btn-ghost`, `rj-btn-danger`. Sizes: `rj-btn-sm` (32px), default (40px), `rj-btn-lg` (48px). Icon-only: add `rj-btn-icon` **and** an `aria-label`.

**Tokens:** primary fill `accent` → hover `accent-hover`, label `on-accent` (≥ 7:1 both themes). Secondary: `bg-surface`, `border-strong`, `text-primary`. Focus: `focus-ring`. Disabled: `bg-muted` + `text-disabled`. Radius `radius-md`.

**Tailwind:** `h-10 px-4 rounded-md bg-accent text-on-accent hover:bg-accent-hover focus-visible:shadow-focus-ring disabled:bg-muted disabled:text-disabled font-semibold text-sm`.

## Do
- Lead with a verb, sentence case: "Publish entry", "View project".
- Use **one** `rj-btn-primary` per screen — the thing the page is for.
- Use `rj-btn-ghost` for low-emphasis navigation inside cards ("Read reflection").
- Put icons after the label only for direction (arrow-right) or external links (external-link).

## Don't
- Don't use a button for navigation to another page — use a link (`rj-link`) unless it is a clear call to action.
- Don't remove the focus ring or replace it with a colour change only.
- Don't disable a submit button to signal validation — keep it enabled and show field errors.
- Don't use `rj-btn-danger` as a primary; destructive actions confirm in a Modal.
