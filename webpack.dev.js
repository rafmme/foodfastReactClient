/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 3000;

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    open: true,
  },
  devtool: 'eval',
  cache: true,
  performance: {
    hints: false,
  },
  output: {
    pathinfo: true,
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: 'development',
    flagIncludedChunks: false,
    occurrenceOrder: false,
    sideEffects: false,
    usedExports: false,
    concatenateModules: false,
    splitChunks: {
      hidePathInfo: false,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
    },
    noEmitOnErrors: false,
    checkWasmTypes: false,
    minimize: false,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  ],
});
