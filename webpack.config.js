const path=require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: {
    main:"./src/index.js",
   vendor:"./src/vendor.js",
},

  plugins: [
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ],
  module: {
    rules: [
        
       {
        test: /\.html$/,
        use:["html-loader"]
      },
        {
        test: /\.(png|jpe?g|gif)$/,
        use:{
        loader: 'file-loader',
        options: {
          name:"[name]",
          outputPath: 'images',
        },
      }
    }
    ],
  },
};