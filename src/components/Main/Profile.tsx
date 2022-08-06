import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppRootStateType} from "../../redux/redux-store";

type ProfilePropsType = {
    state: AppRootStateType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                state={props.state}
            />
        </div>
    )
}