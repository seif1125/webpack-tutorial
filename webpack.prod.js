const path=require('path')
const common=require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

 const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
        minify:{
          removeAttributeQuotes:true,
          collapseWhitespace:true,
          removeComments:true
        }
      }),new CleanWebpackPlugin(),
    ],
  },

  plugins: [new MiniCssExtractPlugin({ filename: "style[contenthash].css" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});