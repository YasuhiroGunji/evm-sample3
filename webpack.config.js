module.exports = {
  entry: {
    js: './src/index.js',
    html: './src/index.html'
  },
  output: {
    path: './out',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'out',
    port: 2000,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: [/\.css$/, /\.styl$/],
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './src']
  }
};