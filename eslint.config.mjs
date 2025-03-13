import angular from 'angular-eslint';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config([
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      "import": eslintPluginImport,
      "prettier": eslintPluginPrettier,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unused-imports": eslintPluginUnusedImports,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          useTabs: false,
          tabWidth: 2,
          semi: true,
          bracketSpacing: true,
          endOfLine: "auto",
        },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "@angular-eslint/component-selector": [
        "error",
        {
          prefix: "app",
          style: "kebab-case",
          type: "element",
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          prefix: "app",
          style: "camelCase",
          type: "attribute",
        },
      ],
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Component", "Page"],
        },
      ],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@angular-eslint/no-conflicting-lifecycle": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/unified-signatures": "error",
      "arrow-body-style": ["error", "as-needed"],
      "constructor-super": "error",
      "guard-for-in": "warn",
      "id-match": "warn",
      "import/no-deprecated": "warn",
      "no-caller": "error",
      "no-eval": "error",
      "no-new-wrappers": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "warn",
      "radix": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    plugins: {
      "prettier": eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          useTabs: false,
          tabWidth: 2,
          semi: true,
          bracketSpacing: true,
          endOfLine: "auto",
          parser: "angular",
        },
      ],
    },
  }
]);