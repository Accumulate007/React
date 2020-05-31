/**
 * 自动刷新配置
 * 
 */
// webpack内置插件
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')


/*
// 页面刷新
module.exports = {
    // 开启监听后，webpack-dev-server会自动开启刷新
    watch: true,
    // 监听配置
    watchOptions: {
        ignored: /node_modules/,
        // 监听变化后等待300ms再去更新，防止文件更新太快
        aggregateTimeout: 300,
        // 默认每1000ms询问一次
        poll: 1000
    }
}

*/


// 热更新
module.exports = {
    mode: 'development',
    entry: {
        index: [
            'webpack-dev-server/client?http://locahost:8080/',
            'webpack/hot/dev-server',
            path.join(__dirname, 'index.js')
        ]
    }
}