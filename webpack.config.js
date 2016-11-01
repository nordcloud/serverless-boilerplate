const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'fnHello/handler': './fnHello/handler.js'
  },
  target: 'node',
  module: {
    loaders: [
      { test: /\.json/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: '.env' }
    ])
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};
