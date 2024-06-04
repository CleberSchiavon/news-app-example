import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  testTimeout: 30000,
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};

export default config;
