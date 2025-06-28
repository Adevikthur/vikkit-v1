// ESLint configuration file for the Vikkit UI Components project
// ESLint is a static code analysis tool for identifying and fixing problems in JavaScript/TypeScript code

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

// Export the ESLint configuration using TypeScript ESLint
export default tseslint.config(
  // Global configuration that applies to all files
  { 
    ignores: ['dist'] // Ignore the dist directory (build output)
  },
  
  // Configuration for TypeScript and TypeScript React files
  {
    // Extend recommended configurations
    extends: [
      js.configs.recommended, // JavaScript recommended rules
      ...tseslint.configs.recommended, // TypeScript recommended rules
    ],
    
    // Apply this configuration to TypeScript files only
    files: ['**/*.{ts,tsx}'],
    
    // Language options for parsing and execution environment
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 features
      globals: globals.browser, // Include browser globals (window, document, etc.)
    },
    
    // Configure ESLint plugins
    plugins: {
      'react-hooks': reactHooks, // Rules for React Hooks
      'react-refresh': reactRefresh, // Rules for React Fast Refresh
    },
    
    // Define specific rules
    rules: {
      // Include recommended React Hooks rules
      ...reactHooks.configs.recommended.rules,
      
      // React Refresh rule to ensure only components are exported from files
      'react-refresh/only-export-components': [
        'warn', // Show warning instead of error
        { allowConstantExport: true }, // Allow exporting constants alongside components
      ],
    },
  }
);
