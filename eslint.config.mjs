import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import templateParserBase from '@angular-eslint/template-parser';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "@angular-eslint": angular,
      "@angular-eslint/template": angularTemplate,
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
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
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
    languageOptions: {
      parser: templateParserBase,  // Add this line
    },
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
];