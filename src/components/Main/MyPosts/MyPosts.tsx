import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void

    posts: PostsType
    newPostText: string
}


export function MyPosts(props: MyPostsPropsType) {

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value

        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    );
}
