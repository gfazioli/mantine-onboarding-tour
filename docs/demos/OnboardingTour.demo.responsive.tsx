import React, { useState } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import {
  Button,
  Container,
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { MantineDemo } from '@mantinex/demo';

const onboardingSteps = [
  {
    id: 'welcome',
    title: '🎉 Welcome to Responsive Demo',
    content:
      'This demo showcases the responsive onboarding tour! Toggle the responsive mode to see different behaviors on mobile devices.',
  },
  {
    id: 'top-button',
    title: '📱 Responsive Behavior',
    content:
      'When responsive is enabled, the guide adapts to mobile screens with optimized positioning and scrolling.',
  },
  {
    id: 'left-button',
    title: '🎨 Mobile-First Design',
    content:
      'Notice how the guide appears at the bottom on mobile when responsive is enabled, and uses standard positioning when disabled.',
  },
  {
    id: 'right-button',
    title: '⚡ Smart Scrolling',
    content:
      'The system automatically scrolls elements into view with the appropriate alignment based on the guide position.',
  },
  {
    id: 'bottom-button',
    title: '🚀 Ready to Use',
    content:
      'The responsive system provides the best user experience across all devices with intelligent positioning!',
  },
];

function Wrapper() {
  const [started, { open, close }] = useDisclosure(false);
  const [responsive, setResponsive] = useState(true);
  const [mobilePosition, setMobilePosition] = useState<'top' | 'bottom'>('bottom');
  const [mobileBreakpoint, setMobileBreakpoint] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={2} ta="center" mb="md">
            📱 Responsive Onboarding Tour Demo
          </Title>
          <Text c="dimmed" ta="center" size="lg" mb="xl">
            Experience the responsive onboarding tour! Toggle responsive mode and mobile position to
            see different behaviors.
          </Text>
        </div>

        <Group justify="center" mb="xl" gap="md">
          <Button
            onClick={open}
            size="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'purple', deg: 45 }}
            radius="xl"
            px="xl"
            py="md"
          >
            🚀 Start Demo
          </Button>
        </Group>

        <Group justify="center" mb="xl" gap="lg">
          <Group gap="sm">
            <Text size="sm" fw={500}>
              Responsive Mode:
            </Text>
            <Switch
              checked={responsive}
              onChange={(event) => setResponsive(event.currentTarget.checked)}
              color="blue"
              size="md"
            />
            <Text size="sm" c={responsive ? 'blue' : 'gray'}>
              {responsive ? 'ON' : 'OFF'}
            </Text>
          </Group>

          <Group gap="sm">
            <Text size="sm" fw={500}>
              Mobile Position:
            </Text>
            <SegmentedControl
              value={mobilePosition}
              onChange={(value) => setMobilePosition(value as 'top' | 'bottom')}
              data={[
                { label: 'Top', value: 'top' },
                { label: 'Bottom', value: 'bottom' },
              ]}
              disabled={!responsive}
              size="sm"
            />
          </Group>

          <Group gap="sm">
            <Text size="sm" fw={500}>
              Breakpoint:
            </Text>
            <SegmentedControl
              value={mobileBreakpoint}
              onChange={(value) => setMobileBreakpoint(value as 'xs' | 'sm' | 'md' | 'lg' | 'xl')}
              data={[
                { label: 'xs', value: 'xs' },
                { label: 'sm', value: 'sm' },
                { label: 'md', value: 'md' },
                { label: 'lg', value: 'lg' },
              ]}
              disabled={!responsive}
              size="sm"
            />
          </Group>
        </Group>

        <OnboardingTour
          tour={onboardingSteps}
          started={started}
          onOnboardingTourEnd={close}
          onOnboardingTourClose={close}
          responsive={responsive}
          mobileBreakpoint={mobileBreakpoint}
          mobilePosition={mobilePosition}
        >
          {/* Top section */}
          <Paper
            h={200}
            p="xl"
            radius="md"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
            }}
          >
            <Title order={4} c="white" mb="sm">
              📱 Top Section
            </Title>
            <Text size="sm" c="rgba(255,255,255,0.8)" mb="md">
              This section demonstrates responsive behavior
            </Text>
            <Button data-onboarding-tour-id="top-button" variant="white" color="dark" radius="xl">
              Responsive Behavior
            </Button>
          </Paper>

          {/* Middle section with left and right buttons */}
          <Group justify="space-between" mt="xl" gap="xl">
            <Paper
              w={280}
              h={200}
              p="xl"
              radius="md"
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                boxShadow: '0 10px 30px rgba(240, 147, 251, 0.3)',
              }}
            >
              <Title order={4} c="white" mb="sm">
                🎨 Left Section
              </Title>
              <Text size="sm" c="rgba(255,255,255,0.8)" mb="md">
                Mobile-first design with responsive positioning
              </Text>
              <Button
                data-onboarding-tour-id="left-button"
                variant="white"
                color="dark"
                radius="xl"
              >
                Mobile Design
              </Button>
            </Paper>

            <Paper
              w={280}
              h={200}
              p="xl"
              radius="md"
              style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                boxShadow: '0 10px 30px rgba(79, 172, 254, 0.3)',
              }}
            >
              <Title order={4} c="white" mb="sm">
                ⚡ Right Section
              </Title>
              <Text size="sm" c="rgba(255,255,255,0.8)" mb="md">
                Smart scrolling with intelligent alignment
              </Text>
              <Button
                data-onboarding-tour-id="right-button"
                variant="white"
                color="dark"
                radius="xl"
              >
                Smart Scrolling
              </Button>
            </Paper>
          </Group>

          {/* Bottom section */}
          <Paper
            h={200}
            p="xl"
            mt="xl"
            radius="md"
            style={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              boxShadow: '0 10px 30px rgba(250, 112, 154, 0.3)',
            }}
          >
            <Title order={4} c="white" mb="sm">
              🚀 Bottom Section
            </Title>
            <Text size="sm" c="rgba(255,255,255,0.8)" mb="md">
              Ready to use responsive system with intelligent positioning
            </Text>
            <Button
              data-onboarding-tour-id="bottom-button"
              variant="white"
              color="dark"
              radius="xl"
            >
              Ready to Use
            </Button>
          </Paper>

          {/* Welcome section */}
          <Paper
            h={120}
            p="lg"
            mt="xl"
            radius="md"
            style={{
              background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              boxShadow: '0 10px 30px rgba(168, 237, 234, 0.3)',
            }}
          >
            <Title order={4} c="dark" mb="sm">
              🎯 Welcome
            </Title>
            <Text size="sm" c="dark.6" mb="md">
              Toggle responsive mode to see different behaviors
            </Text>
            <Button
              data-onboarding-tour-id="welcome"
              variant="filled"
              color="dark"
              radius="xl"
              size="sm"
            >
              Welcome
            </Button>
          </Paper>
        </OnboardingTour>
      </Stack>
    </Container>
  );
}

