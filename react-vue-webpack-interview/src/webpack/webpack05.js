/**
 * 优化开发构建速度
 * 1.优化babel-loader编译
 * 2.happyPack：多进程打包
 * 3.ParallelUglifyPlugin：开启多进程压缩
 * 
 * 
 * 项目大，打包慢，开启多进程能提高速度
 * 如果项目小，打包快，开启多进程会增加进程切换额外开销，没必要使用
 * 
 */

const path = require('path')
const HappyPack = require('happypack')
const ParallelUglifyPlugin = require('wbepack-parallel-uglify-plugin')


module.exports = {
    entry: './index',
    output: {
        filename: 'index.[contentHash:8].js',
        path: '../dist'
    },
    module: {
        rules: [
            // 在不使用happypack情况下优化babel-loader的配置
            // {
            //     test: /\.js$/,
            //     // 开启缓存
            //     use: ['babel-loader?cacheDirectory'],
            //     // 明确范围
            //     include: path.resolve(__dirname, 'src'),
            //     // exclude: path.resolve(__dirname, 'nodel_modules')    根include二选一即可
            // },

            // 在使用happypack情况下优化babel-loader的配置
            {
                test: /\.js$/,
                use: ['happypack/loader?id=babel'],
                exclude: path.resolve(__dirname, 'nodel_modules')
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader?cacheDirectory']
        }),

        new ParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    beautify: false,
                    // 删除所有注释
                    comments: false
                },
                compress: {
                    // 删除所有console
                    drop_console: true,
                    collapse_vars: true,
                    reduce_vars: true
                }
            }
        })
    ]
}


