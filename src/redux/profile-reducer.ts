import {ActionType} from "./state";

type PostsType = {
    id: number
    message: string
    likesCount: number
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {id: 1, message: 'Hi! Let\'s go working!', likesCount: 18},
        {id: 2, message: 'Do it yourself!', likesCount: 84},
        {id: 3, message: 'BlaBlaBla!', likesCount: -18}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionType) => {


    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) =>
    ({type: typeof UPDATE_NEW_POST_TEXT, newText: text})
