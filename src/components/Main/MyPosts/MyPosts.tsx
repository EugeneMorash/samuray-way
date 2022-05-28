import React from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsArrayType} from "../../../index";

type MyPostsPropsType = {
    posts: PostsArrayType
}

export function MyPosts(props: MyPostsPropsType) {

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>

    );
}

