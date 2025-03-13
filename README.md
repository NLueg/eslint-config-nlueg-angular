
# eslint-config-nlueg-angular

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/NLueg/eslint-config-nlueg-angular/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/eslint-config-nlueg-angular.svg)](https://www.npmjs.com/package/eslint-config-nlueg-angular)

This package includes a basic ESLint configuration for linting and formatting my Angular code.

As a basis I use [Angular ESLint](https://github.com/angular-eslint/angular-eslint), [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint), [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-rxjs](https://github.com/cartant/eslint-plugin-rxjs).
Also I include [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) and [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports) to have beautiful imports.

I use this config basically in every Angular-Project to have less smelly and well formatted code ✨

## Installation

Install the plugin with npm

```bash
  npm install eslint-config-nlueg-angular
```

Create `eslint.config.mjs` at your root folder and extend from the config: 

```js
import baseConfig from './node_modules/eslint-config-nlueg-angular/eslint.config.mjs';

export default [
...baseConfig,
];

```

You can also change some specific rules like the following:

```js
import baseConfig from './node_modules/eslint-config-nlueg-angular/eslint.config.mjs';
import angularEslintTemplate from '@angular-eslint/eslint-plugin-template';

export default [
  ...baseConfig,
  {
    plugins: {
      "@angular-eslint/template": angularEslintTemplate,
    },
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@angular-eslint/template/click-events-have-key-events": "warn",
      "@angular-eslint/template/interactive-supports-focus": "warn",
    }
  }
];
```

Ensure that you define the corresponding plugin where the specific rule is defined in.
Otherwise, it won't work to change the severity of a rule.