const webpack = require("webpack");
const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./index.js"
  },
  output: {
    path: resolve(__dirname, "/dist"),
    filename: [name].js,
    chunkFilename: [name].js
  },
  devServer: {
    hot: true,
    contentBase: "./dist",
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugin: [new webpack.HotModuleReplacementPlugin(), new htmlWebpackPlugin()]
};
