import React, {useRef} from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {StateType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: StateType
}



export function MyPosts(props: MyPostsPropsType) {

    const newPostElement = useRef(null);

    const onClickHandler = () => {
        // @ts-ignore: Object is possibly 'null'
        const text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={onClickHandler}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post state={props.posts}/>
            </div>
        </div>

    );
}

