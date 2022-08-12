import {ActionType} from "./redux-store";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>


type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

type LocationType = {
    city: string,
    country: string
}

const initialState = {
    users: [
        // {id: 1, followed: false, fullName: 'Egor', status: 'Cool', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 2, followed: true, fullName: 'Dmitry', status: 'Not cool', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, followed: true, fullName: 'Sasha', status: 'Fine', location: {city: 'Zhlobinsk', country: 'Uruguay'}}
    ]
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
                users: [...state.users, ...action.users]
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