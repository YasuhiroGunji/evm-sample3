
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: '/out',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'out',
    port: 2000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react', 'stage-0'],
            },
          },
        ],
      },
      {
        test: [/\.css$/, /\.styl$/],
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
  },
};
