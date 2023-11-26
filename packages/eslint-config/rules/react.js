const OFF = 0;
const ERROR = 2;

module.exports = {
  rules: {
    'react/destructuring-assignment': OFF,
    'react/display-name': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
    'react/jsx-no-target-blank': ERROR,
    'react/no-unused-prop-types': OFF,
    'react/require-default-props': OFF,
    'react/no-string-refs': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/no-typos': ERROR,
    'react/no-unescaped-entities': OFF,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/jsx-indent': OFF,
    'react/jsx-closing-tag-location': OFF,
  },
};
