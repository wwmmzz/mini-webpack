const path = require('path')
const webpack = require('./core/index')

const webpackConfig = {
  entry: path.join("./src/index.js"),
  output: {
    path: path.join("./dist"),
    filename: "bundle.js",
  },
  module:{
    rules:[]
  }
};

webpack(webpackConfig);