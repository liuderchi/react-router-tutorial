module.exports = {
  entry: './index.js',

  output: {
    filename: 'foo.js',
    // NOTE bundle.js is never written to disk, by design of webpack-dev-server
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
