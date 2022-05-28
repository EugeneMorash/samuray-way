import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export function Dialogs() {

    const dialogsData = [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Lucia'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Yulia'},
        {id: 6, name: 'Michael'}
    ]

    const dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />

    )
    const messagesData = [
        {id: 1, message: 'What\'s up?'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'Shalom!'},
        {id: 4, message: 'Buenos Dias!'},
        {id: 5, message: 'Privet!'}
    ]

    const messagesElements = messagesData.map(message => <Message message={message.message} />)

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
