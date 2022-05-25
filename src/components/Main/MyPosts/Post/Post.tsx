import React from 'react';
import styles from './Post.module.css'
import {PostsArrayType} from "../MyPosts";

type PostPropsTypes = {
    postsArray: PostsArrayType
}

export function Post(props: PostPropsTypes) {

    const postsElements = props.postsArray.map(
        (post) => {
            return <li className={styles.item}>
                <img src="https://i.ytimg.com/vi/nqVwXZYfgpE/hqdefault.jpg" alt="Avatar"/>
                {post.message} <div>Likes: {post.likesCount}</div>
            </li>
        }
    )


    return (
        <ul>
            {postsElements}
        </ul>

    );
}