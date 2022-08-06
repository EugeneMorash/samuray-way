import {ActionType} from "./redux-store";
import {v1} from "uuid";

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
        {id: v1(), message: 'What\'s up?'},
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'Shalom!'},
        {id: v1(), message: 'Buenos Dias!'},
        {id: v1(), message: 'Privet!'}
    ],
    newMessageBody: ''
}


type MessageType = {
    id: string
    message: string
}

export type DialogStateType = typeof initialState

export const dialogsReducer = (state: DialogStateType = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageBody
            }
            state.messagesData.push(newMessage)
            state.newMessageBody = ''

            return state;
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
