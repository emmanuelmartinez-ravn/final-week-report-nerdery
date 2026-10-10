# Toggle

A switch for a setting that takes effect immediately (theme, show/hide drafts).

**Markup:** `<label class="rj-toggle"><input type="checkbox" role="switch"> Label</label>`.

**Tokens:** track off `bg-muted` + `border-strong`, knob `text-secondary`; on `accent` with `on-accent` knob; focus `focus-ring`; `radius-full`. 44×24px.

## Do
- Use when the change is instant and reversible; the label names the setting, not the action.

## Don't
- Don't use in a form that needs a Save button — use Checkbox.
- Don't rely on track colour alone: the knob position also changes.
