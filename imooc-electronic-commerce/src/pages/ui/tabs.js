import React from 'react'
import { Card, Tabs } from 'antd'

import './index.less'

const TabPane = Tabs.TabPane

class MyTabs extends React.Component {

    tabChange = () => {
        console.log('tab change...')
    }

    componentWillMount() {
        const panes = [
            {
                title: 'Tab 111',
                content: 'tab 1 content',
                key: '1'
            },
            {
                title: 'Tab 222',
                content: 'tab 2 content',
                key: '2'
            },
            {
                title: 'Tab 333',
                content: 'tab 3 content',
                key: '3'
            }
        ]

        this.setState({
            activeKey: panes[0]['key'],
            panes
        })
    }

    panelChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    tabOnEdit = (targetKey, action) => {
        this[action](targetKey)
    }

    render() {
        return (
            <div className="home-wrap">
                <Card title="tabs" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                        <TabPane tab="tab 1" key="1">Content AAA</TabPane>
                        <TabPane tab="tab 2" key="2">Content BBB</TabPane>
                        <TabPane tab="tab 3" key="3" disabled>Content CCC</TabPane>
                    </Tabs>
                </Card>
                <Card title="带图标的tabs" className="card-wrap">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span>Icon plus</span>} key="1">icon aaa</TabPane>
                        <TabPane tab={<span>Icon delete</span>} key="2">icon bbb</TabPane>
                    </Tabs>
                </Card>
                <Card title="带图标的tabs" className="card-wrap">
                    <Tabs defaultActiveKey="1" 
                        type="editable-card" 
                        onChange={this.panelChange}
                        onEdit={this.tabOnEdit}
                    >
                       {
                           this.state.panes.map((panel) => {
                                return <TabPane 
                                    tab={panel.title}
                                    key={panel.key}
                                >
                                    {panel.content}
                                </TabPane>
                           })
                       }
                    </Tabs>
                </Card>
            </div>            
        )
    }
}

export default MyTabs