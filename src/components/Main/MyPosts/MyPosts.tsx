import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    // addPost: (postMessage: string | undefined) => void
    addPost: () => void
    // newPostText: string
    updateNewPostText: (newText: string) => void
}



export function MyPosts(props: MyPostsPropsType) {

    // const newPostElement = useRef(null);
    // const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef();



    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // @ts-ignore
        // const text = newPostElement.current.value;
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post posts={props.profilePage.posts}/>
            </div>
        </div>

    );
}

