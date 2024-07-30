const { error } = require('console');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'implicit-arrow-linebreak': 'off',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    'linebreak-style': 'off',
    'max-len': ['error', { ignoreComments: true, code: 120 }],
    'object-curly-newline': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
