import React, { PureComponent } from 'react'

/**
 * 性能优化
 * 
 * React默认父组件更新，子组件也无条件更新
 * 
 * PureComponent: 在shouldComponentUpdate中实现了浅层比较
 * 
 * memo: 函数组件中实现PureComponent
 */


class Component08 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            height: 20,
            width: 10
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.height !== this.state.height) {    // 对比修改后的state和当前的state
            return true
        }
        return false
    }

    render() {
        const { height, width } = this.state

        return (
            <div className="modal">
               
            </div>
        )
    }
}


export default Component08;
