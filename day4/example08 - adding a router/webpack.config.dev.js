var path = require('path');
var webpack = require('webpack');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

/*
   * app.ts represents the entry point to your web application. Webpack will
   * recursively go through every "require" statement in app.ts and
   * efficiently build out the application's dependency tree.
   */
  entry: [
    './src/polyfills.browser.ts',
    './src/main.browser.ts',
    './src/vendor.browser.ts'
  ],

  /*
   * The combination of path and filename tells Webpack what name to give to
   * the final bundled JavaScript file and where to store this file.
   */  
  output: {
    path: './dist',
    cache: true,
	debug: true,
	filename: '[name].bundle.js'
  },
  plugins: [
      new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      })
  ],
  module: {
    /*
     * Each loader needs an associated Regex test that goes through each
     * of the files you've included (or in this case, all files but the
     * ones in the excluded directories) and finds all files that pass
     * the test. Then it will apply the loader to that file. I haven't
     * installed ts-loader yet, but will do that shortly.
     */  
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass-loader']
    }, { 
      test: /\.png$/, 
	  loader: "url-loader?limit=100000" 
    }, { 
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff&name=./[name]/[hash].[ext]"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff&name=./[name]/[hash].[ext]"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream&name=./[name]/[hash].[ext]"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml&name=./[name]/[hash].[ext]"
    }, {
	   test: /\.html$/,
	   loader: "raw-loader"
	},{
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/
     }]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    contentBase: './dist',
    hot: true
  }
}
