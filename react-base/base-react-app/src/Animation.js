import React, { Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

import './animation.css'

/**
 * <Fragment>占位符的使用
 * 
 */

class Animation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true,
            change: true
        }

        this.handleToggle = this.handleToggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleToggle() {
        this.setState({
            show: !this.state.show
        })
    }

    handleChange() {
        this.setState({
            change: !this.state.change
        })
    }


    render() {
        return (
            <Fragment>
                <p>Use CSS3 ↓</p>
                <p className={this.state.show ? 'show' : 'hide'}>Hello, Hangzhou</p>
                <button onClick={this.handleToggle}>Toggle</button>
                <p>Use react-transitioin-group ↓</p>
                <CSSTransition 
                    in={this.state.change}
                    timeout={1000}
                    classNames="fade"
                >
                    <h3>Welcome to use CSSTransition!</h3>
                </CSSTransition>
                <button onClick={this.handleChange}>Change</button>
            </Fragment>
        )
    }
}






export default Animation
