# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@gfazioli/mantine-onboarding-tour` — A Mantine component library for building guided onboarding tours with focus-reveal overlays and step-by-step navigation. Part of the Mantine Extensions collection. Published to npm under `@gfazioli` scope.

## Commands

All commands run from the repository root:

| Command | Purpose |
|---------|---------|
| `yarn build` | Build the package (Rollup → ESM + CJS + types + CSS) |
| `yarn dev` | Start docs dev server on port 9281 |
| `yarn test` | Full suite: syncpack → prettier → typecheck → lint → jest |
| `yarn docgen` | Generate component API docs (docs/docgen.json) |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn release:patch` | Bump patch version + deploy docs |
| `yarn prettier:write` | Auto-fix formatting issues |
| `yarn eslint` | Lint with ESLint (cached) |
| `yarn clean && yarn build && yarn docgen && yarn docs:build && yarn test` | Full verification pipeline |
| `diny yolo` | AI-assisted commit: stage all, generate message, commit + push |

To run just Jest unit tests: `npx jest` (or `npx jest --watch` for watch mode).

## Architecture

### Workspace Layout

Two Yarn workspaces: `package/` (the npm package) and `docs/` (Next.js 15 documentation site).

### Component Architecture (package/src/)

The library uses **Mantine's Factory pattern** for all components, enabling static component composition:

```
OnboardingTour              — Main wrapper; recursively clones children matching data-onboarding-tour-id
├── .FocusReveal            — Overlay + popover manager per step; handles scroll-into-view
├── .PopoverContent         — Popover body with title, content, footer, navigation, stepper
├── .Target                 — Declarative target for elements outside the OnboardingTour tree
└── .FocusRevealGroup       — Manages multiple focus reveals with shared overlay
```

**State management** flows through two React contexts:
- `OnboardingTourContext` — tour state (current step, navigation, start/end)
- `OnboardingTourFocusRevealGroupContext` — group-level focus coordination

**`useOnboardingTour` hook** — the primary hook returning `OnboardingTourController` with tour steps, navigation (next/prev/start/end), and current step state.

### Key Patterns

- **Data attributes** for element identification: `data-onboarding-tour-id`, `data-onboarding-tour-focus-reveal-focused`, `data-onboarding-tour-focus-reveal-mode`
- **Responsive design**: mobile detection via `useMediaQuery`, breakpoint-based popover positioning
- **CSS Modules** with PostCSS scoped names (2 module files)
- **`useUncontrolled`** from Mantine for flexible controlled/uncontrolled focus state

### Docs Site (docs/)

Next.js 15 static export. Pages in `docs/pages/`, interactive demos in `docs/demos/` (30+ demo files). Demos export a `Wrapper` function + metadata compatible with `@mantinex/demo`.

### Build Pipeline

Rollup compiles `package/src/index.ts` → ESM (.mjs) + CJS (.cjs) with `'use client'` banner. PostCSS generates scoped CSS modules. A post-build script (`scripts/prepare-css.ts`) creates both regular and `styles.layer.css` variants.

## Conventions

- **Package manager**: Yarn 4 with workspaces — never use npm or pnpm
- **Targets**: Mantine 8.x, React 18/19, ES2015
- **Import order** enforced by prettier plugin: styles → React → Next → Mantine → local
- **Commit style**: emoji prefix (🐛 fix, ♻️ refactor, 📚 docs, etc.)
- If `yarn test` fails with prettier errors on `Footer.tsx`/`Shell.tsx`, run `yarn prettier:write` first
- CI runs on Node 20.9.0 (see `.github/workflows/pull_request.yml`)
