import { User } from "./search-panel"

interface Project {
    id: string;
    name: string;
    personId: string;
}

interface ListProps {
    list: Project[];
    users: User[];
}

export const List = ({ list, users }: ListProps) => {


    // list[0].map(i=>{
    //     console.log(i.personId);
    // })
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(i => (<tr key={i.id}>
                    <td>{i.name}</td>
                    {/* {console.log(i.id)} */}
                    <td>{users.find(user => user.id === i.personId)?.name || '未知'}</td>
                </tr>)
                )
            }
        </tbody>
    </table>
}