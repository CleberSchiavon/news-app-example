import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^config/(.*)$': '<rootDir>/config/$1',
    '^mocks/(.*)$': '<rootDir>/modules/$1',
    '^modules/(.*)$': '<rootDir>/modules/$1',
    '^shared/(.*)$': '<rootDir>/shared/$1',
    '^types/(.*)$': '<rootDir>/types/$1',
  },
};

export default config;
