import type { Config } from '@jest/types';

const customJestConfig: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '/node_modules/'],
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

export default customJestConfig;
