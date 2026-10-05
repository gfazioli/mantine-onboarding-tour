import { type OnboardingTourFactory } from '@gfazioli/mantine-onboarding-tour';
import type { StylesApiData } from '../components/styles-api.types';

export const OnboardingTourStylesApi: StylesApiData<OnboardingTourFactory> = {
  selectors: {
    popoverContent: 'The styles applied to the popover content',
    stepCounter: 'The step counter, shown with `withStepCounter`',
    centered: 'The dialog of a step whose id matches no element, shown in the middle of the screen',
  },
  vars: {},
  // modifiers: [],
};
