import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
    // addPost: (postMessage: (string)) => void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    // action: ActionType
    // store: StoreType

}


export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts posts={props.store._state}*/}
            {/*         newPostText={props.store._state.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*         addPost={props.addPost}*/}
            {/*         updateNewPostText={props.updateNewPostText}*/}

            {/*/>*/}

            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
            />

        </div>
    )
}