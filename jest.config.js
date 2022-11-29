module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/setup-jest.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest-after-env.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native-community|@react-native|react-native))',
  ],
  testRegex: '/__tests__/.+\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^src(\\/?.*)$': '<rootDir>/src/$1',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js'
  },
  coverageThreshold: {
    global: {
      statements: 60,
    },
  },
  collectCoverageFrom: ['**/*.tsx', '**/*.ts', '!src/assets/**'],
  collectCoverage: true,
  // testResultsProcessor: 'jest-sonar-reporter', //TODO: Need to enable once we setup sonar
  testTimeout: 20000
};
