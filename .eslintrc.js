/* eslint-disable comma-spacing */
/* eslint-disable quotes */
module.exports = {
    env: {
      browser: true,
      es6: true,
      "jest/globals": true,
    },
    parser: 'babel-eslint',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
    },
    plugins: [
      'react',
      'jest',
    ],
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './src']],
        },
      },
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "array-callback-return": 0,
      'no-plusplus': 'off',
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "object-shorthand": 0,
      "jest/valid-expect": "error",
      'react/prop-types': 0,
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
      'linebreak-style': 0, // changes the file to CRLF
      'import/prefer-default-export': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/label-has-for': 'off',
    },
  };
  