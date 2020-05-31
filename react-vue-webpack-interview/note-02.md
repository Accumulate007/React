### React原理
- 函数式编程
- vdom和diff算法
- JSX本质
- 合成事件
- setState和batchUpdate
- 组件渲染过程
- 前端路由


#### 函数式编程
- 一种编程范式
- 纯函数
- 不可变值


#### Vdom和diff算法
- h函数：生成vdom
- vnode数据结构
- patch函数

diff算法
- 只比较同一级，不跨级比较
- tag不相同，则直接删掉重建，不再深度比较
- tag和key都相同，则认为是相同节点，不再深度比较


#### JSX本质
JSX会经过React.crateElement()处理

#### 合成事件
- 所有事件都挂载在document上
- event不是原生的，是SyntheticEvent合成事件
- 通过event.nativeEvent获取原生的event事件对象

为什么要使用合成事件机制？
- 更好的兼容性和跨平台
- 挂载到document上，减少内存消耗，避免频繁的解绑
- 方便事件的统一管理(如事务机制)

#### setState和batchUpdate
setState的要点
- 有时异步(普通使用)，有时同步(setTimeout, DOM事件)
- 有时合并(对象形式)，有时不合并(函数形式)

1、setState主流程

2、batchUpdate机制

3、transaction(事务机制)

#### 组件渲染和更新过程
组件渲染过程
- 初始化props,state
- render()生成VNode
- patch(elem, vnode)

组件更新过程
- setState(newState) -> dirtyComponents
- render()生成newVNode
- patch(vnode, newVnode)

#### React fiber
patch分为两个阶段
- reconciliation阶段：执行diff算法，纯JS计算
- commit阶段：将diff结果渲染到DOM中

为什么分为两个阶段
- JS是单线程，且和DOM渲染公用一个线程
- 当组件足够复杂，组件更新时计算和渲染压力比较大
- 同时再有DOM操作需求(动画，拖拽等)，将卡顿

fiber
- 将reconciliation阶段进行任务拆分(commit阶段无法拆分)
- 在DOM需要渲染的时候暂停diff，空闲时恢复
- 通过浏览器的window.requestIdleCallback() API获取是否在进行DOM渲染


#### 真题演练
1、组件之间如何通讯
- 父子组件props
- 自定义事件
- redux,Context

2、JSX的本质是什么
- React.createElement()后产出的VNode

3、Context是什么，如何应用
- 是一个父组件，向所有的子孙组件传递信息

4、shouldComponentUpdate的用途
- 用于性能优化
- 配合“不可变值”使用，否则会出错

5、Redux的单向数据流
- action -> dispatch -> reducer -> state

6、什么是纯函数
- 返回一个新值，没有副作用
- 重点: 不可变值

7、React组件生命周期
- 单组件生命周期
- 父子组件生命周期的先后顺序

8、React的ajax应该放在那里
- componentDidMount

9、key属性的作用
- diff算法中通过tag和key来判断是否是sameNode
- 减少渲染次数，提升渲染性能

10、函数组件和class组件的区别
- 纯函数，输入props，输出JSX
- 没有实例，没有生命周期，没有state
- 不能扩展其它方法

11、什么是受控组件
- 受到state控制
- 需要自行监听onChange等事件，更新state


12、何时使用异步组件
- 加载大组件
- 路由懒加载

13、多个组件有公共逻辑，如何抽离
- 高阶组件(HOC)
- Render Props

14、Redux如何进行异步action
- 通过redux-thunk等实现异步action

15、React性能优化
- 渲染列表时使用key
- componentWillUnmount()时销毁自定义事件，DOM事件
- 合里使用异步组件
- 减少函数bind this的次数
- 合里使用shouComponentUpdate, PureComponent, memo
- 合里使用Immutable.js

16、React和Vue的区别
- 都支持组件化
- 都是数据驱动视图
- 都使用vnode操作DOM

区别
- React使用JSX拥抱JS，Vue使用模板拥抱HTML
- React函数式编程，Vue声明式编程
- React自由度更大，Vue API更多


