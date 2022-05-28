import React from 'react';
import styles from './Post.module.css'
import {PostsArrayType} from "./../../../../index";

type PostPropsTypes = {
    posts: PostsArrayType

}

export function Post(props: PostPropsTypes) {

    const postsElements = props.posts.map(
        (post) => {
            return <li className={styles.item}>
                <img src="https://i.ytimg.com/vi/nqVwXZYfgpE/hqdefault.jpg" alt="Avatar"/>
                {post.message}
                <div>Likes: {post.likesCount}</div>
            </li>
        }
    )


    return (
        <ul>
            {postsElements}
        </ul>

    );
}