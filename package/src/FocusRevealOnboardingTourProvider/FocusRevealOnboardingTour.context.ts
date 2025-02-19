import { createOptionalContext } from '@mantine/core';

interface FocusRevealOnboardingTourContextValue {}

export const [_FocusRevealOnboardingTourProvider, useFocusRevealOnboardingTourContext] =
  createOptionalContext<FocusRevealOnboardingTourContextValue>();
