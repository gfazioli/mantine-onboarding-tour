import { generateDeclarations } from 'mantine-docgen-script';
import path from 'path';

const getComponentPath = (componentPath: string) =>
  path.join(process.cwd(), 'package/src', componentPath);

generateDeclarations({
  componentsPaths: [
    getComponentPath('OnboardingTour.tsx'),
    getComponentPath('OnboardingTourTarget/OnboardingTourTarget.tsx'),
    getComponentPath('OnboardingTourFocusReveal/OnboardingTourFocusReveal.tsx'),
    getComponentPath('OnboardingTourFocusRevealGroup/OnboardingTourFocusRevealGroup.tsx'),
  ],
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs'),
});
