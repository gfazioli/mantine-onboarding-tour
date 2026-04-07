import { createContext, useContext } from 'react';
import { type OnboardingTourController } from './hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTourFocusRevealProps } from './OnboardingTourFocusReveal/OnboardingTourFocusReveal';
import { OnboardingTourPopoverContentBaseProps } from './OnboardingTourPopoverContent';

interface OnboardingTourContextValue
  extends OnboardingTourController, Omit<OnboardingTourPopoverContentBaseProps, 'tourController'> {
  /** Props passed to FocusReveal */
  focusRevealProps?:
    | OnboardingTourFocusRevealProps
    | ((tourController: OnboardingTourController) => OnboardingTourFocusRevealProps);
}

const OnboardingTourContext = createContext<OnboardingTourContextValue | null>(null);

export const _OnboardingTourProvider = OnboardingTourContext.Provider;

export function useOnboardingTourContext(): OnboardingTourContextValue | null {
  return useContext(OnboardingTourContext);
}
