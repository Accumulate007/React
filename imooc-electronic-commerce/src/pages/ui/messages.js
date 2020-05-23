import React from 'react'
import { Card, Button, message } from 'antd'

import './index.less'


class Messages extends React.Component {

    showMessage = (type) => {
        message[type]({
            content: '这是message框的内容'
        })
    }

    render() {
        return (
            <div className="home-wrap">
                <Card title="message提示框" class="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>            
        )
    }
}

export default Messages