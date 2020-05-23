import React from 'react'
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, 
         DatePicker, TimePicker, InputNumber, Upload } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

const FormItem = Form.Item
const { Option } = Select

class Register extends React.Component {

    render() {
        const formItemLayout = {
            labelCol:{
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }

        return (
            <div className="home-wrap">
                <Card title="登录表单">
                    <Form layout="horizontal" {...formItemLayout}>
                        <FormItem label="用户名">
                           <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem label="密码">
                           <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem label="性别">
                           <Radio.Group>
                               <Radio value="1">男</Radio>
                               <Radio value="2">女</Radio>
                           </Radio.Group>
                        </FormItem>
                        <FormItem label="年龄">
                           <InputNumber />
                        </FormItem>
                        <FormItem label="人物">
                           <Select>
                               <Option value="1">白居易</Option>
                               <Option value="2">李白</Option>
                               <Option value="3">王小波</Option>
                           </Select>
                        </FormItem>
                        <FormItem label="爱好">
                           <Select mode="multiple">
                               <Option value="1">杭州</Option>
                               <Option value="2">上海</Option>
                               <Option value="3">北京</Option>
                               <Option value="4">宁波</Option>
                           </Select>
                        </FormItem>
                        <FormItem label="是否已婚">
                           <Switch />
                        </FormItem>
                        <FormItem label="生日">
                           <DatePicker />
                        </FormItem>
                        <FormItem label="联系地址">
                           <TextArea />
                        </FormItem>
                        <FormItem label="头像">
                           <Upload></Upload>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}



export default Register
