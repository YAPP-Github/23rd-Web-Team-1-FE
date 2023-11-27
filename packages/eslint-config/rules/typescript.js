const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/array-type': [ERROR, { default: 'array-simple' }],
    '@typescript-eslint/ban-ts-comment': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/member-ordering': [
      ERROR,
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-empty-interface': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-inferrable-types': WARN,
    '@typescript-eslint/no-non-null-asserted-optional-chain': WARN,
    '@typescript-eslint/no-non-null-assertion': WARN,
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      { ignoreRestSiblings: true, argsIgnorePattern: '^_', args: 'none' },
    ],
    '@typescript-eslint/no-use-before-define': OFF,
  },
};
