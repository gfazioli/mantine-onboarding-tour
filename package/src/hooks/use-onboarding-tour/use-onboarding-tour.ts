import { useState } from 'react';

export type OnboardingTourStep = {
  /** Unique id of the tour. Will be use for the data-onboarding-tour-id attribute */
  id: string;

  /** Header of the tour. You can also pass a React component here */
  header?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Title of the tour. You can also pass a React component here */
  title?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Custom Content of the tour. You can also pass a React component here */
  content?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Footer of the tour. You can also pass a React component here */
  footer?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Anything else */
  [key: string]: any;
};

/** Options for useOnboardingTour() hook */
export type OnboardingTourOptions = {
  /** Loop the tour */
  loop?: boolean;

  /** Triggered when the tour starts   */
  onOnboardingTourStart?: () => void;

  /** Triggered when the tour ends */
  onOnboardingTourEnd?: () => void;

  /** Triggered when the tour changes */
  onOnboardingTourChange?: (tourStep: OnboardingTourStep) => void;
};

export type OnboardingTourController = Readonly<{
  /** List of tour steps */
  tour: OnboardingTourStep[];

  /** Current step */
  currentStep: OnboardingTourStep | undefined;

  /** Current step index of the tour. Zero-based index */
  currentStepIndex: number | undefined;

  /** ID of the selected tour */
  selectedStepId: string | undefined;

  /** Set the current index */
  setCurrentStepIndex: (index: number) => void;

  /** Start the tour */
  startTour: () => void;

  /** End the tour */
  endTour: () => void;

  /** Go to the next tour */
  nextStep: () => void;

  /** Go to the previous tour */
  prevStep: () => void;

  /** Options of the tour */
  options: OnboardingTourOptions;
}>;

/**
 * This hook is used to manage onboarding tours
 * You can use this hook to start, go to the next or previous tour
 *
 * @param tour The list of tours
 * @param options The options of the tour
 * @returns
 */
export function useOnboardingTour(tour: OnboardingTourStep[], options?: OnboardingTourOptions) {
  const defaultOptions = {
    loop: false,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const [currentStepIndex, setCurrentStepIndex] = useState<number>();

  const { loop, onOnboardingTourStart, onOnboardingTourEnd, onOnboardingTourChange } =
    mergedOptions || {};

  /** Start the tour */
  const startTour = () => {
    setCurrentStepIndex(0);
    onOnboardingTourStart?.();
    onOnboardingTourChange?.(tour[0]);
  };

  /** Go to the next tour */
  const nextStep = () => {
    if (currentStepIndex < tour.length - 1) {
      setCurrentStepIndex((currentStep) => currentStep + 1);
      onOnboardingTourChange?.(tour[currentStepIndex + 1]);
    } else if (loop) {
      setCurrentStepIndex(0);
    } else {
      setCurrentStepIndex(undefined);
      onOnboardingTourEnd?.();
    }
  };

  /** Go to the previous tour */
  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((currentStep) => currentStep - 1);
      onOnboardingTourChange?.(tour[currentStepIndex - 1]);
    } else if (loop) {
      setCurrentStepIndex(tour.length - 1);
    } else {
      setCurrentStepIndex(undefined);
      onOnboardingTourEnd?.();
    }
  };

  /** End the tour */
  const endTour = () => {
    setCurrentStepIndex(undefined);
    onOnboardingTourEnd?.();
  };

  return {
    tour,
    currentStep: tour[currentStepIndex],
    currentStepIndex,
    selectedStepId: tour[currentStepIndex]?.id,
    setCurrentStepIndex,
    startTour,
    endTour,
    nextStep,
    prevStep,
    options: mergedOptions,
  } as const;
}
