import nextJest from 'next/jest';
import type { Config } from '@jest/types';

const createJestConfig = nextJest({ dir: './src' });

const customJestConfig: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // moduleNameMapper: {},
  testPathIgnorePatterns: ['<rootDir>/.next/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
};

const config = createJestConfig(customJestConfig);

export default config;
