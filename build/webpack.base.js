const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'prod';

const resolve = (dir) => {
    return path.join(__dirname, '..', dir)
};
module.exports = {
    entry: resolve('src/main.js'),
    output: {
        path: resolve('dist'),
        filename: "js/[name].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, // 正则匹配sass/scss/css
                use: [
                    {
                        loader: isProd ?  MiniCssExtractPlugin.loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/, //jsx 解析
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,  // 限制只有小于1kb的图片才转为base64，例子图片为1.47kb,所以不会被转化
                            outputPath: 'images'  // 设置打包后图片存放的文件夹名称
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: resolve('src/index.html'),
            title: 'react-mobx',
            minify: {
                removeComments: true, // 删除注释
                collapseWhitespace: true, // 压缩成一行
                removeAttributeQuotes: false, // 删除引号
            }
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'], // 可以省略的后缀名
    },
};