module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['jsx-a11y', 'react'],
  env: {
    browser: true,
    node: true,
  },

  rules: {
    'max-len': 0,
    'react/prefer-stateless-function': 0,
    'no-nested-ternary': 0,
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },
};
