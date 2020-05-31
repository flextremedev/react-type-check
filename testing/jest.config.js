module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/testing/tsconfig.test.json',
    },
  },
  rootDir: '../',
};
