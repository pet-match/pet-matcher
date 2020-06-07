const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build',
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true,
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader', ],
      },
      {
        test: /\.jpg?/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
    ],
  },
}