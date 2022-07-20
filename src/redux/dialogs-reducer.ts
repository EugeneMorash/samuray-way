import {ActionType, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


// const initialState = {
//     dialogsData: [
//         {id: 1, name: 'Sveta'},
//         {id: 2, name: 'Kolya'},
//         {id: 3, name: 'Lucia'},
//         {id: 4, name: 'Kostya'},
//         {id: 5, name: 'Yulia'},
//         {id: 6, name: 'Michael'}
//     ],
//     messagesData: [
//         {id: 1, message: 'What\'s up?'},
//         {id: 2, message: 'Hi!'},
//         {id: 3, message: 'Shalom!'},
//         {id: 4, message: 'Buenos Dias!'},
//         {id: 5, message: 'Privet!'}
//     ],
//     newMessageBody: ''
// }


export type UpdateNewMessageBodyAT = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    body: string
}

export type SendMessageAT = {
    type: typeof SEND_MESSAGE
    body: string
}

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            state.messagesData.push({id: new Date().getTime(), message: action.body})
            state.newMessageBody = ''

            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = (body: string) => ({
    type: SEND_MESSAGE,
    body
})

export const updateNewMessageBodyCreator = (body: string) =>({
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    })
