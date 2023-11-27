module.exports = {
  rules: {
    'import/newline-after-import': [2, { count: 1 }],
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external', 'unknown'], ['internal'], ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],

    // NOTE(@useonglee): 성능문제로 사용하지 않음
    'import/no-cycle': 0,
    'import/namespace': 0,
    'import/no-deprecated': 0,
    'import/no-duplicates': 0,

    // NOTE(@useonglee): 성능문제와 typescript 컴파일러가 잘해주므로 사용하지 않음
    'import/default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/export': 0,
    'import/extensions': 0,
  },
};
