import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { IconBell, IconSettings } from '@tabler/icons-react';
import { Avatar, Button, Divider, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'avatar',
      title: 'Your Profile',
      content: 'Click on your avatar to access profile settings.',
      cutoutPadding: 4,
      cutoutRadius: 9999,
    },
    {
      id: 'settings',
      title: 'Settings',
      content: 'This icon button uses a circular cutout too.',
      cutoutPadding: 4,
      cutoutRadius: 9999,
    },
    {
      id: 'notifications',
      title: 'Notifications',
      content: 'This step uses the default rectangular cutout.',
    },
    {
      id: 'action',
      title: 'Get Started',
      content: 'This button uses a pill-shaped cutout with a larger radius.',
      cutoutPadding: 6,
      cutoutRadius: 24,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      maw={350}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          Start the Tour
        </Button>

        <Divider my={16} w="100%" />

        <Group justify="center" gap="xl">
          <Avatar
            data-onboarding-tour-id="avatar"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            radius="xl"
            size="lg"
          />

          <ThemeIcon data-onboarding-tour-id="settings" variant="light" radius="xl" size="xl">
            <IconSettings size={24} />
          </ThemeIcon>

          <ThemeIcon data-onboarding-tour-id="notifications" variant="light" size="xl">
            <IconBell size={24} />
          </ThemeIcon>
        </Group>

        <Text size="sm" c="dimmed" ta="center" maw={300}>
          The avatar and settings icon use <b>cutoutRadius: 9999</b> for a circular cutout. The
          notification icon uses the default rectangular cutout.
        </Text>

        <Button data-onboarding-tour-id="action" radius="xl" size="md">
          Get Started
        </Button>
      </Stack>
    </OnboardingTour>
  );
}

const code = `
import {
  OnboardingTour,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Avatar, Button, Divider, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell, IconSettings } from '@tabler/icons-react';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'avatar',
      title: 'Your Profile',
      content: 'Click on your avatar to access profile settings.',
      // Circular cutout for round elements
      cutoutPadding: 4,
      cutoutRadius: 9999,
    },
    {
      id: 'settings',
      title: 'Settings',
      content: 'This icon button uses a circular cutout too.',
      cutoutPadding: 4,
      cutoutRadius: 9999,
    },
    {
      id: 'notifications',
      title: 'Notifications',
      content: 'This step uses the default rectangular cutout.',
      // Uses tour-level defaults (cutoutPadding: 8, cutoutRadius: 8)
    },
    {
      id: 'action',
      title: 'Get Started',
      content: 'This button uses a pill-shaped cutout with a larger radius.',
      cutoutPadding: 6,
      cutoutRadius: 24,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      maw={350}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          Start the Tour
        </Button>

        <Divider my={16} w="100%" />

        <Group justify="center" gap="xl">
          <Avatar
            data-onboarding-tour-id="avatar"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            radius="xl"
            size="lg"
          />

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

        <Button data-onboarding-tour-id="action" radius="xl" size="md">
          Get Started
        </Button>
      </Stack>
    </OnboardingTour>
  );
}
`;

export const cutout: MantineDemo = {
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
