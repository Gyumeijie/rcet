const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    background: './src/background.js',
    devtools: './src/devtools/devtools.js',
    ui: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  externals: {
    chrome: 'chrome'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },

      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      },

      {
        test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?limit=100000'
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?limit=100000',
          {
            loader: 'img-loader',
            options: {
              enabled: true,
              optipng: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    // directories where to look for modules
    mainFiles: ['index'],
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'ui.html',
      title: 'React Chrome Extension Starter',
      template: './src/ui.html',
      chunks: ['ui']
    }),
    new HtmlWebpackPlugin({
      filename: 'devtools.html',
      title: 'React Chrome Extension Starter',
      template: './src/devtools/devtools.html',
      chunks: ['devtools']
    }),
    new CopyWebpackPlugin([
      { from: './src/manifest.json' },
      { context: './src/assets', from: '*' }
    ]),
    new CleanWebpackPlugin(['dist']),
    extractSass
  ]
};
