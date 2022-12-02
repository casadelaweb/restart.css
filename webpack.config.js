const path = require('path');
const pathFromRoot = (directory) => path.resolve(__dirname, directory);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postcssPresetEnv = require('postcss-preset-env');

const mode = process.env.NODE_ENV || 'development';
const isDevelopmentMode = mode === 'development';
const isProductionMode = !isDevelopmentMode;

const stylesPipeline = {
  development: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
  ],
  production: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            postcssPresetEnv,
          ],
        },
      },
    },
    'sass-loader',
  ],
};

module.exports = {
  mode: mode,
  target: 'browserslist',
  devtool: isDevelopmentMode ? 'source-map' : false,
  optimization: { minimize: isProductionMode, },
  entry: { app: pathFromRoot('src/webpack.entry.js'), },
  output: {
    path: pathFromRoot('dist'),
    filename: 'index.js',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'restart.css', }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: isDevelopmentMode ? stylesPipeline.development : stylesPipeline.production,
      }, {
        test: /(jpg|jpeg|png|webp|gif|svg)$/i,
        exclude: pathFromRoot('src/fonts'),
        type: 'asset/resource',
        generator: { filename: 'assets/img/[name][ext]', },
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
