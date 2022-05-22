import React from "react";
import styles from './Main.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export function Profile() {
    return (
        <div>
            <div>
                <img className={styles.image} src="https://sun9-33.userapi.com/c638228/v638228827/39863/Y4wRk_5y8Lg.jpg" alt="Main head"/>
            </div>
            <div>
                <img src="https://drasler.ru/wp-content/uploads/2020/02/Аватарка-для-мастера-маникюра-009.jpg" alt=""/>
            </div>
            <MyPosts />

        </div>
    )
}