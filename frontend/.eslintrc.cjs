module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Styl kodu
    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    // Vue rules
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',

    // Import rules
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
    {
      files: ['backend/**/*.ts'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
}
