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

The library has two main use cases:

1. **OnboardingTour** — step-by-step guided tour with popover navigation
2. **FocusReveal** — standalone focus/highlight for individual elements (also used internally by OnboardingTour)

```
OnboardingTour              — Main wrapper; recursively clones children matching data-onboarding-tour-id
├── .FocusReveal            — Overlay + popover + scroll-into-view + animation per element
│   └── .Group              — Shared overlay for multiple FocusReveals (scroll-reveal pattern)
├── .PopoverContent         — Popover body: header, title, content, footer, nav buttons, stepper
└── .Target                 — Declarative target for elements outside the OnboardingTour tree
```

**OnboardingTour** is a plain function component (NOT using Mantine's `factory()`).
**PopoverContent** uses `factory()`. **FocusReveal** and **Target** are plain function components.

### Data Flow

```
started=true → useEffect → startTour() → setCurrentStepIndex(0)
  → wrapChildren() recursively walks React children tree
    → matches data-onboarding-tour-id to tour[currentStepIndex].id
    → wraps matched child in <FocusReveal focused={true} popoverContent={<PopoverContent/>}>
      → useScrollIntoView scrolls element into viewport (custom fork of Mantine's hook)
      → useInViewport detects visibility → sets realFocused=true
      → shows Overlay (fixed, full-screen) + opens Popover with step content
  → User clicks Next → nextStep() → setCurrentStepIndex(n+1) → re-render → repeat
  → Last step + Next → endTour() → setCurrentStepIndex(undefined) → tour ends
```

**For elements outside the OnboardingTour tree:** `OnboardingTour.Target` subscribes to `OnboardingTourContext` and self-wraps when its `id` matches the active step.

### State Management

- **`useOnboardingTour` hook** — manages `currentStepIndex` (useState), derives `currentStep`, `selectedStepId`, exposes `startTour/endTour/nextStep/prevStep/setCurrentStepIndex`
- **`OnboardingTourContext`** (optional) — propagates tour controller + popover config to `OnboardingTour.Target` components
- **`OnboardingTourFocusRevealGroupContext`** (optional) — coordinates overlay visibility across multiple FocusReveals in a Group

### FocusReveal Internals

- Supports **controlled** (`focused` prop) and **uncontrolled** (`defaultFocused` prop) modes via `useUncontrolled`
- Two-phase focus: `_focused` (requested) → `realFocused` (confirmed in viewport). Overlay + popover only show when `realFocused=true`
- When inside a **Group**, the FocusReveal delegates overlay rendering to the Group (shared overlay) and reports viewport status via context
- 12 CSS animation modes: `pulse`, `glow`, `glow-blue`, `glow-red`, `glow-green`, `border`, `shake`, `rotate`, `scale`, `elastic`, `zoom`, `none`
- Responsive: on mobile (detected via `useMediaQuery` with hardcoded breakpoint map), popover moves to top/bottom with full-width styling, scroll alignment changes

### OnboardingTourStep

Each step can use ReactNode or render function `(controller: OnboardingTourController) => ReactNode` for: `header`, `title`, `content`, `footer`, `focusRevealProps`. Steps also accept `[key: string]: any` for arbitrary custom data (used in custom popover demos).

### useScrollIntoView

Custom fork (not `@mantine/hooks` version). Accepts an external `scrollableRef` instead of creating its own. Uses `requestAnimationFrame` loop with easeInOutQuad easing. Cancellable on user scroll (wheel/touchmove).

### Build Pipeline

Rollup compiles `package/src/index.ts` → ESM (.mjs) + CJS (.cjs) with `'use client'` banner. PostCSS generates scoped CSS modules. A post-build script (`scripts/prepare-css.ts`) creates both regular and `styles.layer.css` variants.

### Docs & Demos (docs/)

Next.js 15 static export. Demos in `docs/demos/` export a `Wrapper` function + metadata object compatible with `@mantinex/demo`. Demo categories:
- **OnboardingTour.demo.***: configurator, target, responsive, customStepper, customPopoverContent, customEntry, wrapTitle, onboardingTourStep, onboardingTourStepFocusReveal, onboardingProps, targetFocusReveal
- **FocusReveal.demo.***: configurator, cycle, group, group-props, overlay, popover, popoverProps, reveal, scrollContainer, focusMode, paper, uncontrolled, disableTargetInteraction, cycleDescription

## Known Issues

- **`useMemo` in PopoverContent** (`OnboardingTourPopoverContent.tsx:314`) has incomplete deps — doesn't include step-dependent values. Masked because the parent uses a `key` that changes per step, forcing remount.
- **Stale closure in nextStep/prevStep** (`use-onboarding-tour.ts:104-127`) — `onOnboardingTourChange` reads `currentStepIndex` from closure, not from functional updater.
- **`currentStepIndex` compared without undefined check** (`use-onboarding-tour.ts:105,117`) — works by accident because `undefined < N` is `false` in JS.
- **Hardcoded breakpoint map** (`OnboardingTourFocusReveal.tsx:274-280`) — doesn't read from Mantine theme.
- **Minimal test coverage** — single render test, no navigation/interaction/hook tests.
- **No keyboard accessibility** — no focus trap, no Escape to close, no ARIA attributes.

## Conventions

- **Package manager**: Yarn 4 with workspaces — never use npm or pnpm
- **Targets**: Mantine 8.x, React 18/19, ES2015
- **Import order** enforced by prettier plugin: styles → React → Next → Mantine → local
- **Commit style**: emoji prefix (🐛 fix, ♻️ refactor, 📚 docs, etc.)
- If `yarn test` fails with prettier errors on `Footer.tsx`/`Shell.tsx`, run `yarn prettier:write` first
- CI runs on Node 20.9.0 (see `.github/workflows/pull_request.yml`)
