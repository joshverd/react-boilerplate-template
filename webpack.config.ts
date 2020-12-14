import HtmlWebPackPlugin from 'html-webpack-plugin';
import * as path from 'path';

// Importing config file
import config from './config';

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
    path: path.resolve('build/public'),
    filename: '[name].js?hash=[hash]',
    chunkFilename: "[name].js?hash=[chunkhash]",
    publicPath: '/',
  },
  optimization: {
    usedExports: true,
    sideEffects: false,
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      // Typescript Loader
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname + '/src/tsconfig.react.json'),
        },
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
