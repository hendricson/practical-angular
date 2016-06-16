var path = require('path')

module.exports = {
  entry: ['./src/index'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
		{ test: /\.css$/, loader: "style-loader!css-loader" },
		{ test: /\.png$/, loader: "url-loader?limit=100000" },
	]
  }
}
