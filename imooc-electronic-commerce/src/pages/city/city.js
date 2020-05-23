
import React from 'react'
import { Card } from 'antd'



class City extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
    }

   componentDidMount() {
   
   }


    render() {

        return (
            <div className="home-wrap">
                <Card title="基础表格">
                    city
                </Card>
            </div>
        )
    }
}


export default City

