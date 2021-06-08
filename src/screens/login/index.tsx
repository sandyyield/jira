import { FormEvent } from "react"


const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {

    interface LoginParam {
        username: string;
        password: string;
    }
    const login: (param: LoginParam) => void = (param) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(async (response: Response) => {
            if (response.ok) {
                let res = await response.json();
                console.log('fetch login api', res);
                return;
            }
        })
    }


    //TS鸭子类型,interface FormEvent<T = Element> extends SyntheticEvent<T> react已经定义了 
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        console.log(username, password);

        login({ username, password });


    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">username</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">pwd</label>
            <input type="password" id={'password'} />
        </div>
        <button type={"submit"}>login</button>
    </form>
}