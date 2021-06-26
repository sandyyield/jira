import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

export const MenuList = () => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to="/home/datetable">图标数据测试</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
            </Menu.Item>
            <SubMenu key="submenu1" title="debugger tools" icon={<UserOutlined/>}>
                <Menu.Item key="a" icon={<UserOutlined />}>
                    <NavLink to="/home/debugger/tokentool" children={"tokenTools"}/>
                </Menu.Item>
                <Menu.Item key="b" icon={<UserOutlined />}>
                    b
                </Menu.Item>
                <Menu.Item key="c" icon={<UserOutlined />}>
                    c
                </Menu.Item>
                <Menu.Item key="d" icon={<UserOutlined />}>
                    d
                </Menu.Item>
                <Menu.Item key="e" icon={<UserOutlined />}>
                    e
                </Menu.Item>
            </SubMenu>

        </Menu>

    )
}