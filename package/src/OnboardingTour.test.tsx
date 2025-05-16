import React from 'react';
import { Button, Title } from '@mantine/core';
import { render } from '@mantine-tests/core';
import { OnboardingTourStep } from './hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTour } from './OnboardingTour';

const onboardingSteps: OnboardingTourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to the Onboarding Tour Component',
    content:
      'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
  },
  {
    id: 'my-button',
    title: 'Features',
    content: 'You can select any component by using the `data-onboarding-tour-id` attribute',
  },
];

describe('OnboardingTour', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started>
        <Title data-onboarding-tour-id="welcome" order={4}>
          A simple example of the Onboarding Tour component
        </Title>
        <Button data-onboarding-tour-id="my-button">See all testimonials</Button>
      </OnboardingTour>
    );
    expect(container).toBeTruthy();
  });
});
