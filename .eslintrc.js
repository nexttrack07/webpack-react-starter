module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  settings: {
    react: {
      version: '16.6.3',
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
  },
};
