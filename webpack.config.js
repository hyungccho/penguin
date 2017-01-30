var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    js: ['babel-polyfill', './frontend/index.jsx']
  },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ],
    root: [
      path.resolve('./frontend')
    ]
  }
};