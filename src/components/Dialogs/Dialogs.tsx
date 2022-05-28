import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataArrayType} from "../../index";
import {MessagesDataArrayType} from "../../index";

type DialogsPropsType = {
    dialogsData: DialogsDataArrayType
    messagesData: MessagesDataArrayType
}


export function Dialogs(props: DialogsPropsType) {


    const dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    )


    const messagesElements = props.messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
