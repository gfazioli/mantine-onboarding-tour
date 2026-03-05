import React, { cloneElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  BoxProps,
  ElementProps,
  Factory,
  MantineBreakpoint,
  Overlay,
  OverlayProps,
  Popover,
  PopoverProps,
  PopoverWidth,
  StylesApiProps,
  Transition,
  TransitionOverride,
  useMatches,
  useProps,
  useStyles,
} from '@mantine/core';
import { FloatingAxesOffsets, FloatingPosition } from '@mantine/core/lib/utils/Floating';
import { useDidUpdate, useInViewport, useMergedRef, useUncontrolled } from '@mantine/hooks';
import { useScrollIntoView } from '../hooks/use-scroll-into-view/use-scroll-into-view';
import { OnboardingTourFocusRevealGroup } from '../OnboardingTourFocusRevealGroup/OnboardingTourFocusRevealGroup';
import { useOnboardingTourFocusRevealGroupContext } from '../OnboardingTourFocusRevealGroup/OnboardingTourFocusRevealGroup.context';
import { OnboardingTourFocusRevealFocusedMode } from './focus-reveal-modes';
import classes from './OnboardingTourFocusReveal.module.css';

/** A value that can be either a scalar or a responsive object mapping breakpoints to values */
export type ResponsiveProp<T> = T | Partial<Record<MantineBreakpoint, T>>;

/** Check if a value is a responsive object (has breakpoint keys) */
function isResponsiveObject<T>(value: unknown): value is Partial<Record<MantineBreakpoint, T>> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }
  const keys = Object.keys(value);
  const breakpoints = ['base', 'xs', 'sm', 'md', 'lg', 'xl'];
  return keys.length > 0 && keys.every((k) => breakpoints.includes(k));
}

/** Resolve a ResponsiveProp using useMatches. Always called (hooks rules). */
function useResponsiveProp<T>(value: ResponsiveProp<T> | undefined, defaultValue: T): T {
  const matchesInput = isResponsiveObject<T>(value)
    ? (value as Partial<Record<MantineBreakpoint, T>>)
    : { base: (value as T) ?? defaultValue };
  return useMatches<T>(matchesInput);
}

/** PopoverProps with responsive-aware overrides for position, offset, width, and arrowSize */
export interface ResponsivePopoverProps extends Omit<
  PopoverProps,
  'position' | 'offset' | 'width' | 'arrowSize'
> {
  /** Popover position, supports responsive objects: `{ base: 'bottom', sm: 'left' }` */
  position?: ResponsiveProp<FloatingPosition>;
  /** Popover offset, supports responsive objects: `{ base: 8, sm: -4 }` */
  offset?: ResponsiveProp<number | FloatingAxesOffsets>;
  /** Popover width, supports responsive objects: `{ base: 'target', sm: 300 }` */
  width?: ResponsiveProp<PopoverWidth>;
  /** Arrow size, supports responsive objects: `{ base: 12, sm: 16 }` */
  arrowSize?: ResponsiveProp<number>;
}

export interface RevealProps {
  /** Duration of scroll in milliseconds */
  duration?: number;

  /** Axis of scroll */
  axis?: 'x' | 'y';

  /** Custom mathematical easing function */
  easing?: (t: number) => number;

  /** Additional distance between nearest edge and element */
  offset?: number;

  /** Indicator if animation may be interrupted by user scrolling */
  cancelable?: boolean;

  /** Prevents content jumping in scrolling lists with multiple targets */
  isList?: boolean;
}

export type OnboardingTourFocusRevealStylesNames = 'focused' | 'overlay';

export interface OnboardingTourFocusRevealDataAttributes {
  'data-onboarding-tour-focus-reveal-focused'?: boolean;
  'data-onboarding-tour-focus-reveal-mode'?: OnboardingTourFocusRevealFocusedMode;
}

export interface OnboardingTourFocusRevealChildProps extends OnboardingTourFocusRevealDataAttributes {
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
}

export type OnboardingTourFocusRevealCssVariables = {};

export interface OnboardingTourFocusRevealBaseProps {
  /** Controlled OnboardingTourFocusReveal focused state */
  focused?: boolean;

  /** Uncontrolled OnboardingTourFocusReveal initial focused state */
  defaultFocused?: boolean;

  /** OnboardingTourFocusReveal mode/effects when focused */
  focusedMode?: OnboardingTourFocusRevealFocusedMode;

