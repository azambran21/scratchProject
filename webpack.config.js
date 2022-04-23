const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { src: './client/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname),
    },
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(__dirname, './index.html'),
    }),
  ],
};
