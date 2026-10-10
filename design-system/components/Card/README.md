# Card

A bordered container for one journal entry, project or summary; the whole card can be a link.

**Markup:** `<article class="rj-card">` with `.rj-eyebrow`, `.rj-card-title`, `.rj-card-body`, `.rj-card-foot`. Clickable: make the root an `<a class="rj-card rj-card-interactive">` (one link per card — no nested buttons). Optional `.rj-card-media` as the first child.

**Tokens:** `bg-surface`, `border-default`, `radius-lg`, padding `space-6`; hover `border-strong` + `shadow-sm`; focus `focus-ring`. Title `h3`, body `text-secondary`.

## Do
- Keep cards to one idea; title ≤ 2 lines, body ≤ 3 lines.
- Lay out in a 12-col grid: 4 cols each at lg, 6 at md, 12 on mobile; `grid-gutter` between.

## Don't
- Don't add coloured left borders or drop shadows at rest — borders carry the structure.
- Don't nest cards inside cards.
