import React from 'react';
import styles from './Post.module.css'


export function Post() {
    return (
        <div className={styles.item}>
            <img src="https://i.ytimg.com/vi/nqVwXZYfgpE/hqdefault.jpg" alt="Avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>

        </div>
    );
}