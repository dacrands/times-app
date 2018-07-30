const path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'NYT app'
    }),
    new webpack.EnvironmentPlugin(['API_KEY'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: [
                /node_modules/,
              ],
              use: ['babel-loader']
          },
          {
            test: /\.(scss|css)$/,
            use: [
              process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },

          {
            test: /\.(png|jpg|gif)$/,
            use: [
              'file-loader'
            ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader'              
            }, 
            {
              loader: 'react-svg-loader'
            }
          ]
        }
      ]
  },
  devServer: {
    historyApiFallback: true,
  },
};