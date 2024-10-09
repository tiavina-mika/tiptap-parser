import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/dist",
        "**/node_modules/",
        "**/.eslintrc.cjs",
        "**/node_modules",
        "**/.eslintrc.cjs",
        "**/.prettier.js",
        "**/config.overrides.js",
        "**/types",
        "**/build",
        "**/vite.config.ts",
    ],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
)), {
    plugins: {
        "react-refresh": reactRefresh,
        "prefer-arrow-functions": preferArrowFunctions,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            tsconfigRootDir: "E:\\my-libs\\tiptap-parser",
            project: "./tsconfig.json",
        },
    },

    rules: {
        "prettier/prettier": ["off", {
            singleQuote: true,
        }],

        "react/no-unknown-property": ["error", {
            ignore: ["css"],
        }],

        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],

        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "no-await-in-loop": "off",
        "import/no-cycle": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "prefer-template": "off",
        "@typescript-eslint/no-explicit-any": 0,
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
        "import/prefer-default-export": "off",
        "global-require": "off",
        "@typescript-eslint/no-shadow": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "react/no-unescaped-entities": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "react/function-component-definition": "off",
        "react/prop-types": "off",
        "eslint-comments/no-unused-disable": "warn",
        "max-len": "off",
        "consistent-return": "off",
        "react/no-array-index-key": "off",
        "no-restricted-syntax": "off",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",

        "prefer-arrow-functions/prefer-arrow-functions": ["warn", {
            allowNamedFunctions: false,
            classPropertiesAllowed: false,
            disallowPrototype: false,
            returnStyle: "unchanged",
            singleReturnOnly: false,
        }],
    },
}];