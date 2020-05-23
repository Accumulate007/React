import React from 'react'

/**
 * 1.React中组件的书写方式
 * 2.state：组件的状态
 * 3.props: 只读，组件中只能使用props，不能改变props的值
 * 4.事件的处理
 * 
 * 
 * 
 */




// 函数组件
function ComponentOfFunc() {

}

// 类组件
class ReactComponetDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Jack',
            age: 15
        }

        this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick() {
        console.log('button is click')
        this.setState({
            age: this.state.age + 1
        })
    }


    render() {
        return (
            <div>
                this is {this.state.name}, age is {this.state.age}<br/>
                <button onClick={this.buttonClick}>Click Me</button>
            </div>
        )
    }
}



export default ReactComponetDemo
