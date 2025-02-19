import React from 'react';
import { Button, Center, Paper, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Testimonials } from '../../../docs/demos/Testimonials';
import { FocusReveal } from '../FocusReveal';
import type { OnboardingTour } from '../hooks/use-onboarding-tour/use-onboarding-tour';
import { useOnboardingTour } from '../hooks/use-onboarding-tour/use-onboarding-tour';

export default {
  title: 'FocusRevealPopoverContent',
  args: {},
  argTypes: {},
};

export function Popover() {
  const [focused, { close, open }] = useDisclosure(false);

  const PopoverContent = () => (
    <div style={{ padding: 20 }}>
      <Title order={3}>Popover content</Title>
      <Button onClick={close}>Focus the Bottom Card</Button>
    </div>
  );

  return (
    <Stack>
      <Center>
        <Button onClick={open}>Focus the Bottom Card</Button>
      </Center>

      <Center>
        <Title order={3}>By clicking the button above, the card below will be focused</Title>
      </Center>

      <Center>
        <FocusReveal focused={focused} popoverContent={<PopoverContent />}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Stack>
  );
}

export function Usage() {
  const onboarding: OnboardingTour[] = [
    {
      id: 'welcome',
      title: 'Welcome to Mantine',
      description:
        'Mantine is a react components library with focus on usability and accessibility',
    },
    {
      id: 'login',
      title: (
        <Title c="red" order={3}>
          Focus Reveal
        </Title>
      ),
      description: 'Focus Reveal component allows to highlight important parts of the page',
    },
    {
      id: 'disabled',
      title: 'Onboarding',
      description: (
        <Text size="xs">Use Focus Reveal to create onboarding experience for your users</Text>
      ),
    },
    {
      id: 'ask-help',
      content: (
        <Paper withBorder shadow="xl">
          <Center>
            <Text>Ask for help</Text>
          </Center>
        </Paper>
      ),
    },
  ];

  const onboardingTour = useOnboardingTour(onboarding, {
    autoStart: true,
  });

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <FocusReveal.PopoverContent onboardingTour={onboardingTour} />
      </Paper>
    </Center>
  );
}
