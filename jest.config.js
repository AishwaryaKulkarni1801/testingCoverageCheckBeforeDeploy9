const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  // Use jest-preset-angular for Angular-specific configuration
  preset: 'jest-preset-angular',
  
  // Setup file to configure Jest environment for Angular
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  
  // Test environment
  testEnvironment: 'jsdom',
  
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  
  // Transform files with ts-jest
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: 'tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  
  // Module name mapping for absolute imports (if any)
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
  },
  
  // Resolve modules
  moduleDirectories: ['node_modules', '<rootDir>'],
  
  // Test match patterns
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(ts|js)',
    '<rootDir>/src/**/*.(spec|test).(ts|js)'
  ],
  
  // Files to ignore during testing
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/cypress/',
    '<rootDir>/e2e/'
  ],
  
  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/test.ts',
    '!src/environments/**'
  ],
  
  // Coverage output directory
  coverageDirectory: 'coverage',
  
  // Coverage reporters
  coverageReporters: ['html', 'text-summary', 'lcov'],
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Restore mocks after each test
  restoreMocks: true,
  
  // Global test timeout
  testTimeout: 60000,
  
  // Verbose output for debugging
  verbose: false,
  
  // Error on deprecated features
  errorOnDeprecated: true,
};