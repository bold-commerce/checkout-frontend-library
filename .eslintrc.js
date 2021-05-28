module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    globals: {
        'require': false,
        'module': true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'quotes': ['error', 'single'],
        'eqeqeq': ['error', 'always'],
        'no-var': 'error',
        'curly': 'error',
        'indent': ['error', 4, {'SwitchCase': 1}],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'no-console': ['error']
    }
};
