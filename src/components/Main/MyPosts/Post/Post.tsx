import React from 'react';
import styles from './Post.module.css'
import a011 from "./images/a011.jpeg"
import {PostsType} from "../../../../redux/profile-reducer";

type PostPropsTypes = {
    posts: PostsType
}


export function Post(props: PostPropsTypes) {

    const postsElements = props.posts.map((post) => {
            return <li className={styles.item} key={post.id}>
                <img src={a011} alt="Avatar"/>
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