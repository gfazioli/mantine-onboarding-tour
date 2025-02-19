import { createOptionalContext } from '@mantine/core';

interface FocusRevealContextValue {}

export const [_FocusRevealProvider, useFocusRevealContext] =
  createOptionalContext<FocusRevealContextValue>();
