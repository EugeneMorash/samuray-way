import React from 'react';
import styles from "./ProfileInfo.module.css";

export function ProfileInfo() {
    return (
        <div>
        <div>
            <img className={styles.image} src="https://sun9-33.userapi.com/c638228/v638228827/39863/Y4wRk_5y8Lg.jpg" alt="Main head"/>
        </div>
            <div className={styles.descriptionBlock}>
                Avatar + Description
            </div>
        </div>
    );
}
