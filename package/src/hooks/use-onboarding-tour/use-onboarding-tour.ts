import { useEffect, useState } from 'react';

export type OnboardingTour = {
  /** Unique id of the tour */
  id: string;

  /** Title of the tour. You can also pass a React component here */
  title?: string | React.ReactNode;

  /** Description of the tour. You can also pass a React component here */
  description?: string | React.ReactNode;

  /** Content of the tour. You can also pass a React component here */
  content?: React.ReactNode;
};

/** Options for useOnboardingTour() hook */
export type OnboardingTourOptions = {
  /** Automatically start the tour */
  autoStart?: boolean;

  /** Loop the tour */
  loop?: boolean;

  /** Show the previous button */
  withPrevButton?: boolean;

  /** Show the next button */
  withNextButton?: boolean;

  /** Show the close button */
  withCloseButton?: boolean;

  /** Show the progress bar */
  withProgress?: boolean;

  /** Show the counter */
  withCounter?: boolean;

  /** Triggered when the tour starts   */
  onTourStart?: () => void;

  /** Triggered when the tour ends */
  onTourEnd?: () => void;

  /** Triggered when the tour is closed */
  onTourClose?: () => void;

  /** Triggered when the tour changes */
  onTourChange?: (tour: OnboardingTour) => void;
};

export type UseOnboardingTourReturn = Readonly<{
  /** List of tours */
  tour: OnboardingTour[];

  /** Current tour */
  currentTour: OnboardingTour | undefined;

  /** Current index of the tour. Zero-based index */
  currentIndex: number | undefined;

  /** ID of the selected tour */
  selectedTourId: string | undefined;

  /** Set the current index */
  setCurrentIndex: (index: number) => void;

  /** Start the tour */
  startTour: () => void;

  /** End the tour */
  endTour: () => void;

  /** Go to the next tour */
  nextTour: () => void;

  /** Go to the previous tour */
  prevTour: () => void;

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
export function useOnboardingTour(tour: OnboardingTour[], options?: OnboardingTourOptions) {
  const defaultOptions = {
    autoStart: false,
    loop: false,
    withPrevButton: true,
    withNextButton: true,
    withCloseButton: true,
    withProgress: true,
    withCounter: true,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const [currentIndex, setCurrentIndex] = useState<number>();

  const {
    autoStart,
    loop,
    withPrevButton,
    withNextButton,
    withCloseButton,
    withProgress,
    withCounter,
    onTourStart,
    onTourEnd,
    onTourClose,
    onTourChange,
  } = mergedOptions || {};

  useEffect(() => {
    if (currentIndex === undefined && autoStart) {
      startTour();
    }
  }, []);

  const startTour = () => {
    setCurrentIndex(0);
    onTourStart && onTourStart();
  };

  const nextTour = () => {
    if (currentIndex < tour.length - 1) {
      setCurrentIndex(currentIndex + 1);
      onTourChange && onTourChange(tour[currentIndex + 1]);
    } else if (loop) {
      setCurrentIndex(0);
      onTourEnd && onTourEnd();
    } else {
      setCurrentIndex(undefined);
      onTourEnd && onTourEnd();
    }
  };

  const prevTour = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onTourChange && onTourChange(tour[currentIndex - 1]);
    } else if (loop) {
      setCurrentIndex(tour.length - 1);
      onTourEnd && onTourEnd();
    } else {
      setCurrentIndex(undefined);
      onTourEnd && onTourEnd();
    }
  };

  const endTour = () => {
    setCurrentIndex(undefined);
    onTourEnd && onTourEnd();
  };

  return {
    tour,
    currentTour: tour[currentIndex],
    currentIndex,
    selectedTourId: tour[currentIndex]?.id,
    setCurrentIndex,
    startTour,
    endTour,
    nextTour,
    prevTour,
    options: mergedOptions,
  } as const;
}
