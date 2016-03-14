const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

require('babel-polyfill').default;

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: [
    PATHS.app,
  ],

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', PATHS.app],
  },

  module: {
    loaders: [{
      test: /bootstrap-sass\/assets\/javascripts\//,
      loader: 'imports?jQuery=jquery',
    }, {
      test: /\.woff($|\?)|\.woff2($|\?)|\.otf($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.png$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]',
    }],
  },

  postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
      postcssImport({
        addDependencyTo: webpack,
      }),
    ];
  },
  node: {
    net: "empty",
    tls: "empty",
    fs: "empty"
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(production, common);
}
