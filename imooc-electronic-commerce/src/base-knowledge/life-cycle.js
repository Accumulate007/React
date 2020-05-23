import React from 'react'

/**
 * React生命周期
 * 1.constructor
 * 2.componentWillMount
 * 3.render
 * 4.componentDidMount
 * 5.
 * 
 * 
 */




class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            num: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            num: this.state.num + 1
        })
    }

    // 组件即将渲染
    componentWillMount() {
        console.log('componentWillMount---组件即将渲染')
    }

    // 组件已经渲染完成
    componentDidMount() {
        console.log('componentDidMount---组件已经渲染完成')
    }

    // 接受父组件传递的props时候触发
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps---接受父组件传递的props时候触发')
    }

    // 组件是否应该更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate---组件是否应该更新')
        return true
    }

    // 组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate---组件将要更新')
    }

    // 组件更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate---组件更新完成')
    }

    // 组件销毁时调用
    componentWillUnmount() {
        console.log('componentWillUnmount---组件销毁时调用')
    }



    render() {
        return (
            <div>
                <p>The number is : {this.state.num}</p>
                <button onClick={this.handleClick}>更新组件</button>
            </div>
        )
    }
}


export default LifeCycleDemo
