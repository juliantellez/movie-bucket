const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('../../app-config')

const extractCss = new ExtractTextPlugin('[name].css')

const webpackConfig = {
  entry: {
    'static/client': path.join(config.SRC, 'scripts/client/main'),
    'static/styles': path.join(config.SRC, 'styles/main.scss'),
  },
  output: {
    filename: '[name].js',
    path: config.DEST,
    sourceMapFilename: '[file].map',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: config.SRC,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {modules: false}],
              'stage-0',
              'react',
            ],
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'import-glob',
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'autoprefixer-loader'},
            {loader: 'sass-loader'},
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [extractCss],
}

exports.default = webpackConfig
