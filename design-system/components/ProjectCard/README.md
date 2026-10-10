# ProjectCard

A Card variant for a program project: screenshot, stack tags, status, and links to repo and demo.

**Provide:** a screenshot (16:9, cropped to 140px tall in `.rj-card-media`), 1–3 stack `rj-tag`s, one status tag (`rj-tag-success` + circle-check "Shipped", or `rj-tag-neutral` + clock "In progress"), title, one-sentence summary, and up to two small buttons.

**Tokens:** as Card; tags `tag-bg`/`tag-text`, status `success-bg`/`success-text`.

## Do
- Status always pairs icon + word.
- Use real screenshots of your project UI; crop to the interesting part.

## Don't
- Don't list more than three technologies — the detail page can hold the rest.
- Don't make the whole card a link when it already contains buttons.
