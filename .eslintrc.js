module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['eslint:recommended', 'plugin:@angular-eslint/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {
        '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'kb', style: 'camelCase' }],
        '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'kb', style: 'kebab-case' }],
        'max-len': [
          'error',
          {
            ignorePattern: '^import .*',
            ignoreUrls: true,
            code: 150,
          },
        ],
        "array-element-newline": [
          'error', {
          'ArrayExpression': 'consistent',
          'ArrayPattern': { 'minItems': 3 },
          }
        ]
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {},
};
