import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * 子组件通过this.props接受父组件传递的数据
 * 父组件通过方法传递自己的方法给子组件
 * 使用prop-types进行props数据类型的校验
 * props的defaultProps设置
 * 
 * 当组件的state或者props发生改变的时候，组件的render函数就会重新执行
 * 当父组件的render函数执行的时候，它的子组件的render函数都将被执行一次
 */

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        const index = this.props.index
        this.props.deleteItem(index)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true
        }
        return false
    }

    render() {
        const {content} = this.props
        return (
            <li 
                onClick={this.handleClick.bind(this)}>
                {content}
            </li>
        )
    }
}

// props校验
TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// props默认值设置
TodoItem.defaultProps = {
    content: 'hello, Hangzhou'
}

export default TodoItem
