import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import * as auth from 'auth-provider';
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";
import { useMount } from "utils";

type AuthForm = {
    username: string;
    password: string;
}

interface AuthContextInfo {
    user: User | null;
    login: (form: AuthForm) => Promise<void>;
    register: (form: AuthForm) => Promise<void>;
    logout: () => void;
    setUser: Dispatch<SetStateAction<User | null>>;
}
const AuthContext = React.createContext<AuthContextInfo | undefined>(undefined);
AuthContext.displayName = "AuthContext";


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // useMount(() => {
    //     BootStarpUser().then(setUser);
    // })

    //point free 原则
    const login = (form: AuthForm) => auth.login(form).then(setUser)
    const register = (form: AuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout()
    return <AuthContext.Provider children={children} value={{ user, login, register, logout, setUser }}></AuthContext.Provider>
}

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth error');
    }
    return context;
}

// const bootStarpUser: () => User | null = async () => {
//     let user = null;
//     const token = auth.getToken();
//     if (token) {
//         const data = await (await http('', { token })).json();
//         user = {
//             ...data
//         }
//     }
//     return user;
// }