import React from 'react'
import { Menu, Icon } from 'antd'
import { NavLink, Link } from 'react-router-dom'

import MenuConfig from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

/**
 * 1.react中定义标签style的方式
 * 
 * 
 * 
 */

class NavLeft extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuTreeNode: null
        }
    }

    // 渲染菜单
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
        return <Menu.Item title={item.title} key={item.key}>
            <NavLink to={item.key}>{ item.title }</NavLink>
            {/* { item.title } */}
        </Menu.Item>
        })
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)

        this.setState({
            menuTreeNode
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="Not Found"/>
                    <h1>Chen React</h1>
                </div>
                <Menu theme="dark" >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}


export default NavLeft
