import React, { useRef, useState } from 'react';
import {
  ElementProps,
  factory,
  Factory,
  Overlay,
  OverlayProps,
  Transition,
  TransitionOverride,
} from '@mantine/core';
import { FocusRevealFocusedMode } from '../focus-reveal-modes';
import { FocusRevealGroupProvider } from '../FocusRevealGroup.context';

export interface FocusRevealGroupProps {
  /** FocusReveal mode/effects when focused */
  focusedMode?: FocusRevealFocusedMode;

  /** Indicator if element should be revealed. Default `false` */
  withReveal?: boolean;

  /** Will render overlay if set to `true` */
  withOverlay?: boolean;

  /** Props passed down to `Overlay` component */
  overlayProps?: OverlayProps & ElementProps<'div'>;

  /** Props passed down to the `Transition` component that used to animate the Overlay, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;

  /** Content */
  children?: React.ReactNode;
}

export type FocusRevealGroupStylesNames = 'focus-reveal-group';

export type FocusRevealGroupFactory = Factory<{
  props: FocusRevealGroupProps;
  ref: HTMLDivElement;
  stylesNames: FocusRevealGroupStylesNames;
}>;

const defaultProps: Partial<FocusRevealGroupProps> = {
  withOverlay: true,
  withReveal: true,
  overlayProps: {
    blur: 2,
    backgroundOpacity: 0.5,
    color: 'black',
  },
  transitionProps: { transition: 'fade', duration: 150 },
};

export const FocusRevealGroup = factory<FocusRevealGroupFactory>((props, ref) => {
  const {
    focusedMode = defaultProps.focusedMode,
    withReveal = false,
    withOverlay = true,
    overlayProps = defaultProps.overlayProps,
    transitionProps = defaultProps.transitionProps,
    children,
  } = props;

  const [overlay, setOverlay] = useState(false);

  const listInViewport = useRef({});

  // Check if all children are not in viewport
  const areAllNotVisible = () => Object.values(listInViewport.current).every((visible) => !visible);

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
    <FocusRevealGroupProvider
      value={{
        setRequestOverlay,
        setMeInViewport,
        focusedMode,
        withReveal,
        withOverlay,
        overlayProps,
        transitionProps,
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
    </FocusRevealGroupProvider>
  );
});

FocusRevealGroup.displayName = 'FocusRevealGroup';
