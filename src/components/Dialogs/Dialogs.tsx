import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
    <div className={styles.message}>{props.message}</div>
    )
}

export function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={'Sveta'} id={1}/>
                <DialogItem name={'Kolya'} id={2}/>
                <DialogItem name={'Licia'} id={3}/>
                <DialogItem name={'Kostya'} id={4}/>
                <DialogItem name={'Yulia'} id={5}/>
                <DialogItem name={'Michael'} id={6}/>
            </div>
            <div className={styles.messages}>
                <Message message={'Hi!'} />
                <Message message={'What\'s up?'} />
                <Message message={'Cool'} />
            </div>
        </div>
    );
}
