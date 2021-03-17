const path=require('path')
const common = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 const { merge } = require("webpack-merge");
module.exports = merge(common,{
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ],
 
});