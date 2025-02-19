import React from 'react';
import { FocusRevealProps } from '../FocusReveal';
import { _FocusRevealProvider } from './FocusReveal.context';

export type FocusRevealOnboardingProviderProps = {
  focused: boolean;

  children: React.ReactNode;
};

export function FocusRevealProvider(props: FocusRevealProps) {
  const { children, focused } = props;

  const value = {};

  if (focused) {
    // Start to elaborate the children
  }

  return <_FocusRevealProvider value={value}>{children}</_FocusRevealProvider>;
}
