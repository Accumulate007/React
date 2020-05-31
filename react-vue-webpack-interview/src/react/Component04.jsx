import React from 'react'

/**
 * setState()
 * 
 * 函数组件没有state
 * 
 * setState()可能是异步更新，可能是同步
 * - 普通代码中的setState()是异步的
 * - setTimeout()中的setState()是同步的
 * - 自定义的DOM事件中，setState()是同步的
 * 
 */


class Component04 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jack',
            age: 20,
            info: 'this is textarea'
        }
    }

    clickHandle = () => {
        const {age} = this.state
        this.setState({
            age: ++age
        }, () => {
            console.log('the new age is: ' + this.state.age)
        })
    }

    createSetTiemout = () => {
        setTimeout(() => {
            this.setState({
                age: ++age
            })
        }, 0);
    }

    // 传入对象，setState会合并操作，执行结果只一次
    once = () => {
        this.setState({
            age: this.state.age++
        })

        this.setState({
            age: this.state.age++
        })

        this.setState({
            age: this.state.age++
        })
    }

    // 传入函数，不会被合并，执行结果是 +3
    many = () => {
        this.setState((preState, props) => {
            return {
                age: preState.age + 1
            }
        })

        this.setState((preState, props) => {
            return {
                age: preState.age + 1
            }
        })

        this.setState((preState, props) => {
            return {
                age: preState.age + 1
            }
        })
    }

    render() {
        const { name, age } = this.state
        return (
            <div>
                <p>age: {age}</p>
                <p onClick={this.clickHandle}>age++</p>
            </div>
        )
    }
}


export default Component04;
