import {
  createOptionalContext,
  ElementProps,
  OverlayProps,
  TransitionOverride,
} from '@mantine/core';
import { FocusRevealFocusedMode } from './focus-reveal-modes';

interface FocusRevealGroupContextValue {
  /** Asking for */
  setRequestOverlay?: (value: boolean) => void;
  setMeInViewport?: (uuid: string, visible: boolean) => void;

  /** FocusReveal mode/effects when focused */
  focusedMode?: FocusRevealFocusedMode;

  /** Indicator if element should be revealed */
  withReveal?: boolean;

  /** Will render overlay if set to `true` */
  withOverlay?: boolean;

  /** Props passed down to `Overlay` component */
  overlayProps?: OverlayProps & ElementProps<'div'>;

  /** Props passed down to the `Transition` component that used to animate the Overlay, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;
}

export const [FocusRevealGroupProvider, useFocusRevealGroupContext] =
  createOptionalContext<FocusRevealGroupContextValue>();
