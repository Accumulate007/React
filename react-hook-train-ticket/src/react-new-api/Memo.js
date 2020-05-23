import React, { Component, memo } from 'react'

class Foo extends Component {

    // 组件渲染优化，避免不必要的渲染(可用PureComponent组件代替)
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.name === this.state.name) {
            return false
        }
        return true
    }

    render() {
        return (
            <div>
                Foo
            </div>
        )
    }
}

// momo的使用：由于函数式组件无法继承PureComponent,可以使用memo达到同样的效果，优化组件的渲染
const Bar = memo(function Bar(props) {
    return (
        <div>
            This is Bar
        </div>
    )
})

class MemoDemo extends Component {

    render() {
        
        return (
            <div>
                <Foo />
                <Bar />
            </div>
        )
    }
}


export default MemoDemo

