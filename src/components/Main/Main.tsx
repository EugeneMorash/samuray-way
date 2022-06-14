import React from "react";
import styles from './Main.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, StateType} from "../../redux/state";

type ProfilePropsType = {
    state: StateType
    addPost: (postMessage: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state}
            addPost={addPost}/>
        </div>
    )
}