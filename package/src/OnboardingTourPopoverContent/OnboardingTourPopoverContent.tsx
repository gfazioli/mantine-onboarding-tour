import React, { useMemo } from 'react';
import {
  Anchor,
  Box,
  BoxProps,
  Button,
  Factory,
  factory,
  Group,
  Stack,
  Stepper,
  StepperProps,
  StepperStepProps,
  StylesApiProps,
  Text,
  useProps,
  useStyles,
} from '@mantine/core';
import {
  OnboardingTourStep,
  type OnboardingTourController,
  type OnboardingTourOptions,
} from '../hooks/use-onboarding-tour/use-onboarding-tour';
import classes from './OnboardingTourPopoverContent.module.css';

export type OnboardingTourPopoverContentStylesNames = 'popoverContent';
// | 'stepIcon'
// | 'separator';

// export type OnboardingTourPopoverContentCssVariables = {
//   popoverContent: '--onboarding-tour-popover-content-stepper-icon-size';
// };

export interface OnboardingTourPopoverContentBaseProps
  extends Omit<
    OnboardingTourOptions,
    'onOnboardingTourStart' | 'onOnboardingTourEnd' | 'onOnboardingTourChange'
  > {
  /** Current onboarding tour returned by useOnboardingTour() hook */
  tourController: OnboardingTourController;

  /** Header of the tour. You can also pass a React component here */
  header?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Title of the tour. You can also pass a React component here */
  title?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Content of the tour. You can also pass a React component here */
  content?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Footer of the tour. You can also pass a React component here */
  footer?: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Show the previous button */
  withPrevButton?: boolean;

  /** Show the next button */
  withNextButton?: boolean;

  /** Show the skip button */
  withSkipButton?: boolean;

  /** Show the stepper */
  withStepper?: boolean;

  /** Navigation next button label or Component */
  nextStepNavigation?:
    | React.ReactNode
    | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Navigation end button label or Component. used when the tour is over and is not in loop */
  endStepNavigation?:
    | React.ReactNode
    | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Navigation prev button label or Component */
  prevStepNavigation?:
    | React.ReactNode
    | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Navigation close button label or Component */
  skipNavigation?:
    | React.ReactNode
    | ((tourController: OnboardingTourController) => React.ReactNode);

  /** Stepper component */
  stepper?: (tourController: OnboardingTourController) => React.ReactNode;

  /** Stepper props */
  stepperProps?: Omit<StepperProps, 'children'>;

  /** Stepper.Step props */
  stepperStepProps?: Omit<StepperStepProps, 'children'>;

  /** Triggered when the Close Button is clicked */
  onOnboardingTourClose?: () => void;
}

export interface OnboardingTourPopoverContentProps
  extends Omit<BoxProps, 'title' | 'description' | 'content'>,
    OnboardingTourPopoverContentBaseProps,
    StylesApiProps<OnboardingTourPopoverContentFactory> {}

export type OnboardingTourPopoverContentFactory = Factory<{
  props: OnboardingTourPopoverContentProps;
  ref: HTMLDivElement;
  stylesNames: OnboardingTourPopoverContentStylesNames;
  //vars: OnboardingTourPopoverContentCssVariables;
}>;

export const defaultProps: Partial<OnboardingTourPopoverContentProps> = {
  withPrevButton: true,
  withNextButton: true,
  withSkipButton: true,
  withStepper: true,
  nextStepNavigation: 'Next',
  endStepNavigation: 'End',
  prevStepNavigation: 'Prev',
  skipNavigation: 'Skip',
  stepperStepProps: {
    allowStepClick: true,
  },
};

// const varsResolver = createVarsResolver<OnboardingTourPopoverContentFactory>(() => {
//   return {
//     popoverContent: {
//       '--onboarding-tour-popover-content-stepper-icon-size': 'var(--mantine-size-xs)',
//     },
//   };
// });

export type OnboardingCurrentTour = OnboardingTourStep & {
  step: number;
  tourLength: number;
};

