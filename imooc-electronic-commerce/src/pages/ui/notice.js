import React from 'react'
import { Card, Button, notification } from 'antd'

import './index.less'


class Notice extends React.Component {

    openNotification = (type) => {
        notification[type]({
            message: '武汉加油',
            description: '这是一句简短的内容'
        })
    }

    openDerictionNotification = (type, direction) => {
        notification.config({
            placement: direction
        })

        notification[type]({
            message: '这是带方向的哦~~~',
            description: '这里依然是 一句介绍文'
        })
    }

    render() {
        return (
            <div className="home-wrap">
                <Card title="通知提醒框" class="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>成功按钮</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>信息按钮</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>警告按钮</Button>
                </Card>
                <Card title="各个方向弹出控制" class="card-wrap">
                    <Button type="primary" onClick={() => this.openDerictionNotification('success', 'topLeft')}>左上</Button>
                    <Button type="primary" onClick={() => this.openDerictionNotification('info', 'bottomLeft')}>左下</Button>
                    <Button type="primary" onClick={() => this.openDerictionNotification('warning', 'bottomRight')}>右下</Button>
                </Card>
            </div>            
        )
    }
}

export default Notice