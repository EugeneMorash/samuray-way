import React from "react";
import styles from './Nav.module.css'

export function Nav() {
    return(
        <nav className={styles.nav}>
            <div className={styles.item}><a>Profile</a></div>
            <div className={styles.item}><a>Works</a></div>
            <div className={styles.item}><a>Diplomas</a></div>
            <div className={styles.item}><a>Contacts</a></div>
        </nav>
    )
}