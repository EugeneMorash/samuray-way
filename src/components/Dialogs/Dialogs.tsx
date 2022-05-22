import React from 'react';
import styles from './Dialogs.module.css'


export function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    Sveta
                </div>
                <div className={styles.dialog}>
                    Kolya
                </div>
                <div className={styles.dialog}>
                    Lucia
                </div>
                <div className={styles.dialog}>
                    Kostya
                </div>
                <div className={styles.dialog}>
                    Yulia
                </div>
                <div className={styles.dialog}>
                    Sasha
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
