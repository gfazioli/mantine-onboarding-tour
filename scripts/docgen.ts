import path from 'path';
import { generateDeclarations } from 'mantine-docgen-script';

const getComponentPath = (componentPath: string) =>
  path.join(process.cwd(), 'package/src', componentPath);

generateDeclarations({
  componentsPaths: [
    getComponentPath('FocusReveal.tsx'),
    getComponentPath('FocusRevealGroup/FocusRevealGroup.tsx'),
    getComponentPath('FocusRevealPopoverContent/FocusRevealPopoverContent.tsx'),
  ],
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs'),
});
