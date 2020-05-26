const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

// Importing config file
const config = require('./config.js');

const modules = {
  index: './src/index.ts',
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  devServer: {
    hot: false,
    historyApiFallback: true,
    proxy: {
      // Images are placed in './public' and will be loaded like normal
      '/img': {
        target: `http://localhost:${config.backend.port}`
      },
      // API calls will always have /api/ on the front of the route.
      '/api/*': {
        target: `http://localhost:${config.backend.port}`
      }
    },
  },
  entry: './src/index.tsx',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
  },
  output: {
    path: path.resolve("public"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // Typescript Loader
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // JS Loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/react' ],
            },
          },
        ],
      },
      // SCSS Loading
      // https://github.com/webpack-contrib/sass-loader
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              import: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: path.resolve(__dirname, 'node_modules/webpack-dev-server/client'),
        loader: 'null-loader',
      },
    ]
  },
  plugins: [
    htmlPlugin,
  ],
};
