export const focusRevealModes = [
  'border',
  'elastic',
  'glow',
  'glow-blue',
  'glow-green',
  'glow-red',
  'none',
  'pulse',
  'rotate',
  'scale',
  'shake',
  'zoom',
] as const;

export type OnboardingTourFocusRevealFocusedMode = (typeof focusRevealModes)[number];

export function getAllOnboardingTourFocusRevealModes(): string {
  return focusRevealModes.join(' | ');
}
