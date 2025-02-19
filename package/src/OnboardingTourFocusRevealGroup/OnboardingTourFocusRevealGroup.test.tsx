import React from 'react';
import { render, tests } from '@mantine-tests/core';
import {
  OnboardingTourFocusRevealGroup,
  OnboardingTourFocusRevealGroupProps,
} from './OnboardingTourFocusRevealGroup';

const defaultProps: OnboardingTourFocusRevealGroupProps = {};

describe('@mantine/core/OnboardingTourFocusRevealGroup', () => {
  tests.itSupportsSystemProps<OnboardingTourFocusRevealGroupProps>({
    component: OnboardingTourFocusRevealGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/OnboardingTourFocusRevealGroup',
    stylesApiSelectors: ['root'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<OnboardingTourFocusRevealGroup />);
    expect(container.querySelector('.mantine-OnboardingTourFocusRevealGroup-root')).toHaveStyle({
      perspective: '500px',
    });
  });
});
