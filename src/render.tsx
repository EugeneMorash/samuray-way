import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App";
import {addPost, StateType} from "./redux/state";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = (state: StateType) => {
    root.render(

            <App state={state} addPost={addPost}/>

    )
}