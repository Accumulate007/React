/**
 * DllPlugin
 * 单独构建第三方插件，库
 * 
 */


module.exports = {
    mode: 'development',
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        filename: '[name].dll.js',
        path: '../dist'
    }
}


