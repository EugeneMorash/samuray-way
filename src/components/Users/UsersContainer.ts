import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";


export type MapStateToPropsType = {
    usersPage: UserType[]
}

export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
 return {
     usersPage: state.usersPage.users
 }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);