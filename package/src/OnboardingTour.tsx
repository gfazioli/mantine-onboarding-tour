import {
  Box,
  BoxProps,
  Factory,
  factory,
  Paper,
  Portal,
  rgba,
  StylesApiProps,
  Transition,
  useDirection,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useWindowEvent } from '@mantine/hooks';
import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { buildCutoutPath, useCutoutRect } from './hooks/use-cutout-rect/use-cutout-rect';
import {
  OnboardingTourController,
  useOnboardingTour,
  type OnboardingTourOptions,
  type OnboardingTourStep,
} from './hooks/use-onboarding-tour/use-onboarding-tour';
import { _OnboardingTourProvider } from './OnboardingTour.context';
import {
  OnboardingTourFocusReveal,
  OnboardingTourFocusRevealProps,
} from './OnboardingTourFocusReveal/OnboardingTourFocusReveal';
import {
  OnboardingTourPopoverContent,
  type OnboardingTourPopoverContentBaseProps,
} from './OnboardingTourPopoverContent';
import { OnboardingTourPopoverContentStylesNames } from './OnboardingTourPopoverContent/OnboardingTourPopoverContent';
import { OnboardingTourTarget } from './OnboardingTourTarget/OnboardingTourTarget';
import classes from './OnboardingTour.module.css';

export type OnboardingTourStylesNames = OnboardingTourPopoverContentStylesNames | 'centered';

export interface OnboardingTourBaseProps
  extends OnboardingTourOptions, Omit<OnboardingTourPopoverContentBaseProps, 'tourController'> {
  tour: OnboardingTourStep[];

  /** Controlled started state */
  started: boolean;

  /** Props passed to FocusReveal */
  focusRevealProps?:
    | OnboardingTourFocusRevealProps
    | ((tourController: OnboardingTourController) => OnboardingTourFocusRevealProps);

  /** Padding around the cutout highlight area in pixels. Default: `8` */
  cutoutPadding?: number;

  /** Border radius of the cutout highlight area in pixels. Use a large value (e.g. `9999`) for circular elements. Default: `8` */
  cutoutRadius?: number;

  /** Navigate the steps with the arrow keys (`→` next, `←` previous, mirrored in RTL). Ignored while the focus is inside the highlighted element or a field that uses the arrows itself. @default true */
  withKeyboardNavigation?: boolean;

  /** Skip the tour when `Escape` is pressed. @default true */
  closeOnEscape?: boolean;

  /** Skip the tour when the overlay around the highlighted element is clicked. @default false */
  closeOnOverlayClick?: boolean;

  /** Give the focus back to the element that had it when the tour started, once the tour ends. @default true */
  returnFocus?: boolean;

  /** Child elements */
  children: React.ReactNode;
}

export interface OnboardingTourProps
  extends BoxProps, OnboardingTourBaseProps, StylesApiProps<OnboardingTourFactory> {}

export type OnboardingTourFactory = Factory<{
  props: OnboardingTourProps;
  ref: HTMLDivElement;
  stylesNames: OnboardingTourStylesNames;
  staticComponents: {
    FocusReveal: typeof OnboardingTourFocusReveal;
    PopoverContent: typeof OnboardingTourPopoverContent;
    Target: typeof OnboardingTourTarget;
  };
}>;

const DEFAULT_CUTOUT_PADDING = 8;
const DEFAULT_CUTOUT_RADIUS = 8;

export const defaultProps: Partial<OnboardingTourProps> = {
  withKeyboardNavigation: true,
  closeOnEscape: true,
  closeOnOverlayClick: false,
  returnFocus: true,
};

/** Focus targets that use the arrow keys themselves: the tour leaves the arrows to them. */
const ARROW_KEYS_OWNER_SELECTOR = [
  'input',
  'textarea',
  'select',
  '[contenteditable]:not([contenteditable="false"])',
  '[role="slider"]',
  '[role="spinbutton"]',
  '[role="listbox"]',
  '[role="menu"]',
  '[role="menubar"]',
  '[role="tablist"]',
  '[role="radiogroup"]',
  '[role="grid"]',
  '[role="tree"]',
  '[data-onboarding-tour-focus-reveal-focused]',
].join(', ');

/** Mantine's default z-index for popovers, used by the centered step as well */
const POPOVER_Z_INDEX = 300;