const code = `
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Button, Stack, Title, Group, Paper, Text, Switch, SegmentedControl } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);
  const [responsive, setResponsive] = useState(true);
  const [mobilePosition, setMobilePosition] = useState<'top' | 'bottom'>('bottom');
  const [mobileBreakpoint, setMobileBreakpoint] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: '🎉 Welcome to Responsive Demo',
      content: 'This demo showcases the responsive onboarding tour! Toggle the responsive mode to see different behaviors on mobile devices.',
    },
    {
      id: 'features',
      title: '✨ Key Features',
      content: 'Experience smart positioning, optimized scrolling, and mobile-first design that adapts to your screen size.',
    },
    {
      id: 'mobile',
      title: '📱 Mobile Experience',
      content: 'On mobile devices, the guide automatically positions itself at the top or bottom with full-width layout.',
    },
    {
      id: 'desktop',
      title: '🖥️ Desktop Experience',
      content: 'On desktop, the guide uses standard positioning with smart placement around the target element.',
    },
  ];

  return (
    <Stack gap="md">
      <Group justify="center" mb="md">
        <Button onClick={open} size="lg" variant="gradient" gradient={{ from: 'blue', to: 'purple', deg: 45 }}>
          🚀 Start Responsive Demo
        </Button>
      </Group>

      <Group justify="center" mb="md" gap="lg">
        <Group gap="sm">
          <Text size="sm" fw={500}>Responsive:</Text>
          <Switch
            checked={responsive}
            onChange={(event) => setResponsive(event.currentTarget.checked)}
            color="blue"
            size="sm"
          />
        </Group>

        <Group gap="sm">
          <Text size="sm" fw={500}>Position:</Text>
          <SegmentedControl
            value={mobilePosition}
            onChange={(value) => setMobilePosition(value as 'top' | 'bottom')}
            data={[
              { label: 'Top', value: 'top' },
              { label: 'Bottom', value: 'bottom' },
            ]}
            disabled={!responsive}
            size="xs"
          />
        </Group>

        <Group gap="sm">
          <Text size="sm" fw={500}>Breakpoint:</Text>
          <SegmentedControl
            value={mobileBreakpoint}
            onChange={(value) => setMobileBreakpoint(value as 'xs' | 'sm' | 'md' | 'lg' | 'xl')}
            data={[
              { label: 'xs', value: 'xs' },
              { label: 'sm', value: 'sm' },
              { label: 'md', value: 'md' },
              { label: 'lg', value: 'lg' },
            ]}
            disabled={!responsive}
            size="xs"
          />
        </Group>
      </Group>

      <OnboardingTour
        tour={onboardingSteps}
        started={started}
        onOnboardingTourEnd={close}
        onOnboardingTourClose={close}
        responsive={responsive}
        mobileBreakpoint={mobileBreakpoint}
        mobilePosition={mobilePosition}
      >
        <Group justify="center" gap="md">
          <Button
            data-onboarding-tour-id="welcome"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
          >
            Welcome
          </Button>
          <Button
            data-onboarding-tour-id="features"
            variant="gradient"
            gradient={{ from: 'grape', to: 'pink', deg: 45 }}
          >
            Features
          </Button>
          <Button
            data-onboarding-tour-id="mobile"
            variant="gradient"
            gradient={{ from: 'teal', to: 'green', deg: 45 }}
          >
            Mobile
          </Button>
          <Button
            data-onboarding-tour-id="desktop"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'blue', deg: 45 }}
          >
            Desktop
          </Button>
        </Group>

        <Paper withBorder shadow="sm" p="md" mt="md" ta="center">
          <Text size="sm" c="dimmed">
            Resize your browser window to see responsive behavior in action!
          </Text>
        </Paper>
      </OnboardingTour>
    </Stack>
  );
}`;

export const responsive: MantineDemo = {
  type: 'code',
  component: Wrapper,
  defaultExpanded: false,
  code: [
    {
      fileName: 'Demo.tsx',
      code,
      language: 'tsx',
    },
  ],
};
