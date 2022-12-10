module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error', 2,
    ],
    'linebreak-style': [
      'error', 'unix',
    ],
    quotes: [
      'error', 'single',
    ],
    semi: [
      'error', 'always',
    ],
    'comma-dangle': [
      'error', {
        arrays: 'always',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'array-element-newline': [
      'error', {
        ArrayExpression: { minItems: 3, },
        ArrayPattern: { minItems: 3, },
      },
    ],
    'array-bracket-newline': [
      'error', { minItems: 1, },
    ],
    'array-bracket-spacing': [
      'error', 'always',
    ],
    'object-property-newline': 'error',
    'object-curly-newline': [
      'error', {
        ObjectExpression: { multiline: true, },
        ObjectPattern: { multiline: true, },
        ImportDeclaration: 'never',
        ExportDeclaration: { minProperties: 3, },
      },
    ],
    'object-curly-spacing': [
      'error', 'always',
    ],
    'prefer-const': 'error',
    'no-unused-vars': 'error',
  },
};
