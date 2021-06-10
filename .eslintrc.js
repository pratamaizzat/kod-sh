module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/**/*.js'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
