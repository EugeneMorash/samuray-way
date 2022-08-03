import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType, store} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (type: string) => void
}


export function MyPosts(props: MyPostsPropsType) {

    // const postsElements =
    //     props.posts.map(p => <Post
    //         message={p.message}
    //         likesCount={p.likesCount}
    //     />)

    // const newPostElement = React.createRef();

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value

        store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post posts={props.profilePage.posts}/>
            </div>
        </div>
    );
}
