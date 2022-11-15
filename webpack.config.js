const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postcssPresetEnv = require('postcss-preset-env');

const path = (directory) => require('path').resolve(__dirname, directory);

const mode = process.env.NODE_ENV || 'development';
const isDevelopmentMode = mode === 'development';
const hash = isDevelopmentMode ? '.[contenthash]' : '';

module.exports = {
  mode: mode,
  target: 'browserslist',
  devtool: isDevelopmentMode ? 'source-map' : false,
  optimization: {
    minimize: isDevelopmentMode
  },
  entry: path('src/bundle.scss'),
  output: {
    path: path('dist'),
    filename: '[name]' + hash + '.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path('src/index.html')
    }), new MiniCssExtractPlugin({
      filename: '[name]' + hash + '.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }, {
        test: /\.(c|sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv
                ]
              }
            }
          },
          'sass-loader'
        ]
      }, {
        test: /\.svg/,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: false
  }
};
