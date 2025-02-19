import React from 'react';
import { render, tests } from '@mantine-tests/core';
import { OnboardingTour, OnboardingTourProps, OnboardingTourStylesNames } from './OnboardingTour';

const defaultProps: OnboardingTourProps = {};

describe('@mantine/core/OnboardingTour', () => {
  tests.itSupportsSystemProps<OnboardingTourProps, OnboardingTourStylesNames>({
    component: OnboardingTour,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/OnboardingTour',
    stylesApiSelectors: ['focused'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<OnboardingTour />);
    expect(container.querySelector('.mantine-OnboardingTour-root')).toHaveStyle({
      perspective: '500px',
    });
  });
});
