import { useEffect } from 'react';
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const onboardingSteps: OnboardingTourStep[] = [
  {
    id: 'hero',
    title: 'Step 1 — Wide element, bottom everywhere',
    content:
      'For wide elements like banners, bottom/top positions work best. This step uses bottom on all breakpoints.',
    focusRevealProps: {
      popoverProps: {
        position: 'bottom',
      },
    },
  },
  {
    id: 'sidebar-item',
    title: 'Step 2 — Bottom on mobile, right on sm+',
    content:
      'For narrow elements like sidebar links, left/right positions work great on desktop. Resize below sm to see it snap to bottom.',
    focusRevealProps: {
      popoverProps: {
        position: { base: 'bottom', sm: 'right' },
      },
    },
  },
  {
    id: 'card-left',
    title: 'Step 3 — Bottom on mobile, right on sm+',
    content:
      'Cards are medium-width elements. On desktop the popover appears to the right, on mobile it drops below.',
    focusRevealProps: {
      popoverProps: {
        position: { base: 'bottom', sm: 'right' },
      },
    },
  },
  {
    id: 'card-center',
    title: 'Step 4 — Top on mobile, bottom on md+',
    content:
      'This step flips direction at the md breakpoint. The focused element is scrolled into view and kept centered.',
    focusRevealProps: {
      popoverProps: {
        position: { base: 'top', md: 'bottom' },
        offset: { base: 8, md: -4 },
      },
    },
  },
  {
    id: 'card-right',
    title: 'Step 5 — Bottom on mobile, left on lg+',
    content:
      'This step only switches at the lg breakpoint. Below lg the popover stays at the bottom.',
    focusRevealProps: {
      popoverProps: {
        position: { base: 'bottom', lg: 'left' },
      },
    },
  },
  {
    id: 'bottom-banner',
    title: 'Step 6 — Three breakpoints',
    content:
      'This step uses three breakpoints: bottom on base, right on sm, top on lg. Widen and narrow the browser to see all three positions.',
    focusRevealProps: {
      popoverProps: {
        position: { base: 'bottom', sm: 'right', lg: 'top' },
        arrowSize: { base: 12, sm: 16 },
      },
    },
  },
];

export default function ResponsivePage() {
  const [started, { open, close }] = useDisclosure(false);

  useEffect(() => {
    open();
  }, []);

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      maw={{ base: 280, sm: 380 }}
    >
      <Box mih="100vh" bg="gray.0">
        {/* Header */}
        <Paper shadow="xs" p="md" radius={0}>
          <Container size="lg">
            <Group justify="space-between">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'violet', to: 'indigo' }}>
                  R
                </ThemeIcon>
                <Title order={4}>Responsive Demo</Title>
              </Group>
              <Group>
                <Badge variant="outline" color="gray" size="lg">
                  Resize the browser!
                </Badge>
                <Button variant="light" onClick={open}>
                  Restart Tour
                </Button>
              </Group>
            </Group>
          </Container>
        </Paper>

        <Container size="lg" py="xl">
          <Flex gap="xl" direction={{ base: 'column', sm: 'row' }}>
            {/* Sidebar */}
            <Paper w={{ base: '100%', sm: 220 }} miw={{ sm: 220 }} p="md" radius="md" withBorder>
              <Text fw={700} size="sm" c="dimmed" tt="uppercase" mb="md">
                Sidebar
              </Text>
              <Stack gap={4}>
                <Button
                  data-onboarding-tour-id="sidebar-item"
                  variant="light"
                  fullWidth
                  justify="start"
                >
                  Dashboard
                </Button>
                <Button variant="subtle" fullWidth justify="start" color="gray">
                  Analytics
                </Button>
                <Button variant="subtle" fullWidth justify="start" color="gray">
                  Settings
                </Button>
                <Button variant="subtle" fullWidth justify="start" color="gray">
                  Users
                </Button>
              </Stack>
            </Paper>

            {/* Main content */}
            <Stack gap="xl" style={{ flex: 1 }}>
              {/* Hero */}
              <Paper
                data-onboarding-tour-id="hero"
                p="xl"
                radius="md"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              >
                <Title order={3} c="white" mb="xs">
                  Responsive Onboarding Tour
                </Title>
                <Text c="rgba(255,255,255,0.85)" size="sm" maw={500}>
                  Each step in this tour uses different responsive breakpoints for popover position.
                  Resize the browser window and navigate through the steps to see the popover jump
                  between positions at different screen widths.
                </Text>
              </Paper>

              {/* Cards row */}
              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
                <Card
                  data-onboarding-tour-id="card-left"
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Badge color="blue" variant="light" mb="sm">
                    base: bottom, sm: right
                  </Badge>
                  <Text fw={500} mb={4}>
                    Feature Card
                  </Text>
                  <Text size="sm" c="dimmed">
                    The popover appears at the bottom on mobile and to the right on sm+.
                  </Text>
                </Card>

                <Card
                  data-onboarding-tour-id="card-center"
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Badge color="grape" variant="light" mb="sm">
                    base: top, md: bottom
                  </Badge>
                  <Text fw={500} mb={4}>
                    Analytics Card
                  </Text>
                  <Text size="sm" c="dimmed">
                    The popover is on top on small screens, at the bottom on md+.
                  </Text>
                </Card>

                <Card
                  data-onboarding-tour-id="card-right"
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Badge color="teal" variant="light" mb="sm">
                    base: bottom, lg: left
                  </Badge>
                  <Text fw={500} mb={4}>
                    Settings Card
                  </Text>
                  <Text size="sm" c="dimmed">
                    The popover only switches at the lg breakpoint.
                  </Text>
                </Card>
              </SimpleGrid>

              {/* Bottom banner */}
              <Paper
                data-onboarding-tour-id="bottom-banner"
                p="xl"
                radius="md"
                style={{
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                }}
              >
                <Grid align="center">
                  <Grid.Col span={{ base: 12, sm: 8 }}>
                    <Title order={4} c="white" mb={4}>
                      Multi-breakpoint positioning
                    </Title>
                    <Text size="sm" c="rgba(255,255,255,0.85)">
                      This step uses three breakpoints: top on base, right on sm, top again on lg.
                      Widen and narrow the browser to see all three positions.
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 4 }}>
                    <Group justify="end">
                      <Badge size="lg" color="dark" variant="filled">
                        base: top / sm: right / lg: top
                      </Badge>
                    </Group>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </OnboardingTour>
  );
}
