import React from 'react'

/**
 * 受控组件
 * 将表单元素和组件状态state进行关联
 * 
 * 
 * 
 */

class Component02 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jack',
            age: 20,
            info: 'this is textarea'
        }

    }

    onInputChange = (event) => {
        const value = event.target.value
        this.setState({
            name: value
        })
    }

    onTextAreaChange = (event) => {
        const value = event.target.value
        this.setState({
            info: value
        })
    }


    render() {
        const { name, age, info } = this.state
        return (
            <div>
                <div>
                    <label htmlFor="nameInput">姓名</label>
                    <input id="nameInput" value={name} onChange={this.onInputChange} />
                    <strong>{ name }</strong>
                </div>
                <div>
                    <textarea value={info} onChange={this.onTextAreaChange}></textarea>
                </div>
            </div>
        )
    }
}


export default Component02;
