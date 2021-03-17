const path=require('path')
const common=require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
 const { merge } = require("webpack-merge");
module.exports = merge( common,{
  mode: "production",

  output: {
    filename: "build.[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ],
 
});