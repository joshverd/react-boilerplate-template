const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackObfuscatorPlugin = require('webpack-obfuscator');


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
        target: `http://localhost:3001`
      },
      // API calls will always have /api/ on the front of the route.
      '/api/*': {
        target: `http://localhost:3001`
      }
    },
  },
  plugins: [
    htmlPlugin,
    // For testing purposes, this is the "High obfuscation, low performance" config on the javascript-obfuscator docs
    // https://github.com/javascript-obfuscator/javascript-obfuscator
    new WebpackObfuscatorPlugin({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 1,
      debugProtection: true,
      debugProtectionInterval: true,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      numbersToExpressions: true,
      renameGlobals: false,
      rotateStringArray: true,
      selfDefending: true,
      shuffleStringArray: true,
      simplify: true,
      splitStrings: true,
      splitStringsChunkLength: 5,
      stringArray: true,
      stringArrayEncoding: 'rc4',
      stringArrayThreshold: 1,
      transformObjectKeys: true,
      unicodeEscapeSequence: false
    }),
  ],
  entry: './src/index.tsx',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
  },
  output: {
    path: path.resolve(__dirname + '/build/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // Typescript Loader
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'src/tsconfig.react.json',
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
};
