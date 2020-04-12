### 一、为什么要引入React
在书写JSX的时候，可能并没有显式的用到React,但是还是必须在模块的顶部import React。之所以这样，是因为JSX本质上是
React.createElement()函数提供的语法糖。JSX语法经过该函数处理转化后，产出VNode。


### 二、为什么使用className而不是class
- JSX是JS而不是HTML
- 尽可能使用HTML DOM对象的属性(el.className)。对象属性可以是任意类型，可以弹性扩展
- 方便使用对象解构的方式去进行属性的赋值，而使用class进行对象结构会报错


### 三、JSX中的React DOM属性为什么都是驼峰命名
因为JSX语法上更接近JavaScript而不是HTML，所以React DOM使用camelCase（小驼峰命名）来定义属性的名称，而不使用HTML属性名称的命名约定。例如，JSX里的class变成了className，而tabindex则变为tabIndex。


### 四、为什么 constructor 里要调用 super 和传递 props
1.为什么要调用super

其实这不是React的限制，这是JavaScript的限制，在构造函数里如果要调用this，那么提前就要调用super，在React里，我们常常会在构造函数里初始化state，this.state = xxx ，所以需要调用super。

2.为什么要传递 props
- 如果你不小心漏传了props，直接调用了super()，你仍然可以在render和其他方法中访问this.props。因为React会在构造函数被调用之后，会把props赋值给刚刚创建的实例对象。
- 但是，如果super()中不传递props，在构造函数constructor中，在super()调用之后与构造函数结束之前，this.props仍然是没法用的。要是构造函数中调用了某个访问props的方法，那这个bug就更难定位了。


### 五、React中组件首字母为什么必须要大写
小写开头的元素React会认为它是原生的DOM元素，在React.createElement()创建VNode的时候，传递的参数是有区别的
```javascript   
React.createElement(MyComponent, null)

React.createElement('myComponent', null)
```


### 六、React方法调用bind this的四种写法
```javascript
class Foo extends React.Component {
  constructor(props) {
    super(props)

    this.clickTypeTwo = this.clickTypeTwo.bind(this)
  }

  clickTypeOne() {
    console.log('直接bind的方式，会因为render多次调用多次bind影响性能')
  }

  clickTypeTwo() {
    console.log('在constructor中bind this，性能较好，但是写法麻烦')
  }

  clickTypeThree(e) {
    console.log('每次render都会重复创建函数，影响性能')
  }

  clickTypeFour = () => {
    console.log('箭头函数的方式，书写方便')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickTypeOne.bind(this)}>
            click-one
        </button>
        <button onClick={this.clickTypeTwo}>
            click-two
        </button>
        <button onClick={(e) => {this.clickTypeThree(e)}}>
            click-three
        </button>
        <button onClick={this.clickTypeFour}>
            click-four
        </button>
      </div>
    )
  }
}

```


### 七、为什么要setState，而不是直接this.state.xx = oo
- setState做的事情不仅仅只是修改了this.state的值，另外最重要的是它会触发React的更新机制，会进行diff，然后将patch部分更新到真实dom里
- 如果你直接this.state.xx == oo的话，state的值确实会改，但是改了不会触发UI的更新，那就不是数据驱动了


### 八、React中创建组件组件方式的取舍
1.类组件(class)

2.函数式组件(无状态组件)
- 无需实例化，无生命周期，只负责渲染，性能较好
- 如果你的组件没有涉及到内部状态，只是用来渲染数据，那么就用函数式组件，性能较好

3.PureComponent纯组件

PureReactComponent中会默认判断新旧属性和状态是否相等，如果没有改变则返回false，因此它得以减少组件的重渲染。减少了组件无意义的重渲染（当state和props没有发生变化时），当结合immutable数据时其优更为明显；隔离了父组件与子组件的状态变化。

