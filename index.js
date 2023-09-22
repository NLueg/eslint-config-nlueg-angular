module.exports = {
    "root": true,
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": [
                    "tsconfig.json"
                ],
                "createDefaultProgram": true
            },
            "plugins": [
                "@typescript-eslint",
                "simple-import-sort",
                "unused-imports",
                "import",
                "prettier",
                "rxjs",
                "rxjs-angular"
            ],
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@angular-eslint/recommended",
                "plugin:@angular-eslint/template/process-inline-templates",
                "plugin:prettier/recommended",
                "plugin:rxjs/recommended"
            ],
            "rules": {
                "prettier/prettier": [
                    "error",
                    {
                        "singleQuote": true,
                        "useTabs": false,
                        "tabWidth": 2,
                        "semi": true,
                        "bracketSpacing": true,
                        "endOfLine": "auto"
                    }
                ],
                "rxjs/no-implicit-any-catch": "off",
                "rxjs/no-ignored-observable": "error",
                "rxjs/no-sharereplay": "off",
                "rxjs/throw-error": "error",
                "simple-import-sort/imports": "error",
                "simple-import-sort/exports": "error",
                "import/first": "error",
                "import/newline-after-import": "error",
                "import/no-duplicates": "error",
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "prefix": "app",
                        "style": "kebab-case",
                        "type": "element"
                    }
                ],
                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        "prefix": "app",
                        "style": "camelCase",
                        "type": "attribute"
                    }
                ],
                "@angular-eslint/component-class-suffix": [
                    "error",
                    {
                        "suffixes": [
                            "Component",
                            "Page"
                        ]
                    }
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
                        "vars": "all",
                        "varsIgnorePattern": "^_",
                        "args": "after-used",
                        "argsIgnorePattern": "^_"
                    }
                ],
                "@angular-eslint/no-conflicting-lifecycle": "error",
                "@angular-eslint/use-lifecycle-interface": "error",
                "@typescript-eslint/member-delimiter-style": ["error", {
                    "multiline": {
                        "delimiter": "semi",
                        "requireLast": true
                    },
                    "singleline": {
                        "delimiter": "semi",
                        "requireLast": false
                    }
                }],
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-unused-expressions": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/semi": "warn",
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
                "radix": "error"
            }
        },
        {
            "files": [
                "*.html"
            ],
            "plugins": ["prettier"],
            "extends": [
                "plugin:@angular-eslint/template/recommended",
                "plugin:prettier/recommended"
            ],
            "rules": {
                "prettier/prettier": [
                    "error",
                    {
                        "singleQuote": true,
                        "useTabs": false,
                        "tabWidth": 2,
                        "semi": true,
                        "bracketSpacing": true,
                        "endOfLine": "auto",
                        "parser": "angular"
                    }
                ]
            }
        }
    ]
}
