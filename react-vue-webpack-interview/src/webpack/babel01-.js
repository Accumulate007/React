

// .babelrc 配置
let babelConfig = {
    // presets: 预设
    // preset-env：是一堆常用的plugin的集合，免去开发者自行配置
    "presets": [
        "@babel/preset-env",
        // 配置babel-polyfill按需引入
        {
            "useBuiltIns": "usage",
            "corejs": 3
        }
    ],
    plugin: [
        // babel-runtime配置
        "@babel/plugin-transform-runtime",
        {
            "absoluteRuntime": false,
            "corejs": 3,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
        }
    ]
}


