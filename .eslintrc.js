module.exports = {
  root: true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    // "jquery": true,
    // "mocha": true,
    "node": true
  },
  // "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "html",
    "react"
  ],
}