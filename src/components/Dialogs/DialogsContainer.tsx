import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ActionType} from "../../redux/redux-store";


type DialogsPropsType = {
    state: AppRootStateType

    dispatch: (action: ActionType) => void
}


export function DialogsContainer(props: DialogsPropsType) {

    const state = props.state.dialogsPage

    const onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    };

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }



    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
}
