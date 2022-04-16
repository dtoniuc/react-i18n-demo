const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};
