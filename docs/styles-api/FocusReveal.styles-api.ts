import { getAllFocusRevealModes, type FocusRevealFactory } from '@gfazioli/mantine-focus-reveal';
import type { StylesApiData } from '../components/styles-api.types';

export const FocusRevealStylesApi: StylesApiData<FocusRevealFactory> = {
  selectors: {
    focused: 'Styles applied when component is focused',
    overlay: 'Styles applied to overlay element',
  },
  vars: {
    //focused: {},
  },
  modifiers: [
    { modifier: 'data-focus-reveal-focused', selector: 'focused', value: 'true | false' },
    { modifier: 'data-focus-reveal-mode', selector: 'focused', value: getAllFocusRevealModes() },
  ],
};
