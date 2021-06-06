const path = require('path');

'use strict';
module.exports = {
  target: 'web',
  mode: 'development',     // set mode option, 'development' or 'production'
  entry: {
    index: './src/index.js',
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: "[name]/[name].js",
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    port: 8080,
    // proxy: {
    //   "/api": {
    //     target: "https://server.example.com"
    //   }
    // }
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