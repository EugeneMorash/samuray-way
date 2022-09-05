import {ActionType} from "./redux-store";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserActionTypes = FollowAT | UnfollowAT | SetUsersAT
export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>


export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}
export type PhotosType = {
    small: string,
    large: string
}
const initialState = {
    users: [] as UserType[]
}
export type UsersStateType = typeof initialState




export const usersReducer = (state: UsersStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    return u.id === action.id ? {...u, followed: true} : u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    return u.id === action.id ? {...u, followed: false} : u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state
    }
}


export const followAC = (id: number) => ({
    type: FOLLOW,
    id
}) as const

export const unfollowAC = (id: number) => ({
    type: UNFOLLOW,
    id
}) as const

export const setUsersAC = (users: UserType[]) => ({
    type: SET_USERS,
    users
}) as const