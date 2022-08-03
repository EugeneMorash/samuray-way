import {ActionType} from "./store";

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

type StateType = typeof initialState


export const dialogsReducer = (state: StateType = initialState, action: ActionType) => {

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
}) as const

export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body
}) as const
