const INTERNAL_GROUPS = [
  'components',
  'constants',
  'contexts',
  'hooks',
  'pages',
  'store',
  'types',
  'utils',
];

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    JSX: 'readonly',
  },
  extends: ['@linker/eslint-config/react'],
  parserOptions: {
    project: '../../tsconfig.json',
  },
  settings: {
    next: {
      rootDir: ['services/*/'],
    },
    react: {
      version: 'detect',
    },
    'import/internal-regex': `@(${INTERNAL_GROUPS.join('|')})`,
  },
};
