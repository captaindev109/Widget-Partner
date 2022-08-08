module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extension': 'off',
    "react/function-component-definition": "off",
    "import/no-extraneous-dependencies": [
      'error',
      { devDependencies: ['jest.setup.ts', '**/*.test.tsx', '**/*.spec.tsx', '**/*.test.ts', '**/*.spec.ts']},
    ],
  },
};
