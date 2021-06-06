const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {WebpackPwaManifest} = require('webpack-pwa-manifest');
// const CopyPlugin = require('copy-webpack-plugin');

'use strict';
module.exports = {
  mode: 'production',     // set mode option, 'development' or 'production'
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: "[name]/[name].js",
  },
  module: {
    rules: require("./rules.config"),
  },
  resolve: {
    extensions: [
      '.css',
      '.js', 
      '.jsx',
      '.scss',
      '.json',
      '.png',
      '.jpeg',
      '.gif',
      '.svg',
      '.ico'
    ],
    alias: require("./aliases.config")
  },
  plugins: require("./plugins.config")
};