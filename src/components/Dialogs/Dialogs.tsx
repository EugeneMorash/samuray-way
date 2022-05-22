import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink, Routes} from "react-router-dom";


export function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to='/dialogs/1'>Sveta</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2'>Kolya</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3'>Lucia</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4'>Kostya</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/5'>Yulia</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/6'>Sasha</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>What's up?</div>
                <div className={styles.message}>Cool</div>
            </div>
        </div>
    );
}
