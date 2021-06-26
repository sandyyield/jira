import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { DataTable } from "Components/DataTable";
import { DevelopmentSpan } from "Components/DevelopmentSpan";
import { M_PageHeader } from "Components/M_PageHeader";
import { Route } from "react-router-dom";
import { Context } from "vm";
import { NormalFooter } from "./Components/Footers";
import { NormalHeader } from "./Components/Headers";
import { MenuList } from "./Components/MenuList";

export const HomeLayout = () => {
    return (
        <Layout>
            {/* 顶部展示区域 */}
            <M_PageHeader />


            {/* 左侧列表部分 */}
            <Layout>
                <Sider
                    className="site-layout-background"
                >
                    {/* <div className="logo" /> */}
                    {/* 一级菜单 */}
                    <MenuList />
                </Sider>
                <Content>
                    <Route path="/home/datetable" component={DataTable} />
                    <Route path="/home/debugger/tokentool" component={DevelopmentSpan} />
                </Content>
            </Layout>
            <Footer>
                <NormalFooter />
            </Footer>
        </Layout>
    );
}