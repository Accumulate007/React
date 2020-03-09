import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import * as actionCreators from './store/actionCreators'
import { actionCreators as LoginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'




// 可以写成无状态组件(性能比较高)
/*
const Header = () {
    return ()
}
*/

class Header extends Component {

    // constructor(props) {
    //     super(props)

    //     this.getListArea = this.getListArea.bind(this)
    // }

    getListArea = () => {
        const { focused, list, page, mouseIn, totalPage,
                handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const jsList = list.toJS()
        const pageList = []

        if(jsList.length) {
            for(let i=(page-1)*10; i<page*10; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            handleChangePage(page, totalPage, this.spinIcon)
                        }}><i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo href="/"/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    {
                        this.props.login ? 
                            <NavItem onClick={this.props.logOut} className="right">退出</NavItem> : 
                            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={350}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => {
                                    this.props.handleInputFocus(this.props.list)
                                }}
                                onBlur={this.props.handleInputBlur}
                                >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>
                        { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                        <i className="iconfont">&#xe6e5;</i>写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


// 将 store 中的数据映射到组件的 props 中，组件中可以通过this.props访问数据
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        // 效果等同于上面的写法(上下两种写法是等效的 ↑ ↓)
        list: state.getIn(["header", "list"]),
        page: state.getIn(["header", "page"]),
        totalPage: state.getIn(["header", "totalPage"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if(list.size === 0) {
                dispatch(actionCreators.getList())
            }
            
            const action = actionCreators.searchFocus()
            dispatch(action)
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        },
        handleMouseEnter() {
            const action = actionCreators.mouseEnter()
            dispatch(action)
        },
        handleMouseLeave() {
            const action = actionCreators.mouseLeave()
            dispatch(action)
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if(originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`

            if(page < totalPage) {
                page++
            } else {
                page = 1
            }
            const action = actionCreators.changePage(page)
            dispatch(action)
        },
        logOut() {
            dispatch(LoginActionCreators.loginOut())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
