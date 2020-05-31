### Webpack
1、基本配置

2、高级配置

3、优化打包效率

4、优化产出代码

5、构建流程概述

#### 基本配置

#### 高级配置
- 多入口
- 抽离压缩CSS
- 抽离公共代码
- 实现JS文件异步加载：'import("./dinamic-data.js")'
- 处理JSX：'npm i --save-dev @babel/preset-react'
- 处理.vue文件：'npm i --save-dev vue-loader'

#### module,chunk,bundle
1、module：各个源码文件，webpack中一切皆是模块

2、chunk：多个模块合并而成的文件(可理解为存在于内存中)

3、bundle：最终的输出文件

#### webpack构建速度优化
1、优化打包构建速度，提升开发体验
- 优化babel-loader
- IgnorePlugin
- noParse
- happyPack
- ParallelUglifyPlugin
- 自动刷新
- 热更新
- DllPlugin

2、优化产出代码，提升产品性能
- 打包后体积更小
- 合里分包，不重复加载
- 速度更快，内存使用更少


具体方式
- 小图片base64转换
- 打包后的bundle加hash戳
- 懒加载
- 提取公共代码
- IgnorePlugin
- 使用CDN加速
- 使用production
- 使用Scope Hosting

#### Tree-Shaking
1、使用production
- 自动开启代码压缩
- Vue,React等框架会自动删掉开发环境下的调试警告代码
- 开启Tree-Shaking

Tree-Shaking：删除那些没有使用到的代码
- ES Module下才能生效Tree-Shaking
- CommonJS下无法生效


#### ES Module and CommonJS
- ES Module静态引入，编译时引入，不允许判断
- CommonJS动态引入，执行时引入
- 只有ES Module才能静态分析，实现Tree-Shaking

Scope Hosting
- 代码体积更小
- 创建函数作用域更少
- 代码可读性更好
```javascript
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

module.exports = {
    resolve: {
        // npm第三方模块优先使用ES6模块化语法的文件
        mainFileds: ['jsnext:main', 'browser', 'main']
    },
    plugins: [
        new ModuleConcatenationPlugin(),
    ]
}

```


### Babel
Babel官网：babeljs.cn

1、基本配置
- 环境搭建
- .babelrc配置
- presets和plugins

2、babel-polyfill
- Polyfill:补丁
- corejs: 官方的所有常用功能的polyfill(一个标准的库，集成了ES6/7/8等新语法的polyfill)
- regenerator: corejs不支持generator语法，需要引用regenerator库支持generator
- Babel7.4之后 babel-polyfill 已经被弃用，推荐直接使用corejs和regenerator

Babel-polyfill的问题
- 污染全局变量环境

3、babel-runtime


#### webpack面试真题
1、前端为何要进行打包和构建
- 体积更小(Tree-Shaking,压缩，合并)，加载更快
- 编译高级语言或语法(TS, ES6+等)
- 兼容性和错误检查(Polyfill)

- 统一、高效的开发环境
- 统一的构建流程和产出标准
- 集成公司的构建规范

2、module,chunk,bundle的区别

3、loader和plugin的区别
- loader：模块转换器
- plugin：扩展插件

4、常见loader和plugin

5、babel和wbepack的区别
- babel: JavaScript新语法编译工具，不关心模块化
- webpack: 打包构建工具，是多个loader,plugin的集合

6、如何产出一个lib
```javascript
output: {
    // lib的文件名
    filename: 'lodash.js',
    // 输出lib到dist目录下
    path: distPath,
    // lib的全局变量名
    library: 'lodash'
}

```

7、babel-polyfill和babel-runtime的区别
- babel-polyfill会污染全局变量名
- babel-runtime不会污染全局变量名
- 产出第三方lib的时候，要使用babel-runtime

8、webpack如何实现懒加载
- import()

9、为何Proxy不能被polyfill

10、webpack优化构建速度
- 优化babel-loader
- IgnorePlugin
- noParse
- happyPack
- ParallelUglifyPlugin

- 自动刷新
- 热更新
- DllPlugin

11、webpack优化产出代码
- 小图片Base64处理
- bundle加hash
- 懒加载
- 提取公共代码
- 使用CDN加速
- IgnorePlugin
- 使用productioin
- Scope Hosting


