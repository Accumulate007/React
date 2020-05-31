/**
 * Base Config
 * 
 */

module.exports = {
    mode: 'development',
    entry: '',
    output: {
        filename: 'bundle.[contentHash:8].js',
        path: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    // 小于5KB的的图片使用base64格式产出
                    limit: 5*1024,
                    outputPath: './img/',
                    // 设置图片统一CND地址
                    publicPatch: 'http://cnd.abc.com'
                },
                exclude: /node_modules/
            },
            {
                // loader执行顺序是从后往前
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin()
    ],
    devServer: {
        port: 8080,
        progress: true,     // 显示打包进度
        contentBase: '',
        compress: true,
    },
    proxy: {
        // 将本地/api1 代理到 http://www.demo.com
        '/api1': {
            target: 'http://www.demo.com'
        }
    }
}








