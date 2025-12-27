module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleFileExtensions: ['ts', 'html', 'js'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
  },
};
