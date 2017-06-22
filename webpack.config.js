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
	entry: {
		harvester: path.resolve(__dirname, 'src/js/link-harvester/main.js'),
		validator: path.resolve(__dirname, 'src/js/json-validator/main.js'),
		index: path.resolve(__dirname, 'src/index.js')
	},
	// The output location for our compiled bundle.
	output: {
		filename: 'assets/js/[name].bundle.js',
		path: path.resolve(__dirname, '/'),
		publicPath: 'http://localhost:8080/'
	},
	context: path.resolve(__dirname, 'src'),
	devServer: {
		contentBase: path.join(__dirname, '/' ),
		hot: true,
		publicPath: 'http://localhost:8080/',
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
				loader: 'file-loader',
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