import { useEffect, useState } from "react";
import { List } from "./list"
import { SearchPanel } from "./search-panel";
import qs from 'qs';
import { cleanObject, useDebounced, useMount } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {

    const [users, setUsers] = useState([]);
    
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });

    const [list, setList] = useState([]);


    const debuouncedParam = useDebounced(param, 500);

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debuouncedParam))}`).then(async response => {
            if (response.ok) {
                let res = await response.json();
                // console.log('fetch', res);
                setList(res);
            }

        })
        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debuouncedParam]);

    //初始化状态
    useMount(() => {

        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json());
            }
        })
        return () => { };

    });

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </div>
    );
}

