import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './src' });

const customJestConfig: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@__server__/(.*)$': '<rootDir>/src/__server__/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', 'node_modules/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};

const config = createJestConfig(customJestConfig);

export default config;
