import React from 'react'
import { useEffect, useState } from "react";
import { List } from "./list"
import { SearchPanel } from "./search-panel";
import qs from 'qs';
import { cleanObject } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {

    // const [users, setUsers] = useState([{ name: '', id: 0 }]);
    const [users, setUsers] = useState([]);


    const [param, setParam] = useState({
        name: '',
        personId: ''
    });

    const [list, setList] = useState([]);

    useEffect(() => {
        //这种方式非常麻烦 
        // fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`).then(async response => {
        //用yarn add qs
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                let res = await response.json();
                console.log('fetch', res);
                setList(res);
            }

        })
        return () => {
            // cleanup
        }
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json());
            }
        })
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </div>
    );
}