import React, {LegacyRef, useRef} from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {StateType, updateNewPostText} from "../../../redux/state";

type MyPostsPropsType = {
    posts: StateType
    // addPost: (postMessage: string | undefined) => void
    addPost: () => void
    newPostText: string | undefined
    updateNewPostText: (newText: string | undefined) => void
}



export function MyPosts(props: MyPostsPropsType) {

    // const newPostElement = useRef(null);

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const onClickHandler = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
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

