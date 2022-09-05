import {combineReducers, legacy_createStore as createStore} from "redux";
import {AddPostAT, profileReducer, UpdateNewPostTextAT} from "./profile-reducer";
import {dialogsReducer, SendMessageAT, UpdateNewMessageBodyAT} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UserActionTypes, usersReducer} from "./users-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export type AppRootStateType = ReturnType<typeof reducers>


// FIXME:
// ProfilAT  4x (reducers)
export type ActionType = AddPostAT |
    UpdateNewPostTextAT |
    UpdateNewMessageBodyAT |
    SendMessageAT |
    UserActionTypes


// Добавить тип корневого стейта
// Эмигрировать тип из файл store.ts по редьюсерам
// Протипизировать ими initial state (пример Dialogs-reducer)


export const store = createStore(reducers);


///* ---------- Types ---------- *//
//
// import {AddPostAT, profileReducer, UpdateNewPostTextAT} from "./profile-reducer";
// import {dialogsReducer, SendMessageAT, UpdateNewMessageBodyAT} from "./dialogs-reducer";
// // import {sidebarReducer} from "./sidebar-reducer";
//
//
// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
//
// export type ProfilePageType = {
//     posts: Array<PostsType>,
//     newPostText: string
// }
//
// export type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// export type DialogsPageType = {
//     dialogsData: Array<DialogsDataType>
//     messagesData: Array<MessagesDataType>
//     newMessageBody: string
// }
//
// export type DialogsDataType = {
//     id: number
//     name: string
// }
//
// export type MessagesDataType = {
//     id: number
//     message: string
// }
//
// export type StoreType = {
//     _state: StateType
//
//     getState: () => StateType
//     _callSubscriber: (state: StateType) => void
//     subscribe: (observer: (state: StateType) => void) => void
//
//     dispatch: (action: ActionType) => void/
//
// }
//
//
// export type ActionType = AddPostAT | UpdateNewPostTextAT | UpdateNewMessageBodyAT | SendMessageAT
//
// //* ---------- Types ---------- *// END
//
//
// //* ---------- Store ---------- *//
//
// export const store: StoreType = {
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi! Let\'s go working!', likesCount: 18},
//                 {id: 2, message: 'Do it yourself!', likesCount: 84},
//                 {id: 3, message: 'BlaBlaBla!', likesCount: -18}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Sveta'},
//                 {id: 2, name: 'Kolya'},
//                 {id: 3, name: 'Lucia'},
//                 {id: 4, name: 'Kostya'},
//                 {id: 5, name: 'Yulia'},
//                 {id: 6, name: 'Michael'}
//             ],
//             messagesData: [
//                 {id: 1, message: 'What\'s up?'},
//                 {id: 2, message: 'Hi!'},
//                 {id: 3, message: 'Shalom!'},
//                 {id: 4, message: 'Buenos Dias!'},
//                 {id: 5, message: 'Privet!'}
//             ],
//             newMessageBody: ''
//         }
//     },
//
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action: ActionType) {
//
//         // this._state.profilePage = profileReducer(this._state.profilePage, action)
//         // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         // // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state);
//
//     }
// }
//
//
// export default store
//
