import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType, store} from "../../../redux/redux-store";

type MyPostsPropsType = {
    state: AppRootStateType
}


export function MyPostsContainer(props: MyPostsPropsType) {

    // const state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            state={props.state}
        />
    );
}
