import React from "react";
import styles from './Main.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}