import {rerenderEntireTree} from "../render";


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

const state: StateType = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! Let\'s go working!', likesCount: 18 },
            { id: 2, message: 'Do it yourself!', likesCount: 84 },
            { id: 3, message: 'BlaBlaBla!', likesCount: -18 }
        ]
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Sveta' },
            { id: 2, name: 'Kolya' },
            { id: 3, name: 'Lucia' },
            { id: 4, name: 'Kostya' },
            { id: 5, name: 'Yulia' },
            { id: 6, name: 'Michael' }
        ],
        messagesData: [
            { id: 1, message: 'What\'s up?' },
            { id: 2, message: 'Hi!' },
            { id: 3, message: 'Shalom!' },
            { id: 4, message: 'Buenos Dias!' },
            { id: 5, message: 'Privet!' }
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export default state