
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from "context/auth-context";
import { useHttp } from "utils/http";

import './login.less'

export interface LoginParam {
    username: string;
    password: string;
}

export const LoginScreen = () => <Login />


//antd Form组件
const NormalLoginForm = () => {

    const { login, user, logout, setUser } = useAuth()

    const onFinish = (val: { username: string, password: string }) => {
        login(val);
    }

    //debug
    const httper = useHttp();

    const handleClick = async () => {
        httper('member/getuserinfo2');
    }

    const handleClick2 = async () => {
        logout();
        setUser(null);
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                //声明式验证
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    { max: 12, message: 'username 必须小于等于12位' },
                    { min: 4, message: 'username 必须大于等于4位' },
                    { pattern: /^\w+$/, message: 'username 必须是字母,数字,下划线组成' }
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    { max: 12, message: 'password 必须小于等于12位' },
                    { min: 4, message: 'password 必须大于等于4位' },
                    { pattern: /^\w+$/, message: 'password 必须是字母,数字,下划线组成' }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* <a className="login-form-forgot" href="">
                                Forgot password
                            </a> */}
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                {/* Or <a href="">register now!</a> */}
            </Form.Item>
            <Button onClick={handleClick}>test token</Button>
            <Button onClick={handleClick2}>login out</Button>
            {user ? <div>
                登录成功,用户名:{user?.name},{user.token}
            </div> : null}
        </Form>
            
    )
}


const Login = () => {
    return (
        <div className='login'>
            <header>
                <h1>Jira</h1>
            </header>
            <section>
                <h1>用户登陆</h1>
                <NormalLoginForm />
            </section>
        </div>
    )
}

