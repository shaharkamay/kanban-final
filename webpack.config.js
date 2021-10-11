const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    port: 5001, //default 8080
    open: true,
    hot: true,
    // watchContentBase: true,
  },

  //loaders
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/, type: 'asset/resource' },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Task Manager',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
}
