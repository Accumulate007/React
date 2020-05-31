/**
 * 多入口配置
 * 
 */
const path = require('path')
const { srcPath, distPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        train: path.join(srcPath, 'train.js')
    },
    output: {
        filename: '[name].[contentHash:8].js',
        path: distPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 多入口，生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            // 只引用 index.js
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'train.html'),
            filename: 'train.html',
            // 只引用 train.js
            chunks: ['train']
        })
    ]
}



