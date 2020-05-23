import React from 'react'
import { Card, Form, Input, Button } from 'antd'

const FormItem = Form.Item

class FormLogin extends React.Component {


    render() {
        return (
            <div className="home-wrap">
                <Card title="登录表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="登录水平表单" style={{marginTop:15}}>
                    <Form style={{width: 320}}>
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}



export default FormLogin