  /** Indicator if element should be revealed */
  withReveal?: boolean;

  /** Props passed down to `useScrollIntoView()` hooks */
  revealProps?: RevealProps;

  /** Will render overlay if set to `true` */
  withOverlay?: boolean;

  /** Props passed down to `Overlay` component */
  overlayProps?: OverlayProps & ElementProps<'div'>;

  /** Props passed down to the `Transition` component that used to animate the Overlay, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;

  /** Ref to scrollable element */
  scrollableRef?: React.RefObject<HTMLDivElement>;

  /** Dropdown content for Popover */
  popoverContent?: React.ReactNode;

  /** Props passed down to the `Popover` component. Position, offset, width, and arrowSize accept responsive objects. */
  popoverProps?: ResponsivePopoverProps;

  /** Disable interactions on the target component */
  disableTargetInteraction?: boolean;

  /** Called when OnboardingTourFocusReveal focused state changes */
  onChange?: (focused: boolean) => void;

  /** z-index for the focused element (should be above the overlay). Defaults to 201. */
  focusedZIndex?: number;

  /** Called when OnboardingTourFocusReveal is focused */
  onFocus?: () => void;

  /** Called when OnboardingTourFocusReveal is blurred */
  onBlur?: () => void;

  /** Callback fired after scroll */
  onRevealFinish?: () => void;

  /** Content */
  children?: React.ReactNode;
}

export interface OnboardingTourFocusRevealProps
  extends
    BoxProps,
    OnboardingTourFocusRevealBaseProps,
    StylesApiProps<OnboardingTourFocusRevealFactory> {}

export type OnboardingTourFocusRevealFactory = Factory<{
  props: OnboardingTourFocusRevealProps;
  ref: HTMLDivElement;
  stylesNames: OnboardingTourFocusRevealStylesNames;
  vars: OnboardingTourFocusRevealCssVariables;
  staticComponents: {
    Group: typeof OnboardingTourFocusRevealGroup;
  };
}>;

export const defaultProps: Partial<OnboardingTourFocusRevealProps> = {
  focusedMode: 'none',
  withReveal: true,
  withOverlay: true,
  focusedZIndex: 201,
  overlayProps: {
    blur: 2,
    backgroundOpacity: 0.5,
    color: 'black',
  },
  transitionProps: { transition: 'fade', duration: 150 },
  popoverProps: {
    position: { base: 'bottom', sm: 'left' },
    withArrow: true,
    arrowSize: 16,
    arrowRadius: 4,
    offset: -4,
    radius: 'md',
    shadow: 'xl',
    middlewares: { shift: { padding: 20 }, flip: true },
  },
};

