const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin

module.exports = {
  entry: {
    index: './src/index.js',
    shout: ['./src/shout.js']
  },

  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ],
  },

  plugins: [
    new CommonsChunkPlugin({
      name: 'shout',
      filename: 'shout.bundle.js'
    })
  ]
}
