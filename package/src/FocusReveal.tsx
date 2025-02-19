import React, { cloneElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  factory,
  Overlay,
  OverlayProps,
  Popover,
  PopoverProps,
  StylesApiProps,
  Transition,
  TransitionOverride,
  useHovered,
  useProps,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useInViewport, useMergedRef, useUncontrolled } from '@mantine/hooks';
import { FocusRevealFocusedMode } from './focus-reveal-modes';
import { useFocusRevealGroupContext } from './FocusRevealGroup.context';
import { FocusRevealGroup } from './FocusRevealGroup/FocusRevealGroup';
import { FocusRevealPopoverContent } from './FocusRevealPopoverContent/FocusRevealPopoverContent';
import { useScrollIntoView } from './hooks/use-scroll-into-view/use-scroll-into-view';
import classes from './FocusReveal.module.css';

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

export type FocusRevealStylesNames = 'focused' | 'overlay';

export interface FocusRevealDataAttributes {
  'data-focus-reveal-focused'?: boolean;
  'data-focus-reveal-mode'?: FocusRevealFocusedMode;
}

export interface FocusRevealChildProps extends FocusRevealDataAttributes {
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
}

export type FocusRevealCssVariables = {};

export interface FocusRevealBaseProps {
  /** Controlled FocusReveal focused state */
  focused?: boolean;

  /** Uncontrolled FocusReveal initial focused state */
  defaultFocused?: boolean;

  /** FocusReveal mode/effects when focused */
  focusedMode?: FocusRevealFocusedMode;

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

  /** Props passed down to the `Popover` component */
  popoverProps?: Omit<PopoverProps, 'withinPortal'>;

  /** Called when FocusReveal focused state changes */
  onChange?: (focused: boolean) => void;

  /** Called when FocusReveal is focused */
  onFocus?: () => void;

  /** Called when FocusReveal is blurred */
  onBlur?: () => void;

  /** Callback fired after scroll */
  onRevealFinish?: () => void;

  /** Content */
  children?: React.ReactNode;
}

export interface FocusRevealProps
  extends BoxProps,
    FocusRevealBaseProps,
    StylesApiProps<FocusRevealFactory> {}

export type FocusRevealFactory = Factory<{
  props: FocusRevealProps;
  ref: HTMLDivElement;
  stylesNames: FocusRevealStylesNames;
  vars: FocusRevealCssVariables;
  staticComponents: {
    Group: typeof FocusRevealGroup;
    PopoverContent: typeof FocusRevealPopoverContent;
  };
}>;

export const defaultProps: Partial<FocusRevealProps> = {
  withOverlay: true,
  withReveal: true,
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

const varsResolver = createVarsResolver<FocusRevealFactory>((theme, {}) => {
  return {};
});

export const FocusReveal = factory<FocusRevealFactory>((_props, ref) => {
  const ctx = useFocusRevealGroupContext();

  const props = useProps(
    'FocusReveal',
    {
      ...defaultProps,
      withReveal: ctx && ctx.withReveal !== undefined ? ctx.withReveal : defaultProps.withOverlay,
      defaultFocused:
        ctx && defaultProps.defaultFocused === undefined ? true : defaultProps.defaultFocused,
      withOverlay:
        ctx && defaultProps.withOverlay === undefined ? ctx.withOverlay : defaultProps.withOverlay,
      overlayProps:
        ctx && defaultProps.overlayProps === undefined
          ? ctx.overlayProps
          : defaultProps.overlayProps,
      transitionProps:
        ctx && defaultProps.transitionProps === undefined
          ? ctx.transitionProps
          : defaultProps.transitionProps,
      focusedMode:
        ctx && defaultProps.focusedMode === undefined ? ctx.focusedMode : defaultProps.focusedMode,
    },
    _props
  );

  const {
    focused,
    defaultFocused,
    withOverlay,
    overlayProps,
    withReveal,
    revealProps,
    transitionProps,
    focusedMode,
    popoverContent,
    popoverProps,

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

    ...others
  } = props;

  const getStyles = useStyles<FocusRevealFactory>({
    name: 'FocusReveal',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const uuid = useId();

  const [hovered, { setHovered, resetHovered }] = useHovered();

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

  const toggleFocusReveal = () => {
    _focused ? blur() : focus();
  };

  useDidUpdate(() => {
    resetHovered();
  }, [_focused]);

  const [realFocused, setRealFocused] = useState(false);

  const fallbackRef = useRef<HTMLDivElement>(null);

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement, HTMLDivElement>({
    ...revealProps,
    onScrollFinish: onRevealFinish,
    scrollableRef: scrollableRef || fallbackRef,
  });

  const { ref: inViewportRef, inViewport } = useInViewport();

  const mergedRef = useMergedRef(inViewportRef, targetRef);

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
    const child = children as React.ReactElement<FocusRevealChildProps>;
    const newProps: FocusRevealChildProps = {
      ...(realFocused && { 'data-focus-reveal-focused': true }),
      'data-focus-reveal-mode': focusedMode,
      ref: mergedRef,
      className: [realFocused ? classes.focused : '', className, child.props.className]
        .filter(Boolean)
        .join(' '),
      style: {
        position: 'relative',
        ...child.props.style,
        zIndex: realFocused ? 201 : 0,
      },
    };

    newProps['data-popover-dropdown'] = !!popoverContent;

    return (
      <Popover opened={realFocused && !!popoverContent} withinPortal={false} {...popoverProps}>
        <Popover.Target>{cloneElement(child, newProps)}</Popover.Target>
        <Popover.Dropdown>{popoverContent}</Popover.Dropdown>
      </Popover>
    );
  }, [children, realFocused, _focused, inViewport, defaultFocused]);

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
              data-focus-reveal-overlay
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
});

FocusReveal.classes = classes;
FocusReveal.displayName = 'FocusReveal';
FocusReveal.Group = FocusRevealGroup;
FocusReveal.PopoverContent = FocusRevealPopoverContent;
