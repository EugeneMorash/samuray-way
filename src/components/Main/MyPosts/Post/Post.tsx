import React from 'react';
import styles from './Post.module.css'
import {StateType} from "../../../../redux/state";
import a011 from "./images/a011.jpeg"

type PostPropsTypes = {
    state: StateType

}

export function Post(props: PostPropsTypes) {

    const postsElements = props.state.profilePage.posts.map(
        (post) => {
            return <li className={styles.item}>
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