import React from 'react';
import store, {StateType} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const _callSubscriber = () => {
    root.render(

        <App state={store.getState()} addPost={store.addPost.bind(store)} newPostText={store.getState().profilePage.newPostText} updateNewPostText={store.updateNewPostText.bind(store)}/>

    )
}


_callSubscriber(store.getState());


store.subscribe(_callSubscriber)