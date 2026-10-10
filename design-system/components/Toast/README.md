# Toast

A brief, inverted confirmation that appears bottom-centre (mobile) or bottom-left (desktop) and auto-dismisses after 5s.

**Markup:** `<div class="rj-toast" role="status">` › icon + `<p>` + optional action + `.rj-toast-close` (`aria-label="Dismiss"`).

**Tokens:** `bg-inverse` + `text-inverse` (≥ 7:1), `shadow-lg`, `radius-md`, `z-toast`.

## Do
- One line, past tense: "Entry published." Offer Undo where it applies.
- Pause the timer on hover/focus; keep it on screen if it contains an action.

## Don't
- Don't use for errors that need action — use Alert.
- Don't stack more than two toasts.
