### React-Interview

#### 几道React面试题
1、React组件如何通信

2、JSX的本质是什么

3、context是什么，有何用途

4、shouldComponentUpdate有何用途

5、描述Redux单向数据流

6、setState是同步还是异步

#### 如何应对面试题
1、框架的使用(基本使用，高级特性，周边插件)

2、框架的原理(基本原理的了解，热门技术的深度，全面性)

3、框架的实际应用，设计能力(组件结构，数据结构)

#### React基础

JSX基本知识
- 变量、表达式
- class style
- 子元素和组件

条件判断
- if-else
- 三元运算符
- 逻辑运算符(&& ||)

React事件
- React组件中this的绑定方式
- React事件中的参数event，不是原生event,而是合成事件(SyntheticEvent)。需要通过event.nativeEvent获取原生的event
- React中所有的事件都被挂载到document上
- React中event对象作为参数最后一个参数默认传递(arg1, arg2, arg3, event)

受控组件
- 将表单元素和组件状态state进行关联(类似双向数据绑定)


父子组件通信
- props
- callback

setState
- 不能直接修改state,使用不可变值
- 可能是异步更新
- 可能会被合并

组件生命周期
- 挂载时：constructor, render, componentDidMount
- 更新时：shouldComponetUpdate, render, componentDidUpdate
- 卸载时：componetnWillUnmount


#### React高级特性
1、函数组件
- 只需要接收props进行组件渲染，没有内部状态，主要负责UI展示
- 纯函数，输入props，输出JSX
- 没有实例，没有生命周期，没有state
- 不能扩展其它方法


2、非受控组件
- ref
- defaultValue, defaultChecked
- 手动操作DOM

非受控组件使用场景
- 必须手动操作DOM元素，setState()实现不了
- 文件上传<input type="file">
- 某些富文本编辑器，需要传入DOM元素

受控组件VS非受控组件
- 优先使用受控组件，符合React设计原则
- 必须操作DOM的时候，再使用非受控组件


3、Portals
组件默认会按既定的层次嵌套渲染，如何让组件渲染到父组件以外？
- ReactDOM.cratePortal(Component, element)


4、context
- 公共信息如何传递给每个子组件


5、异步组件
- React.lazy()
- React.Suspense


6、性能优化
- shouldComponentUpdate()
- PureComponent：在shouldComponentUpdate中实现了浅层比较
- React.memo()：函数组件中实现PureComponent
- 不可变值immutable.js


7、高阶组件HOC
- 传入组件，返回封装扩展后新的组件，用于组件公共逻辑的抽离


8、Render Props


#### Redux
- store
- reducer
- action
- dispatch
- 单向数据流模型
- 中间件redux-thunk, redux-saga

Redux官网: redux.org.cn

#### Redux基本概念
单向数据流概述：dispatch(action) -> reducer -> newState -> subscribe触发通知

#### React-redux
- <Provider>
- connect
- mapStateToProps, mapDispatchToProps

#### 同步异步action
```javascript
// 同步action
export const addTodo = text => {
    // 返回action对象
    return {
        type: "ADD_TO_DO",
        id: nextId++,
        text
    }
}


// 异步action
export const addTodoAsync = text => {
    // 返回函数，函数的参数有dispatch
    return (dispatch) => {
        fetch(url).then(res => {
            // 执行异步action
            dispatch(addTodo(res.text))
        })
    }
}

```

#### Redux中间件原理
自己修改dispatch，增加logger

#### React-Router
路由模式
- hash模式(默认)
- history

