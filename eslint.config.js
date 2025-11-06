// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
    },
    rules: {
      // Angular-specific rules
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      
      // Code quality rules
      "no-console": "error",                    // Remove console.log, console.warn, etc.
      "no-debugger": "error",                   // Remove debugger statements
      "no-alert": "error",                      // Remove alert() calls
      "no-unused-vars": "off",                  // Turn off JS version (conflicts with TS)
      "@typescript-eslint/no-unused-vars": [    // Use TS version instead
        "error",
        { 
          "argsIgnorePattern": "^_",            // Allow unused params starting with _
          "varsIgnorePattern": "^_"             // Allow unused vars starting with _
        }
      ],
      
      // Code style rules
      "prefer-const": "error",                  // Use const when variable is never reassigned
      "no-var": "error",                        // Use let/const instead of var
      "eqeqeq": "error",                        // Use === instead of ==
      "curly": "error",                         // Always use braces for if/for/while
      
      // TypeScript-specific rules
      "@typescript-eslint/no-explicit-any": "warn",           // Warn about 'any' type usage
      "@typescript-eslint/no-non-null-assertion": "warn",     // Warn about ! operator
      
      // Import rules
      "no-duplicate-imports": "error",          // Prevent duplicate imports
      
      // Angular best practices
      "@angular-eslint/no-empty-lifecycle-method": "error",   // Remove empty lifecycle methods
      "@angular-eslint/use-lifecycle-interface": "error",     // Implement lifecycle interfaces
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      // Angular template rules
      "@angular-eslint/template/no-negated-async": "error",     // Avoid !(async | async)
      "@angular-eslint/template/use-track-by-function": "error", // Use trackBy in *ngFor
      "@angular-eslint/template/cyclomatic-complexity": [       // Limit template complexity
        "error", 
        { "maxComplexity": 10 }
      ],
      
      // Accessibility rules
      "@angular-eslint/template/alt-text": "error",             // Require alt text for images
      "@angular-eslint/template/click-events-have-key-events": "error", // Keyboard accessibility
      "@angular-eslint/template/mouse-events-have-key-events": "error",  // Keyboard accessibility
    },
  }
);
