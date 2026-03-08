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

**OnboardingTour** uses Mantine's `factory()`.
**PopoverContent** uses `factory()`. **FocusReveal** and **Target** are plain function components.

### Data Flow

```
started=true → useEffect → startTour() → setCurrentStepIndex(0)
  → OnboardingTour renders persistent overlay (fixed, full-screen, CSS clip-path cutout)
  → wrapChildren() recursively walks React children tree
    → matches data-onboarding-tour-id to tour[currentStepIndex].id
    → wraps matched child in <FocusReveal focused={true} withOverlay={false} popoverContent={<PopoverContent/>}>
      → useScrollIntoView scrolls element into viewport (custom fork of Mantine's hook)
      → useInViewport detects visibility → sets realFocused=true
      → opens Popover (withinPortal=true) with step content
  → User clicks Next → nextStep():
      Phase 1: setPendingStepIndex(n+1) → selectedStepId=undefined → current popover closes
      Phase 2: useEffect → setCurrentStepIndex(n+1) → new popover opens
      (persistent overlay stays visible throughout, CSS-transitions overlayProps changes)
  → Last step + Next → onOnboardingTourComplete() + onOnboardingTourEnd() → tour ends
  → User clicks Skip → skipTour() → onOnboardingTourSkip() + onOnboardingTourEnd()
```

**For elements outside the OnboardingTour tree:** `OnboardingTour.Target` subscribes to `OnboardingTourContext` and self-wraps when its `id` matches the active step.

### State Management

- **`useOnboardingTour` hook** (internal, not publicly exported) — manages `currentStepIndex` (useState) + `pendingStepIndex` (for sequential transitions), derives `currentStep`, `selectedStepId`, exposes `startTour/endTour/skipTour/nextStep/prevStep/setCurrentStepIndex`. Used internally by `OnboardingTour` component.
- **`OnboardingTourContext`** (optional) — propagates tour controller + popover config to `OnboardingTour.Target` components
- **`OnboardingTourFocusRevealGroupContext`** (optional) — coordinates overlay visibility across multiple FocusReveals in a Group

### FocusReveal Internals

- Supports **controlled** (`focused` prop) and **uncontrolled** (`defaultFocused` prop) modes via `useUncontrolled`
- Two-phase focus: `_focused` (requested) → `realFocused` (confirmed in viewport). Overlay + popover only show when `realFocused=true`
- When inside a **Group**, the FocusReveal delegates overlay rendering to the Group (shared overlay) and reports viewport status via context
- 12 CSS animation modes: `pulse`, `glow`, `glow-blue`, `glow-red`, `glow-green`, `border`, `shake`, `rotate`, `scale`, `elastic`, `zoom`, `none`
- **Responsive popover positioning** via `ResponsiveProp<T>` type and `useMatches()`. Popover `position`, `offset`, `width`, and `arrowSize` accept responsive objects like `{ base: 'bottom', sm: 'left' }`. Scroll alignment is derived from the resolved position. Floating UI `shift` (padding: 20) and `flip` middlewares handle edge cases. When the tour is active, `document.documentElement.style.overflowX` is set to `hidden` to prevent horizontal scroll from portal-rendered popovers.

### Cutout Overlay

The persistent overlay uses a CSS `clip-path: path(evenodd, "...")` to create a transparent hole around the focused element, allowing it to be visible and interactive even inside CSS stacking contexts (e.g., Mantine's AppShell with fixed Header/Navbar). The `useCutoutRect` hook (`package/src/hooks/use-cutout-rect/`) measures the focused element via `getBoundingClientRect()` on the element with `[data-onboarding-tour-focus-reveal-focused]` attribute. The `buildCutoutPath` helper generates an SVG path with an outer viewport rect and an inner rounded rect (opposite winding = hole via evenodd rule).

Configurable via `cutoutPadding` (default: 8) and `cutoutRadius` (default: 8) props on both `<OnboardingTour>` (tour-level) and `OnboardingTourStep` (per-step override). Use `cutoutRadius: 9999` for circular elements like avatars.

### OnboardingTourStep

Each step can use ReactNode or render function `(controller: OnboardingTourController) => ReactNode` for: `header`, `title`, `content`, `footer`, `focusRevealProps`. Steps also accept `cutoutPadding` and `cutoutRadius` for per-step cutout customization, plus `[key: string]: any` for arbitrary custom data (used in custom popover demos).

### useScrollIntoView

Custom fork (not `@mantine/hooks` version). Accepts an external `scrollableRef` instead of creating its own. Uses `requestAnimationFrame` loop with easeInOutQuad easing. Cancellable on user scroll (wheel/touchmove).

### Build Pipeline

Rollup compiles `package/src/index.ts` → ESM (.mjs) + CJS (.cjs) with `'use client'` banner. PostCSS generates scoped CSS modules. A post-build script (`scripts/prepare-css.ts`) creates both regular and `styles.layer.css` variants.

### Docs & Demos (docs/)

Next.js 15 static export. Demos in `docs/demos/` export a `Wrapper` function + metadata object compatible with `@mantinex/demo`. Demo categories:
- **OnboardingTour.demo.***: configurator, cutout, target, customStepper, customPopoverContent, customEntry, wrapTitle, onboardingTourStep, onboardingTourStepFocusReveal, onboardingProps, targetFocusReveal
- **Full-page demos** (docs/pages/): `demo.tsx` (main tour), `responsive.tsx` (responsive positioning)
- **FocusReveal.demo.***: configurator, cycle, group, group-props, overlay, popover, popoverProps, reveal, scrollContainer, focusMode, paper, uncontrolled, disableTargetInteraction, cycleDescription

## Known Issues

- **No keyboard accessibility** — no focus trap, no Escape to close, no ARIA attributes.

## Conventions

- **Package manager**: Yarn 4 with workspaces — never use npm or pnpm
- **Targets**: Mantine 8.x, React 18/19, ES2015
- **Import order** enforced by prettier plugin: styles → React → Next → Mantine → local
- **Commit style**: emoji prefix (🐛 fix, ♻️ refactor, 📚 docs, etc.)
- If `yarn test` fails with prettier errors on `Footer.tsx`/`Shell.tsx`, run `yarn prettier:write` first
- CI runs on Node 20.9.0 (see `.github/workflows/pull_request.yml`)
