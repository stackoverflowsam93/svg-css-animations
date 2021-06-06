const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("development")
        }
    }),
    new HtmlWebpackPlugin({
        template: "./entry_points/index.html",
        filename: "./index.html",
    }),
    // new HtmlWebpackPlugin({
    //     favicon: "./src/assets/images/icon-192x192.png"
    // }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].css"
    }),
];