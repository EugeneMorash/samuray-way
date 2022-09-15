import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import a010 from "../../assets/images/a010.png";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePageHandler: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    users: UserType[]
}

export function Users(props: PropsType) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => props.onChangePageHandler(p)}>{p}</span>
            })}
            {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : a010} alt={'personal avatar'}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button> : <button onClick={() => {
                            props.follow(u.id)
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
    );
}