
import React from 'react'
import { Card, Button, Modal } from 'antd'

import './index.less'


class Modals extends React.Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
        confirm: false
    }

    handleOpen = (type) => {
        this.setState({[type]: true})
    }

    handleConfirm = () => {
        this.setState({
            confirm: true
        })
        Modal.confirm({
            title:"确认?",
            content:"杭州市余杭区",
            onOk() {
                console.log('你点击了 确认！！！')
            },
            onCancel() {
                console.log("你点击了 取消~~~")
            }
        })
    }

    render() {
        return (
            <div className="home-wrap">
                <Card title="基础模态框">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="danger" onClick={() => this.handleOpen('showModal3')}>顶部20px</Button>
                    <Button type="danger" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框">
                    <Button type="primary" onClick={() => this.handleConfirm()}>这是一个确认框</Button>
                </Card>
                <Modal
                    title="Open"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <h2>这是一个h2标签</h2>
                    <strong>这是一个strong标签</strong>
                </Modal>

                <Modal
                    title="自定义页脚"
                    visible={this.state.showModal2}
                    okText="自定义 确定"
                    cancelText="自定义 取消"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <h2>这是一个自定义页脚</h2>
                </Modal>

                <Modal
                    title="顶部20px"
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <h2>顶部20px，添加自定义样式</h2>
                </Modal>

                <Modal
                    title="水平垂直居中"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <h2>水平垂直居中</h2>
                </Modal>
            </div>
        )
    }
}


export default Modals

