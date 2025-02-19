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

export type FocusRevealFocusedMode = (typeof focusRevealModes)[number];

export function getAllFocusRevealModes(): string {
  return focusRevealModes.join(' | ');
}
