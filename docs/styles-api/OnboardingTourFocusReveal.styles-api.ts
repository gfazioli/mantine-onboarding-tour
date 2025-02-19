import {
  getAllOnboardingTourFocusRevealModes,
  type OnboardingTourFocusRevealFactory,
} from '@gfazioli/mantine-onboarding-tour';
import type { StylesApiData } from '../components/styles-api.types';

export const OnboardingTourFocusRevealStylesApi: StylesApiData<OnboardingTourFocusRevealFactory> = {
  selectors: {
    focused: 'Styles applied when component is focused',
    overlay: 'Styles applied to overlay element',
  },
  vars: {
    // popoverContent: {
    //   '--onboarding-tour-popover-content-stepper-icon-size': 'The size',
    // },
  },
  modifiers: [
    {
      modifier: 'data-onboarding-tour-focus-reveal-focused',
      selector: 'focused',
      value: 'true | false',
    },
    {
      modifier: 'data-onboarding-tour-focus-reveal-mode',
      selector: 'focused',
      value: getAllOnboardingTourFocusRevealModes(),
    },
  ],
};
