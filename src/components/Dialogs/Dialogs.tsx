import React, {useRef} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StateType} from "../../redux/state";


type DialogsPropsType = {
    state: StateType
}


export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.state.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    )

    const messagesElements = props.state.dialogsPage.messagesData.map(message => <Message message={message.message}/>)

    const newMessageText = useRef(null)
    const onClickHandler = () => {
        // @ts-ignore
        const text = newMessageText.current.value
        alert(text)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.newText}>
                <textarea ref={newMessageText}></textarea>
                <button type='button' onClick={onClickHandler}>Add new message</button>
            </div>
        </div>
    );
}
