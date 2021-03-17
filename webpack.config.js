


module.exports = {

  entry: {
    main:"./src/index.js",
   vendor:"./src/vendor.js",
},

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