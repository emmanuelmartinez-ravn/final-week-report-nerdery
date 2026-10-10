# ModuleProgress

Shows how far through the program (or a module) the journal is, as a bar or a segmented step track.

**Markup:** `.rj-progress` › `.rj-progress-head` (`.rj-progress-label` + `.rj-progress-value` in mono) › either `.rj-progress-track[role=progressbar][aria-valuenow]` › `.rj-progress-fill` (width %), or `<ol class="rj-steps">` with `data-state="done|current"` per segment.

**Tokens:** track `bg-muted`, fill `accent` (≥ 3:1 against track in both themes), `radius-full`, 8px tall; value `code` style `text-secondary`.

## Do
- Always print the value as text ("6 / 9 modules") next to the bar.
- Use steps when there are ≤ 12 discrete units; the bar for anything continuous.

## Don't
- Don't animate on every render; a single 300ms fill on first view is enough.
