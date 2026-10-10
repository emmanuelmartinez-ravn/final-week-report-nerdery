---
paths:
  - "src/**"
---

# Project structure: core, features, shared

All app code lives in one of three top-level folders under `src/`. Only `main.tsx` and `App.tsx` sit outside them.

```
src/
  main.tsx          entry: mounts <App />, imports design-system CSS
  App.tsx           composes core providers + router
  core/             app-wide setup that exists exactly once
  features/         one folder per product area
  shared/           reusable building blocks with no product knowledge
```

## `core/`

This folder holds the single app shell and its setup: global styles (`core/styles/global.css`), routing, layout (top navigation, page frame), providers (theme / `data-theme` toggle), app config and constants, and the loading of global data.

- Anything here is instantiated once. If it would be used twice, it belongs in `shared/`.
- `core/` may import from `features/` (to register routes and pages) and from `shared/`.
- Routing lives in `core/router/` (React Router). Feature pages read route params with React Router hooks; links between routes use its `Link`/`NavLink` styled with the class helpers from `shared/ui` (`buttonClasses`, `navLinkClasses`, `cardLinkClasses`, `textLinkClasses`).

## `features/`

Each folder is one product area of the app. Today there is one, `report/` (the week overview, the day pages and the day data). Add another only for a genuinely separate area.

- A feature owns everything specific to it: pages, feature-only components, hooks, data/content and types. Styling is done with Tailwind utilities, so features have no CSS files.
- Each feature exposes its public surface through an `index.ts`, and other folders import only from that file. Don't deep-import another feature's internals.
- Features don't import from other features. If two features need the same thing, move it to `shared/`. If it is app wiring, move it to `core/`.
- Suggested internal layout, added only when needed: `pages/`, `components/`, `hooks/`, `data/`, `types.ts`.

## `shared/`

This folder holds generic, domain-agnostic code that any feature can use:

- `shared/ui/`: the design-system components built with Tailwind (`Button`, `Card`, `Tag`, `Alert`, `Timeline`, …), exported from `shared/ui/index.ts`. Their class helpers live in `shared/ui/styles.ts`. See `.claude/rules/styling.md`.
- `shared/hooks/`, `shared/utils/` (`cx`, date formatting), `shared/types/`, `shared/icons/` (inline Lucide SVG components).

`shared/` never imports from `core/` or `features/`. If a piece of code needs to know about days or report notes, it belongs in a feature.

## Dependency direction

```
core  ──▶ features ──▶ shared
  └──────────────────▶ shared
```

Imports only flow along these arrows. If a change needs an import against them, move the code instead.

## Conventions

- Name component files and folders in PascalCase (`ProjectCard.tsx`), and name hooks, utils and feature folders in camelCase or kebab-case.
- Style with Tailwind utilities in the component. Don't add per-component CSS files.
- Use relative imports within a feature. Across folders, import through the target's `index.ts`.
