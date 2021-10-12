const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    dom: path.resolve(__dirname, './scripts/services/dom.js'),
    handlers: path.resolve(__dirname, './scripts/directives/handlers.js'),
    storage: path.resolve(__dirname, './scripts/services/storage.js'),
    api: path.resolve(__dirname, './scripts/network/api.js'),
    validator: path.resolve(__dirname, './scripts/services/validator.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    // static: path.resolve(__dirname, 'dist'),
    port: 5001, //default 8080
    open: true,
    hot: true,
    // watchContentBase: true,
  },

  //loaders
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
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