export const OnboardingTour = factory<OnboardingTourFactory>((_props) => {
  const props = useProps('OnboardingTour', defaultProps, _props);

  const {
    tour,
    started,
    loop,
    focusRevealProps: _focusRevealProps,
    cutoutPadding: _cutoutPadding,
    cutoutRadius: _cutoutRadius,
    withKeyboardNavigation,
    closeOnEscape,
    closeOnOverlayClick,
    returnFocus,
    onOnboardingTourStart,
    onOnboardingTourEnd,
    onOnboardingTourComplete,
    onOnboardingTourSkip,
    onOnboardingTourChange,

    classNames,
    styles,
    unstyled,
    children,
    ...others
  } = props;

  const getStyles = useStyles<OnboardingTourFactory>({
    name: 'OnboardingTour',
    classes,
    props,
    classNames,
    styles,
    unstyled,
  });

  const onboardingTour = useOnboardingTour(tour, {
    loop,
    onOnboardingTourStart,
    onOnboardingTourEnd,
    onOnboardingTourComplete,
    onOnboardingTourSkip,
    onOnboardingTourChange,
  });

  const focusRevealProps = _focusRevealProps
    ? typeof _focusRevealProps === 'function'
      ? _focusRevealProps(onboardingTour)
      : _focusRevealProps
    : {};

  // Ids shared by the step popover and its content, so the dialog is named by the step title and
  // described by the step content instead of by the highlighted element.
  const baseId = useId();
  const popoverTitleId = `${baseId}-title`;
  const popoverContentId = `${baseId}-content`;
  const popoverContentProps = others as unknown as OnboardingTourPopoverContentBaseProps;
  const hasTitle = !!(popoverContentProps.title || onboardingTour.currentStep?.title);
  const hasContent = !!(popoverContentProps.content || onboardingTour.currentStep?.content);
  // Only the attributes that point at something: an `undefined` key would erase the Popover's own
  // `aria-labelledby`, which falls back to the highlighted element.
  const popoverDropdownProps = {
    ...(hasTitle && { 'aria-labelledby': popoverTitleId }),
    ...(hasContent && { 'aria-describedby': popoverContentId }),
  };

  // `OnboardingTour.Target` ids: a step whose id matches neither a child nor a Target is shown in
  // the middle of the screen.
  const [targetIds, setTargetIds] = useState<string[]>([]);
  const registerTarget = useCallback((id: string) => {
    setTargetIds((ids) => [...ids, id]);
    return () =>
      setTargetIds((ids) => {
        const index = ids.indexOf(id);
        return index === -1 ? ids : [...ids.slice(0, index), ...ids.slice(index + 1)];
      });
  }, []);

  const value = {
    ...onboardingTour,
    ...others,
    focusRevealProps,
    getStyles,
    unstyled,
    popoverTitleId,
    popoverContentId,
    popoverDropdownProps,
    registerTarget,
  };

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<OnboardingTourFactory>({
    classNames,
    styles,
    props,
  });

  const { selectedStepId: selectedTourId, startTour } = onboardingTour;

  // The element to give the focus back to. It is read here, as the tour starts, and not once the
  // tour is active: by then the first step's popover may already have taken the focus.
  const focusBeforeTourRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (started) {
      focusBeforeTourRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      startTour();
    }
    // startTour is excluded: it changes on every render and would cause infinite loops.
    // The component remounts via key changes when tour steps change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // Resolve current step's focusRevealProps for the persistent overlay
  const currentStepFocusRevealProps = (() => {
    const stepProps = onboardingTour.currentStep?.focusRevealProps;
    if (!stepProps) {
      return undefined;
    }
    return typeof stepProps === 'function' ? stepProps(onboardingTour) : stepProps;
  })();

  // Persistent overlay: merge tour-level and step-level overlayProps
  const overlayColor =
    currentStepFocusRevealProps?.overlayProps?.color ??
    focusRevealProps?.overlayProps?.color ??
    '#000';
  const overlayOpacity =
    currentStepFocusRevealProps?.overlayProps?.backgroundOpacity ??
    focusRevealProps?.overlayProps?.backgroundOpacity ??
    0.5;
  const overlayBlur =
    currentStepFocusRevealProps?.overlayProps?.blur ?? focusRevealProps?.overlayProps?.blur ?? 2;
  const overlayZIndex =
    currentStepFocusRevealProps?.overlayProps?.zIndex ??
    focusRevealProps?.overlayProps?.zIndex ??
    200;

  const isTourActive = started && onboardingTour.currentStepIndex !== undefined;
  const cutoutState = useCutoutRect(isTourActive, selectedTourId);

  useDidUpdate(() => {
    if (isTourActive) {
      return undefined;
    }
    const element = focusBeforeTourRef.current;
    focusBeforeTourRef.current = null;
    if (!returnFocus || !element || element === document.body) {
      return undefined;
    }
    // After the popover has unmounted, which is what dropped the focus to <body>
    const timeout = window.setTimeout(() => {
      if (element.isConnected) {
        element.focus({ preventScroll: true });
      }
    });
    return () => window.clearTimeout(timeout);
  }, [isTourActive]);

  const { dir } = useDirection();

  // Escape is read in the capture phase, like Mantine's own overlays, so it reaches the tour
  // before a control inside the step can swallow it. Components that need Escape for themselves
  // (an open Select or Menu) mark their target with `data-mantine-stop-propagation`.
  useWindowEvent(
    'keydown',
    (event) => {
      if (!isTourActive || !closeOnEscape || event.key !== 'Escape' || event.isComposing) {
        return;
      }
      const target = event.target instanceof Element ? event.target : null;
      if (target?.getAttribute('data-mantine-stop-propagation') === 'true') {
        return;
      }
      onboardingTour.skipTour();
    },
    { capture: true }
  );

  // The arrows are read in the bubble phase instead, so a control that handles them first (and
  // calls `preventDefault`) keeps them.
  useWindowEvent('keydown', (event) => {
    if (
      !isTourActive ||
      !withKeyboardNavigation ||
      event.defaultPrevented ||
      event.isComposing ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      // a step change is already in flight
      onboardingTour.selectedStepId === undefined
    ) {
      return;
    }
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest(ARROW_KEYS_OWNER_SELECTOR)) {
      return;
    }

    const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const backward = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';

    if (event.key === forward) {
      event.preventDefault();
      onboardingTour.nextStep();
    } else if (event.key === backward) {
      // On the first step `prevStep` ends the tour: a key press should never do that by accident.
      if ((onboardingTour.currentStepIndex ?? 0) > 0 || onboardingTour.options.loop) {
        event.preventDefault();
        onboardingTour.prevStep();
      }
    }
  });

  // Prevent horizontal scroll when the tour overlay is active (popovers via portal can exceed viewport)
  useEffect(() => {
    if (isTourActive) {
      const prev = document.documentElement.style.overflowX;
      document.documentElement.style.overflowX = 'hidden';
      return () => {
        document.documentElement.style.overflowX = prev;
      };
    }
    return undefined;
  }, [isTourActive]);

  // Deep-merge tour-level and step-level focusRevealProps so a step that defines its own
  // `popoverProps`/`overlayProps` doesn't drop the tour-level ones — a plain spread would
  // replace the whole nested object. `currentStepFocusRevealProps` is the resolved step value.
  const mergedFocusRevealProps = {
    ...focusRevealProps,
    ...currentStepFocusRevealProps,
    popoverProps: {
      ...focusRevealProps?.popoverProps,
      ...currentStepFocusRevealProps?.popoverProps,
    },
    overlayProps: {
      ...focusRevealProps?.overlayProps,
      ...currentStepFocusRevealProps?.overlayProps,
    },
  };

  let selectedStepMatched = false;

  // The children are always walked the same way, tour or no tour. `React.Children.map` re-keys
  // what it returns (`.0`, `.1`, …), so handing back the raw `children` when the tour is idle — or
  // between two steps — and the mapped ones when it is running made React see different keys and
  // remount every child on each start, step change and end: their state was lost, and so was the
  // element the focus has to return to. Only the targets change shape, and only while the tour runs.
  const wrapChildren = (children: React.ReactNode): React.ReactNode =>
    React.Children.map(children, (child) => {
      // Let's verify that the child is a valid React element.
      if (React.isValidElement(child)) {
        // If the element has the data-onboarding-tour attribute set to true
        const childProps = child.props as Record<string, unknown>;
        const tourId = childProps['data-onboarding-tour-id'] as string | undefined;
        // Targets stay wrapped for the whole tour, step changes included, so they do not remount
        // between two steps either: only `focused` moves from one to the next.
        if (tourId && isTourActive) {
          if (tourId === selectedTourId) {
            selectedStepMatched = true;
          }

          return (
            <OnboardingTourFocusReveal
              {...mergedFocusRevealProps}
              withOverlay={false}
              popoverProps={{
                ...mergedFocusRevealProps.popoverProps,
                withinPortal: true,
              }}
              popoverDropdownProps={{
                ...mergedFocusRevealProps.popoverDropdownProps,
                ...popoverDropdownProps,
              }}
              classNames={resolvedClassNames}
              key={`onboarding-tour-${tourId}`}
              popoverContent={
                <OnboardingTour.PopoverContent
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  unstyled={unstyled}
                  {...(others as unknown as OnboardingTourPopoverContentBaseProps)}
                  tourController={onboardingTour}
                  key={`onboarding-tour-content-${tourId}`}
                />
              }
              focused={tourId === selectedTourId}
              transitionProps={{ duration: 0, exitDuration: 0 }}
            >
              {React.cloneElement(child)}
            </OnboardingTourFocusReveal>
          );
        }
        // If the element has children, we apply the function recursively. A function child is a
        // render prop, not a node: `React.Children.map` would drop it.
        if (childProps.children && typeof childProps.children !== 'function') {
          return React.cloneElement(child as React.ReactElement<{ children?: React.ReactNode }>, {
            children: wrapChildren(childProps.children as React.ReactNode),
          });
        }
      }
      // If it is not a valid element or does not meet the condition, we return it unchanged.
      return child;
    });

  // Resolve cutout padding/radius: per-step overrides > tour-level props > defaults
  // Clamp to >= 0 and guard against non-finite values (public props)
  const rawCutoutPadding =
    onboardingTour.currentStep?.cutoutPadding ?? _cutoutPadding ?? DEFAULT_CUTOUT_PADDING;
  const rawCutoutRadius =
    onboardingTour.currentStep?.cutoutRadius ?? _cutoutRadius ?? DEFAULT_CUTOUT_RADIUS;
  const resolvedCutoutPadding = Number.isFinite(rawCutoutPadding)
    ? Math.max(0, rawCutoutPadding)
    : DEFAULT_CUTOUT_PADDING;
  const resolvedCutoutRadius = Number.isFinite(rawCutoutRadius)
    ? Math.max(0, rawCutoutRadius)
    : DEFAULT_CUTOUT_RADIUS;

  // Use CSS clip-path: path(evenodd, "...") directly — no inline SVG needed
  const cssClipPath = cutoutState
    ? `path(evenodd, "${buildCutoutPath(
        cutoutState.vw,
        cutoutState.vh,
        cutoutState.rect,
        resolvedCutoutPadding,
        resolvedCutoutRadius
      )}")`
    : undefined;

  const wrappedChildren = wrapChildren(children);

  const isCenteredStep =
    isTourActive && !!selectedTourId && !selectedStepMatched && !targetIds.includes(selectedTourId);
  const centeredPopoverProps = mergedFocusRevealProps.popoverProps;

  return (
    <Box>
      {isTourActive && (
        <Box
          data-onboarding-tour-overlay
          className={classes.tourOverlay}
          onClick={closeOnOverlayClick ? onboardingTour.skipTour : undefined}
          style={{
            backgroundColor: rgba(overlayColor, overlayOpacity),
            ...(Number(overlayBlur) > 0 && {
              backdropFilter: `blur(${overlayBlur}px)`,
              WebkitBackdropFilter: `blur(${overlayBlur}px)`,
            }),
            ...(cssClipPath && {
              clipPath: cssClipPath,
              WebkitClipPath: cssClipPath,
            }),
            zIndex: overlayZIndex,
          }}
        />
      )}
      <_OnboardingTourProvider value={value}>
        {wrappedChildren}

        <Transition mounted={isCenteredStep} transition="pop" duration={150} exitDuration={0}>
          {(transitionStyles) => (
            <Portal>
              <Paper
                data-onboarding-tour-centered
                role="dialog"
                tabIndex={-1}
                {...popoverDropdownProps}
                withBorder
                shadow={(centeredPopoverProps?.shadow as string | undefined) ?? 'xl'}
                radius={centeredPopoverProps?.radius ?? 'md'}
                px="md"
                py="sm"
                {...getStyles('centered', {
                  style: {
                    ...transitionStyles,
                    zIndex: centeredPopoverProps?.zIndex ?? POPOVER_Z_INDEX,
                  },
                })}
              >
                <OnboardingTour.PopoverContent
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  unstyled={unstyled}
                  {...popoverContentProps}
                  tourController={onboardingTour}
                  key={`onboarding-tour-centered-${selectedTourId}`}
                />
              </Paper>
            </Portal>
          )}
        </Transition>
      </_OnboardingTourProvider>
    </Box>
  );
});

OnboardingTour.displayName = 'OnboardingTour';
OnboardingTour.classes = classes;

OnboardingTour.FocusReveal = OnboardingTourFocusReveal;
OnboardingTour.PopoverContent = OnboardingTourPopoverContent;
OnboardingTour.Target = OnboardingTourTarget;
