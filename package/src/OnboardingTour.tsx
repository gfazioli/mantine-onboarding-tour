import React, { useEffect } from 'react';
import {
  Box,
  BoxProps,
  Factory,
  factory,
  rgba,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
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

export type OnboardingTourStylesNames = OnboardingTourPopoverContentStylesNames;

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

export const defaultProps: Partial<OnboardingTourProps> = {};

export const OnboardingTour = factory<OnboardingTourFactory>((_props, ref) => {
  const props = useProps('OnboardingTour', defaultProps, _props);

  const {
    tour,
    started,
    loop,
    focusRevealProps: _focusRevealProps,
    cutoutPadding: _cutoutPadding,
    cutoutRadius: _cutoutRadius,
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

  const value = {
    ...onboardingTour,
    ...others,
    focusRevealProps,
    getStyles,
    unstyled,
  };

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<OnboardingTourFactory>({
    classNames,
    styles,
    props,
  });

  const { selectedStepId: selectedTourId, startTour } = onboardingTour;

  useEffect(() => {
    if (started) {
      startTour();
    }
    // startTour is excluded: it changes on every render and would cause infinite loops.
    // The component remounts via key changes when tour steps change.
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

  const wrapChildren = (children: React.ReactNode): React.ReactNode => {
    if (!started || !selectedTourId) {
      return children;
    }

    return React.Children.map(children, (child: React.ReactElement<any>) => {
      // Let's verify that the child is a valid React element.
      if (React.isValidElement(child)) {
        // If the element has the data-onboarding-tour attribute set to true
        const tourId = child.props['data-onboarding-tour-id'];
        if (tourId) {
          const mergedFocusRevealProps = {
            ...focusRevealProps,
            ...(typeof onboardingTour.currentStep?.focusRevealProps === 'function'
              ? onboardingTour.currentStep.focusRevealProps(onboardingTour)
              : onboardingTour.currentStep?.focusRevealProps),
          };

          return (
            <OnboardingTourFocusReveal
              {...mergedFocusRevealProps}
              withOverlay={false}
              popoverProps={{
                ...mergedFocusRevealProps.popoverProps,
                withinPortal: true,
              }}
              classNames={resolvedClassNames}
              key={`onboarding-tour-${tourId}`}
              popoverContent={
                <OnboardingTour.PopoverContent
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  unstyled={unstyled}
                  tourController={onboardingTour}
                  {...(others as unknown as OnboardingTourPopoverContentBaseProps)}
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
        // If the element has children, we apply the function recursively.
        if ((child as React.ReactElement<any>).props.children) {
          return React.cloneElement(child as React.ReactElement<{ children?: React.ReactNode }>, {
            children: wrapChildren((child.props as { children?: React.ReactNode }).children),
          });
        }
      }
      // If it is not a valid element or does not meet the condition, we return it unchanged.
      return child;
    });
  };

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

  return (
    <Box ref={ref}>
      {isTourActive && (
        <Box
          data-onboarding-tour-overlay
          className={classes.tourOverlay}
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
      <_OnboardingTourProvider value={value}>{wrapChildren(children)}</_OnboardingTourProvider>
    </Box>
  );
});

OnboardingTour.displayName = 'OnboardingTour';
OnboardingTour.classes = classes;

OnboardingTour.FocusReveal = OnboardingTourFocusReveal;
OnboardingTour.PopoverContent = OnboardingTourPopoverContent;
OnboardingTour.Target = OnboardingTourTarget;
