import React, { useEffect, useState } from 'react';
import { isElement, useProps } from '@mantine/core';
import { useOnboardingTourContext } from '../OnboardingTour.context';
import { OnboardingTourFocusReveal } from '../OnboardingTourFocusReveal/OnboardingTourFocusReveal';
import { OnboardingTourPopoverContentBaseProps } from '../OnboardingTourPopoverContent';
import { OnboardingTourPopoverContent } from '../OnboardingTourPopoverContent/OnboardingTourPopoverContent';

export interface OnboardingTourTargetProps {
  /** The `data-onboarding-tour-id` attribute of the target element */
  id: string;

  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

const defaultProps: Partial<OnboardingTourTargetProps> = {
  refProp: 'ref',
};

export function OnboardingTourTarget(props: OnboardingTourTargetProps) {
  const { children, id, refProp, ...others } = useProps(
    'OnboardingTourTarget',
    defaultProps,
    props
  );

  const ctx = useOnboardingTourContext();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (ctx && ctx.selectedStepId === id) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }, [ctx]);

  if (!isElement(children)) {
    throw new Error(
      'OnboardingTour.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  if (!focused) {
    return children;
  }

  return (
    <OnboardingTourFocusReveal
      {...ctx.focusRevealProps}
      popoverContent={
        <OnboardingTourPopoverContent
          tourController={ctx}
          onOnboardingTourClose={ctx.onOnboardingTourClose}
          {...(others as unknown as OnboardingTourPopoverContentBaseProps)}
          {...ctx}
        />
      }
      focused
      transitionProps={{ duration: 0, exitDuration: 0 }}
    >
      {children}
    </OnboardingTourFocusReveal>
  );
}

OnboardingTourTarget.displayName = 'OnboardingTourTarget';
