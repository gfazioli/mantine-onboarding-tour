# CLAUDE.md

## Project
`@gfazioli/mantine-onboarding-tour` — A Mantine component library for building guided onboarding tours with focus-reveal overlays, cutout highlights, and step-by-step popover navigation.

## Commands
| Command | Purpose |
|---------|---------|
| `yarn build` | Build the npm package via Rollup |
| `yarn dev` | Start the Next.js docs dev server (port 9281) |
| `yarn test` | Full test suite (syncpack + oxfmt + typecheck + lint + jest) |
| `yarn jest` | Run only Jest unit tests |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn docs:build` | Build the Next.js docs site for production |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn lint` | Run oxlint + Stylelint |
| `yarn format:write` | Format all files with oxfmt |
| `yarn storybook` | Start Storybook dev server |
| `yarn clean` | Remove build artifacts |
| `yarn release:patch` | Bump patch version and deploy docs |
| `diny yolo` | AI-assisted commit (stage all, generate message, commit + push); it needs a TTY, so from Claude Code commit with `git commit` + `git push` |

> **Important**: After changing the public API (props, types, exports), always run `yarn clean && yarn build` before `yarn test`, because `yarn docgen` needs the fresh build output.

## Architecture

### Workspace Layout
Yarn workspaces monorepo with two workspaces: `package/` (npm package) and `docs/` (Next.js 16 documentation site).

### Package Source (`package/src/`)

The library has two main use cases:
1. **OnboardingTour** — step-by-step guided tour with popover navigation
2. **FocusReveal** — standalone focus/highlight for individual elements (also used internally by OnboardingTour)

```
OnboardingTour.tsx                — Main wrapper; factory() component, recursively clones children matching data-onboarding-tour-id
OnboardingTour.context.ts         — OnboardingTourContext provider
OnboardingTour.module.css         — Styles for root overlay and tour
├── OnboardingTourFocusReveal/    — Overlay + popover + scroll-into-view + animation per element (plain function component)
│   ├── focus-reveal-modes.ts     — 12 CSS animation mode definitions
│   └── OnboardingTourFocusReveal.module.css
├── OnboardingTourFocusRevealGroup/ — Shared overlay for multiple FocusReveals (scroll-reveal pattern)
│   └── OnboardingTourFocusRevealGroup.context.ts
├── OnboardingTourPopoverContent/ — Popover body: header, title, content, footer, nav buttons, stepper (factory() component)
│   └── OnboardingTourPopoverContent.module.css
├── OnboardingTourTarget/         — Declarative target for elements outside the OnboardingTour tree (plain function component)
└── hooks/
    ├── use-onboarding-tour/      — Internal hook: currentStepIndex, pendingStepIndex, tour controller
    ├── use-cutout-rect/          — Measures focused element, builds SVG clip-path with cutout hole
    └── use-scroll-into-view/     — Custom fork (not @mantine/hooks): external scrollableRef, RAF easing, cancel on user scroll
        └── utils/                — easeInOutQuad, getRelativePosition, getScrollStart, setScrollParam
```

Compound component registration: `OnboardingTour.FocusReveal`, `OnboardingTour.PopoverContent`, `OnboardingTour.Target`, plus `OnboardingTour.FocusReveal.Group`.

### Build Pipeline
Rollup bundles to dual ESM (`dist/esm/`) and CJS (`dist/cjs/`) with `'use client'` banner. CSS modules are hashed with `hash-css-selector` (prefix `me`). TypeScript declarations via `rollup-plugin-dts`. CSS is split into `styles.css` and `styles.layer.css` (layered version).

### Docs (`docs/`)
Next.js 16 static export. Demos in `docs/demos/` export a `Wrapper` function + metadata object compatible with `@mantinex/demo`. Demo categories:
- **OnboardingTour.demo.***: configurator, cutout, target, customStepper, customPopoverContent, customEntry, wrapTitle, onboardingTourStep, onboardingTourStepFocusReveal, onboardingProps, targetFocusReveal
- **Full-page demos** (docs/pages/): `demo.tsx` (main tour), `responsive.tsx` (responsive positioning)
- **FocusReveal.demo.***: configurator, cycle, group, group-props, overlay, popover, popoverProps, reveal, scrollContainer, focusMode, paper, uncontrolled, disableTargetInteraction, cycleDescription

## Component Details

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
- **`OnboardingTourContext`** (optional) — propagates tour controller + popover config to `OnboardingTour.Target` components.
- **`OnboardingTourFocusRevealGroupContext`** (optional) — coordinates overlay visibility across multiple FocusReveals in a Group.

### FocusReveal Internals

