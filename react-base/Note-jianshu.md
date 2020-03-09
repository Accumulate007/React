### React开发简书项目

#### 使用styled-components管理组件的样式
模块的安装
```javascript
npm install styled-components --save
```
使用该模块让每个组件有自己独立的样式


#### 创建iconfont项目

#### 使用react-transition-group实现动画效果


#### 使用Redux
既然使用了redux，那么所有组件的数据都由redux来管理，便于后期的维护。

安装插件
```javascript
npm i redux react-redux --save
```

- redux：react的数据管理插件
- react-redux：方便开发者更好的使用react-redux

store
- 组件从store中取数据
- 如果组件要修改store的数据，要通过action。store把之前的数据和action一起给到redux，redux根据这些返回新的数据

react-redux的两个重要方法
- Provider组件
- connect

redux
- combineReducers

#### 使用immutable.js确保store中的state不被修改
immutable：不可改变的

#### 使用 redux-immutable 的combineReducers方法，替代 redux 的combineReducers方法

React只兼容IE8以上的浏览器

#### 使用redux-thunk管理异步请求
可以在redux里面写函数


#### react-router-dom

pureComponent 和 Component的区别
- PureComponent内置自己实现了 shouldComponentUpdate,优化了性能
- PureComponent需要结合 immutable.js 使用

#### 异步组件的使用
实现组件的按需加载
```javascript
npm i  react-loadable
```

使用 withRouter 获取路由的参数


#### 项目上线流程

