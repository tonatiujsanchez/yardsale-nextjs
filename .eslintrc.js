

// {
//   "extends": [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:prettier/recommended"
//   ],
//   "plugins": ["react", "react-hooks"],
//   "parserOptions": {
//     "ecmaVersion": 2021,
//     "sourceType": "module",
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
//   "env": {
//     "es6": true,
//     "browser": true,
//     "node": true
//   },
//   "rules": {
//     "no-console": "warn",
//     "no-unused-vars": "warn",
//     "semi": ["error", "always"]
//   }
// }

















module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:jsx-a11/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'semi': ['error', 'always'],
    'prettier/prettier': 0
  }
};