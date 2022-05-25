import React from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export type PostsArrayType = Array<postsTypes>
export type postsTypes = {
    id: number
    message: string
    likesCount: number
}

export function MyPosts() {

    const posts = [
        {id: 1, message: 'Hi! Let\'s go working!', likesCount: 18},
        {id: 2, message: 'Do it yourself!', likesCount: 84}
    ]

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
                <Post postsArray={posts}/>
            </div>
        </div>

    );
}

