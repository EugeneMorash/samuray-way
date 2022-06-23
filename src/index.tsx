import React from 'react';
import state, {addPost, StateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = () => {
    root.render(

        <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/>

    )
}


rerenderEntireTree();


subscribe(rerenderEntireTree)