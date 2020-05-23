#### 项目架构
1.项目核心框架库(React, React-Router, Redux)

2.项目中间件，插件(Axios, Map, ECharts, AntD)

3.项目公共机制部分(菜单，权限，Loading，API)


#### Yarn
Yarn是新一代包管理工具
- 速度更快
- 安装版本统一，更安全
- 更简洁的输出
- 更好的语义化

```javascript
// 初始化项目
yarn init

// 新增一个包
yarn add

// 移除一个包
yarn remove

// 安装项目依赖
yarn install

```

#### React生命周期
1.getDefaultProps

2.getInitialState

3.componentWillMount(调用接口)

4.render

5.componentDidMount

6.componentWillReceiveProps

7.shouldComponentUpdate

8.componentWillUpdate

9.componentDidUpate

10.componentWillUnmount


#### 暴露webpack配置
```javascript
npm run eject
```

antd组件按需加载
```javascript
npm install babel-plugin-import --dev
```

#### calc
使用calc动态计算长度值
- height:calc(1vh); 相当于屏幕1%的高度(vh将屏幕等分成100份)


#### React-Router
1.react-router (3.0版本路由)

2.react-router-dom (4.0版本，包含了react-router)
- 4.0版本中，路由不需要配置，一切皆组件
- 提供了BrowserRouter,HashRouter,Route,Link,NavLink

#### Easy-Mock
伪造数据接口

了解Mock规范：mockjs.com





