- Supports **controlled** (`focused` prop) and **uncontrolled** (`defaultFocused` prop) modes via `useUncontrolled`.
- Two-phase focus: `_focused` (requested) → `realFocused` (confirmed in viewport). Overlay + popover only show when `realFocused=true`.
- When inside a **Group**, the FocusReveal delegates overlay rendering to the Group (shared overlay) and reports viewport status via context.
- 12 CSS animation modes: `pulse`, `glow`, `glow-blue`, `glow-red`, `glow-green`, `border`, `shake`, `rotate`, `scale`, `elastic`, `zoom`, `none`.
- **Responsive popover positioning** via `ResponsiveProp<T>` type and `useMatches()`. Popover `position`, `offset`, `width`, and `arrowSize` accept responsive objects like `{ base: 'bottom', sm: 'left' }`. Scroll alignment is derived from the resolved position. Floating UI `shift` (padding: 20) and `flip` middlewares handle edge cases. When the tour is active, `document.documentElement.style.overflowX` is set to `hidden` to prevent horizontal scroll from portal-rendered popovers.

### Cutout Overlay

The persistent overlay uses a CSS `clip-path: path(evenodd, "...")` to create a transparent hole around the focused element, allowing it to be visible and interactive even inside CSS stacking contexts (e.g., Mantine's AppShell with fixed Header/Navbar). The `useCutoutRect` hook (`package/src/hooks/use-cutout-rect/`) measures the focused element via `getBoundingClientRect()` on the element with `[data-onboarding-tour-focus-reveal-focused]` attribute. The `buildCutoutPath` helper generates an SVG path with an outer viewport rect and an inner rounded rect (opposite winding = hole via evenodd rule).

Configurable via `cutoutPadding` (default: 8) and `cutoutRadius` (default: 8) props on both `<OnboardingTour>` (tour-level) and `OnboardingTourStep` (per-step override). Use `cutoutRadius: 9999` for circular elements like avatars.

### OnboardingTourStep

Each step can use ReactNode or render function `(controller: OnboardingTourController) => ReactNode` for: `header`, `title`, `content`, `footer`, `focusRevealProps`. Steps also accept `cutoutPadding` and `cutoutRadius` for per-step cutout customization, plus `[key: string]: any` for arbitrary custom data (used in custom popover demos).

### useScrollIntoView

Custom fork (not `@mantine/hooks` version). Accepts an external `scrollableRef` instead of creating its own. Uses `requestAnimationFrame` loop with easeInOutQuad easing. Cancellable on user scroll (wheel/touchmove).

## Testing
Jest with `jsdom` environment, `esbuild-jest` transform, CSS mocked via `identity-obj-proxy`. Component tests use `@mantine-tests/core` render helper.

## Keyboard and accessibility

- **Keys** are read on `window` in `OnboardingTour`: `Escape` in the capture phase (skips the tour; a control marked `data-mantine-stop-propagation` keeps it), the arrows in the bubble phase so a control that handles them first and calls `preventDefault` keeps them. Arrows are ignored with a modifier, in fields that use them (`ARROW_KEYS_OWNER_SELECTOR`) and inside the highlighted element; `←` on the first step never ends the tour. RTL mirrors them via `useDirection`.
- **Dialog naming**: the tour generates `popoverTitleId` / `popoverContentId`, `OnboardingTourPopoverContent` puts them on the title and content wrappers (read from context, `useId` fallback standalone), and the step popover gets `aria-labelledby` / `aria-describedby` through FocusReveal's `popoverDropdownProps`. Only keys that point at something are set: an `undefined` key would erase Mantine's own `aria-labelledby`.
- **Focus**: `withAutoFocus` (PopoverContent) focuses the enclosing `[role="dialog"]` on each step; `returnFocus` (OnboardingTour) gives it back to the element captured in the `started` effect — not when the tour becomes active, by then the first popover may hold the focus.
- **Centered steps**: a step whose id matches neither a wrapped child (`selectedStepMatched`, set while `wrapChildren` walks) nor a registered `OnboardingTour.Target` (`registerTarget` in context) renders its PopoverContent in a portalled `Paper` (`centered` selector).

## Invariant: `wrapChildren` always returns the same shape

`React.Children.map` re-keys what it returns (`.0`, `.1`, …). Until 4.1 the raw `children` were returned while the tour was idle or between two steps, and the mapped ones while it ran, so React saw different keys and **remounted every child** on start, on each step change and on end (child state lost, focus dropped). Now the children are always mapped, targets are wrapped for the whole time the tour is active (only `focused` moves), and function children (render props) are passed through untouched. A regression test covers it.

## Ecosystem
This repo is part of the Mantine Extensions ecosystem, derived from the `mantine-base-component` template. See the workspace (the parent directory) for:
- Development checklist and cross-cutting patterns (compound components, responsive CSS, GitHub sync): the workspace's `.claude/rules/component-development.md`, which loads with this repo's files
- Update packages workflow: the workspace's `fleet-maintenance` skill
- Release process: the workspace's `/release` command
