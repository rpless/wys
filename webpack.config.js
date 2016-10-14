var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  devtool: 'source-map',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'http://localhost:8080/build/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.png|\.svg$/,
        loaders: ['file-loader']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
