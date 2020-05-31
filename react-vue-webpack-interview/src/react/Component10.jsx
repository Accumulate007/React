import React from 'react'

/**
 * Render Props
 * 
 * 
 */


class Component10 extends Component {
    constructor(props) {
        super(props)
        // 多个组件公共逻辑的数据
        this.state = {
            height: 20,
            width: 10
        }
    }
    

    render() {
        return (
            <div className="demo">
                {this.props.render(this.state)}
            </div>
        )
    }
}

const APP = () => {
    return ( 
        <Component10 render={
            /* render是一个函数组件 */
            (props) => <p>{props.a},{props.b}</p>
        } />
    )
}


export default Component10;
