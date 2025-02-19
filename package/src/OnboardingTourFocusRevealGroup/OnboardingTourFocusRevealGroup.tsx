import React, { useRef, useState } from 'react';
import {
  ElementProps,
  factory,
  Factory,
  Overlay,
  OverlayProps,
  PopoverProps,
  Transition,
  TransitionOverride,
  useProps,
} from '@mantine/core';
import { OnboardingTourFocusRevealFocusedMode } from '../OnboardingTourFocusReveal/focus-reveal-modes';
import { OnboardingTourFocusRevealGroupProvider } from './OnboardingTourFocusRevealGroup.context';

export interface OnboardingTourFocusRevealGroupProps {
  /** OnboardingTourFocusReveal mode/effects when focused */
  focusedMode?: OnboardingTourFocusRevealFocusedMode;

  /** Indicator if element should be revealed. Default `false` */
  withReveal?: boolean;

  /** Will render overlay if set to `true` */
  withOverlay?: boolean;

  /** Props passed down to `Overlay` component */
  overlayProps?: OverlayProps & ElementProps<'div'>;

  /** Props passed down to the `Transition` component that used to animate the Overlay, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;

  /** Props passed down to the `Popover` component */
  popoverProps?: Omit<PopoverProps, 'withinPortal'>;

  /** Content */
  children?: React.ReactNode;
}

export type OnboardingTourFocusRevealGroupStylesNames = 'onboarding-tour-focus-reveal-group';

export type OnboardingTourFocusRevealGroupFactory = Factory<{
  props: OnboardingTourFocusRevealGroupProps;
  ref: HTMLDivElement;
  stylesNames: OnboardingTourFocusRevealGroupStylesNames;
}>;

export const OnboardingTourFocusRevealGroup = factory<OnboardingTourFocusRevealGroupFactory>(
  (_props, ref) => {
    const groupDefaultProps: Partial<OnboardingTourFocusRevealGroupProps> = {
      focusedMode: 'none',
      withReveal: false,
      withOverlay: true,
      overlayProps: {
        blur: 2,
        backgroundOpacity: 0.5,
        color: 'black',
      },
      transitionProps: { transition: 'fade', duration: 150 },
      popoverProps: {
        position: 'left',
        withArrow: true,
        arrowSize: 16,
        arrowRadius: 4,
        offset: -4,
        radius: 'md',
        shadow: 'xl',
      },
    };

    const props = useProps('OnboardingTourFocusRevealGroup', groupDefaultProps, _props);

    // exception
    props.overlayProps = { ...groupDefaultProps.overlayProps, ..._props.overlayProps };
    props.transitionProps = { ...groupDefaultProps.transitionProps, ..._props.transitionProps };
    props.popoverProps = { ...groupDefaultProps.popoverProps, ..._props.popoverProps };

    const {
      withReveal,
      withOverlay,
      focusedMode,
      overlayProps,
      transitionProps,
      popoverProps,
      children,
    } = props;

    const [overlay, setOverlay] = useState(false);

    const listInViewport = useRef({});

    // Check if all children are not in viewport
    const areAllNotVisible = () =>
      Object.values(listInViewport.current).every((visible) => !visible);

    const setMeInViewport = (uuid: string, visible: boolean) => {
      listInViewport.current[uuid] = visible;
    };

    const setRequestOverlay = (value: boolean) => {
      if (value) {
        setOverlay(true);
      } else if (areAllNotVisible()) {
        setOverlay(false);
      }
    };

    return (
      <OnboardingTourFocusRevealGroupProvider
        value={{
          setRequestOverlay,
          setMeInViewport,
          focusedMode,
          withReveal,
          withOverlay,
          overlayProps,
          transitionProps,
          popoverProps,
        }}
      >
        {withOverlay && (
          <Transition
            transition={transitionProps?.transition}
            mounted={overlay}
            duration={transitionProps?.duration}
            exitDuration={transitionProps?.exitDuration}
          >
            {(transitionStyles) => (
              <Overlay
                data-focus-reveal-overlay
                {...overlayProps}
                style={{
                  position: 'fixed',
                  inset: 0,
                  ...transitionStyles,
                }}
              />
            )}
          </Transition>
        )}

        {children}
      </OnboardingTourFocusRevealGroupProvider>
    );
  }
);

OnboardingTourFocusRevealGroup.displayName = 'OnboardingTourFocusRevealGroup';
