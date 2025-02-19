import React, { useEffect } from 'react';
import { IconBrandMantine } from '@tabler/icons-react';
import {
  AppShell,
  Burger,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  ScrollArea,
  Skeleton,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Testimonials } from '../../../docs/demos/Testimonials';
import type { OnboardingTourStep } from '../hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTour, OnboardingTourProps } from '../OnboardingTour';

export default {
  title: 'OnboardingTour Target',
  args: {
    loop: false,
    withCloseButton: true,
    withPrevButton: true,
    withNextButton: true,
    withStepper: true,
    nextStepNavigation: 'Next',
    prevStepNavigation: 'Prev',
    finishStepNavigation: 'Finish',
  },
  argTypes: {
    loop: { control: 'boolean' },
    withPrevButton: { control: 'boolean' },
    withNextButton: { control: 'boolean' },
    withCloseButton: { control: 'boolean' },
    withStepper: { control: 'boolean' },
    nextStepNavigation: { control: 'text' },
    prevStepNavigation: { control: 'text' },
    finishStepNavigation: { control: 'text' },
  },
};

function SubComponent() {
  return (
    <Stack>
      <h2>Sub Component</h2>
      <OnboardingTour.Target id="sub-component">
        <Button>Next</Button>
      </OnboardingTour.Target>
    </Stack>
  );
}

export function OnboardingTourProviderTarget(props: OnboardingTourProps) {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to Mantine',
      content: 'Mantine is a react components library with focus on usability and accessibility',
    },
    {
      id: 'login',
      title: 'Focus Reveal',
      content: 'Focus Reveal component allows to highlight important parts of the page',
    },
    {
      id: 'sub-component',
      title: 'Onboarding',
      content: 'Use Focus Reveal to create onboarding experience for your users',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
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
          <SubComponent />
          <Divider my={16} orientation="vertical" />

          <Center w="100%">
            <Testimonials data-onboarding-tour-id="welcome" testimonial={0} />
          </Center>
        </Flex>
      </Container>
    </OnboardingTour>
  );
}

export function CustomShell(props: OnboardingTourProps) {
  const [started, { open, close }] = useDisclosure(false);
  const [opened, { toggle }] = useDisclosure();

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to the Onboarding Tour Component',
      content:
        'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
    },
    {
      id: 'item-3',
      title: 'Subtitle',
    },
    {
      id: 'item-10',
      title: 'New Features',
      content: 'Now you can click on the button "See all" to display all the testimonials',
    },
    {
      id: 'testimonial',
      title: 'New Testimonial Layout',
      content: 'We have improved the Testimonial layout',
    },
  ];

  useEffect(() => {
    open();
  }, []);

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      maw={400}
      {...props}
    >
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header style={{ zIndex: 102 }}>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <MantineLogo data-onboarding-tour-id="welcome" size={30} />
            <Button>Login</Button>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section>Navbar header</AppShell.Section>
          <AppShell.Section
            grow
            my="md"
            component={ScrollArea}
            style={{ overflow: started ? 'initial' : 'hidden' }}
          >
            60 links in a scrollable section
            {Array(60)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  data-onboarding-tour-id={`item-${index}`}
                  h={28}
                  mt="sm"
                  animate={false}
                />
              ))}
          </AppShell.Section>
          <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>
          <Center w="100%">
            <Testimonials data-onboarding-tour-id="testimonial" testimonial={0} />
          </Center>
        </AppShell.Main>
      </AppShell>
    </OnboardingTour>
  );
}
