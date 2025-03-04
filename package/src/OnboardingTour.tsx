import React, { useEffect } from 'react';
import {
  BoxProps,
  Factory,
  factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import {
  OnboardingTourController,
  useOnboardingTour,
  type OnboardingTourOptions,
  type OnboardingTourStep,
} from './hooks/use-onboarding-tour/use-onboarding-tour';
import { _OnboardingTourProvider } from './OnboardingTour.context';
import {
  OnboardingTourFocusReveal,
  OnboardingTourFocusRevealProps,
} from './OnboardingTourFocusReveal/OnboardingTourFocusReveal';
import {
  OnboardingTourPopoverContent,
  type OnboardingTourPopoverContentBaseProps,
} from './OnboardingTourPopoverContent';
import { OnboardingTourPopoverContentStylesNames } from './OnboardingTourPopoverContent/OnboardingTourPopoverContent';
import { OnboardingTourTarget } from './OnboardingTourTarget/OnboardingTourTarget';
import classes from './OnboardingTour.module.css';

export type OnboardingTourStylesNames = OnboardingTourPopoverContentStylesNames;

//export type OnboardingTourCssVariables = OnboardingTourPopoverContentCssVariables;

export interface OnboardingTourBaseProps
  extends OnboardingTourOptions,
    Omit<OnboardingTourPopoverContentBaseProps, 'tourController'> {
  tour: OnboardingTourStep[];

  /** Controlled started state */
  started: boolean;

  /** Props passed to FocusReveal */
  focusRevealProps?:
    | OnboardingTourFocusRevealProps
    | ((tourController: OnboardingTourController) => OnboardingTourFocusRevealProps);

  /** Child elements */
  children: React.ReactNode;
}

export interface OnboardingTourProps
  extends BoxProps,
    OnboardingTourBaseProps,
    StylesApiProps<OnboardingTourFactory> {}

export type OnboardingTourFactory = Factory<{
  props: OnboardingTourProps;
  ref: HTMLDivElement;
  stylesNames: OnboardingTourStylesNames;
  //vars: OnboardingTourCssVariables;
  staticComponents: {
    FocusReveal: typeof OnboardingTourFocusReveal;
    PopoverContent: typeof OnboardingTourPopoverContent;
    Target: typeof OnboardingTourTarget;
  };
}>;

export const defaultProps: Partial<OnboardingTourProps> = {};

// const varsResolver = createVarsResolver<OnboardingTourFactory>((_, {}) => ({
//   popoverContent: {
//     '--onboarding-tour-popover-content-stepper-icon-size': 'var(--mantine-size-xs)',
//   },
// }));

export const OnboardingTour = factory<OnboardingTourFactory>((_props, ref) => {
  const props = useProps('OnboardingTour', defaultProps, _props);

  const {
    tour,
    started,
    loop,
    focusRevealProps: _focusRevealProps,
    onOnboardingTourStart,
    onOnboardingTourEnd,
    onOnboardingTourClose,
    onOnboardingTourChange,

    classNames,
    styles,
    unstyled,
    children,
    ...others
  } = props;

  const getStyles = useStyles<OnboardingTourFactory>({
    name: 'OnboardingTour',
    classes,
    props,
    classNames,
    styles,
    unstyled,
  });

  const onboardingTour = useOnboardingTour(tour, {
    loop,
    onOnboardingTourStart,
    onOnboardingTourEnd,
    onOnboardingTourChange,
  });

  const focusRevealProps = _focusRevealProps
    ? typeof _focusRevealProps === 'function'
      ? _focusRevealProps(onboardingTour)
      : _focusRevealProps
    : {};

  const value = {
    ...onboardingTour,
    focusRevealProps,
    onOnboardingTourClose,
    getStyles,
    unstyled,
  };

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<OnboardingTourFactory>({
    classNames,
    styles,
    props,
  });

  const { selectedStepId: selectedTourId, startTour } = onboardingTour;

  useEffect(() => {
    if (started) {
      startTour();
    }
  }, [started]);

  const wrapChildren = (children: React.ReactNode): React.ReactNode => {
    if (!started || !selectedTourId) {
      return children;
    }

    return React.Children.map(children, (child: React.ReactElement<any>) => {
      // Let's verify that the child is a valid React element.
      if (React.isValidElement(child)) {
        // If the element has the data-onboarding-tour attribute set to true
        const tourId = child.props['data-onboarding-tour-id'];
        if (tourId) {
          return (
            <OnboardingTourFocusReveal
              {...focusRevealProps}
              key={`onboarding-tour-${tourId}`}
              popoverContent={
                <OnboardingTour.PopoverContent
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  unstyled={unstyled}
                  tourController={onboardingTour}
                  onOnboardingTourClose={onOnboardingTourClose}
                  {...(others as unknown as OnboardingTourPopoverContentBaseProps)}
                  key={`onboarding-tour-content-${tourId}`}
                />
              }
              focused={tourId === selectedTourId}
              transitionProps={{ duration: 0, exitDuration: 0 }}
            >
              {React.cloneElement(child)}
            </OnboardingTourFocusReveal>
          );
        }
        // If the element has children, we apply the function recursively.
        if ((child as React.ReactElement<any>).props.children) {
          return React.cloneElement(child as React.ReactElement<{ children?: React.ReactNode }>, {
            children: wrapChildren((child.props as { children?: React.ReactNode }).children),
          });
        }
      }
      // If it is not a valid element or does not meet the condition, we return it unchanged.
      return child;
    });
  };

  return <_OnboardingTourProvider value={value}>{wrapChildren(children)}</_OnboardingTourProvider>;
});

OnboardingTour.displayName = 'OnboardingTour';
OnboardingTour.classes = classes;

OnboardingTour.FocusReveal = OnboardingTourFocusReveal;
OnboardingTour.PopoverContent = OnboardingTourPopoverContent;
OnboardingTour.Target = OnboardingTourTarget;
