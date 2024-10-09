import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import eslint from '@eslint/js';
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

export default tseslint.config(
    {
        ignores: [
            "**/dist",
            "**/node_modules/",
            "**/node_modules",
            "**/build",
            "**/vite.config.ts",
            "**/example",

            // temp files
            "old.eslintrc.cjs",
            "airbnb.mjs",
        ]
    },
    eslint.configs.recommended,
    // ...fixupConfigRules(compat.extends(
    //     "plugin:react-hooks/recommended",
    //     "airbnb",
    //     "airbnb/hooks",
    //     "airbnb-typescript",
    //     "plugin:eslint-comments/recommended",
    //     "plugin:prettier/recommended",
    // )),
  {
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        eslintPluginPrettierRecommended,
        comments.recommended,
    ],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
        globals: {
            ...globals.browser,
            // ...globals.node,
            // ...globals.jest,
        },
        parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
        // parser: tsParser,
        sourceType: "module",
        ecmaVersion: 2023,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      "prefer-arrow-functions": preferArrowFunctions,
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "prettier/prettier": ["off", {
            singleQuote: true,
        }],
        "@typescript-eslint/no-explicit-any": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "no-await-in-loop": "off",
        "import/no-cycle": "off",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "prefer-template": "off",
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
        "import/prefer-default-export": "off",
        "global-require": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "react/no-unescaped-entities": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "react/function-component-definition": "off",
        "react/prop-types": "off",
        "max-len": "off",
        "consistent-return": "off",
        "react/no-array-index-key": "off",
        "no-restricted-syntax": "off",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",      // Trailing commas for arrays with multiple lines
            "objects": "always-multiline",     // Trailing commas for objects with multiple lines
            "imports": "always-multiline",     // Trailing commas in multi-line import statements
            "exports": "always-multiline",     // Trailing commas in multi-line export statements
            "functions": "never"               // No trailing commas for function parameters
          }],
        "prefer-arrow-functions/prefer-arrow-functions": ["warn", {
            allowNamedFunctions: false,
            classPropertiesAllowed: false,
            disallowPrototype: false,
            returnStyle: "unchanged",
            singleReturnOnly: false,
        }],

        // ------------ if not using airbnb ------------ //
        "semi": ["error", "always"],
        "no-useless-return": "error",
        "require-await": "error",
        "no-unused-vars": "warn",
        "no-use-before-define": "error",
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": "error",

        // ------------ for airbnb ------------ //
        // "react/no-unknown-property": ["error", {
        //     ignore: ["css"],
        // }],
        // "eslint-comments/no-unused-disable": "warn",
    },
  },
)
