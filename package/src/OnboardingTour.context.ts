import { createOptionalContext } from '@mantine/core';
import { type OnboardingTourController } from './hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTourFocusRevealProps } from './OnboardingTourFocusReveal/OnboardingTourFocusReveal';
import { OnboardingTourPopoverContentBaseProps } from './OnboardingTourPopoverContent';

interface OnboardingTourContextValue
  extends OnboardingTourController,
    Omit<OnboardingTourPopoverContentBaseProps, 'tourController'> {
  /** Props passed to FocusReveal */
  focusRevealProps?:
    | OnboardingTourFocusRevealProps
    | ((tourController: OnboardingTourController) => OnboardingTourFocusRevealProps);

  /** Triggered when the Close Button is clicked */
  onOnboardingTourClose?: () => void;
}

export const [_OnboardingTourProvider, useOnboardingTourContext] =
  createOptionalContext<OnboardingTourContextValue>();
