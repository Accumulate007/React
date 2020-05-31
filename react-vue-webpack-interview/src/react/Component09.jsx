import React from 'react'

/**
 * 高阶组件(HOC)
 * 
 * 
 */


 // 高阶组件的实现
const HOCFactory = (SomeComponent) => {
    class HOC extends React.Component {
        // 在此定义组件的公共逻辑

        render() {
            return (
                <Component {...this.props} />
            )
        }
    }
    return HOC;
}

const Com01 = HOCFactory(DemoComponent01)
const Com02 = HOCFactory(DemoComponent02)

class Component09 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 20,
            width: 10
        }
    }
    

    render() {
        const { height, width } = this.state

        return (
            <div className="demo">
               
            </div>
        )
    }
}


export default Component09;
