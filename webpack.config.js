module.exports = {

	entry:'./src/index.jsx',
	output:{
		path:__dirname+'/build/js',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loader:'babel-loader',
				exclude:/(node_modules|bower_components)/
			},
			{
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader' ]
	       },
   	       {
   	             test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
   	             loader: 'url-loader?limit=100000' 
        	}
		]
	}
}
