import React, { Component, Fragment } from 'react'
import store from './react-redux-store'
import { connect } from 'react-redux'

class ReactReduxTodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.props.inputValue}
                        onChange={this.props.handleInputChange} />
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.map((item, index) => {
                        return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTodoList)
