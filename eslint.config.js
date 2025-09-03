import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...pluginReactConfig,
    languageOptions: {
      ...pluginReactConfig.languageOptions,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
