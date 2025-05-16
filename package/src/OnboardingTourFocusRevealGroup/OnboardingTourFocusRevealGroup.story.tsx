import React from 'react';
import { Center, Stack, Title } from '@mantine/core';
import { Testimonials } from '../../../docs/demos/Testimonials';
import { OnboardingTourFocusReveal } from '../OnboardingTourFocusReveal/OnboardingTourFocusReveal';

export default {
  title: 'OnboardingTourFocusReveal.Group',
  args: {},
  argTypes: {},
};

export function DefaultFocused() {
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
          <OnboardingTourFocusReveal>
            <Testimonials testimonial={0} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal>
            <Testimonials testimonial={1} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal>
            <Testimonials testimonial={2} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '200px' }} />
      </Stack>
    </OnboardingTourFocusReveal.Group>
  );
}

export function GroupedFocused() {
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
          <OnboardingTourFocusReveal>
            <Testimonials testimonial={0} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal defaultFocused={false}>
            <Testimonials testimonial={1} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <OnboardingTourFocusReveal>
            <Testimonials testimonial={2} />
          </OnboardingTourFocusReveal>
        </Center>

        <div style={{ height: '200px' }} />
      </Stack>
    </OnboardingTourFocusReveal.Group>
  );
}
