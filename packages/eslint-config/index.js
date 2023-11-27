module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    ...[
      './rules/base.js',
      './rules/import.js',
      './rules/typescript.js',
      // './next.js',
    ].map(require.resolve),
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
};
