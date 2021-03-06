import React from 'react';
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}


export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={`${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

