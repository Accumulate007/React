import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props
        
        if(!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" innerRef={(input) => {this.account = input}} />
                        <Input placeholder="密码" type="password" innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password) }>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/"></Redirect>
        }
        
    }

    componentDidMount() {
        
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountEle, passwordEle) {
        let account = accountEle.value
        let password = passwordEle.value
        dispatch(actionCreators.login(account, password))
    }
})


export default connect(mapState, mapDispatch)(Login)
