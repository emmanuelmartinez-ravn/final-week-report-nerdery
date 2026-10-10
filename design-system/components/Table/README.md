# Table

A simple data table for modules, hours and feedback — read-only, scannable.

**Markup:** `.rj-table-wrap` › `<table class="rj-table">` with `<th scope="col">`. Right-align numbers with `.num` (mono). Secondary columns `.muted`. Selected/current row: `aria-selected="true"`.

**Tokens:** wrapper `bg-surface`, `border-default`, `radius-lg`; header `bg-subtle` + `text-secondary` `label`; row hover `bg-subtle`; selected `accent-subtle`; cell padding `space-3`/`space-4`.

## Do
- Keep it to ≤ 5 columns; below `screen-md`, stack each row as a Card.
- Use Tag for status inside cells.

## Don't
- Don't zebra-stripe — hairlines are enough.
- Don't put primary actions inside every row; one action per page.
