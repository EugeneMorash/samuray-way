import React, {ChangeEvent, LegacyRef} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogStateType} from "../../redux/dialogs-reducer";


type DialogsPropsType = {

    dialogsPage: DialogStateType

    updateNewMessageBody: (e: string) => void
    sendMessage: () => void

    newMessageBody: string
}

export function Dialogs(props: DialogsPropsType) {

    const state = props.dialogsPage


    const dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                                          id={dialog.id}/>
    )

    const messagesElements = state.messagesData.map(message => <Message message={message.message}/>)

    const newMessageText: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageBody = e.currentTarget.value
        props.updateNewMessageBody(newMessageBody)
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.newText}>
                <textarea ref={newMessageText} onChange={onNewMessageChange} value={props.newMessageBody}></textarea>
                <button type='button' onClick={onSendMessageClick}>Add new message</button>
            </div>
        </div>
    );
}
