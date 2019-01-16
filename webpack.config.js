var path = require('path');
var webpack = require('webpack');

var debug = process.env.NODE_ENV !== "PROD";

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: debug ? 'bundle.js' : 'bundle.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        minimize: true,
        compress: true
    }),
],
};