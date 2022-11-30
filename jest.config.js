module.exports = {
    'roots': [
        '<rootDir>/src/',
        '<rootDir>/tests/'
    ],
    'testMatch': [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    'transform': {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    'coverageThreshold': {
        'global': {
            'branches': 100,
            'functions': 100,
            'lines': 100
        }
    },
    'moduleNameMapper': {
        'src/(.*)': '<rootDir>/src/$1',
        'src': '<rootDir>/src'
    },
    'collectCoverageFrom': [
        '**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        '!**/lib/**',
        '!**/tests/**'
    ],
    'testEnvironment': 'jsdom'
};
