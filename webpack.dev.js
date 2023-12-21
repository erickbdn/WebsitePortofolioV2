/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: true,
    port: 8085,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
});
