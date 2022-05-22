import React from "react";
import styles from './Nav.module.css'

export function Nav() {
    return(
        <nav className={styles.nav}>
            <div className={styles.item}><a href='/Main'>Profile</a></div>
            <div className={styles.item}><a href='/Dialogs'>Messages</a></div>
            <div className={styles.item}><a href='/Works'>Works</a></div>
            <div className={styles.item}><a href='/Diplomas'>Diplomas</a></div>
            <div className={styles.item}><a href='/Contacts'>Contacts</a></div>
        </nav>
    )
}