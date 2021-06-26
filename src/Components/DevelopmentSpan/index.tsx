import { Button, message } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useAuth } from "context/auth-context";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useHttp } from "utils/http";

export const DevelopmentSpan: React.FC<ReactNode> = (props) => {

    const http = useHttp();
    const { login, user, logout, setUser } = useAuth()
    type LoginType = Parameters<typeof login>;

    //这个state别用了把
    // const [defaultAccount, setDefaultAccount] = useState<LoginType>();



    const handleTestToken = () => {
        http(`/member/getuserinfo2`)
            .then(async i => {
                message.info(`${JSON.stringify(await i.json())}`)
            })
            .catch(async i =>
                message.error(`无权限${JSON.stringify(i)}`)
            )
    }

    /* 快捷登陆 */
    const handleLoginFast = () => {
        type LoginType = Parameters<typeof login>;

        let user: LoginType = [{ username: `admin`, password: `admin` }];
        login(...user);
    }

    const handleLoginChange = () => {
        user?.name === `admin` ? login({ username: `string`, password: `string` }) : login({ username: `admin`, password: `admin` });
    }

    //debug
    const httper = useHttp();

    const handleClick = async () => {
        httper('member/getuserinfo2')
            .then(async i => {
                message.info(`鉴权成功${JSON.stringify(await i.json())}`);
            })
            .catch(() => {
                message.error(`当前用户无操作权限`);
            })
    }

    const handleClick2 = async () => {
        logout();
        setUser(null);
    }

    return (
        // 这里尝试使用slot方法进行处理
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 20, minHeight: 360 }}>
                <Button onClick={handleTestToken}> 测试权限</Button>
                <Button onClick={handleLoginFast}> 快捷登陆管理员账号</Button>
                {user ? <Button onClick={handleLoginChange} > 切换到{user?.name === 'admin' ? `其他用户` : `admin`}</Button> : <></>}
                <Button onClick={handleClick}>test token</Button>
                <Button onClick={handleClick2}>login out</Button>
                {user ? (user.token ? <div>
                    登录成功,用户名:{user?.name},{user.token}
                </div> : <></>) : null}
                {user && user.token ? <NavLink to="/home">go home</NavLink> : <p>未登录</p>}
                {/* <Button ><NavLink to="/home/">测试图标</NavLink></Button> */}

            </div>
        </Content>
    )
}