let store = {
    _state:{
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! Let\'s go working!', likesCount: 18 },
            { id: 2, message: 'Do it yourself!', likesCount: 84 },
            { id: 3, message: 'BlaBlaBla!', likesCount: -18 }
        ],
        newPostText: ''
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
},
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    addPost() {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber();
    },
    updateNewPostText(newText: (string | undefined)) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }

}








export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string | undefined
}

export type PostsType = {
    id: number
    message: string | undefined
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
    message: string | undefined
}


export default store;
window.store = store;