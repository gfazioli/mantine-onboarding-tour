import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Button, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { IconBell, IconSettings } from '@tabler/icons-react';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome aboard 👋',
      content: 'No element has this id, so the step is shown in the middle of the screen.',
    },
    {
      id: 'settings',
      title: 'Settings',
      content: 'Use the arrow keys to move between the steps, or Escape to leave the tour.',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      content: 'Every step popover is a dialog named by its title.',
    },
    {
      id: 'done',
      title: 'You are all set',
      content: 'A centered step works well to close the tour, too.',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      withStepCounter
      withStepper={false}
      maw={320}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          Start the Tour
        </Button>

        <Group justify="center" gap="xl">
          <ThemeIcon data-onboarding-tour-id="settings" variant="light" radius="xl" size="xl">
            <IconSettings size={24} />
          </ThemeIcon>

          <ThemeIcon data-onboarding-tour-id="notifications" variant="light" size="xl">
            <IconBell size={24} />
          </ThemeIcon>
        </Group>

        <Text size="sm" c="dimmed" ta="center" maw={320}>
          The first and the last step have no element on the page.
        </Text>
      </Stack>
    </OnboardingTour>
  );
}

const code = `
import {
  OnboardingTour,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Button, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell, IconSettings } from '@tabler/icons-react';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      // No element has this id: the step is shown in the middle of the screen
      id: 'welcome',
      title: 'Welcome aboard 👋',
      content: 'No element has this id, so the step is shown in the middle of the screen.',
    },
    {
      id: 'settings',
      title: 'Settings',
      content: 'Use the arrow keys to move between the steps, or Escape to leave the tour.',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      content: 'Every step popover is a dialog named by its title.',
    },
    {
      id: 'done',
      title: 'You are all set',
      content: 'A centered step works well to close the tour, too.',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      withStepCounter
      withStepper={false}
      maw={320}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          Start the Tour
        </Button>

        <Group justify="center" gap="xl">
          <ThemeIcon
            data-onboarding-tour-id="settings"
            variant="light"
            radius="xl"
            size="xl"
          >
            <IconSettings size={24} />
          </ThemeIcon>

          <ThemeIcon
            data-onboarding-tour-id="notifications"
            variant="light"
            size="xl"
          >
            <IconBell size={24} />
          </ThemeIcon>
        </Group>

        <Text size="sm" c="dimmed" ta="center" maw={320}>
          The first and the last step have no element on the page.
        </Text>
      </Stack>
    </OnboardingTour>
  );
}
`;

export const centered: MantineDemo = {
  type: 'code',
  component: Demo,
  defaultExpanded: false,
  code: [
    {
      fileName: 'Demo.tsx',
      code,
      language: 'tsx',
    },
  ],
};
