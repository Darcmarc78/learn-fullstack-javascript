module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: [ 'react' ],
  rules: {
    indent: ['error', 2, {SwitchCase: 1}],
    'linebreak-style': ['error','windows'],
    quotes: ['error','single'],
    semi: ['error','always'],
    'no-console': [
      'warn',
      { allow: ['clear','info', 'error', 'dir', 'trace'] }
    ]
  }
};
