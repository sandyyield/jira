import userEvent from "@testing-library/user-event";
import { nanoid } from "nanoid";
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";

const localStorageKey = '__auth_provider_token__';

const apiUrl = process.env.REACT_APP_API_URL;


interface AuthResponseResult {
    expired: Date | null;
    isSuccessed: boolean;
    message: string;
    token: string | null;
}

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || "");
    return user;
}


//登陆不需要鉴权
export const login = (data: { username: string, password: string }) => {
    return http(`auth/login`, { data }).then(async i => {
        let res = await i.json();
        //use utility 类型 防止这种情况
        let user: User = {
            name: data.username,
            ...res,
            id: nanoid()
        }
        return handleUserResponse({ user });
    });

    
}

export const register = (data: { username: string, password: string }) => {
    return fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(async (response: Response) => {
        if (response.ok) {
            let res = await response.json();

            return handleUserResponse(res);
            // let res = await response.json();
            // console.log('fetch login api', res);
            // return;
        }
        return Promise.reject(data);
    })
}

export const logout = () => window.localStorage.removeItem(localStorageKey);