import React from 'react';
import store, {StateType} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

// export type IndexTypes = {
//     rerenderEntireTree: (state: StateType) => void
// }


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: StateType) => {


    root.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}/>
    )
}


rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree) //? store subscribe signature