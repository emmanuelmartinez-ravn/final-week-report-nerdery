# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A final week report for the RAVN Nerdery program, read by mentors and fellow students. It covers the last week of the program day by day, Monday to Friday (2026-10-05 to 2026-10-09). Each day has its own notes: focus, summary, what I did, what I learned, blockers, what comes next, relevant pull requests, related links and acknowledgements.

The app is a single-page Vite + React + TypeScript site routed with React Router (`createBrowserRouter` in `src/core/router/router.tsx`). `/` is the week overview and `/:day` is one day (`/monday` … `/friday`); an unknown path renders the 404 page. The day list (`REPORT_DAYS` in `src/features/report/data/days.ts`) is the single source for the header, the overview timeline and the day routes, and it is where each day's notes are written. The `design-system/` folder is the source of truth for how the app should look and read.

## Commands

Package manager is pnpm (`pnpm-lock.yaml`).

- `pnpm dev` — Vite dev server with HMR
- `pnpm build` — type-check (`tsc -b`) then production build to `dist/`
- `pnpm lint` — Oxlint (config in `.oxlintrc.json`: react, typescript, oxc plugins; `rules-of-hooks` is an error)
- `pnpm preview` — serve the built `dist/`
- `node design-system/build-tokens.mjs` — regenerate `design-system/tokens.css` and `design-system/tailwind-theme.css` from `tokens.json` (run after any token change)

There is no test runner configured yet.

## Stack notes

- React 19, Vite 8, Tailwind CSS v4 (via `@tailwindcss/vite`; no `tailwind.config.js`, the theme is CSS), TypeScript ~6 with `verbatimModuleSyntax` (use `import type` for type-only imports), `erasableSyntaxOnly` (no enums, namespaces or parameter properties), `noUnusedLocals`/`noUnusedParameters`.
- Imports may include the `.tsx` extension (`allowImportingTsExtensions`), as `src/main.tsx` does.

## Source layout

`src/` is split into `core/` (app shell, routing, providers), `features/` (one folder per product area) and `shared/` (design-system UI components, icons, hooks, utils). Imports flow core → features → shared only. The full conventions are in `.claude/rules/project-structure.md`.

## Design system (`design-system/`)

`design-system/README.md` is the source of truth for look and voice. `tokens.json` generates both `tokens.css` (CSS variables, light and dark) and `tailwind-theme.css` (a Tailwind `@theme` that points at those variables and removes Tailwind's default palette and scales). `components/bundle.css` (`rj-` classes) and the `components/<Name>/` READMEs and `preview.html` files are the reference the React components in `src/shared/ui` are modelled on. The app itself doesn't load `bundle.css`.

Styling rules live in `.claude/rules/styling.md`. They load automatically when you work on files in `src/`, on `index.html` or on `design-system/`.

## Content voice

Report copy is first person, plain and specific ("DataLoader cut queries from 41 to 6"), in sentence case, with no emoji or exclamation marks. Timeline dates are ISO in mono (`2026-10-05 · Monday`); elsewhere they are readable ("Sep 22, 2026").
