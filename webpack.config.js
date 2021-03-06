// 自带的库
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: './app/index.js', // 入口文件
	output: {
		path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
		filename: 'bundle.js' // 打包后输出文件的文件名
	},
	module: {
		rules: [
			{
				// js 文件才使用 babel
				test: /\.js$/,
				// 使用哪个 loader
				use: 'babel-loader',
				// 不包括路径
				exclude: /node_modules/
			},
			{
				// 图片格式正则
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						// 配置 url-loader 的可选项
						options: {
							esModule: false, // 启用CommonJS语法 解决图片地址问题
							// 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
							limit: 10000,
							// 超出限制，创建的文件格式
							// build/images/[图片名].[hash].[图片格式]
							name: 'images/[name].[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	// 插件列表
	plugins: [
		// 输出的文件路径
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css'
		})
		// new MiniCssExtractPlugin('css/[name].[hash].css')
	]
};
