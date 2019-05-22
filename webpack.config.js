const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

const modules = {
  index: "./src/index.js"
}

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  devServer: {
    hot: false,
    historyApiFallback: true
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve("public"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }]
      },
      // SCSS Loading
      // https://github.com/webpack-contrib/sass-loader
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              import: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: path.resolve(__dirname, 'node_modules/webpack-dev-server/client'),
        loader: "null-loader"
      }
    ]
  },
  plugins: [
    htmlPlugin,
  ]
};
