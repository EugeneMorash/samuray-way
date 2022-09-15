import {ActionType} from "./redux-store";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

export type UserActionTypes =
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | setTotalUsersCountAT
    | toggleIsFetchingAT

export type FollowAT = ReturnType<typeof follow>
export type UnfollowAT = ReturnType<typeof unfollow>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>


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
    currentPage: 1,
    isFetching: false
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
                // totalUserCount: action.totalCount // пока убрал чтобы не тупило
                totalUserCount: 50
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (id: number) => ({
    type: FOLLOW,
    id
}) as const

export const unfollow = (id: number) => ({
    type: UNFOLLOW,
    id
}) as const

export const setUsers = (users: UserType[]) => ({
    type: SET_USERS,
    users
}) as const

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_COUNT,
    totalCount
}) as const

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const