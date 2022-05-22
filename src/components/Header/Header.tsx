import React from "react";
import styles from './Header.module.css'


export function Header() {
    return (
        <header className={styles.header}>
            <img src="https://cdn.pixabay.com/photo/2019/03/20/04/17/rose-4067617_640.png" alt="Logo Rose"/>
        </header>
    )
}