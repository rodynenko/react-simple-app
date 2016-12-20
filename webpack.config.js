
var webpack = require('webpack');

module.exports = {
	entry: {
		adminservice: './src/js/index.js'
	},

	output: {
		filename: '[name].js',
		path: __dirname
	},

	//devtool: 'cheap-inline-module-source-map',

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			}
		},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.svg/,
				loader: 'svg-url-loader'
			}]
	},

	plugins: [
		new webpack.NoErrorsPlugin()/*,
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}) */
	]
}
