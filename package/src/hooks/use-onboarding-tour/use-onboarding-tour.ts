import { useEffect, useState } from 'react';
import { OnboardingTourFocusRevealProps } from '../../OnboardingTourFocusReveal/OnboardingTourFocusReveal';

export type OnboardingTourStep<T extends Record<string, unknown> = Record<string, unknown>> = {
  /** Unique id of the tour. Will be use for the data-onboarding-tour-id attribute */
  id: string;

  /** Header of the tour. You can also pass a React component here */
  header?: React.ReactNode | ((tourController: OnboardingTourController<T>) => React.ReactNode);

  /** Title of the tour. You can also pass a React component here */
  title?: React.ReactNode | ((tourController: OnboardingTourController<T>) => React.ReactNode);

  /** Custom Content of the tour. You can also pass a React component here */
  content?: React.ReactNode | ((tourController: OnboardingTourController<T>) => React.ReactNode);

  /** Footer of the tour. You can also pass a React component here */
  footer?: React.ReactNode | ((tourController: OnboardingTourController<T>) => React.ReactNode);

  /** Props passed to FocusReveal */
  focusRevealProps?:
    | OnboardingTourFocusRevealProps
    | ((tourController: OnboardingTourController<T>) => OnboardingTourFocusRevealProps);
} & T;

/** Options for useOnboardingTour() hook */
export type OnboardingTourOptions<T extends Record<string, unknown> = Record<string, unknown>> = {
  /** Loop the tour */
  loop?: boolean;

  /** Triggered when the tour starts */
  onOnboardingTourStart?: () => void;

  /** Triggered when the tour ends (always called, whether completed or skipped) */
  onOnboardingTourEnd?: () => void;

  /** Triggered when the tour is completed (user finishes the last step) */
  onOnboardingTourComplete?: () => void;

  /** Triggered when the tour is skipped (user clicks Skip) */
  onOnboardingTourSkip?: () => void;

  /** Triggered when the active step changes */
  onOnboardingTourChange?: (tourStep: OnboardingTourStep<T>) => void;
};

export type OnboardingTourController<T extends Record<string, unknown> = Record<string, unknown>> =
  Readonly<{
    /** List of tour steps */
    tour: OnboardingTourStep<T>[];

    /** Current step */
    currentStep: OnboardingTourStep<T> | undefined;

    /** Current step index of the tour. Zero-based index */
    currentStepIndex: number | undefined;

    /** ID of the selected tour */
    selectedStepId: string | undefined;

    /** Set the current index */
    setCurrentStepIndex: (index: number) => void;

    /** Start the tour */
    startTour: () => void;

    /** End the tour programmatically */
    endTour: () => void;

    /** Skip the tour (user dismissed) */
    skipTour: () => void;

    /** Go to the next tour */
    nextStep: () => void;

    /** Go to the previous tour */
    prevStep: () => void;

    /** Options of the tour */
    options: OnboardingTourOptions<T>;
  }>;

/**
 * This hook is used to manage onboarding tours
 * You can use this hook to start, go to the next or previous tour
 *
 * @param tour The list of tours
 * @param options The options of the tour
 * @returns
 */
export function useOnboardingTour<T extends Record<string, unknown> = Record<string, unknown>>(
  tour: OnboardingTourStep<T>[],
  options?: OnboardingTourOptions<T>
) {
  const defaultOptions = {
    loop: false,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const [currentStepIndex, _setCurrentStepIndex] = useState<number>();
  // Pending step index for sequential transitions (close -> open).
  // When non-null, selectedStepId is undefined so all popovers close first.
  const [pendingStepIndex, setPendingStepIndex] = useState<number | null>(null);
  const isTransitioning = pendingStepIndex !== null;

  const {
    loop,
    onOnboardingTourStart,
    onOnboardingTourEnd,
    onOnboardingTourComplete,
    onOnboardingTourSkip,
    onOnboardingTourChange,
  } = mergedOptions || {};

  // Phase 2 of sequential transition: after the "no selection" render is committed
  // (all popovers closed), apply the pending step to open the new popover.
  useEffect(() => {
    if (pendingStepIndex !== null) {
      _setCurrentStepIndex(pendingStepIndex);
      onOnboardingTourChange?.(tour[pendingStepIndex]);
      setPendingStepIndex(null);
    }
  }, [pendingStepIndex]);

  /** Transition to a new step: first close current, then open next */
  const transitionToStep = (index: number) => {
    // Phase 1: set pending index — selectedStepId becomes undefined,
    // causing all FocusReveals to unfocus and close their popovers.
    setPendingStepIndex(index);
  };

  /** Start the tour */
  const startTour = () => {
    _setCurrentStepIndex(0);
    onOnboardingTourStart?.();
    onOnboardingTourChange?.(tour[0]);
  };

  /** Go to the next tour */
  const nextStep = () => {
    if (currentStepIndex === undefined) {
      return;
    }

    if (currentStepIndex < tour.length - 1) {
      transitionToStep(currentStepIndex + 1);
    } else if (loop) {
      transitionToStep(0);
    } else {
      _setCurrentStepIndex(undefined);
      onOnboardingTourComplete?.();
      onOnboardingTourEnd?.();
    }
  };

  /** Go to the previous tour */
  const prevStep = () => {
    if (currentStepIndex === undefined) {
      return;
    }

    if (currentStepIndex > 0) {
      transitionToStep(currentStepIndex - 1);
    } else if (loop) {
      transitionToStep(tour.length - 1);
    } else {
      _setCurrentStepIndex(undefined);
      onOnboardingTourEnd?.();
    }
  };

  /** End the tour programmatically */
  const endTour = () => {
    _setCurrentStepIndex(undefined);
    onOnboardingTourEnd?.();
  };

  /** Skip the tour (user dismissed via Skip button) */
  const skipTour = () => {
    _setCurrentStepIndex(undefined);
    onOnboardingTourSkip?.();
    onOnboardingTourEnd?.();
  };

  /** Set current step index (used by stepper clicks) */
  const setCurrentStepIndex = (index: number) => {
    if (currentStepIndex !== undefined) {
      transitionToStep(index);
    } else {
      _setCurrentStepIndex(index);
    }
  };

  return {
    tour,
    currentStep: tour[currentStepIndex],
    currentStepIndex,
    selectedStepId: isTransitioning ? undefined : tour[currentStepIndex]?.id,
    setCurrentStepIndex,
    startTour,
    endTour,
    skipTour,
    nextStep,
    prevStep,
    options: mergedOptions,
  } as const;
}
