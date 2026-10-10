# Modal

A blocking dialog for confirmations and short focused tasks (≤ 3 fields).

**Markup:** `.rj-scrim` › `<div class="rj-modal" role="dialog" aria-modal="true" aria-labelledby>` › `.rj-modal-head` (title `h3` + close icon button) › body › `.rj-modal-actions` (secondary first, primary/danger last). Prefer the native `<dialog>` element.

**Tokens:** `bg-surface`, `border-default`, `radius-xl`, `shadow-lg`, padding `space-8`, max-width 520px; scrim ink at 55%; `z-overlay` / `z-modal`.

## Do
- Trap focus inside; return focus to the trigger on close; Esc closes.
- Title as a question for confirmations; button repeats the verb ("Delete entry", not "OK").

## Don't
- Don't open a modal on page load or for reading content — link to a page instead.
- Don't put a modal on top of a modal.
