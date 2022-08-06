import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {AppRootStateType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void

    state: AppRootStateType

}


export function MyPosts(props: MyPostsPropsType) {

    // const postsElements = props.state.profilePage.posts.map((p) =>
    //         <Post
    //             message={p.message}
    //             likesCount={p.likesCount}
    //         />)
    //
    // const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value

        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.state.profilePage.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post posts={props.state.profilePage.posts}/>
            </div>
        </div>
    );
}
