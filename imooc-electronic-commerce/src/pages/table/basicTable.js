
import React from 'react'
import { Card, Table } from 'antd'



class BasicTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
    }

   componentDidMount() {
    const dataSource = [
        {
            id: '0',
            userName: 'Messi',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '1999-08-03',
            address: '杭州市西湖区'
        },
        {
            id: '1',
            userName: 'Lily',
            sex: '2',
            state: '3',
            interest: '1',
            birthday: '1985-11-25',
            address: '嘉兴市南湖区'
        }
    ]

    this.setState({
        dataSource
    })
   }


    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ]


        return (
            <div className="home-wrap">
                <Card title="基础表格">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>
            </div>
        )
    }
}


export default BasicTable

