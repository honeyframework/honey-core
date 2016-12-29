const path = require('path');

const common = {
  entry: [
    './lib/index.js'
  ],
  output: {
    library: 'honey-core',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build/'),
    filename: 'honey-core.js'
  },
  resolve: {
    extensions: ['.js']
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
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
};

module.exports = common;
