# Alert

An inline, persistent message about the page or a section: info, success, warning, error.

**Markup:** `<div class="rj-alert rj-alert-{info|success|warning|error}" role="status">` (use `role="alert"` for errors) › icon + `.rj-alert-title` + `<p>`. Icons: info → `info`, success → `circle-check`, warning → `triangle-alert`, error → `circle-x`.

**Tokens:** `{status}-bg` fill, `{status}-border` 1px, `{status}-text` text + icon (≥ 7:1 both themes), `radius-md`, `space-4`/`space-5` padding.

## Do
- Title says what happened; body says what to do next.
- Always keep the icon — colour alone fails colour-blind readers.

## Don't
- Don't stack more than one alert per section; merge them.
- Don't use for transient confirmations — use Toast.
