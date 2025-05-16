import React from 'react';
import {
  IconActivity,
  IconBrandMantine,
  IconChevronRight,
  IconCircleOff,
  IconGauge,
  IconHome2,
} from '@tabler/icons-react';
import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  NavLink,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Testimonials } from '../../docs/demos/Testimonials';
import {
  OnboardingTourController,
  OnboardingTourStep,
} from './hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTour, OnboardingTourProps } from './OnboardingTour';
import classes from './Story.module.css';

export default {
  title: 'OnboardingTourProvider',
  args: {
    loop: false,
    withPrevButton: true,
    withNextButton: true,
    withStepper: true,
    nextStepNavigation: 'Next',
    prevStepNavigation: 'Prev',
    skipNavigation: 'Finish',
  },
  argTypes: {
    loop: { control: 'boolean' },
    withPrevButton: { control: 'boolean' },
    withNextButton: { control: 'boolean' },

    withStepper: { control: 'boolean' },
    nextStepNavigation: { control: 'text' },
    prevStepNavigation: { control: 'text' },
    skipNavigation: { control: 'text' },
  },
};

const onboardingSteps: OnboardingTourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Mantine',
    content: 'Mantine is a react components library with focus on usability and accessibility',
  },
  {
    id: 'login',
    title: 'Focus',
    content: 'Focus Reveal component allows to highlight important parts of the page',
  },
  {
    id: 'disabled',
    title: 'Onboarding',
    content: 'Use Focus Reveal to create onboarding experience for your users',
  },
  {
    id: 'ask-help',
    title: 'Finish',
    content: 'You are ready to use Mantine',
  },
];

export function OnboardingTourProvider(props: OnboardingTourProps) {
  const [started, { open, close }] = useDisclosure(false);

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      maw={400}
      {...props}
    >
      <Container>
        <Group align="center" justify="space-between">
          <IconBrandMantine size={48} color="violet" />
          <Group>
            <Button variant="light" onClick={open}>
              Start Tour
            </Button>
            <Button data-onboarding-tour-id="login">Login</Button>
            <Button data-onboarding-tour-id="ask-help">Ask Help</Button>
          </Group>
        </Group>

        <Divider my={16} />

        <Flex gap={32}>
          <Box w={300}>
            <NavLink
              href="#required-for-focus"
              label="With icon"
              leftSection={<IconHome2 size={16} stroke={1.5} />}
            />
            <NavLink
              href="#required-for-focus"
              label="With right section"
              leftSection={<IconGauge size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
            />

            <NavLink
              data-onboarding-tour-id="disabled"
              href="#required-for-focus"
              label="Disabled"
              leftSection={<IconCircleOff size={16} stroke={1.5} />}
              disabled
            />

            <NavLink
              href="#required-for-focus"
              label="With description"
              description="Additional information"
              leftSection={
                <Badge size="xs" color="red" circle>
                  3
                </Badge>
              }
            />
            <NavLink
              href="#required-for-focus"
              label="Active subtle"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              variant="subtle"
              active
            />
            <NavLink
              data-onboarding-tour-id="active-light"
              href="#required-for-focus"
              label="Active light"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              active
            />
            <NavLink
              href="#required-for-focus"
              label="Active filled"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              variant="filled"
              active
            />
          </Box>

          <Divider my={16} orientation="vertical" />

          <Center w="100%">
            <Testimonials data-onboarding-tour-id="welcome" testimonial={0} />
          </Center>
        </Flex>
      </Container>
    </OnboardingTour>
  );
}

export function FocusRevealProps(props: OnboardingTourProps) {
  const [started, { open, close }] = useDisclosure(false);

  const customPopoverContent = (controller: OnboardingTourController) => {
    if (!controller.currentStep) {
      return null;
    }

    const { title, description } = controller.currentStep as OnboardingTourStep;

    return (
      <>
        <BackgroundImage
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
          radius="md"
        >
          <Stack m={32}>
            <Group justify="right">
              <Button size="xs" onClick={controller.nextStep}>
                Next
              </Button>
            </Group>
            <Title order={4}>{title as string}</Title>
            <Text>{description as string}</Text>
          </Stack>
        </BackgroundImage>
      </>
    );
  };

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      content={customPopoverContent}
      focusRevealProps={{
        popoverProps: {
          styles: {
            dropdown: {
              padding: 0,
            },
          },
        },
      }}
      maw={400}
      {...props}
    >
      <Container>
        <Group align="center" justify="space-between">
          <IconBrandMantine size={48} color="violet" />
          <Group>
            <Button variant="light" onClick={open}>
              Start Tour
            </Button>
            <Button data-onboarding-tour-id="login">Login</Button>
            <Button data-onboarding-tour-id="ask-help">Ask Help</Button>
          </Group>
        </Group>

        <Divider my={16} />

        <Flex gap={32}>
          <Box w={300}>
            <NavLink
              href="#required-for-focus"
              label="With icon"
              leftSection={<IconHome2 size={16} stroke={1.5} />}
            />
            <NavLink
              href="#required-for-focus"
              label="With right section"
              leftSection={<IconGauge size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
            />

            <NavLink
              data-onboarding-tour-id="disabled"
              href="#required-for-focus"
              label="Disabled"
              leftSection={<IconCircleOff size={16} stroke={1.5} />}
              disabled
            />

            <NavLink
              href="#required-for-focus"
              label="With description"
              description="Additional information"
              leftSection={
                <Badge size="xs" color="red" circle>
                  3
                </Badge>
              }
            />
            <NavLink
              href="#required-for-focus"
              label="Active subtle"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              variant="subtle"
              active
            />
            <NavLink
              data-onboarding-tour-id="active-light"
              href="#required-for-focus"
              label="Active light"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              active
            />
            <NavLink
              href="#required-for-focus"
              label="Active filled"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              variant="filled"
              active
            />
          </Box>

          <Divider my={16} orientation="vertical" />

          <Center w="100%">
            <Testimonials data-onboarding-tour-id="welcome" testimonial={0} />
          </Center>
        </Flex>
      </Container>
    </OnboardingTour>
  );
}

export function OnboardingTourProviderClasses(props: OnboardingTourProps) {
  const [started, { open, close }] = useDisclosure(false);

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      classNames={classes}
      maw={400}
      {...props}
    >
      <Container>
        <Group align="center" justify="space-between">
          <IconBrandMantine size={48} color="violet" />
          <Group>
            <Button variant="light" onClick={open}>
              Start Tour
            </Button>
            <Button data-onboarding-tour-id="login">Login</Button>
            <Button data-onboarding-tour-id="ask-help">Ask Help</Button>
          </Group>
        </Group>

        <Divider my={16} />

        <Flex gap={32}>
          <Center w="100%">
            <Testimonials data-onboarding-tour-id="welcome" testimonial={0} />
          </Center>
        </Flex>
      </Container>
    </OnboardingTour>
  );
}
