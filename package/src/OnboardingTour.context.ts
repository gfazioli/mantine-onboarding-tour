import { createContext, useContext } from 'react';
import type { OnboardingTourController } from './hooks/use-onboarding-tour/use-onboarding-tour';
import type { OnboardingTourFocusRevealProps } from './OnboardingTourFocusReveal/OnboardingTourFocusReveal';
import type { OnboardingTourPopoverContentBaseProps } from './OnboardingTourPopoverContent';

interface OnboardingTourContextValue
  extends OnboardingTourController, Omit<OnboardingTourPopoverContentBaseProps, 'tourController'> {
  /** Props passed to FocusReveal */
  focusRevealProps?:
    | OnboardingTourFocusRevealProps
    | ((tourController: OnboardingTourController) => OnboardingTourFocusRevealProps);

  /** Id of the step title, referenced by the step popover's `aria-labelledby` */
  popoverTitleId?: string;

  /** Id of the step content, referenced by the step popover's `aria-describedby` */
  popoverContentId?: string;

  /** Accessibility attributes the tour sets on every step popover (`aria-labelledby`, `aria-describedby`) */
  popoverDropdownProps?: Record<string, string>;

  /** Registers an `OnboardingTour.Target` id, returns the function that unregisters it */
  registerTarget?: (id: string) => () => void;
}

const OnboardingTourContext = createContext<OnboardingTourContextValue | null>(null);

export const _OnboardingTourProvider = OnboardingTourContext.Provider;

export function useOnboardingTourContext(): OnboardingTourContextValue | null {
  return useContext(OnboardingTourContext);
}
