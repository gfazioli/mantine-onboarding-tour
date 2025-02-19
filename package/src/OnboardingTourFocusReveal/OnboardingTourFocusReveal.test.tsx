import React from 'react';
import { render, tests } from '@mantine-tests/core';
import {
  OnboardingTourFocusReveal,
  OnboardingTourFocusRevealProps,
  OnboardingTourFocusRevealStylesNames,
} from './OnboardingTourFocusReveal';

const defaultProps: OnboardingTourFocusRevealProps = {};

describe('@mantine/core/OnboardingTourFocusReveal', () => {
  tests.itSupportsSystemProps<OnboardingTourFocusRevealProps, OnboardingTourFocusRevealStylesNames>(
    {
      component: OnboardingTourFocusReveal,
      props: defaultProps,
      styleProps: true,
      children: true,
      classes: true,
      id: true,
      refType: HTMLDivElement,
      displayName: '@mantine/core/OnboardingTourFocusReveal',
      stylesApiSelectors: ['focused'],
    }
  );

  it('supports perspective prop', () => {
    const { container } = render(<OnboardingTourFocusReveal />);
    expect(container.querySelector('.mantine-OnboardingTourFocusReveal-root')).toHaveStyle({
      perspective: '500px',
    });
  });
});
