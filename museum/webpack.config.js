const path = require('path')

module.exports = {
	mode: 'none',
	// path.resolve(__dirname, 'src/assets/js/index.js'),
	entry: {
		'index': './src/assets/js/index.js',
	},
	output: {
		path: path.resolve(__dirname, './app/js'),
		filename: '[name].js',
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			// exclude: /(node_modules)/,
			loader: 'babel-loader',
		}]
	},
	watch: true,
	optimization: {
		minimize: true,
	},
}
