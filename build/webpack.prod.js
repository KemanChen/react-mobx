const path = require('path');
const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const webpackBaseConfig = require('./webpack.base.js'); // 引入webpack.base.js
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const resolve = (dir) => {
    return path.join(__dirname, '..', dir)
};

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[id].[chunkhash].js'
    },
    optimization: {
        // 分割公共代码
        splitChunks: {
            automaticNameDelimiter: '-',
            name: true,
            maxAsyncRequests: 7,
            maxInitialRequests: 5,
            minChunks: 2,
            cacheGroups: {
                styles: {
                    name: 'style',
                    chunks: 'all',
                    test: /\.(css|scss)$/,
                    enforce: true,
                },
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, // 设置优先级最低
                    enforce: true,
                },
                common: {
                    name: 'common',
                    chunks: 'all',
                    test: function (module, count) {
                        return module.resource &&
                            (/(\/|\@|\\)(src)(\/|\\)(utils|constants|api|store)(\/|\\)/).test(module.resource)
                    },
                    enforce: true,
                }
            }
        },
        // 分割运行时代码
        runtimeChunk: {
            name: 'runtime'
        },
        // 压缩js和css
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessorOptions: {
                    safe: true,
                    // 以ios大于等于7安卓大于等于4.1开始兼容，优化压缩
                    autoprefixer: {
                        add: true,
                        browsers: ['iOS >= 7', 'Android >= 4.1']
                    },
                    mergeLonghand: false,
                    discardComments: {
                        removeAll: true // 移除注释
                    }
                }
            }),
            new UglifyJsPlugin({
                cache: true,
                extractComments: true, // 移除注释
                uglifyOptions: {
                    compress: {
                        unused: true,
                        warnings: false,
                        drop_debugger: true
                    },
                    output: {
                        comments: false
                    },
                    mangle: false
                },
                parallel: true, // 多线程构建提升速度
                sourceMap: true // set to true if you want JS source maps
            })
        ]
    },
    plugins: [
        // 打包前清理旧文件夹
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),

        // 压缩抽离样式
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
});
