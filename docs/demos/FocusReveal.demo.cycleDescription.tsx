import { useState } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials, testimonials } from './Testimonials';

function Wrapper() {
  const [focusIndex, setFocusIndex] = useState(-1);
  const MAX_TESTIMONIALS = 3;

  useHotkeys([
    [
      'ArrowRight',
      () =>
        focusIndex >= 0 && setFocusIndex(focusIndex + 1 < MAX_TESTIMONIALS ? focusIndex + 1 : 0),
    ],
    [
      'ArrowLeft',
      () =>
        focusIndex >= 0 &&
        setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : MAX_TESTIMONIALS - 1),
    ],
  ]);

  const descriptions = [
    'This is the first description.',
    'This is the second description.',
    'This is the third description.',
    'This is the fourth description.',
  ];

  return (
    <Stack justify="center" align="center">
      <Title order={1}>Multiple components Example</Title>
      <Text fs="italic">Use the arrow keys to cycle through the testimonials</Text>
      <Button onClick={() => setFocusIndex(0)}>Start</Button>

      <Group justify="center">
        {testimonials.map(
          (_, index) =>
            index < MAX_TESTIMONIALS && (
              <OnboardingTour.FocusReveal
                key={`focus-reveal-${index}`}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
                onBlur={() => setFocusIndex(-1)}
                focusedMode="zoom"
              >
                <Testimonials key={`box-${index}`} testimonial={0}>
                  <Group justify="center">
                    <Button
                      size="xs"
                      variant="gradient"
                      onClick={() => setFocusIndex(index + 1 < MAX_TESTIMONIALS ? index + 1 : 0)}
                    >
                      Next
                    </Button>
                  </Group>
                </Testimonials>
              </OnboardingTour.FocusReveal>
            )
        )}
      </Group>
      {focusIndex >= 0 && (
        <OnboardingTour.FocusReveal defaultFocused withReveal={false}>
          <Paper withBorder shadow="sm" p={16} mt={32}>
            <Group>
              <Text>{descriptions[focusIndex]}</Text>
              <Button size="xs" onClick={() => setFocusIndex(-1)}>
                Stop
              </Button>
            </Group>
          </Paper>
        </OnboardingTour.FocusReveal>
      )}
    </Stack>
  );
}

const code = `
import { useState } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

function Demo() {
  const [focusIndex, setFocusIndex] = useState(-1);
  const MAX_TESTIMONIALS = 3;

  useHotkeys([
    [
      'ArrowRight',
      () =>
        focusIndex >= 0 && setFocusIndex(focusIndex + 1 < MAX_TESTIMONIALS ? focusIndex + 1 : 0),
    ],
    [
      'ArrowLeft',
      () =>
        focusIndex >= 0 &&
        setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : MAX_TESTIMONIALS - 1),
    ],
  ]);

  const descriptions = [
    'This is the first description.',
    'This is the second description.',
    'This is the third description.',
    'This is the fourth description.',
  ];

  return (
    <Stack justify="center" align="center">
      <Title order={1}>Multiple components Example</Title>
      <Text fs="italic">Use the arrow keys to cycle through the testimonials</Text>
      <Button onClick={() => setFocusIndex(0)}>Start</Button>

      <Group justify="center">
        {testimonials.map(
          (_, index) =>
            index < MAX_TESTIMONIALS && (
              <OnboardingTour.FocusReveal
                key={\`focus-reveal-\${index}\`}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
                onBlur={() => setFocusIndex(-1)}
                focusedMode="zoom"
              >
                <Testimonials key={\`box-\${index}\`} testimonial={0}>
                  <Group justify="center">
                    <Button
                      size="xs"
                      variant="gradient"
                      onClick={() => setFocusIndex(index + 1 < MAX_TESTIMONIALS ? index + 1 : 0)}
                    >
                      Next
                    </Button>
                  </Group>
                </Testimonials>
              </OnboardingTour.FocusReveal>
            )
        )}
      </Group>
      {focusIndex >= 0 && (
        <OnboardingTour.FocusReveal defaultFocused={true} withReveal={false}>
          <Paper withBorder shadow="sm" p={16} mt={32}>
            <Group>
              <Text>{descriptions[focusIndex]}</Text>
              <Button size="xs" onClick={() => setFocusIndex(-1)}>
                Stop
              </Button>
            </Group>
          </Paper>
        </OnboardingTour.FocusReveal>
      )}
    </Stack>
  );
}
`;

export const focusRevealCycleDescription: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
