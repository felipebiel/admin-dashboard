module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['warn', 4],
        'no-tabs': 'off',
        'max-len': ['warn', { code: 120, ignoreStrings: true }],
        'no-alert': 'off',
        'object-property-newline': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'require-jsdoc': 'off',
        'new-cap': 'off', // Regra desabilitada pelo uso do materialize com jquery, retirar após a remoção dessa dependencia
        'no-invalid-this': 'off',
        'brace-style': 'off',
        camelcase: 'warn',
        'object-curly-spacing': 'off',
        quotes: ['error', 'single'],
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
