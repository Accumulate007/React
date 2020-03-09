import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

import store from './store/index'

// import { CHANGE_INPUT_VALUE } from './store/actionTypes'
import { getInputChangeAction, initListAction, getTodoList } from './store/actionCreator'

/**
 * 1. 如果想要在JSX中的绑定事件中进行传参，要写成 this.handleClick.bind(this, index)的形式
 * 2. 拆分actioinTypes.js，用常量代替action中type的字符串描述，这样便于出现问题的时候发现问题
 * 
 * 
 */

class AntdTodoList extends Component {
    constructor(props) {
        super(props)

        this.state = store.getState()

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)

        // store里面的数据如果发生了改变，则会执行subscribe中的回调
        store.subscribe(this.handleStoreChange)
    }

    handleInputChange(e) {
        const value = e.target.value

        // 使用拆分的 actionCreator
        const action = getInputChangeAction(value)
        /*
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: value
        }
        */
        store.dispatch(action)
    }

    handleStoreChange() {
        console.log('store change')
        this.setState(store.getState())
    }

    handleBtnClick() {
        const action = {
            type: 'add_todo_item'
        }

        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = {
            type: 'delete_todo_item',
            index
        }

        store.dispatch(action)
    }

    componentDidMount() {
        axios.get('/list').then(res => {
            const data = res.data
            const action = initListAction(data)

            store.dispatch(action)
        })

        // 可以使用 redux 的中间件 redux-thunk 来统一管理组件中的异步操作
        /*
        const action = getTodoList()
        store.dispatch(action)
        */
    }


    render() {
        return (
            <div>
                <div style={{margin:"15px 0"}}>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder="todo info" 
                        style={{width:"200px",marginRight: "20px"}}
                        onChange={this.handleInputChange}
                    >
                    </Input>
                    <Button type="primary" onClick={this.handleBtnClick}>Confirm</Button>
                </div>
                <div>
                    <List  
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default AntdTodoList
