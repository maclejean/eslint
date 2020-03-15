module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
    },
    plugins: ['react', 'import', 'jsx-a11y', 'prettier', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
        ecmaVersion: 6,
    },
    extends: [
        'airbnb',
        'plugin:prettier/recommended',
        'prettier/babel',
        'plugin:react/recommended',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'no-use-before-define': 1,
        'react/jsx-indent': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-indent-props': 0,
        'no-param-reassign': 1,
        'react/jsx-closing-bracket-location': [1, 'after-props'],
        'react/jsx-uses-react': 'error',
    },
};
