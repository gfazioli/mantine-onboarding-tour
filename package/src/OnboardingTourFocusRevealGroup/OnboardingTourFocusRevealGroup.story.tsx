import React from 'react';
import { Center, Stack, Title } from '@mantine/core';
import { Testimonials } from '../../../docs/demos/Testimonials';
import { OnboardingTourFocusReveal } from '../OnboardingTourFocusReveal/OnboardingTourFocusReveal';

export default {
  title: 'OnboardingTourFocusReveal.Group',
  args: {
    disableTargetInteraction: false,
  },
  argTypes: {
    disableTargetInteraction: { control: { type: 'boolean' } },
  },
};

export function DefaultFocused(props: React.ComponentProps<typeof OnboardingTourFocusReveal>) {
  return (
    <OnboardingTourFocusReveal.Group focusedMode="scale">
      <Stack>
        <Center>
          <Title order={3}>
            Default focused state is set to `true`, card below is focused by default
          </Title>
        </Center>

        <div style={{ height: '1800px' }} />

        <Center>
          <OnboardingTourFocusReveal {...props}>
            <Testimonials testimonial={0} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal {...props}>
            <Testimonials testimonial={1} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal {...props}>
            <Testimonials testimonial={2} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '200px' }} />
      </Stack>
    </OnboardingTourFocusReveal.Group>
  );
}

export function GroupedFocused(props: React.ComponentProps<typeof OnboardingTourFocusReveal>) {
  return (
    <OnboardingTourFocusReveal.Group focusedMode="scale">
      <Stack>
        <Center>
          <Title order={3}>
            Default focused state is set to `true`, card below is focused by default
          </Title>
        </Center>

        <div style={{ height: '1800px' }} />

        <Center>
          <OnboardingTourFocusReveal {...props}>
            <Testimonials testimonial={0} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal defaultFocused={false} {...props}>
            <Testimonials testimonial={1} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal {...props}>
            <Testimonials testimonial={2} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '200px' }} />
      </Stack>
    </OnboardingTourFocusReveal.Group>
  );
}
