import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {GetUserResponse} from "../Users/UsersContainer";
import {UserType} from "../../redux/users-reducer";


export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


export class ProfileContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<GetUserResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}