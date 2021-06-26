import { Button, Layout, Menu, message } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { useHttp } from "utils/http";
import { useAuth } from "context/auth-context";
import React, { useState } from "react";
import { M_PageHeader } from "Components/M_PageHeader";
import { HomeLayout } from "layouts";
import { Route } from "react-router-dom";
import { DataTable } from "Components/DataTable";

export const Home = () => {


    return (
        // <Layout>
            <HomeLayout />

        // </Layout>

    )
}