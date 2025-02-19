import React from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import {
  Box,
  BoxProps,
  Button,
  Center,
  CloseButton,
  Divider,
  Factory,
  factory,
  Group,
  Stack,
  Stepper,
  StylesApiProps,
  Text,
  Title,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import type { UseOnboardingTourReturn } from '../hooks/use-onboarding-tour/use-onboarding-tour';
import classes from './FocusRevealPopoverContent.module.css';

export type FocusRevealPopoverContentStylesNames = 'root';

export type FocusRevealPopoverContentCssVariables = {
  root: '';
};

export interface FocusRevealPopoverContentBaseProps {
  /** Current onboarding tour */
  onboardingTour: UseOnboardingTourReturn;
}

export interface FocusRevealPopoverContentProps
  extends BoxProps,
    FocusRevealPopoverContentBaseProps,
    StylesApiProps<FocusRevealPopoverContentFactory> {}

export type FocusRevealPopoverContentFactory = Factory<{
  props: FocusRevealPopoverContentProps;
  ref: HTMLDivElement;
  stylesNames: FocusRevealPopoverContentStylesNames;
  vars: FocusRevealPopoverContentCssVariables;
}>;

export const defaultProps: Partial<FocusRevealPopoverContentProps> = {};

// const varsResolver = createVarsResolver<FocusRevealPopoverContentFactory>((theme, {}) => {
//   return {
//     root: {},
//   };
// });

export const FocusRevealPopoverContent = factory<FocusRevealPopoverContentFactory>(
  (_props, ref) => {
    const props = useProps('FocusRevealPopoverContent', defaultProps, _props);
    const theme = useMantineTheme();

    const {
      onboardingTour,

      classNames,
      style,
      styles,
      unstyled,
      vars,
      className,

      ...others
    } = props;

    const getStyles = useStyles<FocusRevealPopoverContentFactory>({
      name: 'FocusRevealPopoverContent',
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
      options,
      currentTour,
      currentIndex,
      selectedTourId,
      startTour,
      setCurrentIndex,
      endTour,
      nextTour,
      prevTour,
    } = onboardingTour;

    if (!onboardingTour || !currentTour) {
      return null;
    }

    const { title, description, content } = currentTour;

    const {
      withCloseButton,
      withNextButton,
      withPrevButton,
      withProgress,
      withCounter,
      autoStart,
      loop,
      onTourClose,
      onTourEnd,
      onTourStart,
    } = options;

    if (content) {
      return (
        <Box ref={ref} {...getStyles('root')} {...others}>
          {content}
        </Box>
      );
    }

    return (
      <Box ref={ref} {...getStyles('root')} {...others}>
        <Stack>
          {withCloseButton && <CloseButton className={classes.closeButton} onClick={endTour} />}
          {title ? (
            typeof title === 'string' ? (
              <Title mt={withCloseButton ? 8 : 0} order={2}>
                {title}
              </Title>
            ) : (
              title
            )
          ) : null}

          {description ? (
            typeof description === 'string' ? (
              <Text>{description}</Text>
            ) : (
              description
            )
          ) : null}

          <Divider />
          <Group justify="space-between">
            {withPrevButton && currentIndex > 0 ? (
              <Button
                variant="light"
                size="xs"
                leftSection={<IconChevronLeft />}
                onClick={prevTour}
              >
                Prev
              </Button>
            ) : (
              <div />
            )}
            {withNextButton && currentIndex < tour.length - 1 && (
              <Button
                variant="light"
                size="xs"
                rightSection={<IconChevronRight />}
                onClick={nextTour}
              >
                Next
              </Button>
            )}
            {currentIndex === tour.length - 1 && (
              <Button size="xs" onClick={endTour}>
                Close
              </Button>
            )}
          </Group>

          {withProgress && (
            <Group grow>
              <Stepper
                onStepClick={setCurrentIndex}
                classNames={{
                  stepIcon: classes.stepIcon,
                  separator: classes.separator,
                }}
                active={currentIndex}
                size="xs"
              >
                {tour.map((step) => (
                  <Stepper.Step allowStepSelect key={step.id} value={step.id}></Stepper.Step>
                ))}
              </Stepper>
            </Group>
          )}

          {withCounter && (
            <Center>
              <Text size="xs">
                {currentIndex + 1}/{tour.length}
              </Text>
            </Center>
          )}
        </Stack>
      </Box>
    );
  }
);

FocusRevealPopoverContent.classes = classes;
FocusRevealPopoverContent.displayName = 'FocusRevealPopoverContent';
