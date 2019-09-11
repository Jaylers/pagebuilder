const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    demo: './src/index',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'static/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: './index.html',
    }),
  ],
  devServer: {
    contentBase: 'build',
    port: 3000,
  },
};
