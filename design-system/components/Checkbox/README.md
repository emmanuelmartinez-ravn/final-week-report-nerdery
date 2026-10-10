# Checkbox

Checkbox and radio for independent (checkbox) or exclusive (radio) choices; label always on the right.

**Markup:** `<label class="rj-check"><input type="checkbox"> Label</label>`; radio: `type="radio"` with a shared `name` inside a `<fieldset>` + `<legend class="rj-label">`. Error: `aria-invalid="true"` + `.rj-error-msg`.

**Tokens:** box `border-strong` on `bg-surface`; checked `accent` with `on-accent` mark; hover `accent-hover`; focus `focus-ring`; disabled `bg-muted` / `text-disabled`; `radius-sm` (radio `radius-full`). Box 20px, hit area = whole label.

## Do
- Phrase labels positively ("Show mentor feedback", not "Hide…").
- Group related checkboxes with a fieldset and legend.

## Don't
- Don't use a checkbox for settings that apply instantly — use Toggle.
