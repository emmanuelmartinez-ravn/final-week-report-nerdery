# Select

A native `<select>` styled to match TextField; use for 4–12 mutually exclusive options.

**Markup:** `.rj-field` › `.rj-label` + `.rj-select-wrap` › `<select class="rj-select">` + chevron-down `.rj-icon`. States as TextField (`aria-invalid`, `disabled`). The open list uses the OS menu; `.rj-menu` is only for custom listboxes (filters) with `role="listbox"` and `aria-selected`.

**Tokens:** identical to TextField; menu `bg-surface`, `border-default`, `shadow-md`, `radius-lg`; selected option `accent-subtle` + `accent-text`.

## Do
- Prefer the native select — it is keyboard and screen-reader complete for free.
- Use radios instead when there are 2–3 options; use a search input when there are more than ~12.

## Don't
- Don't use a select for navigation (jumping to pages) — use Navigation links.
