
import React from 'react'
import { Card, Button, Radio } from 'antd'

import './index.less'


class Buttons extends React.Component {

    state = {
        loading: true,
        size: 'large'
    }

    handleToggle = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    handleSizeChange(e) {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div className="home-wrap">
                <Card title="基础按钮">
                    <Button type="primary">主按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="danger">警告按钮</Button>
                </Card>
                <Card title="图形按钮">
                    {/* <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="download">下载</Button> */}
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}>确定</Button>
                    <Button onClick={this.handleToggle}>点击改变loading</Button>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleSizeChange.bind(this)}>
                        <Radio value="small">小</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>主按钮</Button>
                    <Button type="dashed" size={this.state.size}>虚线按钮</Button>
                    <Button type="danger" size={this.state.size}>警告按钮</Button>
                </Card>
            </div>
        )
    }
}


export default Buttons

