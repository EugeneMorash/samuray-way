import React from 'react';
import {UserType} from "../../redux/users-reducer";
import axios from 'axios';
import a010 from './../../assets/images/a010.png'
import {UsersPropsType} from "./UsersContainer";


type GetUserResponse = {
    error: string | null
    items: UserType[]
    totalCount: number
}

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get<GetUserResponse>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    render() {
        return <div>
            {
                this.props.usersPage.map((u: UserType) => <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : a010} alt={'personal avatar'}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Follow</button> : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Unfollow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}


// export const Users = (props: UsersPropsType) => {

//     if (props.usersPage.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//         })
//
//
//
//     }
//
//     return <div>
//         {
//             props.usersPage.map((u: UserType) => <div key={u.id}>
//
//                 <span>
//                     <div>
//                         <img src={u.photos.small !== null ? u.photos.small : a010}/>
//                     </div>
//                     <div>
//                         {u.followed ? <button onClick={() => {
//                             props.unfollow(u.id)
//                         }}>Follow</button> : <button onClick={() => {
//                             props.follow(u.id)
//                         }}>Unfollow</button>}
//
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div><div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{'u.location.country'}</div>
//                         <div>{'u.location.city'}</div>
//                     </span>
//                 </span>
//             </div>)
//         }
//     </div>
// }