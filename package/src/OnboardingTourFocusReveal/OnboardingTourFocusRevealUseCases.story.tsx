import React from 'react';
import { Button, Center, Container, Group, Paper, Title } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { Testimonials, testimonials } from '../../../docs/demos/Testimonials';
import { focusRevealModes } from './focus-reveal-modes';
import {
  OnboardingTourFocusReveal,
  OnboardingTourFocusRevealProps,
} from './OnboardingTourFocusReveal';

export default {
  title: 'OnboardingTourFocusReveal - Use cases',
  args: {
    withReveal: true,
    withOverlay: true,
    disableTargetInteraction: false,
    focusedMode: 'none',
  },
  argTypes: {
    withReveal: { control: { type: 'boolean' } },
    withOverlay: { control: { type: 'boolean' } },
    disableTargetInteraction: { control: { type: 'boolean' } },
    focusedMode: {
      control: {
        type: 'select',
      },
      options: focusRevealModes,
    },
  },
};

export function Cycle(props: OnboardingTourFocusRevealProps) {
  const [focusIndex, setFocusIndex] = React.useState(0);

  useHotkeys([
    ['ArrowRight', () => setFocusIndex(focusIndex + 1 < 4 ? focusIndex + 1 : 0)],
    ['ArrowLeft', () => setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : 3)],
  ]);

  return (
    <Container>
      <Center>
        <Title order={1}>Focus Reveal</Title>
      </Center>

      <Center>
        <Title order={2}>Mentioned</Title>
      </Center>

      <Group justify="center">
        {testimonials.map(
          (_, index) =>
            index < 4 && (
              <OnboardingTourFocusReveal
                key={`focus-reveal-${index}`}
                {...props}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
              >
                <Testimonials key={`box-${index}`} testimonial={0}>
                  <Button onClick={() => setFocusIndex(index + 1 < 4 ? index + 1 : 0)}>Next</Button>
                </Testimonials>
              </OnboardingTourFocusReveal>
            )
        )}
      </Group>
    </Container>
  );
}

export function CycleDescription(props: OnboardingTourFocusRevealProps) {
  const [focusIndex, setFocusIndex] = React.useState(0);

  useHotkeys([
    ['ArrowRight', () => setFocusIndex(focusIndex + 1 < 4 ? focusIndex + 1 : 0)],
    ['ArrowLeft', () => setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : 3)],
  ]);

  const descriptions = [
    'This is the first description.',
    'This is the second description.',
    'This is the third description.',
    'This is the fourth description.',
  ];

  return (
    <Container>
      <Center>
        <Title order={1}>Focus Reveal</Title>
      </Center>

      <Center>
        <Title order={2}>Mentioned</Title>
      </Center>

      <Group justify="center">
        {testimonials.map(
          (_, index) =>
            index < 4 && (
              <OnboardingTourFocusReveal
                key={`focus-reveal-${index}`}
                {...props}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
              >
                <Testimonials key={`box-${index}`} testimonial={0}>
                  <Button onClick={() => setFocusIndex(index + 1 < 4 ? index + 1 : 0)}>Next</Button>
                </Testimonials>
              </OnboardingTourFocusReveal>
            )
        )}
      </Group>
      <OnboardingTourFocusReveal defaultFocused withReveal={false}>
        <Paper mt={32} withBorder shadow="md" p={30} radius="md">
          {descriptions[focusIndex]}
        </Paper>
      </OnboardingTourFocusReveal>
    </Container>
  );
}
