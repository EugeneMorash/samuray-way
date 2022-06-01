
export type DialogsDataArrayType = Array<DialogsDataType>
export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataArrayType = Array<MessagesDataType>
export type MessagesDataType = {
    id: number
    message: string
}




export type StateType = {
    profilePage: ProfilePageType
}

export type ProfilePageType = {
    posts: Array<PostsType>
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
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
        // messagesData: [
        //     { id: 1, message: 'What\'s up?' },
        //     { id: 2, message: 'Hi!' },
        //     { id: 3, message: 'Shalom!' },
        //     { id: 4, message: 'Buenos Dias!' },
        //     { id: 5, message: 'Privet!' }
        // ]
    }
}

export default state