const webpack = require('webpack');
const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const webpackBaseConfig = require('./webpack.base.js'); // 引入webpack.base.js
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(webpackBaseConfig, {   // 将webpack.base.js合并到当前文件
    mode: 'development',
    devServer: {
        contentBase: "./dist", //本地服务器加载位置
        inline: true, //文件修改后实时刷新
        port: "8080", //端口号监听
        historyApiFallback: true,
        hot: true // 热更新
    },
    devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        // 美化终端输出插件
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:8080'],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
        })
    ]
});