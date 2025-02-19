import React from 'react';
import { render, tests } from '@mantine-tests/core';
import { FocusRevealGroup, FocusRevealGroupProps } from './FocusRevealGroup';

const defaultProps: FocusRevealGroupProps = {};

describe('@mantine/core/FocusRevealGroup', () => {
  tests.itSupportsSystemProps<FocusRevealGroupProps>({
    component: FocusRevealGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/FocusRevealGroup',
    stylesApiSelectors: ['root'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<FocusRevealGroup />);
    expect(container.querySelector('.mantine-FocusRevealGroup-root')).toHaveStyle({
      perspective: '500px',
    });
  });
});
