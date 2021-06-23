import QueryString from "qs";

import * as auth from 'auth-provider';
import { useAuth } from "context/auth-context";
import { getToken } from "auth-provider";

// const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    token?: string,
    data?: object,
}

export const http: (input: string, init?: Config) => Promise<Response> = async (input, { data, token, headers, ...customConfig } = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-type': data ? 'application/json' : '',
        },
        ...customConfig
    }

    if (config.method.toUpperCase() == 'GET') {
        input += `?${QueryString.stringify(data)}`
    }
    else {
        config.body = JSON.stringify(data || {});
    }

    return fetch(`api/${input}`, config)
        .then(async response => {
            //resuful 规范
            if (response.status === 401) {
                //鉴权失败  直接登出
                console.log(`鉴权失败:response status [${response.status}]`);

                // await auth.logout();
                // //页面重新刷新
                // window.location.reload();

                return Promise.reject({ message: '请重新登录' });
            }
            // const res = await response.json();
            if (response.ok) {
                return response;
            }
            else {
                //手动抛个异常
                return Promise.reject(await response.json());
            }
        })
}

//利用hook自动携带token
export const useHttp = () => {
    const { user } = useAuth();
    // return ([input, config]: [string, Config]) => http(input, { ...config, token: user?.token })
    //Tuple 元组
    // Parameters<typeof http> 静态类型 utilitly 类型约束
    return (...[input, config]: Parameters<typeof http>) => http(input, { ...config, token: user?.token })
}