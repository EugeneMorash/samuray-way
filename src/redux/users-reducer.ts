import {ActionType} from "./redux-store";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

export type UserActionTypes =
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | setTotalUsersCountAT

export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type SetCurrentPageAT = ReturnType<typeof SetCurrentPageAC>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>


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
    users: [] as UserType[],
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
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

export const SetCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalUsersCountAC = (totalCount: number) => ({
    type: SET_TOTAL_COUNT,
    totalCount
}) as const