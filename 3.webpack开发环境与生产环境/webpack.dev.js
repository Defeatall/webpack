const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path');

module.exports = merge(common, {
    module: {
        rules: [
          // loader的配置
          {
            // 处理less资源
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
          },
          {
            // 处理css资源
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
        ]
    },
    plugins: [
    // plugins的配置
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true,
        // 开启HMR功能
        // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
        hot: true
    },
    devtool: 'source-map'
})