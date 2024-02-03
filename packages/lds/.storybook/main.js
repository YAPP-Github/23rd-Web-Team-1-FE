import { join, dirname } from 'path';

import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
    config.plugins?.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin());

    config.module?.rules?.forEach((rule) => {
      if (
        typeof rule !== 'string' &&
        rule &&
        rule.test instanceof RegExp &&
        rule.test.test('test.css')
      ) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    config.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false,
          },
        },
      ],
    });

    config.optimization = {
      splitChunks: {
        chunks: 'async',
        minSize: 30 * 1024,
        maxSize: 1024 * 1024,
      },
    };
    config.performance = {
      maxAssetSize: 1024 * 1024,
      maxEntrypointSize: 1024 * 1024,
    };

    return config;
  },
};

export default config;
