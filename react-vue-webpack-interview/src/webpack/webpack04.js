/**
 * 抽离公共代码，单独打包第三方模块
 * 
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack')


module.exports = {
    entry: './index.js',
    output: {
        path: '../src/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.[contentHash:8].css'
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
        // 分割代码块
        splitChunks: {
            chunks: 'all',
            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    // chunk 名
                    name: 'vendor',
                    // 优先级
                    priority: 1,
                    test: /node_modules/,
                    minSize: 0,
                    minChunks: 1
                },
                // 公共的模块
                common: {
                    name: 'common',
                    priority: 0,
                    // 公共模块大小限制
                    minSize: 0,
                    // 公共模块最少复用过几次才抽离
                    minChunks: 2
                }
            }
        }
    }
}

