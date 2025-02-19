import {
  createOptionalContext,
  ElementProps,
  OverlayProps,
  PopoverProps,
  TransitionOverride,
} from '@mantine/core';
import { OnboardingTourFocusRevealFocusedMode } from '../OnboardingTourFocusReveal/focus-reveal-modes';

interface OnboardingTourFocusRevealGroupContextValue {
  /** Asking for */
  setRequestOverlay?: (value: boolean) => void;
  setMeInViewport?: (uuid: string, visible: boolean) => void;

  /** FocusReveal mode/effects when focused */
  focusedMode?: OnboardingTourFocusRevealFocusedMode;

  /** Indicator if element should be revealed */
  withReveal?: boolean;

  /** Will render overlay if set to `true` */
  withOverlay?: boolean;

  /** Props passed down to `Overlay` component */
  overlayProps?: OverlayProps & ElementProps<'div'>;

  /** Props passed down to the `Transition` component that used to animate the Overlay, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;

  /** Props passed down to the `Popover` component */
  popoverProps?: Omit<PopoverProps, 'withinPortal'>;
}

export const [OnboardingTourFocusRevealGroupProvider, useOnboardingTourFocusRevealGroupContext] =
  createOptionalContext<OnboardingTourFocusRevealGroupContextValue>();
