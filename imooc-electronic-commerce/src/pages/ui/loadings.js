import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'

import './index.less'


class Loadings extends React.Component {


    render() {
        return (
            <div className="home-wrap">
                <Card title="Spin用法" class="card-wrap">
                    <Spin  />
                    <Spin size="small" />
                    <Spin size="large" />
                </Card>
                <Card>
                    <Alert 
                        message="Chen Working"
                        description="Welcome to Hangzhou"
                        type="info"
                    />

                    <Spin>
                        <Alert 
                            message="Inner Alert"
                            description="ni hao"
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}

export default Loadings