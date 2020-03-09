### React基础
React核心文件
- react.js
- react-dom.js  处理DOM

react: 响应

### React开发简书项目
课程收获
- 彻底入门React的使用
- 完整了解React的工具全家桶
- 上手大型React项目的开发
- 规范的代码编写

React和Vue的区别
- React的灵活性更大，适合复杂度大的项目
- Vue实现了更多的API，实现功能更为简单，上手更容易


#### JSX
JSX允许在JavaScript中书写XML，JSX代码语法需要经过babel编译解析。

JSX的注意事项
- XML可以包含子元素，但是只能允许有一个顶层元素
- 支持插值表达式(插值表达式中不可以输出除了数组外的其它引用类型数据)
- 通过className设置class
- style属性必须是对象，并且对象要放在插值表达式中：style={{color: '#333'}}


#### React的思考
- 声明式开发
- 可以与其它框架共存
- 组件化


React中父子组件的数据传递
- 父组件通过属性给子组件传值，子组件通过props接收
- 子组件通过调用父组件的方法给父组件传递值
- 单向数据流
- 视图层框架
- 函数式编程

#### 安装 React Developer Tools协助开发


#### props,state,render的关系
 - 当组件的state或者props发生改变的时候，组件的render函数就会重新执行
 -  当父组件的render函数执行的时候，它的子组件的render函数都将被执行一次


#### React中的虚拟DOM
1、state(数据) + JSX(模板) 生成虚拟DOM，根据虚拟DOM生成真实DOM插入页面

2、如果state发生了改变，数据 + 模板 生成新的虚拟DOM

3、比较原始虚拟DOM和新生成的虚拟DOM之间的区别

4、直接操作真实DOM修改发生变化的部分


```javascript
// createElement 返回虚拟DOM
React.createElement('div', {}, 'this is inner text');
```

虚拟DOM的优势
- 提升性能
- 它使得跨端应用得以实现(React Native)


#### Reac中的生命周期函数
生命周期函数指在某个时刻组件会自动调用执行的函数。render 是唯一必须存在的生命周期函数。

1. 阶段：初始化(Initialization)。 setup props and state

2. 阶段：挂载(Mounting)。 componentWillMount -> render -> componentDidMount

3. 阶段：组件更新流程(Updation)。
- props:    componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
- state:    shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

4. 阶段：Unmoounting。 componentWillUnmount

挂载流程
- componentWillMount: 当组件即将被挂载到页面的时候执行该函数(还未被挂载到页面)
- render： 渲染页面
- componentDidMount：组件被挂载到页面之后立即被执行

更新流程
- shouldComponentUpdate: 组件被更新之前执行(该函数需要明确返回一个布尔值，告诉react是否确定更新组件)
- componentWillUpdate：组件被更新之前，shouldComponentUpdate之后执行(shouldComponentUpdate需要返回true才会执行)
- componentDidUpdate：组件更新完成之后执行
- componentWillReceiveProps：一个组件如果没有被传递props参数，该函数不会执行。当一个组件从父组件接收了props参数，只要父组件的render被执行了，子组件的该函数会被执行。如果该组件第一次被渲染进父组件，该函数不会执行；如果该组件之前已经被渲染进父组件，父组件render之后会执行该函数。

组件从页面中移除
- componentWillUnmount：

**shouldComponentUpdate中返回值true or false的使用场景**

1、父组件中的render函数被执行的时候，子组件的render函数也会被执行。但是很多情况下，只是父组件的数据发生了变化，而子组件根本没有发生变化，这就造成了性能上的损耗。这个时候可以在组件的shouldComponentUpdate中根据条件判断返回true or false

React中一般会在componentDidMount钩子函数中发送Ajax数据请求
- componentDidMount 只执行一次，数据不会重复请求

#### 使用Axios在React中请求数据

使用 Charles 实现本地数据mock


#### React中的CSS过渡动画
1、使用CSS3的属性实现简单的动画效果

2、借助 react-transition-group 实现动画


#### Redux
理念：将组件的数据放到公共的地方(Store),store里的数据发生了改变，会通知所有相关的组件。

安装
```javascript
npm i redux --save
```

Redux调试工具: Chrome 扩展程序中搜索 Redux Devtools

Redux设计原则
- store必须是唯一的，应用中只存在一个store
- 只有store能够改变自己的内容
- reducer必须是纯函数，纯函数指的给定固定的输入，就会有固定的输出，而且不会有任何副作用

Redux中发送异步请求



#### UI组件和容器组件
- UI组件负责页面的渲染
- 容器组件负责页面的逻辑

无状态组件
- 当一个UI组件只有render函数，可以封装为无状态组件，提升性能
- 无状态组件是一个函数，返回UI界面


#### redux-thunk
这是一个redux的中间件(注意，不是React的中间件)

使用redux-thunk中间件管理componentDidMount中的异步数据请求代码，可以避免componentDidMount中的逻辑过于复杂

1.在创建store的时候加载redux-thunk中间
```javascript
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))
```

中间件

action -> redux-thunk -> store

其实就是对store的dispatch方法进行了一个升级


#### redux-saga
也是用于解决redux中的异步操作，单独把异步逻辑拆分到单独的逻辑中管理

redux-thunk和redux-saga二选一即可


#### React-Redux
安装插件
```javascript
npm i react-redux --save
```














