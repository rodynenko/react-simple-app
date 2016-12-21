
var webpack = require('webpack');

module.exports = {
	entry: {
		adminservice: './src/js/app.js'
	},

	output: {
		filename: '[name].js',
		path: __dirname + '/public'
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
		{ test: /\.png$/, loader: "file-loader?emitFile=false" },
			{
				test: /\.svg$/,
				loader: 'svg-url-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'url-loader'
			}]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
}
