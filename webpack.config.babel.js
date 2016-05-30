const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: `${__dirname}/src`
  },
  module: {
    loaders: [{
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|)$/,
      loader: 'url',
      query: {
        limit: 100000
      }
    }, {
      test: /\.css$/,
      loader: 'css!postcss'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
      inject: 'body'
    })
  ]
};