export function OnboardingTourFocusReveal(_props: OnboardingTourFocusRevealProps) {
  const ctx = useOnboardingTourFocusRevealGroupContext();

  const props = useProps(
    'OnboardingTourFocusReveal',
    {
      ...defaultProps,
      ...(ctx ? ctx : {}),
    },
    _props
  );

  // exception
  props.overlayProps = { ...defaultProps.overlayProps, ..._props.overlayProps };
  props.transitionProps = { ...defaultProps.transitionProps, ..._props.transitionProps };
  props.popoverProps = { ...defaultProps.popoverProps, ..._props.popoverProps };

  props.defaultFocused = ctx && _props.defaultFocused === undefined ? true : _props.defaultFocused;

  const {
    focused,
    defaultFocused,
    disableTargetInteraction,
    withOverlay,
    overlayProps,
    withReveal,
    revealProps,
    transitionProps,
    focusedMode,
    popoverContent,
    popoverProps,
    focusedZIndex,

    scrollableRef,
    onChange,
    onFocus,
    onBlur,
    onRevealFinish,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    children,
    className,
  } = props;

  const getStyles = useStyles<OnboardingTourFocusRevealFactory>({
    name: 'OnboardingTourFocusReveal',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const uuid = useId();

  const [_focused, setFocused, controlled] = useUncontrolled({
    value: focused,
    defaultValue: defaultFocused,
    finalValue: false,
    onChange,
  });

  const blur = () => {
    // if focused was undefined,
    // will be called the setUncontrolledValue and _focused will change
    // otherwise will be called the onChange
    setFocused(false);
    _focused && onBlur?.();
  };

  const focus = () => {
    setFocused(true);
    !_focused && onFocus?.();
  };

  const [realFocused, setRealFocused] = useState(false);

  const fallbackRef = useRef<HTMLDivElement>(null);

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement, HTMLDivElement>({
    ...revealProps,
    onScrollFinish: onRevealFinish,
    scrollableRef: scrollableRef || fallbackRef,
  });

  const { ref: inViewportRef, inViewport } = useInViewport();

  const mergedRef = useMergedRef(inViewportRef, targetRef);

  // Resolve responsive popover props via useMatches
  const resolvedPosition = useResponsiveProp<FloatingPosition>(popoverProps?.position, 'left');
  const resolvedOffset = useResponsiveProp<number | FloatingAxesOffsets>(popoverProps?.offset, -4);
  const resolvedWidth = useResponsiveProp<PopoverWidth>(popoverProps?.width, 'max-content');
  const resolvedArrowSize = useResponsiveProp<number>(popoverProps?.arrowSize, 16);

  useEffect(() => {
    ctx?.setMeInViewport(uuid, inViewport);

    if (targetRef.current) {
      if (_focused || defaultFocused) {
        if (withReveal) {
          scrollIntoView({ alignment: 'center' });
        }
      }

      if (_focused && inViewport && !realFocused) {
        setRealFocused(true);
        setFocused(_focused && inViewport);
      } else if (!_focused && realFocused) {
        setRealFocused(false);
      }
    }
  }, [_focused, withReveal, inViewport]);

  useDidUpdate(() => {
    ctx?.setMeInViewport(uuid, inViewport);

    if (_focused && !inViewport) {
      blur();
      setRealFocused(false);
      ctx?.setRequestOverlay(false);
    }

    if (inViewport && !controlled && defaultFocused === true) {
      focus();
      setRealFocused(true);
      ctx?.setRequestOverlay(true);
    }
  }, [inViewport, defaultFocused]);

  const clonedChildren = useMemo(() => {
    const child = children as React.ReactElement<OnboardingTourFocusRevealChildProps>;
    const newProps: OnboardingTourFocusRevealChildProps = {
      ...(realFocused && { 'data-onboarding-tour-focus-reveal-focused': true }),
      'data-onboarding-tour-focus-reveal-mode': focusedMode,
      ref: mergedRef,
      className: [realFocused ? classes.focused : '', className, child.props.className]
        .filter(Boolean)
        .join(' '),
      style: {
        position: 'relative',
        ...child.props.style,
        zIndex: realFocused ? (focusedZIndex ?? 201) : 0,
        pointerEvents: realFocused && disableTargetInteraction ? 'none' : undefined,
      },
    };

    newProps['data-popover-dropdown'] = !!popoverContent;

    // Build final popover props with resolved responsive values
    const {
      position: _pos,
      offset: _off,
      width: _w,
      arrowSize: _as,
      ...restPopoverProps
    } = popoverProps || {};
    const finalPopoverProps = {
      ...restPopoverProps,
      position: resolvedPosition,
      offset: resolvedOffset,
      width: resolvedWidth,
      arrowSize: resolvedArrowSize,
    };

    return (
      <Popover opened={realFocused && !!popoverContent} {...finalPopoverProps}>
        <Popover.Target>{cloneElement(child, newProps)}</Popover.Target>
        <Popover.Dropdown>{popoverContent}</Popover.Dropdown>
      </Popover>
    );
  }, [
    children,
    realFocused,
    _focused,
    inViewport,
    defaultFocused,
    resolvedPosition,
    resolvedOffset,
    resolvedWidth,
    resolvedArrowSize,
    focusedZIndex,
    popoverProps,
  ]);

  if (ctx) {
    return clonedChildren;
  }

  return (
    <>
      {withOverlay && (
        <Transition
          transition={transitionProps?.transition}
          mounted={_focused && inViewport}
          duration={transitionProps?.duration}
          exitDuration={transitionProps?.exitDuration}
        >
          {(transitionStyles) => (
            <Overlay
              data-onboarding-tour-focus-reveal-overlay
              {...overlayProps}
              {...getStyles('overlay', {
                className: overlayProps?.className,
                style: [transitionStyles, overlayProps?.style],
              })}
            />
          )}
        </Transition>
      )}
      {clonedChildren}
    </>
  );
}

OnboardingTourFocusReveal.classes = classes;
OnboardingTourFocusReveal.displayName = 'OnboardingTourFocusReveal';
OnboardingTourFocusReveal.Group = OnboardingTourFocusRevealGroup;
