const config = {
  verbose: true,
  collectCoverage: true,
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testRegex: '(/__(tests|specs)__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

export default config;
