module.exports = {
  entry: {
    index: './src/index.js'
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
}
