var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.js', './src/styles.scss'
	],
	module: {
		loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
  	plugins: [
		  HTMLWebpackPluginConfig,
      new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
      })
	]
};