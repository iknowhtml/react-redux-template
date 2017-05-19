module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/prop-types': 0,
    'class-methods-use-this': [1, { exceptMethods: ['renderField'] }],
  },
  plugins: ['react', 'jsx-a11y', 'import', 'eslint-plugin-html'],
  env: {
    browser: true,
    node: true,
  },
};
