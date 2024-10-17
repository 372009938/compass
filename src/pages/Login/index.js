
import { useState } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchLogin } from '@/store/modules/user';

import logo from '@/assets/logo.png'
import './index.scss'

const Login = () => {

    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // 点击登录按钮时触发 参数values即是表单输入数据
    const onFinish = async (values) => {
        setloading(true)
        await dispatch(fetchLogin(values))
        setloading(false)
        navigate('/')

    }

    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form initialValues={{
                    email: '3@qq.com',
                    password: '123456'
                }} validateTrigger={['onBlur']} onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: '请输入手机号' },
                            // {
                            //     pattern: /^1[3-9]\d{9}$/,
                            //     message: '手机号码格式不对'
                            // }
                        ]}
                    >
                        <Input value='3@qq.com' size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: '请输入验证码' },
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码" />
                    </Form.Item>

                    <Form.Item>
                        <Button loading={loading} type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login