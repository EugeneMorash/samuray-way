import {ActionType} from "./redux-store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type SendMessageAT = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyAT = ReturnType<typeof updateNewMessageBodyCreator>


const initialState = {
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
    ],
    newMessageBody: ''
}

// type MessageType = {
//     id: number
//     message: string
// }

export type DialogStateType = typeof initialState

export const dialogsReducer = (state: DialogStateType = initialState, action: ActionType) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
}) as const

export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body
}) as const
