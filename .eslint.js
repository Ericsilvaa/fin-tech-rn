module.exports = {
  env: {
    es2021: true,
    jest: true,
    'react-native/react-native': true
  },
  extends: [
    'plugin:react-hooks/recommended',
    'google',
    'plugin:react/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native',
    'prettier',
    'react-hooks'
  ],
  "rules": {
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: [2, 2, { SwitchCase: 1 }],
    camelcase: 'off',
    semi: ['error', 'never'],
    'no-unused-vars': 'off',
    'no-multi-spaces': 'error',
    'array-bracket-spacing': 1,
    'max-len': 'off',
    'space-before-function-paren': 0,
    'new-cap': 0,
    'eol-last': 0,
    "react/jsx-indent": ["error", 2],
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxBracketSameLine": false,
  "arrowParens": "avoid"
      }
    ]
  },
  // rules: {
  //   quotes: ['error', 'single', { avoidEscape: true }],
  //   camelcase: 'off',
  //   semi: ['error', 'never'],
  //   'max-len': 'off',
  //   'react/prop-types': ['error'],
  //   'react/react-in-jsx-scope': 'off',
  //   '@typescript-eslint/semi': 'off',
  //   '@typescript-eslint/no-explicit-any': ['off'],
  //   '@typescript-eslint/no-unused-vars': 'error',
  //   'require-jsdoc': 0,
  //   'comma-dangle': 0,
  //   'no-unused-vars': 'off',
  //   'no-multi-spaces': 'error',
  //   'array-bracket-spacing': 1,
  //   'computed-property-spacing': 1,
  //   'object-curly-spacing': ['off', 'never'],
  //   'space-before-function-paren': 0,
  //   'new-cap': 0,
  //   'eol-last': 0,
  //   indent: [2, 2, { SwitchCase: 1 }],
  //   'react-hooks/rules-of-hooks': 'error',
  //   'react-hooks/exhaustive-deps': 'warn'
  // },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