export const OnboardingTourPopoverContent = factory<OnboardingTourPopoverContentFactory>(
  (_props, ref) => {
    const props = useProps('OnboardingTourPopoverContent', defaultProps, _props);

    const {
      tourController,

      loop,
      header,
      title,
      content,
      footer,

      withPrevButton,
      withNextButton,
      withSkipButton,
      withStepper,
      nextStepNavigation,
      endStepNavigation,
      prevStepNavigation,
      skipNavigation,

      stepper,
      stepperStepProps,
      stepperProps,

      onOnboardingTourClose,

      classNames,
      style,
      styles,
      unstyled,
      vars,
      className,

      ...others
    } = props;

    const getStyles = useStyles<OnboardingTourPopoverContentFactory>({
      name: 'OnboardingTourPopoverContent',
      props,
      classes,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      //varsResolver,
    });

    const {
      tour,
      currentStep,
      currentStepIndex,
      setCurrentStepIndex: setCurrentStep,
      endTour,
      nextStep: nextTour,
      prevStep: prevTour,
    } = tourController;

    if (!tourController || !currentStep) {
      return null;
    }

    const {
      header: headerTourStep,
      title: titleTourStep,
      content: contentTourStep,
      footer: footerTourStep,
    } = currentStep;

    /**
     * Returns the component or the function that returns the component
     *
     * @param prop
     * @returns
     */
    const withFunction = (
      prop: React.ReactNode | ((tourController: OnboardingTourController) => React.ReactNode),
      wrapper?: (prop: string | undefined | null) => React.ReactNode
    ) => {
      if (typeof prop === 'function') {
        return prop(tourController);
      } else if (typeof prop === 'string' && wrapper) {
        return wrapper(prop);
      }
      return prop;
    };

    /** Skip button */
    const skipNavigationComponent = (withSkipButton &&
      withFunction(skipNavigation, (label: string) => (
        <Anchor
          size="xs"
          onClick={() => {
            endTour();
            onOnboardingTourClose?.();
          }}
        >
          {label}
        </Anchor>
      ))) || <div />;

    /** header */
    const headerComponent = withFunction(header || headerTourStep);

    /** Title */
    const titleComponent = withFunction(
      title || titleTourStep,
      (label: string | undefined | null) => (
        <Text fw={800} size="xl">
          {label}
        </Text>
      )
    );
    /** Content */
    const contentComponent = withFunction(content || contentTourStep);

    /** Footer */
    const footerComponent = withFunction(footer || footerTourStep);

    /** Prev button */
    const prevNavigationComponent =
      withPrevButton && (currentStepIndex > 0 || loop) ? (
        withFunction(prevStepNavigation, (label: string) => (
          <Button variant="light" size="xs" onClick={prevTour}>
            {label}
          </Button>
        ))
      ) : (
        <div />
      );

    /** Next button */
    const nextNavigationComponent =
      withNextButton &&
      (currentStepIndex < tour.length - 1 || loop) &&
      withFunction(nextStepNavigation, (label: string) => (
        <Button variant="light" size="xs" onClick={nextTour}>
          {label}
        </Button>
      ));

    /** End button */
    const endNavigationComponent =
      withNextButton &&
      currentStepIndex === tour.length - 1 &&
      !loop &&
      withFunction(endStepNavigation, (label: string) => (
        <Button size="xs" onClick={nextTour}>
          {label}
        </Button>
      ));

    const stepperComponent =
      withStepper &&
      (withFunction(stepper) || (
        <Group grow>
          <Stepper
            {...stepperProps}
            onStepClick={setCurrentStep}
            classNames={{
              stepIcon: classes.stepIcon,
              separator: classes.separator,
            }}
            active={currentStepIndex}
            size="xs"
          >
            {tour.map((step) => (
              <Stepper.Step {...stepperStepProps} key={step.id} value={step.id} />
            ))}
          </Stepper>
        </Group>
      ));

    return useMemo(
      () => (
        <Box ref={ref} {...getStyles('popoverContent')} {...others}>
          <Stack>
            {headerComponent}
            {titleComponent}
            {contentComponent}
            <Group justify="space-between">
              {skipNavigationComponent}
              <Group justify="space-between">
                {prevNavigationComponent}
                {nextNavigationComponent}
                {endNavigationComponent}
              </Group>
            </Group>

            {stepperComponent}

            {footerComponent}
          </Stack>
        </Box>
      ),
      [
        withSkipButton,
        withPrevButton,
        withNextButton,
        withStepper,
        nextStepNavigation,
        prevStepNavigation,
        endStepNavigation,
        skipNavigation,
      ]
    );
  }
);

OnboardingTourPopoverContent.displayName = 'OnboardingTourPopoverContent';
