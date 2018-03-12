const path = require('path');
module.exports = {
  entry: {
    "index":__dirname + "/src/public/js/index.js", //已多次提及的唯一入口文件
  },
  output: {
    path:path.resolve(__dirname,"/build/public/js/"),
    filename: "[name].js"
  },
  externals: {
      jquery: 'window.$'
  },
  module: {
    rules: [{
      test: /\.js$/,
        use: {
            loader: "babel-loader"
        },
        exclude: /node_modules/
    }]
  }
}