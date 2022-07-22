import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    // newPostText: string
}


export function Profile(props: ProfilePropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     // newPostText={props.state.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />

        </div>
    )
}