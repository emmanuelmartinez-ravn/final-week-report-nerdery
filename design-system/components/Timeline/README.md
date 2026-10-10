# Timeline

A vertical, week-by-week list of journal entries — the spine of the portfolio.

**Markup:** `<ol class="rj-timeline">` › `<li class="rj-tl-item" data-state="done|current|upcoming">` › `.rj-tl-dot`, `.rj-tl-date` (mono, ISO date + week), `.rj-tl-title` (link to the entry), `.rj-tl-body` (one-sentence takeaway), optional `.rj-tags`.

**Tokens:** rail `border-default`; dots: done `accent` fill, current `accent` ring, upcoming `border-strong` outline; date `code` style in `text-secondary`; body capped at `reading-max`.

## Do
- One entry per week; the takeaway is the single thing you'd tell a new student.
- Newest at the bottom on the Overview (story order); offer a "Newest first" sort on the Journal page.

## Don't
- Don't rely on the dot alone for status — current entries also get the "Current" tag.
- Don't put full reflections in the timeline; link to the entry page.
