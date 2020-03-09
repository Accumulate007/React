import React, { Component } from 'react'
import TodoItem from './TodoItem'
import Animation from './Animation'
// import axios from 'axios'

import './style.css'

/**
 * this.state
 * this.setState()
 * 组件内方法this的绑定(两种方式)
 * 通过className给元素添加class
 * JSX中注释的写法
 * JSX中事件的写法(驼峰形式)
 * 通过dangerouslySetInnerHTML设置不转义的标签内容()
 * label标签上添加for属性的方式
 * key值应该放在循环的最外层元素上
 * ref的使用方式
 * this.setState(fn, callback)中callback的使用方式
 */
class TodoList extends Component {
  constructor(props) {
    super(props)
    // this.state 称为组件的状态
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    // const value = e.target.value
    const value = this.input.value
    this.setState({
      inputValue: value
    })

    // 写法二(新版本React的写法)
    /*
    this.setState((preState) => {
      return {
        inputValue: value
      }
    }, () => {
      // 该方法是一个回调函数，在DOM更新完毕后触发执行
      console.log('now DOM is updated')
    })
    */

  }

  handleBtnClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    // react 中this.state不允许做任何的修改(对react性能优化有影响)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })

    console.log(this.ul)
  }

  /**
   * 生命周期函数
   */

  componentWillMount() {
    console.log('当组件即将被挂载到页面的时候执行该函数: componentWillMount')
  }

  // render

  componentDidMount() {
    console.log('当组件被挂载到页面之后执行该函数: componentDidMount')

    /*
    axios.get('/api/todoList').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    */
  }

  shouldComponentUpdate() {
    console.log('组件被更新之前执行: componentDidMount')

    // 需要明确返回一个布尔值，告诉react是否确定更新组件
    return true
  }

  componentWillUpdate() {
    console.log('组件被更新之前，shouldComponentUpdate之后执行: componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('组件更新完成之后执行: componentDidUpdate')
  }

  // 当一个组件从父组件接收了props参数，只要父组件的render被执行了，子组件的该函数会被执行
  componentWillReceiveProps() {
    console.log('一个组件如果没有被传递props参数，该函数不会执行: componentWillReceiveProps')
  }

  componentWillUnmount() {
    console.log('组件即将从页面移除: componentDidUpdate')
  }


  // render 是唯一必须存在的生命周期函数
  render() {
      return (
          <div>
              {/**这是JSX里面写注释的方法 */}
              {
                // 这是单行注释的写发
              }
              <label htmlFor="insertArea">请输入内容：</label>
              <input className="input" id="insertArea"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                ref={(input) => {this.input = input}}/>
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
              <ul ref={(ul) => {this.ul = ul}}>
                {
                  this.state.list.map((item, index) => {
                    return (
                      <div key={index}>
                        {
                          // return (<li 
                          //           onClick={this.handleItemDelete.bind(this, index)} 
                          //           key={index}
                          //           dangerouslySetInnerHTML={{__html: item}}>
                                      
                          //         </li>)
                        }
                        <TodoItem  
                          content={item} 
                          index={index}
                          deleteItem={this.handleItemDelete.bind(this)}/>
                    </div>
                    )
                  })
                }
              </ul>
              <div>
                <Animation />
              </div>
          </div>
      )
  }
}




export default TodoList
