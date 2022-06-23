import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, StateType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    state: StateType
    addPost: (postMessage: (string | undefined)) => void
    updateNewPostText: (newText: (string | undefined)) => void
    newPostText: string | undefined
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state}
                     newPostText={props.state.profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />

        </div>
    )
}