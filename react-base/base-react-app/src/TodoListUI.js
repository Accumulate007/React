import React, { Component } from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

/**
 * 无状态组件(性能较好)
 */
const TodoListUINoState = (props) => {
    return (
        <div>
            <div style={{margin:"15px 0"}}>
                <Input 
                    value={this.state.inputValue} 
                    placeholder="todo info" 
                    style={{width:"200px",marginRight: "20px"}}
                    onChange={this.props.handleInputChange}
                >
                </Input>
                <Button type="primary" onClick={this.props.handleBtnClick}>Confirm</Button>
            </div>
            <div>
                <List  
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => {
                        this.props.handleItemDelete(index)
                    }}>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}



/**
 * UI组件
 */
class TodoListUI extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div style={{margin:"15px 0"}}>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder="todo info" 
                        style={{width:"200px",marginRight: "20px"}}
                        onChange={this.props.handleInputChange}
                    >
                    </Input>
                    <Button type="primary" onClick={this.props.handleBtnClick}>Confirm</Button>
                </div>
                <div>
                    <List  
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={(index) => {
                            this.props.handleItemDelete(index)
                        }}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}


export default TodoListUI
