import React, { useEffect } from 'react';
import { FocusReveal } from '../FocusReveal';
import {
  OnboardingTour,
  useOnboardingTour,
} from '../hooks/use-onboarding-tour/use-onboarding-tour';
import { _FocusRevealOnboardingTourProvider } from './FocusRevealOnboardingTour.context';

export type FocusRevealOnboardingTourProviderProps = {
  tour: OnboardingTour[];

  started: boolean;

  onTourEnd?: () => void;

  children: React.ReactNode;
};

export function FocusRevealOnboardingTourProvider(props: FocusRevealOnboardingTourProviderProps) {
  const { tour, started, onTourEnd, children } = props;

  const onboardingTour = useOnboardingTour(tour, {
    onTourEnd,
  });

  const value = {
    ...onboardingTour,
  };

  const { selectedTourId, startTour, options } = onboardingTour;

  const PopoverContentDefault = () => (
    <FocusReveal.PopoverContent maw={200} onboardingTour={onboardingTour} />
  );

  useEffect(() => {
    if (started) {
      startTour();
    }
  }, [started]);

  const wrapChildren = (children: React.ReactNode): React.ReactNode => {
    if (!started || !selectedTourId) {
      return children;
    }

    return React.Children.map(children, (child: React.ReactElement<any>) => {
      // Let's verify that the child is a valid React element.
      if (React.isValidElement(child)) {
        // If the element has the data-focus-reveal attribute set to true
        const tourId = child.props['data-focus-reveal-onboarding-tour-id'];
        if (tourId) {
          return (
            <FocusReveal
              popoverContent={<PopoverContentDefault />}
              focused={tourId === selectedTourId}
              transitionProps={{ duration: 0, exitDuration: 0 }}
            >
              {React.cloneElement(child)}
            </FocusReveal>
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

  return (
    <_FocusRevealOnboardingTourProvider value={value}>
      {wrapChildren(children)}
    </_FocusRevealOnboardingTourProvider>
  );
}
