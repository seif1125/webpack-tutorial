const path=require('path')
const common=require('./webpack.config')


 const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [],
  module: {
    rules: {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  },
});