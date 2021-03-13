const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    allowedHosts: [
      '.thegodstack.com',
    ],
    historyApiFallback: true,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [].concat('src', ['node_modules']),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
}
