import React from 'react'

/**
 * 异步组件
 * 
 * 
 */

const ContextDemo = React.lazy(() => import('./Component06.jsx'))

class Component07 extends Component {
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
            <div className="modal">
                <React.Suspense fallback={<div>...Loading ContextDemo Component</div>}>
                    <ContextDemo />
                </React.Suspense>
            </div>
        )
    }
}


export default Component07;
