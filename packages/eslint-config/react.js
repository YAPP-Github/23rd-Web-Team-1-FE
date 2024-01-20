module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    ...['./rules/react', './rules/react-hooks', './rules/react-query'].map(require.resolve),
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },
};
