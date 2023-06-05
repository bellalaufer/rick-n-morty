module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        'import/prefer-default-export': 'off',
        'default-param-last': 'off',
        'consistent-return': 'off',
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': 'off',
    }
}
