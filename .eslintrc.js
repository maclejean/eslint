module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es7": true
    },
    "plugins": ["react"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 7
    },
    "extends": ["airbnb", "plugin:prettier/recommended",
        "plugin:react/recommended",
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": ['error', { extensions: ['.js', '.jsx'] }],
        "react/jsx-uses-react": 1,
    }
};