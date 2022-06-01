import React from 'react';
import styles from './Post.module.css'
import {ProfilePageType, StateType} from "../../../../redux/state";

type PostPropsTypes = {
    state: StateType

}

export function Post(props: PostPropsTypes) {

    const postsElements = props.state.profilePage.posts.map(
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