import { join, dirname } from 'path';

import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {
      fastRefresh: true,
    },
  },
  docs: {
    autodocs: 'tag',
  },
  babel: (config) => {
    return {
      ...config,
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    };
  },
  webpackFinal: (config) => {
    return {
      ...config,
      plugins: [...config.plugins, new VanillaExtractPlugin()],
    };
  },
};

export default config;
