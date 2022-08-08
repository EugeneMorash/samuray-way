import {ActionType} from "./redux-store";


export type PostsType = Array<PostType>

type PostType = {
    id: number
    message: string
    likesCount: number
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type AddPostAT = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextActionCreator>

const initialState = {
    posts: [
        {id: 1, message: 'Hi! Let\'s go working!', likesCount: 18},
        {id: 2, message: 'Do it yourself!', likesCount: 84},
        {id: 3, message: 'BlaBlaBla!', likesCount: -18}
    ],
    newPostText: ''
}

export type PostsStateType = typeof initialState

export const profileReducer = (state: PostsStateType = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;

    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
}) as const
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const
