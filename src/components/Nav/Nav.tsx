import React from "react";
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

export function Nav() {
    // type IsActiveType = {isActive: boolean}
    // const activeClassName = ({isActive}: IsActiveType) => isActive ? styles.active : styles.item

    const activeClassName = (activeClass: {isActive: boolean}) => activeClass.isActive ? styles.active : styles.item
    return(
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to='/main' className={activeClassName}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to='/dialogs' className={activeClassName}>Messages</NavLink></div>
            <div className={styles.item}><NavLink to='/works' className={activeClassName}>Works</NavLink></div>
            <div className={styles.item}><NavLink to='/diplomas' className={activeClassName}>Diplomas</NavLink></div>
            <div className={styles.item}><NavLink to='/contacts' className={activeClassName}>Contacts</NavLink></div>
        </nav>
    )
}

// className={navData => navData.isActive ? styles.active : styles.nav}