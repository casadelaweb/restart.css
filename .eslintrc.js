module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'amd': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error', 2
    ],
    'linebreak-style': [
      'error', 'windows'
    ],
    'quotes': [
      'error', 'single'
    ],
    'semi': [
      'error', 'always'
    ],
    'comma-dangle': [
      'error', 'never'
    ],
    'array-element-newline': [
      'error', {
        'minItems': 4
      }
    ],
    'array-bracket-newline': [
      'error', 'always'
    ],
    'object-property-newline': 'error',
    'object-curly-newline': [
      'error', {
        'minProperties': 1
      }
    ]
  }
};
