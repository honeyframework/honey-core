var path = require('path');

module.exports = {
  entry: [
    './lib/index.js'
  ],
  output: {
    filename: 'honey-core.js',
    path: path.resolve(__dirname, 'build/'),
    library: 'honey-core',
    libraryTarget: 'umd'
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  watch: process.env.WEBPACK_BUILD === 'watch' ? true : false
}
