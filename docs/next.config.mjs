import createMDX from '@next/mdx';
import fs from 'fs-extra';
import signale from 'signale';

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-slug'],
  },
});

let repository;

try {
  const packageJson = fs.readJsonSync('../package/package.json');
  repository = packageJson.repository.split('/').at(-1).replace('.git', '');
} catch {
  signale.error('Failed to read repository field of package/package.json\n');
  process.exit(1);
}

const basePath = process.env.NODE_ENV === 'production' ? `/${repository}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);
