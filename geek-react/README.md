### Redux专项学习
1. 通过 jquery-redux-demo 这个小例子了解redux的基本操作和设计思路

redux暴露的顶级方法
- crateStore
- combineReducers(reducers)
- applyMiddleware(...middlewares)
- bindActionCreators(actionCreators, dispatch)
- compose(...functions)

Store API
- getState()
- dispatch()
- subscribe(listener)
- getReducer()
- replaceReducer(nextReducer)


2.redux-thunk


### geek React进阶

#### React背景
- 2013年推出的开发框架
- 传统的UI操作关注了太多的细节
- 传统的应用状态分散在各处，难以追踪和维护

React很简单
- 1个新概念：组件的方式描述UI
- 4个必须API：ReactDOM.render()，组件的render()方法，组件的setState()方法，通过props给组件传递参数
- 单向数据流
- 完善的错误提示

组件化方式构建UI界面

JSX的本质：动态创建组件的语法糖
- JSX本身就是表达式
- 可以在JSX属性中使用表达式
- 所有的自定义组件都必须以大写字母开头


#### React生命周期和使用场景
1.constructor
- 用于初始化内部状态，很少使用
- 唯一可以直接修改state的地方

2.getDerivedStateFromProps
- 每次render都会调用
- 尽量不要使用

3.componentDidMount
- UI渲染完成后调用
- 只执行一次
- 典型场景：Ajax请求

4.componentWillUnmount
- 组件移除时被调用
- 典型场景：资源释放

5.getSnapshotBeforeUpdate
- 页面render之前调用，state已更新
- 典型场景：获取render之前的DOM状态

6.componentDidUpdate
- 每次UI更新时被调用
- 典型场景：页面需要根据props变化重新获取数据

7.shouldComponentUpdate
- 决定Virtual DOM是否要重绘
- 一般可以由PureComponent自动实现
- 典型场景：性能优化


#### 虚拟DOM和key属性
虚拟DOM算法复杂度O(n),广度优先分层比较

虚拟DOM的两个假设
- 组件的DOM结构是相对稳定的
- 类型相同的兄弟节点可以被唯一标识


#### 高阶组件和函数作为子组件
高阶组件(HOC)：接受组件作为参数，返回新的组件。


#### Context API
解决组件间通信的问题


#### 创建React项目
1.Create React App

2.Rekit

3.CodeSandbox

#### 打包和部署
打包注意事项
- 设置Node环境为production
- 禁用开发时专用代码，比如logger
- 设置应用根路径


#### Redux
全局只有一个唯一的store

Redux特性
- Single Source of Truth
- 可预测性: state + action = new state
- 纯函数更新store(reducer)

**深入理解Redux**

1.Store
```javascript
// 生成store
const store = createStore(reducer)

// sotre的三个方法
store.getState()

store.dispatch(actioin)

store.subscribe(listener)   // 监听store变化
```

2.Action
```javascript
// 一个actioin
{
    type: 'ADD_TODO',
    text: 'Build my first react app'
}

```

3.Reducer
```javascript
// 一个reducer，需要返回一个全新的 state
function todoApp(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
            console.log('ADD_TODO...')
    }
}
```

4.combineReducers(合并多个reducer)

5.bindActionCreators

**异步action**
异步action不是特殊的action，而是多个同步action的组合。

Redux中间件
- 截获action
- 发出action


**不可变数据(immutable data)**

- 性能优化
- 易于调试和优化
- 易于推测


#### React-Router
```javascript
// React Router的实现

import { Link } from 'react-router-dom'

<Router>
    <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/about">Ablut</Link></li>
        </ul>

        <div id="page-container">
            <Route path="/home" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/about" component={About} />
        </div>
    </div>
</Router>
```

三种路由实现方式
- URL路由
- hash路由
- 内存路由

React Router API
- <Link>：普通链接，不会触发浏览器刷新
- <NavLink>：类似link,但是会添加当前选中状态
- <Prompt>：满足条件时提示用户是否离开当前页面
- <Redirect>：重定向当前页面
- <Route>：路由匹配时显示对应组件
- <Switch>：只显示第一个匹配的路由
- <BrowserRouter>

通过URL传递参数
```javascript
<Route path="/home/:id">

// 获取参数
this.props.match.params

```


#### React UI组件库
1.Ant Design

2.Material UI

3.Semantic UI

选择UI库的考虑因素
- 组件库是否齐全
- 样式风格是否满足业务需求
- API是否便捷和灵活
- 技术支持是否完善
- 开发是否活跃

#### Next.js
同构应用


#### 单元测试
- Jest
- Enzyme

React让单元测试更简单
- React应用很少需要访问浏览器API
- 虚拟DOM可以在Node环境运行和测试
- Redux隔离了状态管理，纯数据单元测试

#### 开发调试工具
- ESLint
- Prettier
- React DevTool
- Redux DevTool


#### 前端架构
前端项目的理想架构
- 可维护
- 可扩展
- 可测试
- 易开发
- 易构建

易于开发
- 开发工具是否完善
- 生态圈是否繁荣
- 社区是否活跃

易于扩展
- 增加新功能是否容易
- 新功能是否会显著增加系统复杂度

易于维护
- 代码是否容易理解(通过最佳实践和工具来保证)
- 文档是否健全

易于测试
- 功能的分层是否清晰
- 副作用少
- 尽量使用纯函数

易于构建
- 使用通用技术和架构
- 构建工具的选择


**拆分复杂度**

1.按领域模型(feature)组织代码，降低耦合度

文件夹结构
- 按feature组织源文件
- 组件和样式文件同一级
- Redux单独文件夹
- 单元测试保持同样的目录结构放在test文件夹


#### 最佳实践


#### React性能优化
1.了解常见的性能问题场景

2.时刻注意代码的潜在性能问题

3.注重可重构的代码

4.了解如何使用工具定位性能问题


**网络性能优化**

React中实现自动化按需加载
- 使用webpack的import API
- 使用react-loadable库实现React异步加载


使用Reselect避免重复计算

