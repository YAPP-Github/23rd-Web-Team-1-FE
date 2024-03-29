const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  rules: {
    quotes: [ERROR, 'single'],
    eqeqeq: [ERROR, 'always', { null: 'ignore' }],
    curly: ERROR,
    yoda: ERROR,
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'array-bracket-newline': [ERROR, { multiline: true }],
    'array-bracket-spacing': [ERROR, 'never'],
    'array-callback-return': [ERROR, { allowImplicit: true }],
    'arrow-parens': OFF,
    'arrow-spacing': ERROR,
    'block-spacing': ERROR,
    'brace-style': ERROR,
    'default-case-last': ERROR,
    'default-param-last': ERROR,
    'eol-last': [ERROR, 'always'],
    'key-spacing': [ERROR, { afterColon: true, beforeColon: false }],
    'keyword-spacing': ERROR,
    'lines-between-class-members': ERROR,
    'max-len': [ERROR, { code: 100, ignoreComments: true }],
    'max-lines': [ERROR, 250],
    'max-lines-per-function': [ERROR, { max: 150, skipBlankLines: true, skipComments: true }],
    'max-nested-callbacks': [ERROR, 4],
    'max-params': [ERROR, 5],
    'newline-after-var': WARN,
    'no-alert': ERROR,
    'no-await-in-loop': ERROR,
    'no-bitwise': ERROR,
    'no-confusing-arrow': ERROR,
    'no-multiple-empty-lines': [ERROR, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-console': ERROR,
    'no-continue': ERROR,
    'no-debugger': WARN,
    'no-empty': [ERROR, { allowEmptyCatch: true }],
    'no-empty-pattern': OFF,
    'no-extra-boolean-cast': ERROR,
    'no-extra-semi': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-multi-spaces': ERROR,
    'no-nested-ternary': ERROR,
    'no-implicit-coercion': ERROR,
    'no-param-reassign': ERROR,
    'no-throw-literal': ERROR,
    'no-trailing-spaces': ERROR,
    'no-undef': ERROR,
    'no-underscore-dangle': OFF,
    'no-unneeded-ternary': ERROR,
    'no-unsafe-negation': ERROR,
    'no-else-return': [ERROR, { allowElseIf: false }],
    'no-unused-vars': [
      ERROR,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-var': ERROR,
    'padding-line-between-statements': [
      ERROR,
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-arrow-callback': ERROR,
    'prefer-const': ERROR,
    'prefer-promise-reject-errors': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': OFF,
    'prefer-template': ERROR,
    'object-curly-newline': [ERROR, { consistent: true }],
    'object-curly-spacing': [ERROR, 'always'],
    'space-before-blocks': ERROR,
    'template-tag-spacing': ERROR,
    'use-isnan': ERROR,
    'valid-typeof': ERROR,
    'require-await': ERROR,
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        'no-console': OFF,
        'max-lines': OFF,
        'max-lines-per-function': OFF,
        'max-nested-callbacks': OFF,
      },
    },
  ],
};
