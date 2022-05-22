import React from "react";
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

export function Nav() {
    return(
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to='/Main' className={navData => navData.isActive ? styles.active : styles.item}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to='/Dialogs' className={navData => navData.isActive ? styles.active : styles.item}>Messages</NavLink></div>
            <div className={styles.item}><NavLink to='/Works' className={navData => navData.isActive ? styles.active : styles.item}>Works</NavLink></div>
            <div className={styles.item}><NavLink to='/Diplomas' className={navData => navData.isActive ? styles.active : styles.item}>Diplomas</NavLink></div>
            <div className={styles.item}><NavLink to='/Contacts' className={navData => navData.isActive ? styles.active : styles.item}>Contacts</NavLink></div>
        </nav>
    )
}

// className={navData => navData.isActive ? styles.active : styles.nav}