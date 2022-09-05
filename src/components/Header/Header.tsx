import React from "react";
import styles from './Header.module.css'
import logoRose from './../../img/logo-roze.jpeg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoRose} alt="Logo Rose"/>
        </header>
    )
}