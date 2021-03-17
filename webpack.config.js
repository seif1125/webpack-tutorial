const path=require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
 const { merge } = require("webpack-merge");
module.exports = {

  entry: "./src/index.js",
 
  plugins: [
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader","sass-loader"],
      },
    ],
  },
};