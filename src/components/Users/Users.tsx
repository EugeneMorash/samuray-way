import React from 'react';
import {UserType} from "../../redux/users-reducer";
import axios from 'axios';
import a010 from './../../assets/images/a010.png'
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'


type GetUserResponse = {
    error: string | null
    items: UserType[]
    totalCount: number
}

export class Users extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get<GetUserResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>

            {pages.map(p => {

                const onChangePageHandler = () => {
                    this.props.setCurrentPage(p)
                    axios.get<GetUserResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
                        .then(response => {
                            this.props.setUsers(response.data.items)
                        })
                };

                return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                             onClick={onChangePageHandler}>{p}</span>
            })}

            {
                this.props.usersPage.map((u: UserType) => <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : a010} alt={'personal avatar'}
                             className={styles.userPhoto}/>
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
