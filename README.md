# RAVN Nerdery: final week report

A day-by-day report of my final week in the RAVN Nerdery program, Monday to Friday (Oct 5 to Oct 9, 2026). It is written for mentors and fellow students.

The program covered six modules over three months: Frontend, Backend, AI, Design, Project management and Quality assurance. I used the last week to go back over the feedback from those months and act on it. That meant reworking the QA and Design week deliverables, reviewing the Project management week, adding an image feature to my Backend project, fixing bugs in my Frontend project and tightening my AI workflow.

Each day's page covers:

- **Focus and summary**: what the day was about.
- **What I did**: the work I finished.
- **What I learned**: grouped by topic or module where it helps.
- **Pull requests and related links**: deployed projects, repositories and documentation.
- **Acknowledgements**: the mentors who reviewed my work.

## Pages

| Route | Page |
| --- | --- |
| `/` | Week overview: a timeline of the five days |
| `/monday` … `/friday` | The report for one day, with links to the previous and next day |
| anything else | Not found |

## Running it locally

The project uses [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev       # dev server with hot reload
pnpm build     # type-check and build to dist/
pnpm preview   # serve the built dist/
pnpm lint      # Oxlint
```

## Editing the report

All the content lives in one file, `src/features/report/data/days.ts`. Each entry in `REPORT_DAYS` is one day. The header, the overview timeline and the day pages all read from it, so a change there shows up everywhere. Empty sections are hidden on the page.

## Stack

- React 19, TypeScript and Vite
- React Router, for one route per day
- Tailwind CSS v4, themed from the design system in `design-system/`

The source follows a `core` → `features` → `shared` structure:

- `src/core/`: router and app layout
- `src/features/report/`: pages, components and day data
- `src/shared/`: design-system UI components, icons and utilities

`design-system/README.md` describes the look and voice of the site. After changing `design-system/tokens.json`, run `node design-system/build-tokens.mjs` to regenerate the CSS.

## Deploying

This is a single-page app with client-side routes. The host must send every path to `index.html`, or opening `/monday` directly will return a 404. On Vercel, add a `vercel.json` with a rewrite of all paths to `/index.html`. Netlify needs a `_redirects` file with `/* /index.html 200`.
