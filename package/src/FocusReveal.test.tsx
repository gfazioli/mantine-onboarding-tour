import React from 'react';
import { render, tests } from '@mantine-tests/core';
import { FocusReveal, FocusRevealProps, FocusRevealStylesNames } from './FocusReveal';

const defaultProps: FocusRevealProps = {};

describe('@mantine/core/FocusReveal', () => {
  tests.itSupportsSystemProps<FocusRevealProps, FocusRevealStylesNames>({
    component: FocusReveal,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/FocusReveal',
    stylesApiSelectors: ['focused'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<FocusReveal />);
    expect(container.querySelector('.mantine-FocusReveal-root')).toHaveStyle({
      perspective: '500px',
    });
  });
});
