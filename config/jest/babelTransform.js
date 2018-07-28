'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  plugins: ["transform-amd-to-commonjs"],
  presets: [require.resolve('babel-preset-react-app')],
  
});
