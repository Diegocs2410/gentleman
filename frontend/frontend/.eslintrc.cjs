module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'none',
        asyncArrow: 'always'
      }
    ]
  }
}
