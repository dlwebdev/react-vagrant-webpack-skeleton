module.exports = {
	entry: './src/App.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	devServer: {
		inline: true,
		host: "0.0.0.0",
		port: 8080
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}