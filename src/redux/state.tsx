//* ---------- Types ---------- *//

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string
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

export type StoreType = {
    _state: StateType

    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
}

//* ---------- Types ---------- *// END

//* ---------- Store ---------- *//

const store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! Let\'s go working!', likesCount: 18},
                {id: 2, message: 'Do it yourself!', likesCount: 84},
                {id: 3, message: 'BlaBlaBla!', likesCount: -18}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Sveta'},
                {id: 2, name: 'Kolya'},
                {id: 3, name: 'Lucia'},
                {id: 4, name: 'Kostya'},
                {id: 5, name: 'Yulia'},
                {id: 6, name: 'Michael'}
            ],
            messagesData: [
                {id: 1, message: 'What\'s up?'},
                {id: 2, message: 'Hi!'},
                {id: 3, message: 'Shalom!'},
                {id: 4, message: 'Buenos Dias!'},
                {id: 5, message: 'Privet!'}
            ]
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber() {

    },

    addPost() {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store

