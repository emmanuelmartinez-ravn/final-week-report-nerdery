# Navigation

Top bar for the 4 site sections, plus an "On this page" table of contents for long entries.

**Markup:** `<header class="rj-nav">` › `.rj-container.rj-nav-inner` › `.rj-brand` (wordmark "RAVN" in plain type + product name), `.rj-nav-links` of `.rj-nav-link`, `.rj-nav-end` (theme toggle). Mark the current page with `aria-current="page"`. TOC: `<nav aria-label="On this page"><ul class="rj-toc">` with `aria-current="true"` on the visible section.

**Tokens:** `bg-canvas`, bottom `border-default`, height `nav-height`, `z-sticky`; links `text-secondary` → hover `text-primary` on `bg-subtle`; current gets a 2px `accent` underline; focus `focus-ring`.

## Do
- Keep top-level items to 4–5; one word each.
- Below `screen-lg`, collapse links into a menu button (`menu` icon, `aria-expanded`).

## Don't
- Don't mark current state with colour only — the underline bar is the cue.
- Don't redraw the RAVN logo; until the official mark is supplied, set "RAVN" in `display` type.
