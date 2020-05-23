import React from 'react'
import { Row, Col } from 'antd'
import Util from '../../utils/utils'

import './index.less'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: 'Jack',
            sysTime: ''
        }
    }

    componentWillMount() {
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        })
    }


    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <span>欢迎, {this.state.userName}</span>
                    <a href="#">退出</a>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">大雨</span>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Header
