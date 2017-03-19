/**
 * Webpack Development Config
 *
 * @module config Configuration options
 */

/**
 * System imports.
 */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

/**
 * Webpack config object.
 */
const config = {
	// The entry point of our app. Where our dependency graph starts.
	entry: [
		path.resolve(__dirname, 'src/index.js')
	],
	// The output location for our compiled bundle.
	output: {
		filename: 'assets/js/bundle.js',
		path: path.resolve(__dirname, '/'),
		publicPath: '/'
	},
	context: path.resolve(__dirname, 'src'),
	devServer: {
		hot: true,
		publicPath: '/',
		inline: true
	},
	resolve: {
		extensions: ['.js', '.scss']
	},
	// Loaders. These transform our code by running them through transpilers.
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader", options: {
						sourceMap: true
					} // translates CSS into CommonJS
				}, {
					loader: "sass-loader", options: {
						sourceMap: true
					} // compiles Sass to CSS
				}]
			},
			{
				test: /\.(png|jpg|svg)$/,
				loader: 'url-loader',
			}
		]
	},
	// Webpack plugins - These are like addons that can provide additional functionality.
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin()
	],
};

/**
 * Export the config.
 */
module.exports = config;