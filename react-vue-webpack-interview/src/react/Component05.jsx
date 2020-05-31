import React from 'react'

/**
 * Portals
 * 
 * 
 */


class Component05 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 20,
            width: 10
        }
    }
    

    render() {
        const { height, width } = this.state

        // 正常渲染
        // return (
        //     <div className="modal">
        //        {this.props.chidlren}
        //     </div>
        // )

        // 使用Portals渲染到body上
        return ReactDOM.createPortal(
            <div className="modal">{this.props.children}</div>,
            document.body
        )
    }
}


export default Component05;
