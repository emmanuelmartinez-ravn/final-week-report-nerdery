# TextField

A labelled text input (or textarea) with optional helper and error text.

**Markup:** wrap in `.rj-field`: `<label class="rj-label" for>` + `<input class="rj-input">` (or `<textarea class="rj-textarea">`) + `<p class="rj-help">`. Error: set `aria-invalid="true"` on the input, replace helper with `<p class="rj-error-msg" id>` and point `aria-describedby` at it. Leading icon: wrap in `.rj-input-wrap` with an `.rj-icon` before the input.

**Tokens:** border `border-strong` (3:1+), hover `text-secondary`, focus `focus` border + `focus-ring`, error `error-border` + `focus-ring-error`, text `text-primary`, placeholder/help `text-muted`. Height 44px, `radius-md`, `space-3` padding, `body` type (16px — prevents iOS zoom).

## Do
- Always use a visible `rj-label`; placeholders are examples, not labels.
- Write error messages that say how to fix it: "Enter a full URL starting with https://".
- Show the error icon **and** text — never colour alone.

## Don't
- Don't validate on every keystroke; validate on blur or submit.
- Don't use `text-muted` for anything the user must read to succeed.
